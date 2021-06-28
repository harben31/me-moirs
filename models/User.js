const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: 'Username is Required'
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
        type: String,
        data: Buffer
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;