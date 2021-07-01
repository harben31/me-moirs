const db = require('../models');
const mongoose = require('mongoose');

//onload of user profile= user data + minimal tabs data. 
//Tabs data should not load until specific tab is selected by user. 

module.exports = {
    findAllUsers: function (req, res) {
        db.User
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    },
    //prob need by name as well. Or instead of?
    findUserById: function (req, res) {
        console.log(req.params.id, 1234, '1234');
        let idToSearch = mongoose.Types.ObjectId(req.params.id);
        db.User
        .findOne({_id: req.params.id})
        .populate({
            path: 'shortTabInfo',
            select: 'title'
        },
        )
            // .aggregate([{
            //     $match: {
            //         _id: idToSearch
            //     },
            // },
            // {
            //     $lookup:
            //     {
            //         from: 'Tab',
            //         localField: '_id',
            //         foreignField: 'user_id',
            //         as: 'tabTitle'
            //     }
            // }
                
            // ])
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    },
    createUser: function (req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    },
    updateUser: function (req, res) {
        db.User
            .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    }
};
