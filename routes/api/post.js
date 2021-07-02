const router = require('express').Router();
const postController = require('../../controllers/postController');

router.route('/')
    .get(postController.findUserPosts)
    .post(postController.createUserPost);

router.route('/:id')
    .put(postController.updateUserPost)
    .get(postController.findUserPosts);

module.exports = router;

//should Posts be attatched to tabs explicitly? or related to via ids and 'foreign keys'. 