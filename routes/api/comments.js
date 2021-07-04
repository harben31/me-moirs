const router = require('express').Router();
const commentController = require('../../controllers/commentController');

router.route('/')
    .post(commentController.createComment)

router.route('/:id')
    .put(commentController.updateComment)
    .delete(commentController.deleteComment)
    .get(commentController.getComments);

module.exports = router;