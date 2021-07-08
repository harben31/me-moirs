const router = require('express').Router();
const userController = require('../../controllers/userControllers')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
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
            bcrypt.hash(password, salt, function(err, hash) {
                password = hash;
                console.log('line 37:', password);
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
       console.log(password," Hikkk");
        await db.User.create({
            username: username,
            password: password,
            email: email
        })
        .then((user) => {
            const sessUser = user._id ;
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
        console.log('Gotcha');
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
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

        console.log('user', user.password);
        console.log('password', password);
        let isMatch;
        await bcrypt.compare(password, user.password)
        .then((res) => {
            isMatch = res;
            console.log('inside', isMatch);
        })
        .catch(err => console.log(err));

        console.log('before if', isMatch)
        if (!isMatch) {
            console.log('gotcha')
            return res.status(400).json({ message: 'Incorrect password!'})
        };
        if (isMatch) {
            console.log('Heya');
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
        // console.log('session', req.session.user);
            if(req.session.user) {
                // console.log('User session', req.session.user);
                // const sessUser = req.session.user;
                return res.json({
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
        console.log(res);
        db.User.findById(req.session.user)
            .populate({
                path: 'tabs',
                populate: {
                    path: 'posts'
                }
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
        // db.User.findOne(req.session.user)
        //     .then(dbModel => res.json(dbModel))
        //     .catch(err => res.status(422).json(err));
    });

router.route('/logout')
.get((req, res) => {
    req.session.destroy();
    return res.json({
        auth: false
    })
})

router.route('/:id')
    .get(userController.findUserById)
    .put(userController.updateUser)

router.route('/')
    .get(userController.findAllUsers)

module.exports = router