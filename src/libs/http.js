import axios from 'axios';

axios.defaults.baseURL = 'http://open.douyucdn.cn';
axios.defaults.withCredentials = true;
axios.defaults.timeout = 100000;

let http = {
    post:'',
    get:''
};

http.post = function (api ,data) {
    let params =JSON.stringify(data);
    return new Promise((resolve,reject) =>{
        axios.post(api, params).then(res=>{
            resolve(res);
        })
    })
};

http.get = function (api ,data) {
    let params =JSON.stringify(data);
    return new Promise((resolve,reject) =>{
        axios.get(api, params).then(res=>{
            resolve(res);
        })
    })
};

export default http;