const { Article: ArticleModel } = require('../models');


module.exports = {
  get: (req, res) => {
    res.status(200).json({ message: '성공'})
  },

  post: (req, res) => {
    res.status(200).json({ message: '성공'})
  },

  patch: (req, res) => {
    res.status(200).json({ message: '성공'})
  },

  delete: (req, res) => {
    res.status(200).json({ message: '성공'})
  },
}