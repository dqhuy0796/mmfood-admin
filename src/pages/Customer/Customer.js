import classNames from 'classnames/bind';
import React from 'react';
import Navbar from '~/components/partial/Navbar';
import PageTitle from '~/components/partial/PageTitle/PageTitle';
import styles from './Customer.module.scss';

const cb = classNames.bind(styles);

class Customer extends React.Component {
    state = {};
    render() {
        return (
            <div className={cb('wrapper')}>
                <Navbar />
                <div className={cb('container')}>
                    <PageTitle title={'Quản lý khách hàng'} />

                    <div className={cb('container')}>
                        <div className={cb('header')}></div>
                        <div className={cb('body')}></div>
                        <div className={cb('footer')}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Customer;
