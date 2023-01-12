import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavbarItem.module.scss';
import classNames from 'classnames/bind';

const scss = classNames.bind(styles);

class NavbarItem extends React.Component {
    state = {};
    render() {
        return (
            <NavLink
                to={this.props.path}
                className={({ isActive }) => (isActive ? scss('nav-link', 'actived') : scss('nav-link'))}
            >
                {this.props.icon && (
                    <>
                        <span className={scss('icon')}>{this.props.icon}</span>
                        <span className={scss('title', this.props.isCollapsed && 'hidden')}>{this.props.title}</span>
                    </>
                )}
                {this.props.avatar && (
                    <>
                        <span className={scss('avatar')}>
                            <img src={this.props.avatar} alt={this.props.title} />
                        </span>
                        <span className={scss('name', this.props.isCollapsed && 'hidden')}>{this.props.title}</span>
                    </>
                )}
            </NavLink>
        );
    }
}

export default NavbarItem;
