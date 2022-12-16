import config from '~/config';

import Login from '~/pages/Login';
import Dashboard from '~/pages/Dashboard';
import Customer from '~/pages/Customer';
import Product from '~/pages/Product';
import Order from '~/pages/Order';
import User from '~/pages/User';

const adminRoutes = [
    { path: config.routes.login, Component: Login },
    { path: config.routes.dashboard, Component: Dashboard },
    { path: config.routes.customer, Component: Customer },
    { path: config.routes.product, Component: Product },
    { path: config.routes.order, Component: Order },
    { path: config.routes.user, Component: User },
];
export { adminRoutes };
