const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Post = require('./Post');

const tabSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        trim: true,
        required: 'Title is Required!'
    },
    description: {
        type: String,
        maxLength: 500
    },
    usersFollowing: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    tags: [
        {
            type: String,
            maxLength: 25
        }
    ]
});

tabSchema.pre('remove', function(next) {
    Post.find({
        '_id': {
            $in: this.posts
        }
    })
    .then(dbModel => {
        dbModel.map(post => {
            post.remove()
        })
        next();
    })
    .catch(err => console.log(err));
});

const Tab = mongoose.model('Tab', tabSchema);

module.exports = Tab;