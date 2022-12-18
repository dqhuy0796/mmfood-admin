import * as httpsRequest from '~/utils/httpsRequest';

export const GetOrders = async () => {
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

export const GetOrderById = async (id) => {
    try {
        const path = 'order/get';
        const payload = {
            id: id,
        };
        const data = await httpsRequest.getApi(path, payload);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const CreateOrder = async (order) => {
    try {
        const path = 'order/create';
        const payload = {
            name: order.name,
            categoryId: order.categoryId,
            imageUrl: order.imageUrl,
            unit: order.unit,
            size: order.size,
            oldPrice: order.oldPrice,
            newPrice: order.newPrice,
            description: order.description,
        };
        const data = await httpsRequest.postApi(path, payload);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const UpdateOrder = async (order) => {
    try {
        const path = 'order/update';
        const payload = {
            id: order.id,
            name: order.name,
            categoryId: order.categoryId,
            imageUrl: order.imageUrl,
            unit: order.unit,
            size: order.size,
            oldPrice: order.oldPrice,
            newPrice: order.newPrice,
            description: order.description,
        };
        const data = await httpsRequest.putApi(path, payload);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const DeleteOrder = async (orderId) => {
    try {
        const path = 'order/delete';
        const payload = {
            id: orderId,
        };
        const data = await httpsRequest.deleteApi(path, payload);
        return data;
    } catch (error) {
        console.log(error);
    }
};
