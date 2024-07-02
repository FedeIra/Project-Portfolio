// Internal packages:
import { Comment } from '../../db/schemas/comment.js';

// Comments Service class:
class CommentService {
  constructor() {}

  // Get all comments from database:
  async getAllComments() {
    try {
      const comments = await Comment.find();

      const orderComments = comments.reverse();

      const cleanComments = orderComments.map((comment) => {
        return {
          commentId: comment.commentId,
          username: comment.username,
          content: comment.content,
          date: comment.date,
        };
      });

      return cleanComments;
    } catch (error) {
      return error;
    }
  }

  // Create comment for database:
  async createComment(commentId, username, content, date) {
    try {
      const postComment = await Comment.create({
        commentId,
        username,
        content,
        date,
      });

      const commentResponse = {
        commentId: String(postComment.commentId),
        content: postComment.content,
        date: postComment.date,
      };

      return commentResponse;
    } catch (error) {
      return error;
    }
  }
}

export { CommentService };
