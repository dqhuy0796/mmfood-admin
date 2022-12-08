import React from 'react';
import classNames from 'classnames/bind';
import styles from './RoundedButton.module.scss';
import { Link } from 'react-router-dom';

const cb = classNames.bind(styles);

function RoundedButton({ className, children, to, href, onClick, type, ...props }) {
    const btnProps = { onClick, ...props };
    const classes = cb('wrapper', className, type);
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
        <Comp className={classes} {...btnProps}>
            {children}
        </Comp>
    );
}

export default RoundedButton;
