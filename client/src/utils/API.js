import axios from 'axios';


export default {
    //--------------Users

    saveUser: function(userData) {
        return axios.post('/api/users/signup', userData)
    },

    userLogin: function(loginInfo){
       return axios.post('/api/users/login', loginInfo)
    },

    logout: function() {
        return axios.get('/api/users/logout')
    },

    getUser: async function() {
        return axios.get('/api/users/me')
    },

    userInfo: function() {
        return axios.get('/api/users/info')
    },

    // getUser: function(id) {
    //     return axios.get('/api/users' + id)
    // },
    
    //----search for other users-----
    userByUsername: function(_id, username){
        console.log(_id, username);
        return axios.get(`/api/users/username?id=${_id}&search=${username}`)
    },

    userByEmail: function(email){
        return axios.get('/api/users/email/' + email)
    },

    //need to put friends id in req.body under friendId
    addToUsersFriends: function(userId, friendId){
        console.log('user_id:', userId, 'friendId:', friendId)
        return axios.put('/api/users/friends/' + userId, friendId)
    },

    getUsersFriends: function(userId){
        return axios.get('/api/users/friends/' + userId)
    },

    //needs post_id in req.body
    followPost: function(userId, post_id){
        return axios.put('/api/users/posts/' + userId, post_id)
    },

    //needs tab_id in req.body
    followTab: function(userId, tab_id){
        return axios.put('/api/users/tabs/' + userId, tab_id)
    },

    getFollowedTabs: function(userId) {
        return axios.get('/api/users/tabs/' + userId)
    },

    getFollowedPosts: function(userId) {
        return axios.get('/api/users/posts/' + userId)
    },

    getFollowedAll: function(userId) {
        return axios.get('/api/users/all/' + userId)
    },

    deleteUser: function(userId) {
        return axios.delete('/api/users/' + userId)
    },

   //--------------Tabs
    getTabs: function() {
        return axios.get('/api/tabs')
    },

    getTab: function(id) {
        console.log(id)
        return axios.get('/api/tabs/' + id)
    },

    deleteTab: function(id) {
        return axios.delete('/api/tabs/' + id)
    },

    saveTab: function(tabData) {
        return axios.post('/api/tabs/', tabData)
    },


    //--------------Posts
    getPosts: function() {
        return axios.get('/api/posts')
    },

    getPost: function(id) {
        return axios.get('/api/posts' + id)
    },

    deletePost: function(id) {
        return axios.delete('/api/posts/' + id)
    },

    savePost: function(postData) {
        return axios.post('/api/posts', postData)
    },

    addLike: function(postId, userId) {
        return axios.put('/api/posts/like/' + postId, userId)
    },

    unLike: function(postId, userId) {
        return axios.put('/api/posts/unlike/' + postId, userId)
    },

    //---------------Comments
    saveComment: function(commentData) {
        return axios.post('/api/comments/', commentData)
    },
    deleteComment: function(id) {
        return axios.delete('/api/comments/' + id)
    },

}
