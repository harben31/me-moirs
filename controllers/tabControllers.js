const db = require('../models');
const mongoose = require('mongoose');

module.exports = {
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
    //find any public tab by their 'tag' or category.
    findTabByTag: function(req, res) {
        db.Tab
            .find({}, {user_id: req.params.id})
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    }
};

//find update to following tabs
//following tabs vs posts?
//comments on tabs or just posts or both?