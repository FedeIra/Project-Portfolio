// // External packages:
// import Boom from '@hapi/boom';
// import { Router } from 'express';

// // Internal packages:
// import { validatorHandler } from '../middlewares/validator.handler.js';
// import {
//   authenticateJwt,
//   authenticateLocal,
// } from '../middlewares/authentication.handler.js';
// import { UserService } from '../services/user/user.service.js';
// import { CommentService } from '../services/comments/commentsService.js';
// import { EmailService } from '../services/emails/emailService.js';
// import { userSchema } from '../schemasValidation/user.schema.js';
// import AuthService from '../services/authentication/login.service.js';
// import {
//   uploadFile,
//   getFilesData,
//   getFileData,
//   downloadFile,
//   getFileUrl,
// } from '../services/files/awsS3Services.js';
// import { postCommentSchema } from '../schemasValidation/comment.schema.js';
// import { sendEmailSchema } from '../schemasValidation/email.schema.js';

// const router = Router();

// // Services instances:
// const userService = new UserService();
// const loginService = new AuthService();
// const commentService = new CommentService();
// const emailService = new EmailService();

// // Endpoint to send email:
// router.post(
//   '/sendEmail',
//   validatorHandler(sendEmailSchema, 'body'),
//   async (req, res, next) => {
//     try {
//       const templateParams = req.body;
//       const response = await emailService.sendEmail(templateParams);
//       res.status(200).json(response);
//     } catch (error) {
//       next(Boom.internal(error.message));
//     }
//   }
// );

// // Endpoint to get all comments
// router.get('/comments', async (req, res, next) => {
//   try {
//     const response = await commentService.getAllComments();
//     res.status(200).json(response);
//   } catch (error) {
//     next(Boom.internal(error.message));
//   }
// });

// // Endpoint to post comment
// router.post(
//   '/comments',
//   validatorHandler(postCommentSchema, 'body'),
//   authenticateJwt,
//   async (req, res, next) => {
//     try {
//       const { commentId, username, content, date } = req.body;
//       const response = await commentService.createComment(
//         commentId,
//         username,
//         content,
//         date
//       );
//       res.status(201).json(response);
//     } catch (error) {
//       next(Boom.internal(error.message));
//     }
//   }
// );

// // Endpoint to user sign-up
// router.post(
//   '/sign-up',
//   validatorHandler(userSchema, 'body'),
//   async (req, res, next) => {
//     try {
//       const body = req.body;
//       const newUser = await userService.createUser(body);
//       res.status(201).json(newUser);
//     } catch (error) {
//       next(Boom.internal(error.message));
//     }
//   }
// );

// // Endpoint to user login
// router.post(
//   '/login',
//   validatorHandler(userSchema, 'body'),
//   authenticateLocal,
//   async (req, res, next) => {
//     try {
//       const user = req.user;
//       const response = await loginService.signToken(user);
//       res.status(200).json(response);
//     } catch (error) {
//       next(Boom.internal(error.message));
//     }
//   }
// );

// // Endpoint to upload pdf documents:
// router.post('/upload', async (req, res, next) => {
//   try {
//     const response = await uploadFile(req.files.file);
//     res.status(200).json(response);
//   } catch (error) {
//     next(Boom.internal(error.message));
//   }
// });

// // Endpoint to get all documents data:
// router.get('/getListFiles', authenticateJwt, async (req, res, next) => {
//   try {
//     if (!req.body) {
//       return res.status(400).json({ error: 'No filename provided.' });
//     }
//     const response = await getFilesData();
//     res.status(200).json(response);
//   } catch (error) {
//     next(Boom.internal(error.message));
//   }
// });

// // Endpoint to get document data:
// router.get(
//   '/getFileData/:fileName',
//   authenticateJwt,
//   async (req, res, next) => {
//     try {
//       const fileName = req.params.fileName;
//       if (!fileName) {
//         return res.status(400).json({ error: 'No filename provided.' });
//       }
//       const response = await getFileData(fileName);
//       res.status(200).json(response);
//     } catch (error) {
//       next(Boom.internal(error.message));
//     }
//   }
// );

// // Endpoint to get document url:
// router.get('/getFileUrl/:fileName', authenticateJwt, async (req, res, next) => {
//   try {
//     const fileName = req.params.fileName;
//     if (!fileName) {
//       return res.status(400).json({ error: 'No filename provided.' });
//     }
//     const response = await getFileUrl(fileName);
//     res.status(200).json(response);
//   } catch (error) {
//     next(Boom.internal(error.message));
//   }
// });

// // Endpoint to download pdf:
// router.get(
//   '/downloadFile/:fileName',
//   authenticateJwt,
//   async (req, res, next) => {
//     try {
//       const { fileName } = req.params;

//       if (!fileName) {
//         return res.status(400).json({ error: 'No filename provided.' });
//       }
//       const response = await downloadFile(fileName);
//       res.setHeader('Content-Type', 'application/pdf');
//       response.pipe(res);
//     } catch (error) {
//       next(Boom.internal(error.message));
//     }
//   }
// );

// export default router;

// -------------------------------------- //
import { Router } from 'express';
import userRoutes from './user.routes.js';
import commentRoutes from './comments.routes.js';
import fileRoutes from './files.routes.js';
import emailRoutes from './email.routes.js';

const router = Router();

router.use(emailRoutes);
router.use(fileRoutes);
router.use(userRoutes);
router.use(commentRoutes);

export default router;
