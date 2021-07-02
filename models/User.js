const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: 'Username is Required',
        match: [/^[a-zA-Z0-9]+$/, 'Must use letters']
    },
    password: {
        type: String,
        trim: true,
        required: 'Password is Required!',
        validate: [({ length }) => length >= 8, "Password should be longer."]
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: 'Email is Required!',
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    image: {
        contentType: String,
        data: Buffer
    },
    about: {
        type: String,
        maxLength: 500
    },
    //is friend more than just string? 
    //is string just other user's _id and tha is used to make additional call. 
    friends: [
        {
            username: {
                type: String
            }
        }
    ],
    shortTabInfo: [{
        type: Schema.Types.ObjectId,
        ref: 'Tab'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;