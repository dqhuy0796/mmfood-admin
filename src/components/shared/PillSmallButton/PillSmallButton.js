import React from 'react';
import classNames from 'classnames/bind';
import styles from './PillSmallButton.module.scss';
import { Link } from 'react-router-dom';

const cb = classNames.bind(styles);

function PillSmallButton({ className, children, to, href, onClick, icon, ...props }) {
    const btnProps = { onClick, ...props };
    const classes = cb('wrapper', className);
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
            <span>{icon}</span>
            <span>{children}</span>
        </Comp>
    );
}

export default PillSmallButton;
