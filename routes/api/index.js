const router = require('express').Router();
const usersRoutes = require('./users');
const tabRoutes = require('./tabs');
const postRoutes = require('./post')

router.use('/users', usersRoutes);
router.use('/tabs', tabRoutes);
router.use('/posts', postRoutes);    


module.exports = router;