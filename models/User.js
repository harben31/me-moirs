const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Tab = require('./Tab');
const Comment = require('./Comment');

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: 'Username is Required',
        // match: [/^[a-zA-Z0-9]+$/, 'Must use letters and/or numbers']
    },
    password: {
        type: String,
        trim: true,
        required: 'Password is Required!',
        // validate: [({ length }) => length >= 8, "Password should be longer."]
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: 'Email is Required!',
        // match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    image: {
        contentType: String,
        data: Buffer
    },
    about: {
        type: String,
        maxLength: 500
    },
    comments: {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    },
    //is friend more than just string? 
    //is string just other user's _id and tha is used to make additional call. 
    shortTabInfo: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tab'
        }
    ],
    usersFollowing: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    friends: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
    followedTabs: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Tab'
        }
    ],
    followedPosts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
},
{
    timestamps: true
});

userSchema.pre('remove', function(next) {
    Tab.find({
        '_id': {
            $in: this.shortTabInfo
        }
    })
    .then(dbModel => {
        dbModel.map(tab => {
            tab.remove();
        });
        Comment.find({
            '_id': {
                $in: this.comments
            }
        })
        .then(dbModel => {
            dbModel.map(tab => {
                tab.remove()
            })
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});

const User = mongoose.model('User', userSchema);

module.exports = User;