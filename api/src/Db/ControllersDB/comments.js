import { Comment } from '../Schema/comment.js';

/* Get all comments from database: */
const getAllComments = async () => {
  const comments = await Comment.find();
  return comments;
};

// Create comment for database:
const createComment = async (id, userName, content, date) => {
  try {
    await Comment.create({ id, userName, content, date });
  } catch (error) {
    return error;
  }
};

export { getAllComments, createComment };
