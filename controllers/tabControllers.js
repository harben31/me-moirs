const db = require('../models');

module.exports = {
    //when user creates new tab
    createUserTab: function (req, res) {
        db.Tab
            .create(req.body)
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    },
    //editing overall tab
    updateUserTab: function(req, res) {
        db.Tab
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            })
    },
    //loading users tabs
    findAllUserTabs: function(req, res) {
        //find all of one users tabs. search/sort by user id
        db.Tab
            .find({}, {userId: req.params.id})
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    },
    //find any public tab by their 'tag' or category.
    findTabByTag: function(req, res) {
        db.Tab
            .find({}, {tag: req.params.id})
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    }
};

//find update to following tabs
//following tabs vs posts?
//comments on tabs or just posts or both?