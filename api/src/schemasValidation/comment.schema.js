import Joi from 'joi';

export const postCommentSchema = Joi.object({
  commentId: Joi.string().required(),
  userName: Joi.string().required(),
  content: Joi.string().required(),
  date: Joi.string().required(),
});
