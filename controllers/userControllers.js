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

    // findUserById: function (req, res) {
    //     console.log('findUserById')
    //     db.User
    //         .findById(req.params.id)
    //         .then(dbModel => {
    //             res.json(dbModel)
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             res.json(err);
    //         });
    // },

    //need to handle case sensativity. second username all lowercase?
    findUserByUsername: function(req, res) {
        function escapeRegex(text) {
            return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
        };
        const regex = new RegExp(escapeRegex(req.query.search))
        console.log(req.query)
        db.User
            .findById(req.query.id)
            .then(dbModel => {
               const idsToFilter = dbModel.friends;
               idsToFilter.push(dbModel._id)
               console.log(idsToFilter);

               db.User
                .find({username: regex})
                .then(dbModel => {
                    if(dbModel.length) {
                        //trim res to username, email, image, 
                        let filteredSearch = dbModel.filter(user => {
                            return !idsToFilter.includes(user._id)
                        })
                        res.json(filteredSearch);
                    } else {
                        res.json({ message: 'username could not be found'})
                    }
                })
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
        let action;
        let friendAction;

        if(req.body.follow){
            console.log('follow user true');
            action = {$push: {friends: req.body.friendId}};
            friendAction={$push: {usersFollowing: req.params.id}};
        } else if (!req.body.follow) {
            console.log('follow user false');
            action = {$pull: {friends: req.body.friendId}};
            friendAction = {$pull: {usersFollowing: req.params.id}}
        } else {
            action = null;
        }

        db.User
            .findOneAndUpdate({_id: req.params.id}, 
                action)
            .then(dbModel => {
                //doesn't return the friend just added but we should already have that info on the FE
                db.User
                    .findByIdAndUpdate({_id: req.body.friendId}, 
                        friendAction)
                    .then(dbModel => console.log('adding to usersfollowing', dbModel))
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
        let action;
        let tabAction;

        if(req.body.follow){
            console.log('follow tab true');
            action = {$push: {followedTabs: req.body.tab_id}};
            tabAction={$push: {usersFollowing: req.params.id}};
        } else if (!req.body.follow) {
            console.log('follow tab false');
            action = {$pull: {followedTabs: req.body.tab_id}};
            tabAction = {$pull: {usersFollowing: req.params.id}}
        } else {
            action = null;
        }

        db.User
            .findOneAndUpdate({_id: req.params.id},
                action
            )
            .then(dbModel => {
                db.Tab
                    .findByIdAndUpdate({_id: req.body.tab_id}, 
                        tabAction)
                    .then(dbModel => console.log('adding to TAB usersfollowing'))
                res.json(dbModel);
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            })
    },

    // followPost: function(req, res) {
    //     db.User
    //         .findOneAndUpdate({_id: req.params.id},
    //             {$push: {followedPosts: req.body.post_id}})
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => {
    //             console.log(err);
    //             res.json(err);
    //         })
    // },

    findFollowedTabs: function(req, res) {
        //add a call to add user_id to tab 
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

    // findFollowedPosts: function(req, res) {
    //     db.User
    //         .findById(req.params.id)
    //         .populate({
    //             path: 'followedPosts'
    //         })
    //         .then(dbModel => res.json(dbModel.followedPosts))
    //         .catch(err => {
    //             console.log(res);
    //             res.json(err);
    //         });
    // },

    // findFollowedAll: function(req, res) {
    //     db.User
    //         .findById(req.params.id)
    //         .populate('followedTabs')
    //         .populate('followedPosts')
    //         .then(dbModel => {
    //             console.log('!!!!!', dbModel);
    //             res.json({
    //                 tabs: dbModel.followedTabs,
    //                 posts: dbModel.followedPosts
    //             });
    //     })
    //         .catch(err => {
    //             console.log(res);
    //             res.json(err);
    //         });
    // },

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
