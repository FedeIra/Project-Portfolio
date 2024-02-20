import Joi from 'joi';

const userName = Joi.string().alphanum().min(6).max(20);
const password = Joi.string().min(6).max(20);

const createUserSchema = Joi.object({
  userName: userName.required(),
  password: password.required(),
});

const updateUserSchema = Joi.object({
  userName: userName,
  password: password,
});

export { createUserSchema, updateUserSchema };
