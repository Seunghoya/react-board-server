const express = require('express');
const router = express.Router();

const articleRouter = require('./article');
const commentRouter = require('./comment');

/* GET home page. */
router.use('/article', articleRouter);
router.use('/comment', commentRouter);

module.exports = router;