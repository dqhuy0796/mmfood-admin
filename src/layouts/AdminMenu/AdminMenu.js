import classNames from 'classnames/bind';
import React from 'react';
import { NavLink } from 'react-router-dom';
import config from '~/config';
import HamburgerButton from '~/components/shared/HamburgerButton';
import styles from './AdminMenu.module.scss';

const cb = classNames.bind(styles);

const menu = [
    { title: 'bảng điều khiển', path: config.routes.dashboard },
    { title: 'tài khoản', path: config.routes.users },
    { title: 'khách hàng', path: config.routes.customers },
    { title: 'sản phẩm', path: config.routes.products },
    { title: 'đơn hàng', path: config.routes.orders },
];

class AdminMenu extends React.Component {
    state = {
        isMobileMenuOpening: false,
    };

    handleCollapseMenu = () => {
        this.setState((prevState) => ({
            ...prevState,
            isMobileMenuOpening: !prevState.isMobileMenuOpening,
        }));
    };

    render() {
        return (
            <div className={cb('menu', this.state.isMobileMenuOpening && 'collapse')}>
                <div className={cb('navbar')}>
                    <div className={cb('hamburger-btn')}>
                        <HamburgerButton
                            onClick={this.handleCollapseMenu}
                            isCollapsed={this.state.isMobileMenuOpening}
                        />
                    </div>
                    <ul>
                        {menu.map((item, index) => (
                            <li key={index}>
                                <MenuItem path={item.path} title={item.title} />
                            </li>
                        ))}
                        <li>
                            <MenuItem path={config.routes.login} title="đăng xuất" />
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const MenuItem = (props) => (
    <div className={cb('menu-item')}>
        <NavLink
            to={props.path}
            className={({ isActive }) => (isActive ? cb('menu-link', 'actived') : cb('menu-link'))}
        >
            <span>{props.title}</span>
        </NavLink>
    </div>
);

export default AdminMenu;
