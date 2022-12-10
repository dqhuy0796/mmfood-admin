import * as httpsRequest from '~/utils/httpsRequest';

export const UserService = async (username, password) => {
    try {
        const result = await httpsRequest.login('login', {
            email: username,
            password: password,
        });
        return result.user;
    } catch (error) {
        console.log(error);
    }
};
