import { Router } from "express";
import { createPost, editPost, listFavorites } from "../controllers/post.controller.js";

const router = Router();

router.route('/posts')
  .post(listFavorites);

router.route('/posts/new')
  .post(createPost, editPost)

export default router;