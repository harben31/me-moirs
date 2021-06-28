const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/project_three_db'
);

const userSeed = [
    {
        _id: 1,
        username: 'Michael',
        password: 'Password',
        email: 'michael@yahoo.com',
        image: 'https://randomuser.me/api/portraits/men/27.jpg',
        about: 'I\'m a bit on the crazy side, but don\'t be afraid. I love D&D!',
        friends: [{username: 'Sarah'}, {username: 'Lyndsey'}, {username: 'Roger'}]
    },
    {
        _id: 2,
        username: 'Sarah',
        password: 'Password123',
        email: 'sarah@gmail.com',
        image: 'https://randomuser.me/api/portraits/women/8.jpg',
        about: 'I am a Cali girl and love to get out on the waves as much as possible. Getting out sometimes to listen to a local band is a highlight of my weekends!',
        friends: [{username: 'Michael'}, {username: 'Lyndsey'}, {username: 'Roger'}]
    },
    {
        _id: 3,
        username: 'Lyndsey',
        password: '123password',
        email: 'lyndsey@gmail.com',
        image: 'https://randomuser.me/api/portraits/women/30.jpg',
        about: 'Diving in and getting lost in a great novel sounds like a great adventure to me. Getting out and grabbing a coffee with friends never gets dull. I dream to be a writter one day!',
        friends: [{username: 'Michael'}, {username: 'Sarah'}, {username: 'Roger'}]
    },
    {
        _id: 4,
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
        _id: 1,
        user_id: 1,
        title: 'D&D',
        image: 'https://aurora.libnet.info/images/events/aurora/84939cb5ee9d5d54c7719e7fdc4fd1fd.png',
        description: 'Never a dull moment when in the world of Dungeons & Dragons! You want to be a prince, you got it! Wizard, hell yeah! I meet with a group of friends every other week and we always get into some crazy adventures together!'
    },
    {
        _id: 2,
        user_id: 2,
        title: 'Surfing',
        image: 'https://cdn.wionews.com/sites/default/files/styles/story_page/public/2020/09/08/158748-br2.png',
        description: 'When that sun hits the horizon, it is time to get to the waves! There are many situations a surfer can run into that bring danger into their lives, however, there are more positive vibes to even or tilt the scales.'
    },
    {
        _id: 3,
        user_id: 3,
        title: 'Novels',
        image: 'https://screencraft.org/wp-content/uploads/2019/01/photoplaysMAIN.jpg',
        description: 'Diving into a amazing novel takes you to all kinds of places. It is amazing what author\'s come up with. I long to write a novel one day about the supernatural world in a new way. Until then, I will continue to visit worlds unknown and people unseen!'
    },
    {
        _id: 4,
        user_id: 4,
        title: 'Salsa',
        image: 'https://acc.libfl.ru/wp-content/uploads/2018/11/ff188960-2a3f-11e7-9e97-35518dba98d9-1024x683.jpg',
        description: 'Who does not like a good sweat! Bring the passion and heat into the realm of salsa dancing. I have been dancing salsa for as long as I can remember. I am always trying to learn up-and-coming moves.'
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