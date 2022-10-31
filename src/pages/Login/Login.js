import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import React from 'react';
import { BsFacebook, BsGoogle, BsTwitter } from 'react-icons/bs';

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

const FormHeader = (props) => (
    <h2 className={cb('headerTitle')}>{props.title}</h2>
);

const Form = (props) => (
    <div>
        <FormInput
            description="Tên đăng nhập"
            placeholder="Nhập email hoặc SĐT..."
            type="text"
        />
        <FormInput
            description="Mật khẩu"
            placeholder="Nhập mật khẩu..."
            type="password"
        />
        <FormButton title="Đăng nhập" />
    </div>
);

const FormButton = (props) => (
    <div className={cb('row', 'button')}>
        <button>{props.title}</button>
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
        <div className={cb('iconGroup')}>
            <Facebook />
            <Twitter />
            <Google />
        </div>
    </div>
);

const Facebook = (props) => (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" className={cb('brand-icon')}>
        <BsFacebook />
    </a>
);

const Twitter = (props) => (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" className={cb('brand-icon')}>
        <BsTwitter />
    </a>
);

const Google = (props) => (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" className={cb('brand-icon')}>
        <BsGoogle />
    </a>
);

export default Login;
