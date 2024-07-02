// External packages:
import Boom from '@hapi/boom';

// Internal packages:
import { Comment } from '../../db/schemas/comment.js';

// Comments Service class:
class CommentService {
  constructor() {}

  // Get all comments from database:
  async getAllComments() {
    try {
      const comments = await Comment.find().sort({ createdAt: -1 });

      const cleanComments = comments.map((comment) => {
        return {
          commentId: comment.commentId,
          username: comment.username,
          content: comment.content,
          date: comment.date,
        };
      });

      return cleanComments;
    } catch (error) {
      throw Boom.internal('Error getting comments');
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
        commentId: postComment.commentId,
        username: postComment.username,
        content: postComment.content,
        date: postComment.date,
      };

      return commentResponse;
    } catch (error) {
      throw Boom.internal('Error creating comment');
    }
  }
}

export { CommentService };
