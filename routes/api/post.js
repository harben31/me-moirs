const router = require('express').Router();
const postController = require('../../controllers/postController');

router.route('/')
    // .get(postController.findPosts)
    .post(postController.createPost)
    
router.route('/:id')
    .put(postController.updatePost)
    .delete(postController.deletePost)
    .get(postController.findPosts);

router.route('/likes/:id')
    .put(postController.addLike)
    

module.exports = router;

//should Posts be attatched to tabs explicitly? or related to via ids and 'foreign keys'. 