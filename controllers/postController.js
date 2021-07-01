const db = require('../models');
const mongoose = require('mongoose');
    
module.exports = {
    createUserPost: function(req, res) {
       
        console.log(req.body, 'creater post route');
        db.Post
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    },
    findUserPosts: function(req, res) {
        console.log('get tabs postws');
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
    findUserPostById: function(req, res) {
        db.Post
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    },
    //editing posts
    updateUserPost: function(req, res) {
        db.Post
            .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    }
};

//should this be a seperate call? or just grab all post info when calling tab. 
//or keep this for when user follows a post?