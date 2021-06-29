const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//user_id as well?
const postSchema = new Schema({
    tab_id: {
        type: String
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
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;