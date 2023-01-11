import { Fragment } from 'react';
import config from '~/config';
import DefaultLayout from '~/layouts/DefaultLayout';
import Account from '~/pages/Account';
import Customer from '~/pages/Customer';
import Dashboard from '~/pages/Dashboard';
import Login from '~/pages/Login';
import NotFound from '~/pages/NotFound';
import Order from '~/pages/Order';
import Posts from '~/pages/Posts';
import Product from '~/pages/Product';
import User from '~/pages/User';

const publicRoutes = [
    //cmt for enter
    { path: config.routes.login, Component: Login, Layout: Fragment },
    { path: '*', Component: NotFound, Layout: Fragment },
];

const adminRoutes = [
    { path: config.routes.dashboard, Component: Dashboard, Layout: DefaultLayout },
    { path: config.routes.customer, Component: Customer, Layout: DefaultLayout },
    { path: config.routes.product, Component: Product, Layout: DefaultLayout },
    { path: config.routes.posts, Component: Posts, Layout: DefaultLayout },
    { path: config.routes.order, Component: Order, Layout: DefaultLayout },
    { path: config.routes.user, Component: User, Layout: DefaultLayout },
    { path: config.routes.account, Component: Account, Layout: DefaultLayout },
];
export { adminRoutes, publicRoutes };
