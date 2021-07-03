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
        friends: [],
        shortTabInfo: []
    },
    {
        username: 'Sarah',
        password: 'Password123',
        email: 'sarah@gmail.com',
        image: 'https://randomuser.me/api/portraits/women/8.jpg',
        about: 'I am a Cali girl and love to get out on the waves as much as possible. Getting out sometimes to listen to a local band is a highlight of my weekends!',
        friends: [],
        shortTabInfo: []
    },
    {
        username: 'Lyndsey',
        password: '123password',
        email: 'lyndsey@gmail.com',
        image: 'https://randomuser.me/api/portraits/women/30.jpg',
        about: 'Diving in and getting lost in a great novel sounds like a great adventure to me. Getting out and grabbing a coffee with friends never gets dull. I dream to be a writter one day!',
        friends: [],
        shortTabInfo: []
    },
    {
        username: 'Roger',
        password: '123password',
        email: 'roger@hotmail.com',
        image: 'https://randomuser.me/api/portraits/men/9.jpg',
        about: 'Who wants to go salsa dancing? If I am not salsa dancing, you will find me at my desk at home working. I work in Marketing and am never bored with the creativity that ensues!',
        friends: [],
        shortTabInfo: []

    }
];

const tabSeed = [
    {
        title: 'D&D',
        image: 'https://aurora.libnet.info/images/events/aurora/84939cb5ee9d5d54c7719e7fdc4fd1fd.png',
        description: 'Never a dull moment when in the world of Dungeons & Dragons! You want to be an elf, you got it! Wizard, hell yeah! I meet with a group of friends every other week and we always get into some crazy adventures together!'
    },
    {
        title: 'Surfing',
        image: 'https://cdn.wionews.com/sites/default/files/styles/story_page/public/2020/09/08/158748-br2.png',
        description: 'When that sun hits the horizon, it is time to get to the waves! There are many situations a surfer can run into that bring danger into their lives, however, there are more positive vibes to even or tilt the scales.'
    },
    {
        title: 'Novels',
        image: 'https://screencraft.org/wp-content/uploads/2019/01/photoplaysMAIN.jpg',
        description: 'Diving into a amazing novel takes you to all kinds of places. It is amazing what author\'s come up with. I long to write a novel one day about the supernatural world in a new way. Until then, I will continue to visit worlds unknown and people unseen!'
    },
    {
        user_id: '4',
        title: 'Salsa',
        image: 'https://acc.libfl.ru/wp-content/uploads/2018/11/ff188960-2a3f-11e7-9e97-35518dba98d9-1024x683.jpg',
        description: 'Who does not like a good sweat! Bring the passion and heat into the realm of salsa dancing. I have been dancing salsa for as long as I can remember. I am always trying to learn up-and-coming moves.'
    }
];

const postSeed = [
    {
        title: 'First time attempting Salsa Dancing Alone',
        content: 'When interested in Salsa dancing, you can always practice on your own if you do not have a partner yet. Remember to keep your arms out in front of you while you take these steps. Don\'t be afraid to ask for tips. We all love to lend a helping hand to new dancers.',
        image: 'https://www.wikihow.com/images/thumb/8/8c/Dance-Salsa-Alone-Step-1.jpg/v4-460px-Dance-Salsa-Alone-Step-1.jpg.webp',
        date: new Date(Date.now())
    },
    {
        title: 'One of my favorite characters: Half-elf Bard 1',
        content: 'Background (Entertainer): You have been the center of attention since before you could walk, and once you learned to sing and play, you never surrendered the spotlight again. And who deserves it more than you?By Popular Demand. You can always find a place to perform. You receive free lodging and food of a modest or comfortable standard as long as you perform each night. When strangers recognize you in a town where you have performed, they typically take a liking to you.Faction. You are a member of the Harpers, a clandestine organization who work against tyranny through the sharing of information and lore.Personality Trait. You change your mood or your mind as quickly as you change key in a song.Ideal. When you perform, you make the world better than it was.Bond. You will do anything to prove yourself superior to your hated rival.Flaw. You’re a sucker for a pretty face',
        image: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2018/10/Dungeons-Dragons-Bard-1.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5',
        date: new Date(Date.now())
    },
    {
        title: 'Layne Beachley: Surfer I aspire to be like!',
        content: 'poised, competitively deadly, and oozing class, almost no other woman has dominated the top spot in women\'s pro surfing like Australian Layne Beachley. A true icon of the sport- and, national treasure in Australia- Beachley was appointed an Officer of the Order of Australia for her distinguished service to the community and range of charitable organizations.',
        image: 'https://www.opencolleges.edu.au/blog/wp-content/uploads/2014/11/layne-beechey.jpg',
        date: new Date(Date.now())
    },
    {
        title: 'Latest Read: Safe With Me',
        content: 'This one kept me on my seat just as it claimed \'A psychological thriller so tense it will take your breath away!\' Anna had something terrible happen to her years ago which caused her to be very cautious of letting others get too close. When she witnesses a car accident, she realizes one of the people involved (Carla) is the very person that ruined her life. She dives deep and gets involved with the case only to reveal her own secrets. Is Carla really dangerous or does Anna need to worry about someone far loser to home?',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1476613715l/32618205.jpg',
        date: new Date(Date.now())
    }
];

const commentSeed = [
    {
        username: 'Lyndsey',
        date: new Date(Date.now()),
        content: 'This is really helpful because I just recently became interested in learning how to Salsa dance. Definitely will be following this tab!'
    },
    {
        username: 'Michael',
        date: new Date(Date.now()),
        content: 'My wife and I just tried this out in the kitchen today. Brought a huge smile to her face :-)!'
    },
    {
        post_id: '2',
        username: 'Lyndsey',
        date: new Date(Date.now()),
        content: 'My son loves this character! This helps me understand why he likes it so much.'
    },
    {
        username: 'Sarah',
        date: new Date(Date.now()),
        content: 'I really enjoy playing D&D as well! Definitely going to follow this tab.'
    },
    {
        username: 'Roger',
        date: new Date(Date.now()),
        content: 'Thanks for sharing this. I didn\'t even know about her before today. She sounds like she was an amazing person as a whole and a great surfer!'
    },
    {
        post_id: '3',
        username: 'Michael',
        date: new Date(Date.now()),
        content: 'What a wonderful person! It was wonderful getting to see her competitions.'
    },
    {
        post_id: '4',
        username: 'Sarah',
        date: new Date(Date.now()),
        content: 'Psychological thrillers are my life!!!! Have you read Gone Girl?'
    },
    {
        post_id: '4',
        username: 'Roger',
        date: new Date(Date.now()),
        content: 'This sounds really suspenseful! I will definitely have to add this book to my list to read. Following this tab!'
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