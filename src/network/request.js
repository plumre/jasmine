import axios from "axios";

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://localhost:9080',
        timeout: 5000
    })


    instance.interceptors.request.use(config => {
        console.log('request interceptor onFulfilled', config);
        return config
    }, error => {
        console.log('request interceptor onRejected', error);
        return error
    })

    instance.interceptors.response.use(config => {
        console.log('response interceptor onFulfilled', config);
        return config
    }, error => {
        console.log('response interceptor onRejected', error);
        return error
    })

    return instance(config)
}