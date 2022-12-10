import classNames from 'classnames/bind';
import React from 'react';
import Button from '~/components/shared/buttons/Button';
import RowInput from '~/components/partial/RowInput';
import BaseCenterModal from '~/components/modals/BaseCenterModal';
import styles from './UserModal.module.scss';

const cb = classNames.bind(styles);

class UserModal extends React.Component {
    state = {
        content: [
            {
                label: 'Số điện thoại',
                placeholder: '09xx xxx xxx',
                required: true,
                type: 'tel',
            },
            {
                label: 'Email',
                placeholder: 'example@email.com',
                required: true,
                type: 'email',
            },
            {
                label: 'Mật khẩu',
                required: true,
                type: 'password',
            },
            {
                label: 'Xác nhận mật khẩu',
                required: true,
                type: 'password',
            },
            {
                label: 'Họ và tên',
                placeholder: 'Nguyễn Văn A',
                required: true,
            },
            {
                label: 'Avatar',
                type: 'image',
            },
            {
                label: 'Ngày sinh',
                type: 'date',
            },
            {
                label: 'Địa chỉ',
                required: true,
                type: 'address',
            },
        ],
    };
    render() {
        return (
            <BaseCenterModal title={this.props.title} handleCollapseModal={this.props.handleCollapseModal}>
                <form className={cb('container')}>
                    <ul className={cb('body')}>
                        {this.state.content.map((item, index) => (
                            <li key={index}>
                                <RowInput data={item} />
                            </li>
                        ))}
                    </ul>
                    <div className={cb('footer')}>
                        <input id="submit-btn" type={'submit'} hidden />
                        <label htmlFor="submit-btn">
                            <Button size={'large'} shape={'rounded'} color={'primary'}>
                                Xác nhận
                            </Button>
                        </label>
                        <Button size={'large'} shape={'rounded'} color={'white'}>
                            Hủy
                        </Button>
                    </div>
                </form>
            </BaseCenterModal>
        );
    }
}

export default UserModal;
