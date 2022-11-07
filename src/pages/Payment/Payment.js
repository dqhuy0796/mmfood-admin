import classNames from 'classnames/bind';
import React from 'react';
import styles from './Payment.module.scss';
import LeftContainer from './PaymentLeftContainer';
import RightContainer from './PaymentRightContainer';
import Header from '~/layouts/Header';
import Footer from '~/layouts/Footer';

const cb = classNames.bind(styles);

class Payment extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className={cb('background')}>
                    <div className={cb('wrapper')}>
                        <LeftContainer />
                        <RightContainer />
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default Payment;
