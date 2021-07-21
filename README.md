#       ME-MOIRS


##       License 

![License](https://img.shields.io/static/v1?label=license&message=MIT&color=brightgreen)


##       Description:

This application was developed for the user to be able to share interests and life-events with friends accross the app.



##       Table of Contents 


* [License](#License)

* [How-to-use](#How-to-use)

* [Link-to-deployed-application](#Link-to-deployed-application)

* [Technologies](#Technologies)

* [Contributors](#Contributors)

* [Screenshot-to-deployed-application](#Screenshot-to-deployed-application)

* [Possible-future-add-ons](#Possible-future-add-ons)


##        How-to-use  

Afer navigating to the application site, new users are prompted to create a username and password. Existing users can simply login. Once logged in, the user is then directred to the profile page. The profile page allows the option for the user to upload their profile and backound images to further customize their experience while using the app. Located in the navbar are some features that provide the user with the ability to create new tab titles, see previously created tab titles, find and follow friends, or logout. When the user clicks on an existing tab title, they will be redirected to a page where they can see all of their posts, images, and details relevant to that tab title. This post page also allows the user to create new posts that they wish to share. Each post has the option to receive likes and comments from fellow friends and followers. The user also has the option to find other friends, view their profile content, and choose to follow one onther's specifc content and interests.


##       Link-to-deployed-application

[https://protected-basin-89410.herokuapp.com/](https://protected-basin-89410.herokuapp.com/)



##       Technologies

* Axios
* Bcryptjs
* Express
* Express-Sessions
* Express-Validator
* Framer-Motion
* Ityped
* Mongoose
* Node.js
* React
* React-Moving-Text
* React-Router-Dom
* React-Multi-Carousel
* React-MDL
* Styled-Components



##       Contributors

* [Asia-Alnahi](https://github.com/asia-codeing)
* [Ben-Harris](https://github.com/harben31)
* [Cassandra-Cunningham](https://github.com/cmcunningham27)
* [Marisa-Hanna](https://github.com/MarisaHanna)


##      Screenshot-to-deployed-application

![login](images/login.png)
![profile](images/profile.png)
![posts](images/posts.png)
![friends](images/friends.png)



##       Possible-future-add-ons

* **Bucket-List/Goal-Tracker**
	A tool for users to state and then plan out a life goal. The user will be able to add step by step outline on how they plan to accomplish said goal. Ass the user completes a step they can cross it off the list and record their experience with text, photos and other means to convey that specific part of their journey. If Another user shares the same life goal they can opt to pin another users goal outline to their own profile and add or take away steps before they start taking the steps.

* **Give user control over interactions**
	Give the user the ability to control how they interact with the community. The user will be able to choose several levels of engagement from not sharing at all to share with no comments or to be fully open.

* **Better image handling**
	One of the least performant parts of this app is the image handling. There are no limitations or controls of the size or format the user can submit. We plan to find middle ware to either process the user’s image or disallow files over a certain size. 

* **Version tracking for posts**
	We plan on making the post’s that exist under the user created categories to be linked in a way where one project can be tracked as it progresses. 

* **Optional dashboard of followed tabs**
	If the user decides to follow another user’s tab they will also have the option to pin it to their profile or on another page.

* **Correspondence w/ other users**
	A messaging system designed to encourage the user to write meaningful ‘letters’ to their friends. The design would resemble pen and paper. The format would not allow for messages shorter than a decided upon length. 

* **Transfer all saltiness to the global state**
	The app is currently prop drilling to many of the components. All  stateliness will be transferred to the global state.

* **View a users profile before following**
	Wire up the view profile button so the user can checkout another user’s content before following them.

* **Optional notifications**
	Notifications to the user if one of their followed tabs is updated or they have a message in their mailbox.

* **Fix refresh issue**
	The app will always reload from the base ‘/‘ route upon refresh. Functionality will be added to keep the user on the part of the app they are currently viewing.

* **Ability to edit comments and tabs**
	Wire up the edit function for both tabs and user. 

* **Add about me for the user’s profile**
	Create more avenues for they user to introduce themselves such as a bio section. 
