import classNames from 'classnames/bind';
import React from 'react';
import { BiEditAlt, BiPlus, BiPrinter, BiSpreadsheet, BiUpload } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { VscFilePdf } from 'react-icons/vsc';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserModal from '~/components/modals/UserModal';
import RealtimeClock from '~/components/partial/RealtimeClock';
import Button from '~/components/shared/buttons/Button';
import AdminMenu from '~/layouts/AdminMenu/AdminMenu';
import styles from './Users.module.scss';
import _ from 'lodash';
import * as service from '~/services';

const cb = classNames.bind(styles);

class Users extends React.Component {
    state = {
        isModalActive: false,
        currentUser: {},
        dataUsers: [],
        menu: [],
    };

    componentDidMount() {
        this.handleGetUsers();
        this.handleMapOptionMenu();
    }
    //init
    handleMapOptionMenu = () => {
        this.setState((prevState) => ({
            ...prevState,
            menu: [
                {
                    id: 1,
                    icon: <BiPlus />,
                    title: 'Thêm mới',
                    function: this.handleCollapseModal,
                },
                {
                    id: 2,
                    icon: <BiUpload />,
                    title: 'Tải lên từ file',
                },
                {
                    id: 3,
                    icon: <BiPrinter />,
                    title: 'In dữ liệu',
                },
                {
                    id: 4,
                    icon: <BiSpreadsheet />,
                    title: 'Xuất EXCEL',
                },
                {
                    id: 5,
                    icon: <VscFilePdf />,
                    title: 'Xuất PDF',
                },
                {
                    id: 6,
                    icon: <RiDeleteBin5Line />,
                    title: 'Xóa tất cả',
                },
            ],
        }));
    };
    // event handle
    handleCollapseModal = () => {
        this.setState((prevState) => ({
            ...prevState,
            isModalActive: !prevState.isModalActive,
            currentUser: {},
        }));
    };
    handleCollapseModalWithData = (data) => {
        this.setState((prevState) => ({
            ...prevState,
            isModalActive: !prevState.isModalActive,
            currentUser: data,
        }));
    };
    // process api
    handleGetUsers = async () => {
        try {
            let apiData = await service.GetUsers();
            this.setState((prevState) => ({
                ...prevState,
                dataUsers: apiData.users,
            }));
        } catch (error) {
            console.log(error);
        }
    };
    handleCreateUser = async (data) => {
        try {
            let res = await service.CreateUser(data);
            if (res && res.code === 0) {
                this.handleCollapseModal();
                this.handleGetUsers();
                toast.success('Tạo mới tài khoản thành công!');
            }
        } catch (error) {
            console.log(error);
        }
    };
    handleDeleteUser = async (id) => {
        try {
            let res = await service.DeleteUser(id);
            if (res && res.code === 0) {
                this.handleGetUsers();
                toast.success('Xóa tài khoản thành công!');
            }
        } catch (error) {
            console.log(error);
        }
    };
    handleUpdateUser = async (data) => {
        try {
            let res = await service.UpdateUser(data);
            if (res && res.code === 0) {
                this.handleCollapseModal();
                this.handleGetUsers();
                toast.success('Cập nhật thông tin thành công!');
            }
        } catch (error) {
            console.log(error);
        }
    };
    render() {
        return (
            <div className={cb('wrapper')}>
                <AdminMenu />
                <div className={cb('container')}>
                    <div className={cb('title')}>
                        <h6>Quản lý tài khoản</h6>
                        <span>{<RealtimeClock />}</span>
                    </div>
                    <div className={cb('content')}>
                        <ul className={cb('header')}>
                            {this.state.menu.map((item, index) => (
                                <li key={index}>
                                    <Button size={'tiny'} color={'white'} onClick={item.function}>
                                        <span>{item.icon}</span>
                                        <span>{item.title}</span>
                                    </Button>
                                </li>
                            ))}
                        </ul>
                        <div className={cb('body')}>
                            <DataTable
                                data={this.state.dataUsers}
                                handleDeleteUser={this.handleDeleteUser}
                                handleCollapseModalWithData={this.handleCollapseModalWithData}
                            />
                        </div>
                        <div className={cb('footer')}>
                            {this.state.isModalActive && (
                                <UserModal
                                    title={
                                        _.isEmpty(this.state.currentUser)
                                            ? 'Thêm tài khoản mới'
                                            : 'Sửa thông tin tài khoản'
                                    }
                                    data={this.state.currentUser}
                                    handleCreateUser={this.handleCreateUser}
                                    handleUpdateUser={this.handleUpdateUser}
                                    handleCollapseModal={this.handleCollapseModal}
                                />
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
            </div>
        );
    }
}

export default Users;

const DataTable = (props) => (
    <table cellPadding="0" cellSpacing="0" border="0" className={cb('main-table')}>
        <DataTableHead />
        <tbody>
            {props.data.length > 0 ? (
                props.data.map((item, index) => (
                    <DataTableRow
                        key={index}
                        data={item}
                        handleDeleteUser={props.handleDeleteUser}
                        handleCollapseModalWithData={props.handleCollapseModalWithData}
                    />
                ))
            ) : (
                <tr>
                    <td colSpan={10}>Không có người dùng nào</td>
                </tr>
            )}
        </tbody>
    </table>
);

const DataTableHead = (props) => (
    <thead>
        <tr>
            <th>
                <input type={'checkbox'} />
            </th>
            <th>id</th>
            <th>Họ và tên</th>
            <th>Ngày sinh</th>
            <th>Avatar</th>
            <th>SĐT</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Chức vụ</th>
            <th>Tùy chỉnh</th>
        </tr>
    </thead>
);

const DataTableRow = (props) => (
    <tr className={cb('row')}>
        <td>
            <input type={'checkbox'} />
        </td>
        <td>{props.data.id}</td>
        <td>{props.data.name}</td>
        <td>{props.data.birth}</td>
        <td>
            <div className={cb('avatar')}>
                {props.data.avatarUrl && props.data.avatarUrl.length > 10 ? (
                    <img src={props.data.avatarUrl} alt={props.data.name} />
                ) : (
                    <img
                        src={'https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg'}
                        alt={props.data.name}
                    />
                )}
            </div>
        </td>
        <td>{props.data.phone}</td>
        <td>{props.data.email}</td>
        <td>{props.data.address}</td>
        <td>{props.data.role}</td>
        <td>
            <div className={cb('action')}>
                <button onClick={() => props.handleCollapseModalWithData(props.data)}>
                    <BiEditAlt />
                </button>
                <button onClick={() => props.handleDeleteUser(props.data.id)}>
                    <RiDeleteBin5Line />
                </button>
            </div>
        </td>
    </tr>
);
