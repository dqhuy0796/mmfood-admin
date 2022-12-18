import * as httpsRequest from '~/utils/httpsRequest';

export const GetProduct = async () => {
    try {
        const path = 'product/get';
        const payload = {
            id: 'all',
        };
        const data = await httpsRequest.getApi(path, payload);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const GetProductById = async (id) => {
    try {
        const path = 'product/get';
        const payload = {
            id: id,
        };
        const data = await httpsRequest.getApi(path, payload);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const CreateProduct = async (Product) => {
    try {
        const path = 'product/create';
        const payload = {
            name: Product.name,
            categoryId: Product.categoryId,
            imageUrl: Product.imageUrl,
            unit: Product.unit,
            size: Product.size,
            oldPrice: Product.oldPrice,
            newPrice: Product.newPrice,
            description: Product.description,
        };
        const data = await httpsRequest.postApi(path, payload);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const UpdateProduct = async (Product) => {
    try {
        const path = 'product/update';
        const payload = {
            id: Product.id,
            name: Product.name,
            categoryId: Product.categoryId,
            imageUrl: Product.imageUrl,
            unit: Product.unit,
            size: Product.size,
            oldPrice: Product.oldPrice,
            newPrice: Product.newPrice,
            description: Product.description,
        };
        const data = await httpsRequest.putApi(path, payload);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const DeleteProduct = async (ProductId) => {
    try {
        const path = 'product/delete';
        const payload = {
            id: ProductId,
        };
        const data = await httpsRequest.deleteApi(path, payload);
        return data;
    } catch (error) {
        console.log(error);
    }
};
