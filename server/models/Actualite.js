const mongoose = require('mongoose');

const ActualiteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  imageUrl: {
    type: String,
    default: '/images/news-default.jpg'
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
});

module.exports = mongoose.model('actualite', ActualiteSchema); 