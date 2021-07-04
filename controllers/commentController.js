const db = require('../models');

module.exports = {
    getComments: function(req, res) {
        db.Comment
        //get all posts comments using the post id passed into body
            // .find({post_id: req.body.post_id})
            //find all post's comment with post_id passed into url
            .find({post_id: req.params.id})
            .then(dbModel => {
                console.log(dbModel, 'comment controller')
                res.json(dbModel)
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    },
    createComment: function(req, res) {
        db.Comment
            .create(req.body)
            .then((dbModel => res.json(dbModel)))
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
            .find({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.json(err);
            })
    }

}