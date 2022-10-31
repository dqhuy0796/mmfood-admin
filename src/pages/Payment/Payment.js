import classNames from 'classnames/bind';
import React from 'react';
import styles from './Payment.module.scss';

const cb = classNames.bind(styles);

class Payment extends React.Component {
    render() {
        return (
            <>
                <h2 className={cb('nothing')}>This is payment page</h2>
            </>
        );
    }
}

export default Payment;
