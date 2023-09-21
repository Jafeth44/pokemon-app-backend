import { Router } from "express";
import { create, list } from "../controllers/user.controller.js";

const router = Router();

router.route('/users')
  .get(list)
  
router.route('/users/register')
  .post(create)


export default router;