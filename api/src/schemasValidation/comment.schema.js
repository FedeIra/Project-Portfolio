import Joi from 'joi';

export const postCommentSchema = Joi.object({
  commentId: Joi.number().required().messages({
    'number.base': 'Comment ID should be a number',
    'number.empty': 'Comment ID cannot be empty',
    'any.required': 'Comment ID is required',
  }),
  username: Joi.string().min(3).max(30).required().messages({
    'string.base': 'Username should be a type of text',
    'string.empty': 'Username cannot be empty',
    'string.min': 'Username should have a minimum length of {#limit}',
    'string.max': 'Username should have a maximum length of {#limit}',
    'any.required': 'Username is required',
  }),
  content: Joi.string().min(1).max(500).required().messages({
    'string.base': 'Content should be a type of text',
    'string.empty': 'Content cannot be empty',
    'string.min': 'Content should have a minimum length of {#limit}',
    'string.max': 'Content should have a maximum length of {#limit}',
    'any.required': 'Content is required',
  }),
  date: Joi.string().required().messages({
    'string.base': 'Date should be a valid date',
    'string.empty': 'Date cannot be empty',
    'any.required': 'Date is required',
  }),
}).options({ convert: false });
