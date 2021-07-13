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
        let idToSearch = mongoose.Types.ObjectId(req.body.id);
        db.Post
            .find({tab_id: req.params.id})
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    },
    //when would we call by id? how would id get to FE api
    findPostById: function(req, res) {
        db.Post
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    },
    //editing posts
    updatePost: function(req, res) {
        db.Post
            .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
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
    }
};

//should this be a seperate call? or just grab all post info when calling tab. 
//or keep this for when user follows a post?