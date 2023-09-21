import User from "../models/user.model.js";
import { request, response } from 'express';


const create = async (req = request, res = response) => {

  const {email} = req.body;

  try {

    let user = await User.findOne({email});

    if (user) {
      return res.status(200).json({
        ok: false,
        message: 'User already exists'
      });
    }

    user = new User(req.body);

    await user.save();

    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name
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


export {
  create,
  list
}