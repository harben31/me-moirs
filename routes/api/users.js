const router = require('express').Router();
const userController = require('../../controllers/userControllers')

router.route('/')
    .post(userController.createUser)

router.route('/:id')
    .get(userController.findUserById)
    .put(userController.updateUser)

module.exports = router