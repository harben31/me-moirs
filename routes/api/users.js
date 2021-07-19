const router = require('express').Router();
const userController = require('../../controllers/userControllers')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../../models');

router.route('/signup').post(
    [
        body('username', 'Please enter a Valid Username')
        .not()
        .isEmpty(),
        body('password', 'Please enter a Valid password').isLength({
            min: 8
        }),
        body('email', 'Please enter a Valid email').isEmail()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                auth: false
            });
        }
        let {
            username,
            email,
            password
        } = req.body;
        
        bcrypt.genSalt(10, await function (err, salt) {
            bcrypt.hash(password, salt, async function(err, hash) {
                password = hash;
                //moved this fn into this
                await db.User.create({
                    username: username,
                    password: password,
                    email: email
                })
                .then((userData) => {
                    const sessUser = userData._id ;
                    req.session.user = sessUser;
                    res.json({
                        message: 'Successfully created!',
                        auth: true,
                        sessUser
                    })})
                .catch(err => {
                    console.log(err.message);
                    res.status(500).send('Error in saving!');
                })
                return password;
            })
        })
       
        let user = await db.User.findOne({
            email
        });
    
        if (user) {
            return res.status(400).json({
                msg: 'User Already Exists',
                auth: false
            });
        }  
    //     await db.User.create({
    //         username: username,
    //         password: password,
    //         email: email
    //     })
    //     .then((user) => {
    //         const sessUser = user._id ;
    //         req.session.user = sessUser;
    //         res.json({
    //             message: 'Successfully created!',
    //             auth: true,
    //             sessUser
    //         })})
    //     .catch(err => {
    //         console.log(err.message);
    //         res.status(500).send('Error in saving!');
    //     })
        
    },
);

router.route('/login').post(
    [
        body('email', 'Please enter a Valid email')
        .isEmail(),
        body('password', 'Please enter a Valid password').isLength({
            min: 8
        })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send({
                errors: errors.array()
            });
        };

        let {
            email,
            password
        } = req.body;

        let user = await db.User.findOne({
            email
        });

        if (!user) {
            return res.status(400).json({
                msg: 'User Doesn\'t Exists'
            });
        }

        let isMatch;
        await bcrypt.compare(password, user.password)
        .then((res) => {
            isMatch = res;
        })
        .catch(err => console.log(err));

        if (!isMatch) {
            return res.status(400).json({ message: 'Incorrect password!'})
        };
        if (isMatch) {
            const sessUser = user._id;
            req.session.user = sessUser;
            res.json({
                message: 'You are successfully logged in!',
                auth: true, 
                sessUser
            })
        } else {
            res.json({
                message: 'Unable to log in!',
                auth: false
            })
        }
    }
);

router.route('/me')
    .get((req, res) => {
            if(req.session.user) {
                return res.json({
                    user_id: req.session.user,
                    message: 'You are signed in!',
                    auth:true
                });
            } else {
                return res.json({
                    message: 'You are not logged in!',
                    auth: false
                })
            }
    });

router.route('/info')
    .get((req, res) => {
        db.User.findById(req.session.user)
            .populate({
                path: 'shortTabInfo',
                select: {title: 1}
            })
            .then(dbModel => {
                res.json(dbModel);
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    });

router.route('/logout')
.get((req, res) => {
    req.session.destroy();
    return res.json({
        auth: false
    })
})

router.route('/username/')
    .get(userController.findUserByUsername)

router.route('/userId/:id')
    .get(userController.findFriendById)
    // .put(userController.updateUser)
    .delete(userController.deleteUser)

router.route('/image/:id')
    .put(userController.addImage) 
    

router.route('/background/:id')
    .put(userController.coverPhoto)

router.route('/')
    .get(userController.findAllUsers)

// router.route('/email/:email')
//     .get(userController.findUserByEmail)

router.route('/friends/:id')
    .get(userController.findAllUsersFriends)
    .put(userController.addToFriends)

router.route('/tabs/:id')
    .put(userController.followTab)
    .get(userController.findFollowedTabs)

// router.route('/posts/:id')
//     .put(userController.followPost)
//     .get(userController.findFollowedPosts)

// router.route('/all/:id')
//     .get(userController.findFollowedAll)

module.exports = router