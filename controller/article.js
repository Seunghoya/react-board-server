const { Article: ArticleModel } = require('../models');
const { Op } = require('sequelize');


module.exports = {
  get: async (req, res) => {
    const { filter } = req.query

    if (filter === null || filter === undefined) {
      await ArticleModel.findAll()
      .then((data) => {
        res.status(200).json({ data: data , message: '성공'})
      })
      .catch((err) => {
        console.log(err)
        res.status(400).json({ message: 'failure'})
      })
    }
    else {
      await ArticleModel.findAll({
        where: {
          [Op.or] : [
            {title: {
              [Op.like]: "%" + filter + "%"
            }},
            {content: {
              [Op.like]: "%" + filter + "%"
            }}
          ]
        }
      })
      .then((data) => {
        res.status(200).json({ data: data , message: '성공'})
      })
      .catch((err) => {
        console.log(err)
        res.status(400).json({ message: 'failure'})
      })
    }
  },

  post: (req, res) => {
    const articleInfo = req.body;
    console.log(articleInfo)
    const nowDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`

    ArticleModel.create({
      title: articleInfo.title,
      content: articleInfo.content,
      writer: articleInfo.writer,
      password: articleInfo.password,
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

  put: (req, res) => {
    const articleInfo = req.body;
    const { id } = req.params
    ArticleModel.update(articleInfo, {
      where: {
        id: id
      }
    })
      .then((data) => {
        res.status(200).json({ message: '성공', data: data})
      })
      .catch((err) => {
        res.status(400).json({ message: 'failure', error: err})
      })
  },

  patch: async (req, res) => {
    const { id } = req.params
    // 조회수 카운트 + 1
    const findModel = await ArticleModel.findOne({
      where: { id: id }
    })
    const viewCnt = findModel.dataValues.viewCnt

    ArticleModel.update({ viewCnt : viewCnt + 1}, {
      where: {
        id: id
      }
    })
      .then((data) => {
        res.status(200).json({ message: '성공', data: data})
      })
      .catch((err) => {
        res.status(400).json({ message: 'failure', error: err})
      })
  },

  delete: (req, res) => {
    console.log(req.params)
    const { id } = req.params
    ArticleModel.destroy({
      where: {
        id: id
      }
    })
      .then((data) => {
        if (data === 1) {
          res.status(200).json({ message: '삭제되었습니다.'})
        } else res.status(401).json({ message: '해당 게시물이 존재하지 않습니다.'})
      })
      .catch((err) => {
        console.log(err)
        res.status(401).json({ message: 'failure', error: error });
      })
  },
}