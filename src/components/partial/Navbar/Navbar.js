import React from 'react';
import { MdOutlineFastfood } from 'react-icons/md';
import { RiLogoutBoxRLine, RiUserSettingsLine, RiUserStarLine } from 'react-icons/ri';
import { TbTag } from 'react-icons/tb';
import { TfiDashboard } from 'react-icons/tfi';
import { SlDocs } from 'react-icons/sl';
import HamburgerButton from '~/components/shared/buttons/HamburgerButton';
import config from '~/config';
import NavbarItem from './NavbarItem';
// redux and actions
import { connect } from 'react-redux';
import { login, logout } from '~/redux/actions/authActions';
//style
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

const cb = classNames.bind(styles);

const menu = [
    { icon: <TfiDashboard />, title: 'bảng điều khiển', path: config.routes.dashboard },
    { icon: <RiUserSettingsLine />, title: 'tài khoản', path: config.routes.user },
    { icon: <RiUserStarLine />, title: 'khách hàng', path: config.routes.customer },
    { icon: <SlDocs />, title: 'bài viết', path: config.routes.posts },
    { icon: <MdOutlineFastfood />, title: 'sản phẩm', path: config.routes.product },
    { icon: <TbTag />, title: 'đơn hàng', path: config.routes.order },
];

class Navbar extends React.Component {
    state = {
        isCollapsed: false,
    };

    handleCollapseMenu = () => {
        this.setState((prevState) => ({
            ...prevState,
            isCollapsed: !prevState.isCollapsed,
        }));
    };

    render() {
        return (
            <div className={cb('navbar', this.state.isCollapsed && 'collapse')}>
                <ul>
                    <li>
                        <HamburgerButton
                            color={'white'}
                            onClick={this.handleCollapseMenu}
                            isCollapsed={this.state.isCollapsed}
                        />
                        <span className={cb('logo')}>MMFood</span>
                    </li>
                    {this.props.isLoggedIn && (
                        <li>
                            <NavbarItem
                                path={config.routes.account}
                                avatar={this.props.user.avatarUrl}
                                title={this.props.user.name}
                                isCollapsed={this.state.isCollapsed}
                            />
                        </li>
                    )}
                    {menu.map((item, index) => (
                        <li key={index}>
                            <NavbarItem
                                path={item.path}
                                icon={item.icon}
                                title={item.title}
                                isCollapsed={this.state.isCollapsed}
                            />
                        </li>
                    ))}
                    <li onClick={() => this.props.logout()}>
                        <NavbarItem
                            path={config.routes.login}
                            icon={<RiLogoutBoxRLine />}
                            title={'đăng xuất'}
                            isCollapsed={this.state.isCollapsed}
                        />
                    </li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user,
});

const mapActionsToProps = (dispatch) => ({
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapActionsToProps)(Navbar);
