import Mongoose from 'mongoose';

export const userSchema = new Mongoose.Schema(
  {
    userName: {
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

export const UserModel = Mongoose.model('user', userSchema);
