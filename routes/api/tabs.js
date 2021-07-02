const router = require('express').Router();
const tabController = require('../../controllers/tabControllers');

router.route('/:id')
    .get(tabController.findAllUserTabs)
    .post(tabController.createUserTab)
    

    // router('/:id')
    //     .put(tabController.updateUserTab)

module.exports = router;