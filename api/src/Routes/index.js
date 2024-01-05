const { Router } = require('express');
const router = Router();
const emailjs = require('@emailjs/nodejs');
require(`dotenv`).config();
const Comment = require('../Db/Schema/comment.js');

const {
  getAllComments,
  createComment,
} = require('../Db/ControllersDB/comments.js');

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
    console.log(error);
  }
});

// Route to get all comments
router.get('/comments', async (req, res) => {
  try {
    const comments = await getAllComments();
    res.status(200).json(comments);
  } catch (error) {
    return res.status(204).json({ Error: error.message });
  }
});

// Route to post comment
router.post('/comments', async (req, res) => {
  const { commentId, userName, content, date } = req.body;
  try {
    Comment.create({ commentId, userName, content, date });
    res.status(201).json('created!');
  } catch (error) {
    return res.status(204).json({ Error: error.message });
  }
});

module.exports = router;
