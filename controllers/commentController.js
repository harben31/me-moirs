const db = require('../models');

module.exports = {
    getComments: function(req, res) {
        db.Comment
        //get all posts comments using the post id passed into body
            // .find({post_id: req.body.post_id})
            //find all post's comment with post_id passed into url
            .find({post_id: req.params.id})
            .then(dbModel => {
                res.json(dbModel);
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    },
    createComment:  function(req, res) {
        db.Comment
            .create(req.body)
            .then(async dbModel => {
                await db.Post
                    .findOneAndUpdate({_id: req.body.post_id},
                        {$push: {comments: dbModel._id}})
                res.json(dbModel);
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    },
    updateComment: function(req, res) {
        db.Comment
            .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.json(err);  
            });
    },
    deleteComment: function(req, res) {
        db.Comment
            .findById(req.params.id)
            .then(async dbModel => {
                await db.Post
                    .findOneAndUpdate({_id: dbModel.post_id},
                        {$pull: {comments: dbModel.id}})
                dbModel.remove();
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.json(err);
            })
    }

}