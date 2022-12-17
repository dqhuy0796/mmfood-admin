import * as httpsRequest from '~/utils/httpsRequest';

export const LoginService = async (user) => {
    const path = 'admin/login';
    const payload = {
        phone: user.phone,
        password: user.password,
    };
    try {
        const result = await httpsRequest.postApi(path, payload);
        return result;
    } catch (error) {
        console.log(error);
    }
};
