import { Router } from 'express';
import emailjs from '@emailjs/nodejs';
const router = Router();
import dotenv from 'dotenv';
dotenv.config();

import { Comment } from '../Db/Schema/comment.js';
import { getAllComments, createComment } from '../Db/ControllersDB/comments.js';

import { validatorHandler } from '../middlewares/validator.handler.js';
import { UserService } from '../userServices/user.service.js';
const userService = new UserService();

import { createUserSchema } from '../schemasValidation/user.schema.js';

import passport from 'passport';
import AuthService from '../userServices/login.service.js';
const loginService = new AuthService();

const {
  EMAIL_JS_SERVICEID,
  EMAIL_JS_TEMPLATEID,
  EMAIL_JS_PUBLICKEY,
  EMAIL_JS_PRIVATEKEY,
} = process.env;

// Route to send email:
router.post('/sendEmail', async (req, res) => {
  const templateParams = req.body;

  try {
    await emailjs.send(
      EMAIL_JS_SERVICEID,
      EMAIL_JS_TEMPLATEID,
      templateParams,
      {
        publicKey: EMAIL_JS_PUBLICKEY,
        privateKey: EMAIL_JS_PRIVATEKEY,
      }
    );
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error sending email' });
  }
});

// Route to get all comments
router.get('/comments', async (req, res) => {
  try {
    const comments = await getAllComments();
    const response = comments.map((comment) => {
      return {
        commentId: comment.commentId,
        username: comment.username,
        content: comment.content,
        date: comment.date,
      };
    });
    res.status(200).json(response);
  } catch (error) {
    return res.status(204).json({ Error: error.message });
  }
});

// Route to post comment
router.post(
  '/comments',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { commentId, username, content, date } = req.body;
    try {
      await createComment(commentId, username, content, date);
      res.status(201).json({ commentId, username, content, date });
    } catch (error) {
      return res.status(204).json({ Error: error.message });
    }
  }
);

// Route to user sign-up
router.post(
  '/sign-up',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUser = await userService.createUser(body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
);

// Route to user login
router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const token = await loginService.signToken(user);
      const response = {
        token: token.token,
        username: user.username,
      };
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
