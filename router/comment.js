const router = require('express').Router();
const controller = require('../controller/comment');

router.post('/:id', controller.post);
router.get('/:id', controller.get); 
router.patch('/:id', controller.patch);
router.put('/:id', controller.patch);
router.delete('/:id', controller.delete); 

module.exports = router;
