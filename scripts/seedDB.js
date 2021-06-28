const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/project_three_db'
);

const userSeed = [
    {
        username: 'Michael',
        password: 'Password',
        email: 'michael@yahoo.com',
        image: 'https://randomuser.me/api/portraits/men/27.jpg',
        about: 'I\'m a bit on the crazy side, but don\'t be afraid. I love D&D!',
        friends: [{username: 'Sarah'}, {username: 'Lyndsey'}, {username: 'Roger'}]
    },
    {
        username: 'Sarah',
        password: 'Password123',
        email: 'sarah@gmail.com',
        image: 'https://randomuser.me/api/portraits/women/8.jpg',
        about: 'I am a Cali girl and love to get out on the waves as much as possible. Getting out sometimes to listen to a local band is a highlight of my weekends!',
        friends: [{username: 'Michael'}, {username: 'Lyndsey'}, {username: 'Roger'}]
    },
    {
        username: 'Lyndsey',
        password: '123password',
        email: 'lyndsey@gmail.com',
        image: 'https://randomuser.me/api/portraits/women/30.jpg',
        about: 'Diving in and getting lost in a great novel sounds like a great adventure to me. Getting out and grabbing a coffee with friends never gets dull. I dream to be a writter one day!',
        friends: [{username: 'Michael'}, {username: 'Sarah'}, {username: 'Roger'}]
    },
    {
        username: 'Roger',
        password: '123password',
        email: 'roger@hotmail.com',
        image: 'https://randomuser.me/api/portraits/men/9.jpg',
        about: 'Who wants to go salsa dancing? If I am not salsa dancing, you will find me at my desk at home working. I work in Marketing and am never bored with the creativity that ensues!',
        friends: [{username: 'Michael'}, {username: 'Sarah'}, {username: 'Lyndsey'}]
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

db.Comment  
    .remove({})
    .then(() => db.Comment.collection.insertMany(commentSeed))
    .then(data => {
        console.log(data.result.n + 'records inserted!');
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });