import React from 'react';
import classNames from 'classnames/bind';
import styles from './PrimaryButton.module.scss';
import { Link } from 'react-router-dom';

const cb = classNames.bind(styles);

function PrimaryButton({ className, children, to, href, onClick, ...props }) {
    const btnProps = { onClick, ...props };
    const classes = cb('wrapper', { [className]: className, onClick, ...props });
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

export default PrimaryButton;
