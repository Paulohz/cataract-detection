import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:9999',
    //baseURL: 'https://cataract-detector.herokuapp.com/predict',
});

export default api;
