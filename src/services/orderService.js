import * as httpsRequest from '~/utils/httpsRequest';

export const getOrderService = async () => {
    try {
        const path = 'order/get';
        const payload = {
            id: 'all',
        };
        const data = await httpsRequest.getApi(path, payload);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const confirmOrderService = async (uuid) => {
    const path = 'order/confirm';
    const payload = {
        uuid: uuid,
    };
    try {
        const result = await httpsRequest.postApi(path, payload);
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const deliveryOrderService = async (uuid) => {
    const path = 'order/delivery';
    const payload = {
        uuid: uuid,
    };
    try {
        const result = await httpsRequest.postApi(path, payload);
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const cancelOrderService = async (uuid) => {
    const path = 'order/cancel';
    const payload = {
        uuid: uuid,
    };
    try {
        const result = await httpsRequest.postApi(path, payload);
        return result;
    } catch (error) {
        console.log(error);
    }
};
