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
        config.email_js_serviceid,
        config.email_js_templateid,
        templateParams,
        {
          publicKey: config.email_js_publickey,
          privateKey: config.email_js_privatekey,
        }
      );
      return { success: true, message: 'Email sent successfully' };
    } catch (error) {
      return error;
    }
  }
}

export { EmailService };
