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
        type: Buffer
    },
    description: {
        type: String,
        maxLength: 500
    },
    // post: [
    //     {
    //         title: {
    //             type: String,
    //             trim: true,
    //             required: 'Title is Required'
    //         },
    //         content: {
    //             type: String,
    //             maxLength: 5000,
    //             trim: true,
    //         },
    //         image: {
    //             type: Buffer
    //         },
    //         date: {
    //             type: Date,
    //             default: Date.now
    //         }
    //     }
    // ]
});

const Tab = mongoose.model('Tab', tabSchema);

module.exports = Tab;