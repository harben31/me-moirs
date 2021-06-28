const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    password: {
        type: String,
        trim: true,
        required: 'Password is Required!',
        validate: [({ length }) => length >= 8, "Password should be longer."]
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;