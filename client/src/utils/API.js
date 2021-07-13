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
    userByUsername: function(username){
        return axios.get('/api/users/username/' + username)
    },

    userByEmail: function(email){
        return axios.get('/api/users/email/' + email)
    },

    //need to put friends id in req.body under friendId
    addToUsersFriends: function(userId){
        axios.put('/api/friends/' + userId)
    },

    getUsersFriends: function(userId){
        return axios.get('/api/users/friends/' + userId)
    },

    getFollowedTabs: function(userId) {
        return axios.get('/api/users/tabs/' + userId)
    },

    getFollowedTabs: function(userId) {
        return axios.get('/api/users/posts/' + userId)
    },

    deleteUser: function(userId) {
        return axios.delete('/api/users/' + userId)
    },

   //--------------Tabs
    getTabs: function() {
        return axios.get('/api/tabs')
    },

    getTab: function(id) {
        return axios.get('/api/tabs/' + id)
    },

    deleteTab: function(id) {
        return axios.delete('/api/tabs/' + id)
    },

    saveTab: function(userData) {
        return axios.post('/api/tabs/', userData)
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

    savePost: function(userData) {
        return axios.post('/api/posts', userData)
    },

    //---------------Comments
    saveComment: function(commentData) {
        return axios.post('/api/comments', commentData)
    },
    deleteComment: function(id) {
        return axios.delete('/api/comments/' + id)
    },

}
