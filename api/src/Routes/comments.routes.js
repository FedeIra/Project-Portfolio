// External packages:
import Boom from '@hapi/boom';
import { Router } from 'express';

// Internal packages:
import { validatorHandler } from '../middlewares/validator.middleware.js';
import { authenticateJwt } from '../middlewares/authentication.middleware.js';
import { CommentService } from '../services/comments/commentsService.js';
import { postCommentSchema } from '../schemasValidation/comment.schema.js';

const router = Router();

// Services instances:
const commentService = new CommentService();

// Endpoint to get all comments
router.get('/comments', async (req, res, next) => {
  try {
    const response = await commentService.getAllComments();
    res.status(200).json(response);
  } catch (error) {
    next(Boom.internal(error.message));
  }
});

// Endpoint to post comment
router.post(
  '/comments',
  validatorHandler(postCommentSchema, 'body'),
  authenticateJwt,
  async (req, res, next) => {
    try {
      const { commentId, username, content, date } = req.body;
      const response = await commentService.createComment(
        commentId,
        username,
        content,
        date
      );
      res.status(201).json(response);
    } catch (error) {
      next(Boom.internal(error.message));
    }
  }
);

export default router;
