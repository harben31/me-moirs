const db = require('../models');
const mongoose = require('mongoose');

module.exports = {
    updateTab: function(req, res) {
        db.Tab
            .findOneAndUpdate({ _id: idToSearch }, req.body.tags)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    },

    updateTags: function(req, res) {
        //can PUSH arrays but to remove must be single string not in array
        let action;

        if(req.body.addTag){
            action = {$push: {tags: req.body.tags}}
        } else {
            action = {$pull: {tags: req.body.tags}}
        }

        db.Tab
            .findOneAndUpdate({_id: req.params.id}, 
                action)
                .then(dbModel => res.json(dbModel))
                .catch(err => {
                    console.log(err);
                    res.json(err);
                })
    },

    findAllTabs: function(req, res) {
        db.Tab
            .find({_id: req.params.id})
            .populate({
                path: 'posts',
                populate: {path: 'comments'}
            })
            .then(dbModel => {
                res.json(dbModel);
            })
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    },

    deleteTab: function(req, res) {
        db.Tab
            .findById(req.params.id)
            .then(async dbModel => {
                await db.User
                    .findOneAndUpdate({_id: dbModel.user_id},
                        {$pull: {shortTabInfo: dbModel.id}})
                dbModel.remove();
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.json(err);
            })
    },

    findTabById: function(req, res) {
        db.Tab
            .findById(req.params.id)
            .populate({ 
                path: 'posts',
                populate: {
                    path: 'comments'
                }    
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    }
};