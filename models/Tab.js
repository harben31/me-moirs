const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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