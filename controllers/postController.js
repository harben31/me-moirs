const db = require('../models');
const mongoose = require('mongoose');
    
module.exports = {
    createPost: function(req, res) {
        db.Post
            .create(req.body)
            .then(async dbModel => {
                await db.Tab
                    .findOneAndUpdate({_id: req.body.tab_id},
                        {$push: {posts: dbModel._id}})
                res.json(dbModel);
            })
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    },
    findPosts: function(req, res) {
        
        db.Post
            .find({_id: req.params.id})
            .populate({
                path: 'likes',
                select: {username: 1}
            })
            .then(dbModel => {
                res.json(dbModel);
            })
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    },

    findPostById: function(req, res) {
        db.Post
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                
                res.status(422).json(err);
            });
    },

    updatePost: function(req, res) {
        db.Post
            .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    },

    addLike: function(req, res) {
        db.Post
            .findOneAndUpdate({_id: req.params.id},
                {$push: {likes: req.body.user_id}})
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.json(err);
            })
    },

    unLike: function(req, res) {
       
        db.Post
            .findOneAndUpdate({_id: req.params.id},
                {$pull: {likes: req.body.user_id}})
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    },
    
    deletePost: function(req, res) {
        db.Post
            .findById(req.params.id)
            .then(async dbModel => {
                await db.Tab
                    .findOneAndUpdate({_id: dbModel.tab_id},
                        {$pull: {posts: dbModel.id}})
                dbModel.remove();
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.json(err);
            })
    },

    addPostImage: function(req, res) {
        db.Post
        .findOneAndUpdate({_id: req.params.id}, { image: req.body.addPostImage})
        .then(dbModel =>  res.json(dbModel))
        .catch(err => {
            console.log(err);
            res.status(422).json(err);
        });
    },
};