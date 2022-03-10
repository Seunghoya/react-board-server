const { Article: ArticleModel } = require('../models');


module.exports = {
  get: (req, res) => {
    ArticleModel.findAll()
      .then((data) => {
        res.status(200).json({ data: data , message: '성공'})
      })
      .catch((err) => {
        console.log(err)
        res.status(400).json({ message: 'failure'})
      })
  },

  post: (req, res) => {
    const articleInfo = req.body;
    console.log(articleInfo)
    const nowDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`

    ArticleModel.create({
      title: articleInfo.title,
      content: articleInfo.content,
      writer: articleInfo.writer,
      createdAt: nowDate,
    })
    .then((data) => {
      res.status(200).json({ data: data, message: '성공'})
    })
    .catch((err) => {
      console.log(err)
      res.status(400).json({ message: 'failure'})
    })
  },

  patch: (req, res) => {
    res.status(200).json({ message: '성공'})
  },

  delete: (req, res) => {
    res.status(200).json({ message: '성공'})
  },
}