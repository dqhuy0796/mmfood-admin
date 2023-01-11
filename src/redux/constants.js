export const authActionTypes = Object.freeze({
    login: 'LOG_IN',
    logout: 'LOG_OUT',
});

export const modalActionTypes = Object.freeze({
    showModal: 'SHOW_MODAL',
    hideModal: 'HIDE_MODAL',
});

export const dialogActionTypes = Object.freeze({
    showDialog: 'SHOW_DIALOG',
    hideDialog: 'HIDE_DIALOG',
});

export const apiActionTypes = Object.freeze({
    updateCartApi: 'UPDATE_CART_API',
    getCart: 'GET_CART_API',
    getPosts: 'GET_POSTS_API',
    getProducts: 'GET_PRODUCTS_API',
    getHistoryOrders: 'GET_HISTORY_ORDERS_API',
});
