import Vue from 'vue';
import axios from 'axios';
import config from '../config'
import store from '../store'

axios.defaults.baseURL = config.URL;

const requestHandler = (request) => {
    store.dispatch('common/loading', true);

    return request;
}

const errorHandler = (error) => {
    store.dispatch('common/loading', false)

    return error;
}


const responseHandler = (response) => {
    store.dispatch('common/loading', false)
    
    return response;
}

axios.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
)

axios.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
)

Vue.prototype.$axios = axios;

export default axios;