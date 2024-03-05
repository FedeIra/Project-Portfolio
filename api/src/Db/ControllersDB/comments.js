import { Comment } from '../Schema/comment.js';

/* Get all comments from database: */
const getAllComments = async () => {
  try {
    const comments = await Comment.find();

    const orderComments = comments.reverse();
    return orderComments;
  } catch (error) {
    return error;
  }
};

// Create comment for database:
const createComment = async (commentId, username, content, date) => {
  try {
    await Comment.create({ commentId, username, content, date });
  } catch (error) {
    return error;
  }
};

export { getAllComments, createComment };
