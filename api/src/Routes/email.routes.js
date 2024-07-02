// External packages:
import Boom from '@hapi/boom';
import { Router } from 'express';

// Internal packages:
import { validatorHandler } from '../middlewares/validator.middleware.js';
import { EmailService } from '../services/emails/emailService.js';
import { sendEmailSchema } from '../schemasValidation/email.schema.js';

const router = Router();

const emailService = new EmailService();

// Endpoint to send email:
router.post(
  '/sendEmail',
  validatorHandler(sendEmailSchema, 'body'),
  async (req, res, next) => {
    try {
      const templateParams = req.body;
      const response = await emailService.sendEmail(templateParams);
      res.status(200).json(response);
    } catch (error) {
      next(Boom.internal(error.message));
    }
  }
);

export default router;
