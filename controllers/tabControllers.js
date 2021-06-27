// const db = require('../models');

module.exports = {
    createUserTab: function (req, res) {
        db.Tab
            .create(req.body)
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    },
    updateUserTab: function(req, res) {
        db.Tab
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            })
    },
    findAllUserTabs: function(req, res) {
        //find all of one users tabs. search/sort by user id
        db.Tab
            .find({}, {userId: req.params.id})
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    },
    findTabByTag: function(req, res) {
        //find any public tab by their 'tag' or category.
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
//comments on tabs or just posts?