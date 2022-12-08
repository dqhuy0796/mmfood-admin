import React from 'react';
import classNames from 'classnames/bind';
import styles from './RoundButton.module.scss';
import { Link } from 'react-router-dom';

const cb = classNames.bind(styles);

function RoundButton({ className, children, to, href, onClick, value, ...props }) {
    const btnProps = { onClick, ...props };
    let Comp = 'div';
    if (to) {
        Comp = Link;
        btnProps.to = to;
    } else if (href) {
        Comp = 'a';
        btnProps.href = href;
    } else {
        Comp = 'button';
    }
    return (
        <Comp className={cb('wrapper', className)} {...btnProps}>
            {children}
            {value > 0 && <span className={cb('tag')}>{value > 9 ? '9+' : value}</span>}
        </Comp>
    );
}

export default RoundButton;
