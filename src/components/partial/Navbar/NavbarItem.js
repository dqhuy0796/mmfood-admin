import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavbarItem.module.scss';
import classNames from 'classnames/bind';

const cb = classNames.bind(styles);

class NavbarItem extends React.Component {
    state = {};
    render() {
        return (
            <NavLink
                to={this.props.path}
                className={({ isActive }) => (isActive ? cb('nav-link', 'actived') : cb('nav-link'))}
            >
                <span className={cb('icon')}>{this.props.icon}</span>
                <span className={cb('title')}>{this.props.title}</span>
            </NavLink>
        );
    }
}

export default NavbarItem;
