import User from "../models/user.model.js";
import { request, response } from 'express';
import bcryptjs from 'bcryptjs';
import { generarJWT } from "../helpers/jwt.js";


const create = async (req = request, res = response) => {

  const {email, password} = req.body;

  try {

    let user = await User.findOne({email});

    if (user) {
      return res.status(200).json({
        ok: false,
        message: 'User already exists'
      });
    }

    //se crea el usuario con el model User
    user = new User(req.body);

    
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);
    
    await user.save();

    //generar JWT
    const token = await generarJWT(user.id, user.name);

    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      message: 'Unknown error, talk with an administrator'
    })
  }
}


const list = async (req = request, res = response) => {

  try {
    const userList = await User.find({}).select(['name', 'email']);

    return res.status(200).json(userList);

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      message: 'Unknown error, talk with an administrator'
    })
  }
}

// const delete = async (req = request, res = response) => {

//   try {
    
//     const user = req.

//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       ok: false,
//       message: 'Unknown error, talk with an administrator'
//     })
//   }
// }


export {
  create,
  list
}