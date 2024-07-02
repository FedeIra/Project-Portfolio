// External packages:
import Boom from '@hapi/boom';
import { Router } from 'express';

// Internal packages:
import { validatorHandler } from '../middlewares/validator.handler.js';
import { authenticateLocal } from '../middlewares/authentication.handler.js';
import { UserService } from '../services/user/user.service.js';
import { userSchema } from '../schemasValidation/user.schema.js';
import AuthService from '../services/authentication/login.service.js';

const router = Router();

// Services instances:
const userService = new UserService();
const loginService = new AuthService();

// Endpoint to user sign-up
router.post(
  '/sign-up',
  validatorHandler(userSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUser = await userService.createUser(body);
      res.status(201).json(newUser);
    } catch (error) {
      if (Boom.isBoom(error)) {
        next(error);
      } else {
        next(Boom.internal(error.message));
      }
    }
  }
);

// Endpoint to user login
router.post(
  '/login',
  validatorHandler(userSchema, 'body'),
  authenticateLocal,
  async (req, res, next) => {
    try {
      const user = req.user;
      const response = await loginService.signToken(user);
      res.status(200).json(response);
    } catch (error) {
      next(Boom.internal(error.message));
    }
  }
);

export default router;
