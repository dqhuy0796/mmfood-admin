import config from '~/config';
import Account from '~/pages/Account';
import Detail from '~/pages/Detail';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Order from '~/pages/Order';
import Search from '~/pages/Search';
import Payment from '~/pages/Payment';

const publicRoutes = [
    { path: config.routes.detail, Component: Detail },
    { path: config.routes.home, Component: Home },
    { path: config.routes.login, Component: Login },
    { path: config.routes.order, Component: Order },
    { path: config.routes.search, Component: Search },
    { path: config.routes.payment, Component: Payment },
];
const privateRoutes = [
    { path: config.routes.account, Component: Account },
    // comment cho no viet xuong dong
];
export { privateRoutes, publicRoutes };
