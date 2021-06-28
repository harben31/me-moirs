const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/project_three_db'
);

const userSeed = [
    {

    },
    {

    }
];

const tabSeed = [
    {

    },
    {

    }
];

const postSeed = [
    {

    },
    {

    }
];

const commentSeed = [
    {

    },
    {

    }
];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + 'records inserted!');
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

db.Tab  
    .remove({})
    .then(() => db.Tab.collection.insertMany(tabSeed))
    .then(data => {
        console.log(data.result.n + 'records inserted!');
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

db.Post  
    .remove({})
    .then(() => db.Post.collection.insertMany(postSeed))
    .then(data => {
        console.log(data.result.n + 'records inserted!');
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });