const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//user id and tab id as well? if someone would want to see all a given users comments.

const commentSchema = new Schema ({
    post_id: {
        type: String
    },
    username: {
        type: String,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String,
        maxLength: 500,
        trim: true
    }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;