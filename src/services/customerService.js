import * as httpsRequest from '~/utils/httpsRequest';

export const GetCustomers = async () => {
    try {
        const path = 'customer/get';
        const payload = {
            id: 'all',
        };
        const data = await httpsRequest.getApi(path, payload);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const GetCustomerById = async (id) => {
    try {
        const path = 'customer/get';
        const payload = {
            id: id,
        };
        const data = await httpsRequest.getApi(path, payload);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const CreateCustomer = async (customer) => {
    try {
        const path = 'customer/create';
        const payload = {
            password: customer.password,
            name: customer.name,
            birth: customer.birth,
            avatarUrl: customer.avatarUrl,
            phone: customer.phone,
            email: customer.email,
            address: customer.address,
            role: customer.role,
        };
        const data = await httpsRequest.postApi(path, payload);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const UpdateCustomer = async (customer) => {
    try {
        const path = 'customer/update';
        const payload = {
            id: customer.id,
            name: customer.name,
            birth: customer.birth,
            avatarUrl: customer.avatarUrl,
            phone: customer.phone,
            email: customer.email,
            address: customer.address,
            role: customer.role,
        };
        const data = await httpsRequest.putApi(path, payload);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const DeleteCustomer = async (customerId) => {
    try {
        const path = 'customer/delete';
        const payload = {
            id: customerId,
        };
        const data = await httpsRequest.deleteApi(path, payload);
        return data;
    } catch (error) {
        console.log(error);
    }
};
