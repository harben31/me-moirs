const router = require('express').Router();
const userController = require('../../controllers/userControllers')

router.route('/users')
    .post(userController.createUser)

router.route('users/:id')
    .get(userController.findUserById)
    .put(userController.updateUser)

module.exports = router