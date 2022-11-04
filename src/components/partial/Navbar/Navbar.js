import classNames from 'classnames/bind';
import React from 'react';
import { BiUser } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import RoundButton from '~/components/shared/RoundButton';
import styles from './Navbar.module.scss';

const cb = classNames.bind(styles);

const menu = [
    { title: 'đồ ăn', path: '/food' },
    { title: 'đồ uống', path: '/drink' },
    { title: 'lẩu', path: '/hotpot' },
    { title: 'topping', path: '/topping' },
    { title: 'khuyến mãi', path: '/discount' },
    { title: 'về chúng tôi', path: '/about' },
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

const NavbarItem = (props) => (
    <div className={cb('nav-item')}>
        <Link to={props.path} className={cb('nav-link')}>
            {props.title}
        </Link>
    </div>
);

const NavbarSearchItem = (props) => (
    <div className={cb('nav-search-item')}>
        <input type="text" className={cb('search-input')} placeholder="Tìm kiếm..." />
        <button className={cb('search-btn')}>
            <FiSearch className={cb('search-icon')} />
        </button>
    </div>
);

export default Navbar;
