import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  pokemonId: {
    type: String,
  },
  isFavorite: {
    type: Boolean,
  },
  postComment: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: Date
})

export default mongoose.model('Post', PostSchema);