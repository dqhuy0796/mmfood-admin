import classNames from 'classnames/bind';
import React from 'react';
import { MdOutlineFastfood } from 'react-icons/md';
import { RiLogoutBoxRLine, RiUserSettingsLine, RiUserStarLine } from 'react-icons/ri';
import { TbTag } from 'react-icons/tb';
import { TfiDashboard } from 'react-icons/tfi';
import HamburgerButton from '~/components/shared/buttons/HamburgerButton';
import config from '~/config';
import styles from './Navbar.module.scss';
import NavbarItem from './NavbarItem';

const cb = classNames.bind(styles);

const menu = [
    { icon: <TfiDashboard />, title: 'bảng điều khiển', path: config.routes.dashboard },
    { icon: <RiUserSettingsLine />, title: 'tài khoản', path: config.routes.user },
    { icon: <RiUserStarLine />, title: 'khách hàng', path: config.routes.customer },
    { icon: <MdOutlineFastfood />, title: 'sản phẩm', path: config.routes.product },
    { icon: <TbTag />, title: 'đơn hàng', path: config.routes.order },
];

class Navbar extends React.Component {
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
            <div className={cb('navbar', this.state.isMobileMenuOpening && 'collapse')}>
                <ul>
                    <li>
                        <HamburgerButton
                            color={'white'}
                            onClick={this.handleCollapseMenu}
                            isCollapsed={this.state.isMobileMenuOpening}
                        />
                        <span className={cb('logo')}>MMFood</span>
                    </li>
                    {menu.map((item, index) => (
                        <li key={index}>
                            <NavbarItem path={item.path} icon={item.icon} title={item.title} />
                        </li>
                    ))}
                    <li>
                        <NavbarItem path={config.routes.login} icon={<RiLogoutBoxRLine />} title="đăng xuất" />
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navbar;
