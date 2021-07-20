const router = require('express').Router();
const tabController = require('../../controllers/tabControllers');
const db = require('../../models');

router.route('/')
    .get(tabController.findAllTabs)
    .post(async (req, res) => {
        await db.Tab
            .create(req.body)
            .then(async dbModel => {
                await db.User
                    .findOneAndUpdate({ _id: req.body.user_id},
                    {$push: {shortTabInfo: dbModel._id}})
                    return res.json(dbModel);
            })
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    });

router.route('/:id')
    .get(tabController.findTabById)
    .put(tabController.updateTab)
    .delete(tabController.deleteTab)

router.route('/tags/:id')
    .put(tabController.updateTags)
    
module.exports = router;