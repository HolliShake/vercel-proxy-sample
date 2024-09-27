const { default: axios } = require("axios");


const api = axios.create({
    baseURL: '/api',
})

export default api;