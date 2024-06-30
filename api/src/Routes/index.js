import Boom from '@hapi/boom';
import { Router } from 'express';
import emailjs from '@emailjs/nodejs';
const router = Router();
import config from '../../config.js';
import { getAllComments, createComment } from '../Db/ControllersDB/comments.js';
import { validatorHandler } from '../middlewares/validator.handler.js';
import { UserService } from '../services/userServices/user.service.js';
const userService = new UserService();
import { userSchema } from '../schemasValidation/user.schema.js';
import passport from 'passport';
import AuthService from '../services/userServices/login.service.js';
const loginService = new AuthService();
import {
  uploadFile,
  getFilesData,
  getFileData,
  downloadFile,
  getFileUrl,
} from '../services/awsServices/awsS3Services.js';
import { postCommentSchema } from '../schemasValidation/comment.schema.js';
import { sendEmailSchema } from '../schemasValidation/email.schema.js';

// Endpoint to send email:
router.post(
  '/sendEmail',
  validatorHandler(sendEmailSchema, 'body'),
  async (req, res, next) => {
    const templateParams = req.body;

    try {
      await emailjs.send(
        config.email_js_serviceid,
        config.email_js_templateid,
        templateParams,
        {
          publicKey: config.email_js_publickey,
          privateKey: config.email_js_privatekey,
        }
      );
      res
        .status(200)
        .json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      next(Boom.internal(error.message));
    }
  }
);

// Endpoint to get all comments
router.get('/comments', async (req, res, next) => {
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
    next(Boom.internal(error.message));
  }
});

// Endpoint to post comment
router.post(
  '/comments',
  validatorHandler(postCommentSchema, 'body'),
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const { commentId, username, content, date } = req.body;
      await createComment(commentId, username, content, date);
      res.status(201).json({ commentId, username, content, date });
    } catch (error) {
      next(Boom.internal(error.message));
    }
  }
);

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
      next(Boom.internal(error.message));
    }
  }
);

// Endpoint to user login
router.post(
  '/login',
  validatorHandler(userSchema, 'body'),
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
      next(Boom.internal(error.message));
    }
  }
);

// Endpoint to upload pdf documents:
router.post('/upload', async (req, res, next) => {
  try {
    const response = await uploadFile(req.files.file);
    res.status(200).json(response);
  } catch (error) {
    next(Boom.internal(error.message));
  }
});

// Endpoint to get all documents data:
router.get(
  '/getListFiles',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      if (!req.body) {
        return res.status(400).json({ error: 'No filename provided.' });
      }
      const response = await getFilesData();
      res.status(200).json(response);
    } catch (error) {
      next(Boom.internal(error.message));
    }
  }
);

// Endpoint to get document data:
router.get(
  '/getFileData/:fileName',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const fileName = req.params.fileName;
      if (!fileName) {
        return res.status(400).json({ error: 'No filename provided.' });
      }
      const response = await getFileData(fileName);
      res.status(200).json(response);
    } catch (error) {
      next(Boom.internal(error.message));
    }
  }
);

// Endpoint to get document url:
router.get(
  '/getFileUrl/:fileName',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const fileName = req.params.fileName;
      if (!fileName) {
        return res.status(400).json({ error: 'No filename provided.' });
      }
      const response = await getFileUrl(fileName);
      res.status(200).json(response);
    } catch (error) {
      next(Boom.internal(error.message));
    }
  }
);

// Endpoint to download pdf:
router.get(
  '/downloadFile/:fileName',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const { fileName } = req.params;

      if (!fileName) {
        return res.status(400).json({ error: 'No filename provided.' });
      }
      const response = await downloadFile(fileName);
      res.setHeader('Content-Type', 'application/pdf');
      response.pipe(res);
    } catch (error) {
      next(Boom.internal(error.message));
    }
  }
);

export default router;
