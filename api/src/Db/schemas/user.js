// External packages:
import mongoose from 'mongoose';

// Database user schema:
export const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: true,
    },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model('user', userSchema);
