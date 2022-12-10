import classNames from 'classnames/bind';
import React from 'react';
import Button from '~/components/shared/buttons/Button';
import config from '~/config';
import styles from './NotFound.module.scss';

const cb = classNames.bind(styles);

class NotFound extends React.Component {
    state = {};
    render() {
        return (
            <div className={cb('background')}>
                <h2>404</h2>
                <p>Bạn vừa tìm ra 1 chiều không gian mới</p>
                <p>Rất tiếc trang web của chúng tôi chưa hỗ trợ chiều không gian này</p>
                <div className={cb('back-to-home')}>
                    <Button size={'large'} shape={'pill'} color={'white'} to={config.routes.home}>
                        Trở về trang chủ
                    </Button>
                </div>
            </div>
        );
    }
}

export default NotFound;
