const router = require('express').Router();
const userController = require('../../controllers/userControllers')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../../models');
const auth = require('../../utils/auth');

//when signing up a new user checks if fields are entered correctly, hashes the password, checks if user exists already, if not then creates new user, and creates authentication with a token
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
                errors: errors.array()
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
                return password;
            })
        })
       
        let user = await db.User.findOne({
            email
        });
    
        if (user) {
            return res.status(400).json({
                msg: 'User Already Exists'
            });
        }   
       
        await db.User.create({
            username: username,
            password: password,
            email: email
        })
        .then(user => {
            const payload = {
                user: {
                    id: user.id,
                    // password: oldPassword
                }
            };
            console.log('payload', payload);
            jwt.sign(
                payload,
                'secret', {
                    expiresIn: 10000
                },
                (err, token) => {
                    if (err) throw err;
                    console.log(token);
                    res.status(200).json({
                        token
                    });
                    
                }
            )
            res.json(user)})
        .catch(err => {
            console.log(err.message);
            res.status(500).send('Error in Saving');
        })
    },
);

//checks whether fields were entered correctly, checks if user doesn't exist yet, checks if password matches bcrypt hashed password, and creates a token upon logging in successfully
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
            return res.status(400).json({
                errors: errors.array()
            });
        }
        let {
            email,
            password
        } = req.body

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
            res.json(isMatch)})
        .catch(err => console.log(err));

        console.log('before if', isMatch)
        if (!isMatch) {
            console.log('gotcha')
            return res.status(400).json({ message: 'Incorrect password!'})
        };
        if (isMatch) {
                console.log(user.id);
                const payload = { 
                    user: {
                        id: user.id
                    }
                };
                console.log(payload);
                jwt.sign(
                    payload,
                    'secret',
                    {
                        expiresIn: 10000
                    },
                    (err, token) => {
                        if (err) throw err;
                        res.status(200).json({
                            token
                        });
                    }
                );
            }
    }
);

//gets the user along with it's tab id's based on their auth token
router.route('/me')
    .get(auth, async (req, res) => {
        await db.User
            .findById(req.user.id)
            .populate({
                path: 'shortTabInfo',
                select: 'title'
            })
            .then(user => res.json(user))
            .catch((err) => {
                console.log(err);
                res.status(422).json(err);
            });
    });

router.route('/:id')
    // .get(userController.findUserById)
    .put(userController.updateUser)

module.exports = router