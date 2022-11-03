import classNames from 'classnames/bind';
import React from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import HamburgerButton from '~/components/HamburgerButton/HamburgerButton';
import LogoFull from '~/components/Logo/LogoFull';
import Navbar from '~/components/Navbar/Navbar';
import RoundButton from '~/components/RoundButton/RoundButton';
import styles from './Header.module.scss';

const cb = classNames.bind(styles);

class Header extends React.Component {
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
            <header className={cb('header')}>
                <div className={cb('wrapper')}>
                    <HamburgerButton onClick={this.handleCollapseMenu} isCollapsed={this.state.isMobileMenuOpening} />
                    <LogoFull />
                    <Navbar isCollapsed={this.state.isMobileMenuOpening} />
                    <RoundButton icon={<HiOutlineShoppingBag />} />
                </div>
            </header>
        );
    }
}

export default Header;
