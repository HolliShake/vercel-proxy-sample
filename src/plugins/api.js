const { default: axios } = require("axios");


const api = axios.create({
    baseURL: '/Api',
})

export default api;