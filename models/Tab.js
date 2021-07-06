const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Post = require('./Post');


//how are post connected to tabs and how are tabs connected to user. 
//when a tab is loaded all associated posts and post's comments should load
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
    image: {
        contentType: String,
        data: Buffer
    },
    description: {
        type: String,
        maxLength: 500
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
});

tabSchema.pre('remove', async function(next) {
    try {
        await Post.remove({
            '_id': {
                $in: this.posts
            }
        });
        next()
    } catch (err) {
        console.log(err);
        next(err);
    }
    });

const Tab = mongoose.model('Tab', tabSchema);

module.exports = Tab;