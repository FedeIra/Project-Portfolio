const mongoose = require('mongoose');

// Create database collection:
const dataSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: false,
    default: 'Anonymous',
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: false,
    default: new Date().toLocaleDateString(),
  },
});

module.exports = mongoose.model('comment', dataSchema);
