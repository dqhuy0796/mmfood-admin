import classNames from 'classnames/bind';
import React from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import Navbar from '~/components/partial/Navbar';
import HamburgerButton from '~/components/shared/HamburgerButton';
import LogoFull from '~/components/shared/Logo/LogoFull';
import RoundButton from '~/components/shared/RoundButton';
import CartModal from '../../components/modals/CartModal/CartModal';
import styles from './Header.module.scss';

const cb = classNames.bind(styles);

class Header extends React.Component {
    state = {
        isModalActive: false,
        isMobileMenuOpening: false,
    };

    handleCollapseMenu = () => {
        this.setState((prevState) => ({
            ...prevState,
            isMobileMenuOpening: !prevState.isMobileMenuOpening,
        }));
    };

    handleCollapseModal = () => {
        this.setState((prevState) => ({
            ...prevState,
            isModalActive: !prevState.isModalActive,
        }));
    };

    render() {
        return (
            <header className={cb('header')}>
                <div className={cb('wrapper')}>
                    <HamburgerButton
                        className={cb('hamburger-btn')}
                        onClick={this.handleCollapseMenu}
                        isCollapsed={this.state.isMobileMenuOpening}
                    />
                    <LogoFull />
                    <Navbar isCollapsed={this.state.isMobileMenuOpening} />
                    <RoundButton onClick={this.handleCollapseModal} value={22}>
                        <HiOutlineShoppingBag />
                    </RoundButton>
                    {this.state.isModalActive && <CartModal handleCollapseModal={this.handleCollapseModal} />}
                </div>
            </header>
        );
    }
}

export default Header;
