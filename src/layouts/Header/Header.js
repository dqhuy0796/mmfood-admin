import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FiSearch } from 'react-icons/fi';
import { BsChevronDown } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const cb = classNames.bind(styles);

class Header extends React.Component {
    state = {};
    render() {
        return (
            <>
                <header className={cb('header')}>
                    <div className={cb('mobile-menu')}>
                        <ul>
                            <li>
                                <div>
                                    <input
                                        type="text"
                                        className={cb('search-box')}
                                        placeholder="Bạn tìm gì hôm nay..."
                                    />
                                    <button className={cb('btn search-btn')}>
                                        <FiSearch />
                                    </button>
                                </div>
                            </li>

                            <li className={cb('nav__item')}>
                                <div className={cb('nav__category')}>
                                    <Link to={''} className={cb('nav__link')}>
                                        Phòng
                                    </Link>
                                    <label className={cb('collapse-subnav-btn')} for="room-checkbox">
                                        <BsChevronDown />
                                    </label>
                                </div>
                                <input
                                    type="checkbox"
                                    name=""
                                    id="room-checkbox"
                                    className={cb('subnav-checkbox')}
                                    hidden
                                />
                                <div className={cb('subnav')}>
                                    <ul className={cb('subnav__list')}>
                                        <li className={cb('subnav__item')}>
                                            <a href="./category.html" className={cb('subnav__link')}>
                                                Phòng khách
                                            </a>
                                        </li>
                                        <li className={cb('subnav__item')}>
                                            <a href="./category.html" className={cb('subnav__link')}>
                                                Phòng ngủ
                                            </a>
                                        </li>
                                        <li className={cb('subnav__item')}>
                                            <a href="./category.html" className={cb('subnav__link')}>
                                                Phòng ăn
                                            </a>
                                        </li>
                                        <li className={cb('subnav__item')}>
                                            <a href="./category.html" className={cb('subnav__link')}>
                                                Phòng làm việc
                                            </a>
                                        </li>
                                        <li className={cb('subnav__item')}>
                                            <a href="./category.html" className={cb('subnav__link')}>
                                                Nhà bếp
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </header>
            </>
        );
    }
}

export default Header;
