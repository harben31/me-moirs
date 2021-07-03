const db = require('../models');
const mongoose = require('mongoose');

module.exports = {
    //when user creates new tab
    createUserTab: function (req, res) {
        let idToSearch = mongoose.Types.ObjectId(req.body.id);
        let tabIdToSearch = mongoose.Types.ObjectId(req.body.user_id);
        // console.log('createUserRoute', req.body);
        db.Tab
            .create(req.body)
            .then(async dbModel => {
                console.log(dbModel)
                await db.User
                    .findOneAndUpdate({_id: req.body.user_id},
                    {$push: {shortTabInfo: dbModel._id}})

                return res.json(dbModel);
            })
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
            
    },
    //editing overall tab
    updateUserTab: function(req, res) {
        db.Tab
        //returning 'no such file or directory'
            .findOneAndUpdate({ _id: idToSearch }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            })
    },
    //loading users tabs
    findAllUserTabs: function(req, res) {
        //find all of one users tabs. search/sort by user id
        db.Tab
            .find({user_id: req.params.id})
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    },
    //Will need to delete all posts as well
    deleteTab: function(req, res) {
        db.Tab
            .findById(req.params.id)
            .then(dbModel => dbModel.remove())
            .then(deModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.json(err);
            })
    },
    //find any public tab by their 'tag' or category.
    // findTabByTag: function(req, res) {
    //     db.Tab
    //         .find({}, {user_id: req.params.id})
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => {
    //             console.log(err);
    //             res.status(422).json(err);
    //         });
    // }
};

//find update to following tabs
//following tabs vs posts?
//comments on tabs or just posts or both?