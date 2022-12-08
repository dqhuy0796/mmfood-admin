import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:8000/api/',
});

export const login = async (path, options = {}) => {
    const response = await request.post(path, options);
    return response.data;
};

export const getApiData = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

export default request;
