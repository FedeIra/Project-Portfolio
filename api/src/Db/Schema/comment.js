import mongoose from 'mongoose';

// Create database collection:
const dataSchema = new mongoose.Schema({
  commentId: {
    type: Number,
    required: true,
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
});

export const Comment = mongoose.model('comment', dataSchema);
