const router = require('express').Router();
const postController = require('../../controllers/postController');

router.route('/')
    // .get(postController.findPosts)
    .post(postController.createPost)
    
router.route('/:id')
    .put(postController.updatePost)
    .delete(postController.deletePost)
    .get(postController.findPosts);

router.route('/like/:id')
    .put(postController.addLike)

router.route('/unlike/:id')
    .put(postController.unLike)

router.route('/image/:id')
    .put(postController.addPostImage)    
    

module.exports = router; 