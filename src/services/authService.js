import * as httpsRequest from '~/utils/httpsRequest';

export const loginService = async (user) => {
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

export const updateProfile = async (user) => {
    try {
        const path = 'admin/updateprofile';
        const payload = {
            id: user.id,
            name: user.name,
            birth: user.birth,
            avatarUrl: user.avatarUrl,
            phone: user.phone,
            email: user.email,
            address: user.address,
            role: user.role,
        };
        const data = await httpsRequest.putApi(path, payload);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const changePassword = async (user) => {
    try {
        const path = 'admin/changepassword';
        const payload = {
            id: user.id,
            name: user.name,
            birth: user.birth,
            avatarUrl: user.avatarUrl,
            phone: user.phone,
            email: user.email,
            address: user.address,
            role: user.role,
        };
        const data = await httpsRequest.putApi(path, payload);
        return data;
    } catch (error) {
        console.log(error);
    }
};
