const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;