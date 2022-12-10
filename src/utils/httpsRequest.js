import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:8000/api/',
});

export const login = async (path, options = {}) => {
    const response = await request.post(path, options);
    return response.data;
};

export const getApi = async (url, params = {}) => {
    const response = await request.get(url, params);
    return response.data;
};

export const postApi = async (url, params = {}) => {
    const response = await request.post(url, params);
    return response.data;
};

export const putApi = async (url, params = {}) => {
    const response = await request.put(url, params);
    return response.data;
};

export const deleteApi = async (url, params = {}) => {
    const response = await request.delete(url, params);
    return response.data;
};

export default request;
