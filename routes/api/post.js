const router = require('express').Router();
const postController = require('../../controllers/postController');

router.route('/')
    .get(postController.findUserPosts);

router.route('./:id')
    .put(postController.updateUserPost)
    .get(postController.findUserPostById);

module.exports = router;

//should Posts be attatched to tabs explicitly? or related to via ids and 'foreign keys'. 