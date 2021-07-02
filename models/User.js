const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    //is friend more than just string? 
    //is string just other user's _id and tha is used to make additional call. 
    tabs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tab'
        }
    ],
    //CURRENTLY NOT USING THIS FOR USERS
    // friends: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'User'
    //     }
    // ]
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;