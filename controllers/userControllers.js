const db = require('../models');
const mongoose = require('mongoose');
// const auth = require('../utils/auth');

//onload of user profile= user data + minimal tabs data. 
//Tabs data should not load until specific tab is selected by user. 

module.exports = {
    findAllUsers: function (req, res) {
        db.User
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    },

    findUserById: function (req, res) {
        db.User
            .findById(req.params.id)
            .then(dbModel => {
                res.json(dbModel)
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    },

    //need to handle case sensativity. second username all lowercase?
    findUserByUsername: function(req, res) {
        function escapeRegex(text) {
            return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
        };
        const regex = new RegExp(escapeRegex(req.params.username))
        db.User
            .find({username: regex})
            .then(dbModel => {
                if(dbModel.length) {
                    //trim res to username, email, image, 
                    res.json(dbModel)
                } else {
                    res.json({ message: 'username could not be found'})
                }
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            })
    },

    findUserByEmail: function(req, res) {
        console.log('findByEmail', req.params.email);
        function escapeRegex(text) {
            return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
        };
        const regex = new RegExp(escapeRegex(req.params.email))
        db.User
            .find({email: regex})
            .then(dbModel => {
                if(dbModel.length) {
                    res.json(dbModel);
                } else {
                    res.json({message: 'email could not be found'});
                }
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    },

    //update user data. eg username or about
    updateUser: function (req, res) {
        db.User
            .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    },

    addToFriends: function(req, res) {
        console.log('addToFriends:', req.body)
        db.User
            .findOneAndUpdate({_id: req.params.id}, 
                {$push: {friends: req.body.friendId}})
            .then(dbModel => {
                //doens't return the friend just added but we should already have that info on the FE
                res.json(dbModel);
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    },

    findAllUsersFriends: function(req, res) {
        db.User
            .findById(req.params.id)
            .populate({
                path: 'friends'
            })
            .then(dbModel => res.json(dbModel.friends))
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    },

    //----follow tabs and posts------
    followTab: function(req, res) {
        db.User
            .findOneAndUpdate({_id: req.params.id},
                {$push: {followedTabs: req.body.tab_id}})
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.json(err);
            })
    },

    followPost: function(req, res) {
        db.User
            .findOneAndUpdate({_id: req.params.id},
                {$push: {followedPosts: req.body.post_id}})
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.json(err);
            })
    },

    findFollowedTabs: function(req, res) {
        db.User
            .findById(req.params.id)
            .populate({
                path: 'followedTabs'
            })
            .then(dbModel => res.json(dbModel.followedTabs))
            .catch(err => {
                console.log(res);
                res.json(err);
            });
    },

    findFollowedPosts: function(req, res) {
        db.User
            .findById(req.params.id)
            .populate({
                path: 'followedPosts'
            })
            .then(dbModel => res.json(dbModel.followedPosts))
            .catch(err => {
                console.log(res);
                res.json(err);
            });
    },

    findFollowedAll: function(req, res) {
        db.User
            .findById(req.params.id)
            .populate('followedTabs')
            .populate('followedPosts')
            .then(dbModel => {
                console.log('!!!!!', dbModel);
                res.json({
                    tabs: dbModel.followedTabs,
                    posts: dbModel.followedPosts
                });
        })
            .catch(err => {
                console.log(res);
                res.json(err);
            });
    },

    deleteUser: function(req, res) {
        db.User
            .findOneAndRemove({_id: req.params.id})
            .then(dbModel => {
                dbModel.remove();
            })
            .then(dbModel => {
                res.json(dbModel);
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    }
};
