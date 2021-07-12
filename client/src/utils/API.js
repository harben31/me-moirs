import axios from 'axios';


export default {
    //--------------Users
    // getUser: function() {
    //     return axios.get('/api/users/me')
    // },

    userLogin: function(loginInfo){
       return axios.post('/api/users/login', loginInfo)
    },

    logout: function() {
        return axios.get('/api/users/logout')
    },

    //do we need both of these calls? Aren't they doing the same thing?
    getUser: async function() {
        return axios.get('/api/users/me')
    },

    userInfo: function() {
        return axios.get('/api/users/info')
    },

    // getUser: function(id) {
    //     return axios.get('/api/users' + id)
    // },

    deleteUser: function(id) {
        return axios.delete('/api/users/' + id)
    },


    saveUser: function(userData) {
        return axios.post('/api/users/signup', userData)
    },

   //--------------Tabs
    getTabs: function() {
        return axios.get('/api/tabs')
    },

    getTab: function(id) {
        console.log('Hit me first!')
        return axios.get('/api/tabs/' + id)
    },

    deleteTab: function(id) {
        return axios.delete('/api/tabs/' + id)
    },

    saveTab: function(userData) {
        return axios.post('/api/tabs', userData)
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
