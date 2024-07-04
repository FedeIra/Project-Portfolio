import Joi from 'joi';

export const userSchema = Joi.object({
  username: Joi.string().alphanum().min(6).max(20).required().messages({
    'string.base': 'Username should be a type of text',
    'string.empty': 'Username cannot be empty',
    'string.min': 'Username should have a minimum length of {#limit}',
    'string.max': 'Username should have a maximum length of {#limit}',
    'string.alphanum': 'Username should only contain alpha-numeric characters',
    'any.required': 'Username is required',
  }),
  password: Joi.string().min(6).max(20).required().messages({
    'string.base': 'Password should be a type of text',
    'string.empty': 'Password cannot be empty',
    'string.min': 'Password should have a minimum length of {#limit}',
    'string.max': 'Password should have a maximum length of {#limit}',
    'any.required': 'Password is required',
  }),
});
