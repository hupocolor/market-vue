import axios from 'axios'

const sevice = axios.create();

//请求拦截器
sevice.interceptors.request.use(config =>{
    return config;
}, error => {
    Promise.reject(error);
});
//响应拦截器
sevice.interceptors.response.use(response =>{
    return response.data;
}, error => {
    return Promise.reject(error);
});

export default sevice;