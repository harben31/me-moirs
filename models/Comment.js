const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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