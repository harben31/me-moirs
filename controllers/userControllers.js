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
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    },

    findUserByUsername: function(req, res) {
        console.log('FIND USER BY USERNAME', req.params.username)
        db.User
            .find({username: req.params.username})
            .then(dbModel => {
                console.log('WRONG SEARCH', dbModel)
                if(dbModel.length) {
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
        db.User
            .find({email: req.params.email})
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

    updateUser: function (req, res) {
        db.User
            .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
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
