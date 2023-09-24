import { Router } from "express";
import { createUser, list, login } from "../controllers/user.controller.js";

const router = Router();

router.route('/users')
  .get(list)
  
router.route('/users/register')
  .post(createUser)

router.route('/users/login')
  .post(login)


export default router;