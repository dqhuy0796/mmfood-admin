import classNames from 'classnames/bind';
import React from 'react';
import { BsFacebook, BsGoogle, BsInstagram, BsTwitter } from 'react-icons/bs';
import PrimaryButton from '~/components/shared/PrimaryButton';
import config from '~/config';
import styles from './Login.module.scss';

const cb = classNames.bind(styles);

class Login extends React.Component {
    render() {
        return (
            <div className={cb('background')}>
                <div className={cb('login-form')}>
                    <FormHeader title="Đăng nhập" />
                    <Form />
                    <OtherMethods />
                </div>
            </div>
        );
    }
}

const FormHeader = (props) => <h2 className={cb('headerTitle')}>{props.title}</h2>;

const Form = (props) => (
    <div>
        <FormInput description="Tên đăng nhập" placeholder="Nhập email hoặc SĐT..." type="text" />
        <FormInput description="Mật khẩu" placeholder="Nhập mật khẩu..." type="password" />
        <FormButton title="Đăng nhập" />
    </div>
);

const FormButton = (props) => (
    <div className={cb('row', 'button')}>
        <PrimaryButton primary={true} to={config.routes.home}>
            <span>{props.title}</span>
        </PrimaryButton>
    </div>
);

const FormInput = (props) => (
    <div className={cb('row')}>
        <label>{props.description}</label>
        <input type={props.type} placeholder={props.placeholder} />
    </div>
);

const OtherMethods = (props) => (
    <div className={cb('alternativeLogin')}>
        <label>Hoặc đăng nhập với:</label>
        <div className={cb('icon-group')}>
            <BsFacebook className={cb('icon')} />
            <BsGoogle className={cb('icon')} />
            <BsTwitter className={cb('icon')} />
            <BsInstagram className={cb('icon')} />
        </div>
    </div>
);

export default Login;
