import classNames from 'classnames/bind';
import React from 'react';
import { BiUser } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import RoundButton from '~/components/shared/RoundButton';
import styles from './Navbar.module.scss';
import NavbarItem from './NavbarItem';
import config from '~/config';

const cb = classNames.bind(styles);

const menu = [
    { title: 'đồ ăn', path: config.routes.food },
    { title: 'đồ uống', path: config.routes.drink },
    { title: 'lẩu', path: config.routes.hotpot },
    { title: 'topping', path: config.routes.topping },
    { title: 'khuyến mãi', path: config.routes.promotion },
    { title: 'về chúng tôi', path: config.routes.about },
];

class Navbar extends React.Component {
    state = {};
    render() {
        return (
            <div className={cb('navbar', this.props.isCollapsed && 'collapse')}>
                <NavbarSearchItem />
                <ul>
                    {menu.map((item, index) => (
                        <li key={index}>
                            <NavbarItem path={item.path} title={item.title} />
                        </li>
                    ))}
                    {/* <RoundButton icon={<BiUser />} /> thay đổi thứ tự của nút này */}
                </ul>
            </div>
        );
    }
}

const NavbarSearchItem = (props) => (
    <div className={cb('nav-search-item')}>
        <input type="text" className={cb('search-input')} placeholder="Tìm kiếm..." />
        <button className={cb('search-btn')}>
            <FiSearch className={cb('search-icon')} />
        </button>
    </div>
);

export default Navbar;
