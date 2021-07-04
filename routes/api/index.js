const router = require('express').Router();
const usersRoutes = require('./users');
const tabRoutes = require('./tabs');
const postRoutes = require('./post');
const commentRoutes = require('./comments')

router.use('/users', usersRoutes);
router.use('/tabs', tabRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);


module.exports = router;