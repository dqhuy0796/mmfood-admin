import config from '~/config';
import About from '~/pages/About';
import Account from '~/pages/Account';
import Drink from '~/pages/Drink';
import Food from '~/pages/Food';
import Home from '~/pages/Home';
import Hotpot from '~/pages/Hotpot';
import Login from '~/pages/Login';
import Payment from '~/pages/Payment';
import Promotion from '~/pages/Promotion';
import Search from '~/pages/Search';
import Topping from '~/pages/Topping';

const publicRoutes = [
    { path: config.routes.home, Component: Home },
    { path: config.routes.food, Component: Food },
    { path: config.routes.drink, Component: Drink },
    { path: config.routes.hotpot, Component: Hotpot },
    { path: config.routes.topping, Component: Topping },
    { path: config.routes.promotion, Component: Promotion },
    { path: config.routes.about, Component: About },
    { path: config.routes.search, Component: Search },
    { path: config.routes.login, Component: Login },
    { path: config.routes.payment, Component: Payment },
];
const privateRoutes = [
    { path: config.routes.account, Component: Account },
    // comment cho no viet xuong dong
];
export { privateRoutes, publicRoutes };
