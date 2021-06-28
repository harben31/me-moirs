const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tabSchema = new Schema({
    user_id: {
        type: Number,
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
    }
});

const Tab = mongoose.model('Tab', tabSchema);

module.exports = Tab;