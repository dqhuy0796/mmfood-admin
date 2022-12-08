import * as httpsRequest from '~/utils/httpsRequest';

import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
});

export const UserService = async (username, password) => {
    try {
        const result = await httpsRequest.login('login', {
            email: username,
            password: password,
        });
        return result.user;
        // return request.post('login', { email: username, password: password });
    } catch (error) {
        console.log(error);
    }
};
