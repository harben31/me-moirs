const router = require('express').Router();
const tabController = require('../../controllers/tabControllers');
const auth = require('../../utils/auth');
const db = require('../../models');

router.route('/')
    .get(tabController.findAllUserTabs)
    // .post(auth, tabController.createUserTab)
    .post(auth, async (req, res) => {
        console.log('body', req.user.id);
        await db.Tab
            .create(req.body)
            .then(async dbModel => {
                console.log('dbModel', dbModel);
                console.log('user-id', req.user.id);
                await db.User
                    .findOneAndUpdate({ _id: req.user.id},
                    {$push: {shortTabInfo: dbModel._id}})
                
                    return res.json(dbModel);
            })
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    });

    // router('/:id')
    //     .put(tabController.updateUserTab)

module.exports = router;