import mongoose from 'mongoose';

// Database comment schema:
const dataSchema = new mongoose.Schema(
  {
    commentId: {
      type: Number,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: false,
      default: 'Anonymous',
    },
    content: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: false,
      default: new Date().toLocaleDateString(),
    },
  },
  { timestamps: true }
);

export const Comment = mongoose.model('comment', dataSchema);
