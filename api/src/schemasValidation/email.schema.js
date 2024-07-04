import Joi from 'joi';

export const sendEmailSchema = Joi.object({
  user_name: Joi.string().min(3).max(30).required().messages({
    'string.base': 'Username should be a type of text',
    'string.empty': 'Username cannot be empty',
    'string.min': 'Username should have a minimum length of {#limit}',
    'string.max': 'Username should have a maximum length of {#limit}',
    'any.required': 'Username is required',
  }),
  user_email: Joi.string().email().required().messages({
    'string.email': 'Please provide a valid email address',
    'string.empty': 'Email cannot be empty',
    'any.required': 'Email is required',
  }),
  subject: Joi.string().min(3).max(100).required().messages({
    'string.base': 'Subject should be a type of text',
    'string.empty': 'Subject cannot be empty',
    'string.min': 'Subject should have a minimum length of {#limit}',
    'string.max': 'Subject should have a maximum length of {#limit}',
    'any.required': 'Subject is required',
  }),
  message: Joi.string().min(5).max(500).required().messages({
    'string.base': 'Message should be a type of text',
    'string.empty': 'Message cannot be empty',
    'string.min': 'Message should have a minimum length of {#limit}',
    'string.max': 'Message should have a maximum length of {#limit}',
    'any.required': 'Message is required',
  }),
});
