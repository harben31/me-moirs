const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//how are post connected to tabs and how are tabs connected to user. 
//when a tab is loaded all associated posts and post's comments should load
const tabSchema = new Schema({
    user_id: {
        type: String,
    },
    title: {
        type: String,
        trim: true,
        required: 'Title is Required!'
    },
    image: {
        type: String
    },
    description: {
        type: String,
        maxLength: 500
    }
});

const Tab = mongoose.model('Tab', tabSchema);

module.exports = Tab;