const db = require('../models');
const mongoose = require('mongoose');

module.exports = {
    //editing overall tab
    updateTab: function(req, res) {
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
    findAllTabs: function(req, res) {
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
            .then(async dbModel => {
                await db.User
                    .findOneAndUpdate({_id: dbModel.user_id},
                        {$pull: {shortTabInfo: dbModel.id}})
                dbModel.remove();
            })
            .then(deModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.json(err);
            })
    },
    //find any public tab by their 'tag' or category.
    // findTabByTag: function(req, res) {
    //     db.Tab
    //         .findById(req.params.id)
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