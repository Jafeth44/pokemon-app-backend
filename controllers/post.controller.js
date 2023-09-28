import Post from '../models/post.model.js';
import { request, response } from "express";


const createPost = async (req = request, res = response, next) => {

  const { userId, pokemonId } = req.body;

  try {

    let post = await Post.findOne({ userId, pokemonId });

    if (post) return next();

    post = new Post(req.body);

    await post.save();

    res.status(200).json({
      ok: true,
      message: `${userId} saved a new post for the pokemon ${pokemonId}`
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      message: 'Unknown error, talk with an administrator'
    })
  }
}

const listFavorites = async (req = request, res = response) => {

  const { userId } = req.body;

  try {

    const postList = await Post.find({ userId }).select(['pokemonId', 'isFavorite']);

    return res.status(200).json({
      userId,
      postList
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      message: 'Unknown error, talk with an administrator'
    })
  }
}

const editPost = async (req = request, res= response) => {

  let {userId, pokemonId} = req.body;

  try {
    
    await Post.findOneAndUpdate({userId, pokemonId}, req.body);

    res.status(200).json({
      ok: true,
      message: `updated pokemon ${pokemonId}`
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      message: 'Unknown error, talk with an administrator'
    })
  }
}

export { listFavorites, createPost, editPost }