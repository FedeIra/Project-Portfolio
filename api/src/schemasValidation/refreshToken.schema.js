import Joi from 'joi';

export const refreshTokenSchema = Joi.object({
  token: Joi.string().required().messages({
    'string.base': 'Token should be a type of text',
    'string.empty': 'Token cannot be empty',
    'any.required': 'Token is required',
  }),
}).options({ convert: false });
