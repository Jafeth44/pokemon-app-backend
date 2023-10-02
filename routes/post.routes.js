import { Router } from "express";
import { createPost, editPost, listFavorites, readPost } from "../controllers/post.controller.js";

const router = Router();

router.route('/posts')
  .post(listFavorites);

router.route('/posts/new')
  .post(createPost, editPost);

router.route('/posts/read')
  .post(readPost);

export default router;