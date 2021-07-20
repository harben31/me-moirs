const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Comment = require('./Comment');
const db = require('../models');

const postSchema = new Schema({
    tab_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tab'
    },
    title: {
        type: String,
        trim: true,
        required: 'Title is Required'
    },
    content: {
        type: String,
        maxLength: 3000,
        trim: true,
    },
    image: {
        contentType: String,
        data: Buffer
    },
    date: {
        type: Date,
        default: Date.now
    },
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
});

postSchema.pre('remove', function(next) {
    Comment
        .find({
            '_id': {
            $in: this.comments
        },
        })
        .then( dbModel => {
            dbModel.map(comment => {
                comment.remove()
            })
            next();
        })
        .catch(err => console.log(err));
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;