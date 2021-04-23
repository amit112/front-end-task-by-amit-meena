import axios from 'axios';


const Api = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL
});

Api.interceptors.request.use(
config => {
    debugger
    config.params = { ...config.params, token: process.env.REACT_APP_API_TOKEN };
    return config;
}, error => {
    return error
});

Api.interceptors.response.use(
response => {
    debugger
    return response.data
}, error => {
    return error
});




export default Api;