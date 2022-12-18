import config from '~/config';

import Login from '~/pages/Login';
import Dashboard from '~/pages/Dashboard';
import Customer from '~/pages/Customer';
import Product from '~/pages/Product';
import Posts from '~/pages/Posts';
import Order from '~/pages/Order';
import User from '~/pages/User';
import Account from '~/pages/Account';

const publicRoutes = [
    //cmt for enter
    { path: config.routes.login, Component: Login },
];

const adminRoutes = [
    { path: config.routes.dashboard, Component: Dashboard },
    { path: config.routes.customer, Component: Customer },
    { path: config.routes.product, Component: Product },
    { path: config.routes.posts, Component: Posts },
    { path: config.routes.order, Component: Order },
    { path: config.routes.user, Component: User },
    { path: config.routes.account, Component: Account },
];
export { adminRoutes, publicRoutes };
