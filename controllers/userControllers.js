const db = require('../models');
const mongoose = require('mongoose');
// const auth = require('../utils/auth');

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

<<<<<<< HEAD
        let idToSearch = mongoose.Types.ObjectId(req.params.id);

        db.User
        .findOne({_id: req.params.id})
        .populate({
            path: 'shortTabInfo',
            select: 'title'
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => {
            console.log(err);
            res.status(422).json(err);
        });
    },
=======
>>>>>>> 68c29013e622469970be84929a1b550272f2e703
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
