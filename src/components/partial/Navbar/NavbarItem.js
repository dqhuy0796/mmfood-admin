import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavbarItem.scss';

class NavbarItem extends React.Component {
    state = {};
    render() {
        return (
            <div className={'nav-item'}>
                <NavLink
                    to={this.props.path}
                    className={({ isActive }) => (isActive ? 'nav-link actived' : 'nav-link')}
                >
                    {this.props.title}
                </NavLink>
            </div>
        );
    }
}

export default NavbarItem;
