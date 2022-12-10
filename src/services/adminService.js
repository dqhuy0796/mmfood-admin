import * as httpsRequest from '~/utils/httpsRequest';

export const GetUsers = async () => {
    try {
        const query = 'user/get';
        const data = await httpsRequest.getApi(query, {
            params: {
                id: 'all',
            },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const GetUserById = async (id) => {
    try {
        const query = 'user/get';
        const data = await httpsRequest.getApi(query, {
            params: {
                id: id,
            },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const CreateUser = async (user) => {
    try {
        const query = 'user/create';
        const data = await httpsRequest.postApi(query, {
            params: {
                password: user.password,
                name: user.name,
                birth: user.birth,
                avatarUrl: user.avatarUrl,
                phone: user.phone,
                email: user.email,
                address: user.address,
                role: user.role,
            },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const UpdateUser = async (user) => {
    try {
        const query = 'user/update';
        const data = await httpsRequest.putApi(query, {
            params: {
                password: user.password,
                name: user.name,
                birth: user.birth,
                avatarUrl: user.avatarUrl,
                phone: user.phone,
                email: user.email,
                address: user.address,
                role: user.role,
            },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const DeleteUser = async (userId) => {
    try {
        const query = 'user/delete';
        const data = await httpsRequest.deleteApi(query, {
            params: {
                id: userId,
            },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};
