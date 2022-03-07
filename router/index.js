const express = require('express');
const router = express.Router();

const articleRouter = require('./article');

/* GET home page. */
router.use('/article', articleRouter);

module.exports = router;