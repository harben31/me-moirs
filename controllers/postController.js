const db = require('../models');

module.exports = {
    findUserTabs: function(req, res) {
        db.Post
            .find({}, {tabId: req.params.id})
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    }
};

//should this be a seperate call? or just grab all post info when calling tab. 
//or keep this for when user follows a post?