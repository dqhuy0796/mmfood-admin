import classNames from 'classnames/bind';
import React from 'react';
import Button from '~/components/shared/buttons/Button';
import RowInput from '~/components/partial/RowInput';
import BaseCenterModal from '~/components/modals/BaseCenterModal';
import styles from './ChangePasswordModal.module.scss';
import _ from 'lodash';
const scss = classNames.bind(styles);

class ChangePasswordModal extends React.Component {
    state = {
        content: [
            {
                name: 'password',
                label: 'Mật khẩu',
                required: true,
                type: 'password',
            },
            {
                name: 'newPassword',
                label: 'Mật khẩu',
                required: true,
                pattern: '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}',
                type: 'password',
            },
            {
                name: 'confirmPassword',
                label: 'Mật khẩu',
                required: true,
                pattern: '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}',
                type: 'password',
            },
        ],
        phone: '',
        password: '',
        newPassword: '',
        confirmPassword: '',
        message: '',
    };

    componentDidMount() {
        this.setState((prevState) => ({
            ...prevState,
            phone: this.props.phone,
        }));
    }
    //handle event
    handleOnChangeInput = (event, id) => {
        this.setState((prevState) => ({
            ...prevState,
            [id]: event.target.value,
        }));
    };
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.newPassword === this.state.confirmPassword) {
            this.props.handleChangePassword(this.state.phone, this.state.password, this.state.newPassword);
        }
    };

    render() {
        return (
            <BaseCenterModal title={this.props.title} handleActiveModal={this.props.handleActiveModal}>
                <form className={scss('container')} onSubmit={this.handleSubmit}>
                    {this.state.message && <p className={scss('message')}>{this.state.message}</p>}
                    <ul className={scss('body')}>
                        {this.state.content.map((item, index) => (
                            <li key={index}>
                                <RowInput
                                    option={item}
                                    value={this.state[item.name]}
                                    onChange={(e) => this.handleOnChangeInput(e, item.name)}
                                />
                            </li>
                        ))}
                    </ul>
                    <div className={scss('footer')}>
                        <input id="submit-btn" type={'submit'} hidden />
                        <label htmlFor="submit-btn">
                            <Button size={'large'} color={'primary'}>
                                {_.isEmpty(this.props.data) ? 'Tạo tài khoản' : 'Xác nhận sửa'}
                            </Button>
                        </label>

                        <Button size={'large'} color={'white'} onClick={this.props.handleActiveModal}>
                            Hủy
                        </Button>
                    </div>
                </form>
            </BaseCenterModal>
        );
    }
}

export default ChangePasswordModal;
