import React from 'react';
import classNames from 'classnames/bind';
import styles from './LogoFull.module.scss';
import LogoFullSize from '~/assets/images/logo_1.png';

const cb = classNames.bind(styles);

class LogoFull extends React.Component {
    state = {};
    render() {
        return (
            <div className={cb('wrapper')}>
                <img src={LogoFullSize} alt="logo full size" />
            </div>
        );
    }
}

export default LogoFull;
