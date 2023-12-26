const { Router } = require('express');
const router = Router();

const Comment = require('../Db/Schema/comment.js');
const {
  getAllComments,
  createComment,
} = require('../Db/ControllersDB/comments.js');

// Get comments
router.get('/comments', async (req, res) => {
  try {
    const comments = await getAllComments();
    res.status(200).json(comments);
  } catch (error) {
    return res.status(204).json({ Error: error.message });
  }
});

// Post comment
router.post('/comments', async (req, res) => {
  const { userId, content, date, idReference } = req.body;
  try {
    Comment.create({ userId, content, date, idReference });
    res.status(201).json('created!');
  } catch (error) {
    return res.status(204).json({ Error: error.message });
  }
});

module.exports = router;
