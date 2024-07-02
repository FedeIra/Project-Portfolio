// External packages:
import emailjs from '@emailjs/nodejs';

// Internal packages:
import config from '../../config/config.js';

// Email Service class:
class EmailService {
  constructor() {}

  // Get all comments from database:
  async sendEmail(templateParams) {
    try {
      await emailjs.send(
        config.email_js.serviceid,
        config.email_js.templateid,
        templateParams,
        {
          publicKey: config.email_js.publickey,
          privateKey: config.email_js.privatekey,
        }
      );
      return { success: true, message: 'Email sent successfully' };
    } catch (error) {
      return error;
    }
  }
}

export { EmailService };