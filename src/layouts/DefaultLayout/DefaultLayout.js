import React from 'react';
import Navbar from '~/components/partial/Navbar';
//style
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const scss = classNames.bind(styles);
class DefaultLayout extends React.Component {
    state = {};
    render() {
        return (
            <div className={scss('container')}>
                <Navbar />
                <div className={scss('content')}>{this.props.children}</div>
            </div>
        );
    }
}

export default DefaultLayout;
