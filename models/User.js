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
        type: String
    },
    about: {
        type: String,
        maxLength: 500
    },
    friends: [
        {
            username: {
                type: String
            }
        }
    ]
});

const User = mongoose.model('User', userSchema);

module.exports = User;