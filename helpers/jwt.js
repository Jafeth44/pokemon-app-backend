import jwt from "jsonwebtoken";
import 'dotenv/config';

const { JWT_SECRET } = process.env;

export const generarJWT = (uid, name) => {

  return new Promise((resolve, reject) => {

    const payload = { uid, name };

    jwt.sign(payload, JWT_SECRET, {
      expiresIn: '2h'
    }, (error, token) => {

      if (error) reject('No se puedo generar el token', error);
      resolve(token);
    })

  })
}