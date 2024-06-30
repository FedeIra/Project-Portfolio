import Joi from 'joi';

export const sendEmailSchema = Joi.object({
  user_name: Joi.string().required(),
  user_email: Joi.string().email().required(),
  subject: Joi.string().required(),
  message: Joi.string().required(),
});
