import _ from 'lodash';
import React from 'react';
import { IoLockClosedSharp, IoSettingsOutline } from 'react-icons/io5';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserModal from '~/components/modals/UserModal';
import DialogMessage from '~/components/partial/DialogMessage/DialogMessage';
import RealtimeClock from '~/components/partial/RealtimeClock';
import IconButton from '~/components/shared/buttons/IconButton';
import { authService } from '~/services';
// redux and actions
import { connect } from 'react-redux';
import { login } from '~/redux/actions/authActions';
//style
import classNames from 'classnames/bind';
import styles from './Account.module.scss';
const cb = classNames.bind(styles);

class Account extends React.Component {
    state = {
        dialog: {
            active: false,
        },
        modal: {
            active: false,
        },
        currentPost: {},
        dataPosts: [],
        menu: [],
    };
    // event handler
    handleActiveModal = (data) => {
        // toggle (open/close) only
        this.setState((prevState) => ({
            ...prevState,
            modal: {
                active: !prevState.modal.active,
            },
        }));
        // map data
        if (data && !_.isEmpty(data)) {
            this.setState((prevState) => ({
                ...prevState,
                modal: {
                    ...prevState.modal,
                    title: 'Sửa thông tin tài khoản',
                    data: data,
                },
            }));
        } else {
            this.setState((prevState) => ({
                ...prevState,
                modal: {
                    ...prevState.modal,
                    title: 'Thêm tài khoản mới',
                    data: {},
                },
            }));
        }
    };
    handleActiveDialog = (data) => {
        // toggle (open/close) only
        this.setState((prevState) => ({
            ...prevState,
            dialog: {
                active: !prevState.dialog.active,
            },
        }));
        // map data
        if (data && !_.isEmpty(data)) {
            this.setState((prevState) => ({
                ...prevState,
                dialog: {
                    ...prevState.dialog,
                    title: 'xác nhận xóa',
                    message: `Bạn có chắc chắn muốn xóa tài khoản ${data.phone} (${data.role})?`,
                    button: [
                        {
                            title: 'Xác nhận',
                            color: 'error',
                            onClick: () => {
                                this.handleActiveDialog();
                                this.handleDeleteUser(data.id);
                            },
                        },
                        {
                            title: 'Hủy',
                            color: 'cancel',
                            onClick: () => {
                                this.handleActiveDialog();
                            },
                        },
                    ],
                },
            }));
        } else {
            this.setState((prevState) => ({
                ...prevState,
                dialog: {
                    ...prevState.dialog,
                    title: 'Hệ thống',
                    message: 'Không khả dụng. Vui lòng quay lại sau.',
                },
            }));
        }
    };
    // process api
    handleUpdateProfile = async (data) => {
        try {
            let response = await authService.updateProfile(data);
            if (response && response.code === 0) {
                this.handleActiveModal();
                // cap nhat redux??
                toast.success('Cập nhật thông tin thành công!');
            }
        } catch (error) {
            console.log(error);
        }
    };
    handleChangePassword = async (data) => {
        try {
            let response = await authService.changePassword(data);
            if (response && response.code === 0) {
                this.handleActiveModal();
                // cap nhat redux??
                toast.success('Cập nhật thông tin thành công!');
            }
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return (
            <div className={cb('wrapper')}>
                <div className={cb('title')}>
                    <h6>Thông tin tài khoản</h6>
                    <span>{<RealtimeClock />}</span>
                </div>
                <div className={cb('content')}>
                    <ul className={cb('header')}>
                        <div className={cb('info')}>
                            <div className={cb('avatar')}>
                                <img src={this.props.user.avatarUrl} alt={this.props.user.name} />
                            </div>
                            <div className={cb('detail')}>
                                <ul>
                                    <li>
                                        <p>{this.props.user.name}</p>
                                    </li>
                                    <li>
                                        <p>{this.props.user.email}</p>
                                    </li>
                                    <li>
                                        <p>{this.props.user.phone}</p>
                                    </li>
                                    <li>
                                        <p>{this.props.user.birth}</p>
                                    </li>
                                    <li>
                                        <p>{this.props.user.address}</p>
                                    </li>
                                </ul>
                                <ul className={cb('action')}>
                                    <li>
                                        <IconButton
                                            size={'tiny'}
                                            color={'blur'}
                                            onClick={() => this.handleActiveModal(this.props.user)}
                                        >
                                            <IoSettingsOutline />
                                        </IconButton>
                                    </li>
                                    <li>
                                        <IconButton size={'tiny'} color={'blur'}>
                                            <IoLockClosedSharp />
                                        </IconButton>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </ul>
                    <div className={cb('body')}>
                        <ul className={cb('list')}>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
                                <li key={index}>
                                    <span></span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={cb('footer')}>
                        {this.state.modal.active && (
                            <UserModal
                                {...this.state.modal}
                                handleCreatePost={this.handleCreatePost}
                                handleUpdatePost={this.handleUpdatePost}
                                handleActiveModal={this.handleActiveModal}
                            />
                        )}

                        {this.state.dialog.active && (
                            <DialogMessage {...this.state.dialog} handleActiveDialog={this.handleActiveDialog} />
                        )}

                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick={false}
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user,
});

const mapActionsToProps = (dispatch) => ({
    login: (user) => dispatch(login(user)),
});

export default connect(mapStateToProps, mapActionsToProps)(Account);
