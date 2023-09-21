import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Name is required'
  },
  email: {
    type: String,
    trim: true,
    required: 'Email is required',
    unique: 'Email already exists',
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  profilePicture: {
    data: Buffer,
    contentType: String
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: Date
})

export default mongoose.model('User', UserSchema);