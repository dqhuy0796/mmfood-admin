import classNames from 'classnames/bind';
import React from 'react';
import RowInput from '~/components/partial/RowInput';
import Button from '~/components/shared/buttons/Button';
import TransparentButton from '~/components/shared/buttons/TransparentButton';
import { authService } from '~/services';
import styles from './Login.module.scss';

const cb = classNames.bind(styles);

class Login extends React.Component {
    state = {
        content: [
            {
                name: 'phone',
                label: 'Số điện thoại',
                required: true,
                type: 'tel',
            },
            {
                name: 'password',
                label: 'Mật khẩu',
                required: true,
                type: 'password',
            },
        ],
        data: {},
        message: '',
    };

    handleOnChangeInput = (event, id) => {
        this.setState((prevState) => ({
            ...prevState,
            data: {
                ...prevState.data,
                [id]: event.target.value,
            },
        }));
    };

    handleLogin = async (data) => {
        let response = await authService.LoginService(data);
        if (response) {
            this.setState((prevState) => ({
                ...prevState,
                message: response.message,
            }));
        }
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.data.phone && this.state.data.password) {
            this.handleLogin(this.state.data);
        }
    };

    render() {
        return (
            <div className={cb('background')}>
                <form className={cb('wrapper')} onSubmit={this.handleSubmit}>
                    <ul className={cb('header')}>
                        <li>
                            <h2>Đăng nhập</h2>
                        </li>
                        <li className={cb('message')}>
                            <p>{this.state.message}</p>
                        </li>
                    </ul>
                    <ul className={cb('body')}>
                        {this.state.content.map((item, index) => (
                            <li key={index}>
                                <RowInput
                                    option={item}
                                    value={this.state.data[item.name]}
                                    onChange={(e) => this.handleOnChangeInput(e, item.name)}
                                />
                            </li>
                        ))}
                        <li>
                            <TransparentButton>Quên mật khẩu?</TransparentButton>
                        </li>
                    </ul>
                    <ul className={cb('footer')}>
                        <li>
                            <label>
                                <input type={'submit'} hidden />
                                <Button size={'large'} shape={'pill'} color={'primary'}>
                                    <span>Đăng nhập</span>
                                </Button>
                            </label>
                        </li>
                    </ul>
                </form>
            </div>
        );
    }
}

export default Login;
