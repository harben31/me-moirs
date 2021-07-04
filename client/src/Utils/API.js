import axios from 'axios';


export default {

    // getUser: function() {
    //     return axios.get('/api/users')
    // },

    userLogin: function(loginInfo){
        console.log(loginInfo);
       return axios.post('/api/users/login', loginInfo)
    },

    getUser: async function(loginInfo) {
        let resData = await this.userLogin(loginInfo);
        let config = {
            headers: {
                token: resData.data.token
            }
        }
        console.log(resData.data.token);
        return axios.get('/api/users/me', config)
    },

    // getUser: function(id) {
    //     return axios.get('/api/users' + id)
    // },


    // deleteUser: function(id) {
    //     return axios.delete('/api/users/' + id)
    // },

    saveUser: function(userData) {
        return axios.post('/api/users/signup', userData)
    },

    setUser: async function(userData){
        let res = await this.saveUser(userData);
        let config = {
            headers: {
                token:res.data.token
            }
        }
        console.log(res.data.token);
        return axios.post('/api/users/signup/me', config)
    },



    getTab: function() {
        return axios.get('/api/tabs')
    },

    // getTab: function(id) {
    //     return axios.get(    '/api/tabs' + id)
    // },

    // deleteTab: function(id) {
    //     return axios.delete('/api/tabs/' + id)
    // },

    // saveTab: function(userData) {
    //     return axios.put('/api/tabs', userData)
    // },



    // getPost: function() {
    //     return axios.get('/api/posts')
    // },

    // getPost: function(id) {
    //     return axios.get('/api/posts' + id)
    // },

    // deletePost: function(id) {
    //     return axios.delete('/api/posts/' + id)
    // },

    // savePosts: function(userData) {
    //     return axios.put('/api/posts', userData)
    // },

}