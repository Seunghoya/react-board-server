const router = require('express').Router();
const controller = require('../controller/article');

router.post('/', controller.post); // article 생성
router.get('/', controller.get); // article 조회
router.patch('/', controller.patch); // article 수정
router.delete('/:id', controller.delete); // article 삭제


module.exports = router;
