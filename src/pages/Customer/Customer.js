import classNames from 'classnames/bind';
import _ from 'lodash';
import React from 'react';
import { BiEditAlt, BiPlus, BiPrinter, BiSpreadsheet, BiUpload } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { VscFilePdf } from 'react-icons/vsc';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserModal from '~/components/modals/UserModal';
import DialogMessage from '~/components/partial/DialogMessage/DialogMessage';
import PageTitle from '~/components/partial/PageTitle/PageTitle';
import Button from '~/components/shared/buttons/Button';
import { customerService } from '~/services';
import styles from './Customer.module.scss';
const cb = classNames.bind(styles);

class Customer extends React.Component {
    state = {
        dialog: {
            active: false,
        },
        modal: {
            active: false,
        },
        currentUser: {},
        dataUsers: [],
        menu: [],
    };

    componentDidMount() {
        this.handleGetCustomers();
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
                    onClick: () => this.handleActiveModal(),
                },
                {
                    id: 2,
                    icon: <BiUpload />,
                    title: 'Tải lên từ file',
                    onClick: () => this.handleActiveDialog(),
                },
                {
                    id: 3,
                    icon: <BiPrinter />,
                    title: 'In dữ liệu',
                    onClick: () => this.handleActiveDialog(),
                },
                {
                    id: 4,
                    icon: <BiSpreadsheet />,
                    title: 'Xuất EXCEL',
                    onClick: () => this.handleActiveDialog(),
                },
                {
                    id: 5,
                    icon: <VscFilePdf />,
                    title: 'Xuất PDF',
                    onClick: () => this.handleActiveDialog(),
                },
                {
                    id: 6,
                    icon: <RiDeleteBin5Line />,
                    title: 'Xóa tất cả',
                    onClick: () => this.handleActiveDialog(),
                },
            ],
        }));
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
                                this.handleDeleteCustomer(data.id);
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
    handleGetCustomers = async () => {
        try {
            let response = await customerService.GetCustomers();
            if (response && response.code === 0) {
                this.setState((prevState) => ({
                    ...prevState,
                    dataUsers: response.result,
                }));
            }
        } catch (error) {
            console.log(error);
        }
    };
    handleCreateCustomer = async (data) => {
        try {
            let response = await customerService.CreateCustomer(data);
            if (response && response.code === 0) {
                this.handleActiveModal();
                this.handleGetCustomers();
                toast.success('Tạo mới tài khoản thành công!');
            }
        } catch (error) {
            console.log(error);
        }
    };
    handleDeleteCustomer = async (id) => {
        try {
            let response = await customerService.DeleteCustomer(id);
            if (response && response.code === 0) {
                this.handleGetCustomers();
                toast.success('Xóa tài khoản thành công!');
            }
        } catch (error) {
            console.log(error);
        }
    };
    handleUpdateCustomer = async (data) => {
        try {
            let response = await customerService.UpdateCustomer(data);
            if (response && response.code === 0) {
                this.handleActiveModal();
                this.handleGetCustomers();
                toast.success('Cập nhật thông tin thành công!');
            }
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return (
            <div className={cb('wrapper')}>
                <PageTitle title={'Quản lý tài khoản'} />
                <div className={cb('content')}>
                    <ul className={cb('header')}>
                        {this.state.menu.map((item, index) => (
                            <li key={index}>
                                <Button size={'tiny'} color={'white'} onClick={item.onClick}>
                                    <span>{item.icon}</span>
                                    <span>{item.title}</span>
                                </Button>
                            </li>
                        ))}
                    </ul>
                    <div className={cb('body')}>
                        <DataTable
                            data={this.state.dataUsers}
                            handleActiveModal={this.handleActiveModal}
                            handleActiveDialog={this.handleActiveDialog}
                        />
                    </div>
                    <div className={cb('footer')}>
                        {this.state.modal.active && (
                            <UserModal
                                {...this.state.modal}
                                handleCreate={this.handleCreateCustomer}
                                handleUpdate={this.handleUpdateCustomer}
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

export default Customer;

const DataTable = (props) => (
    <table cellPadding="0" cellSpacing="0" border="0" className={cb('main-table')}>
        <DataTableHead />
        <tbody>
            {props.data.length > 0 ? (
                props.data.map((item, index) => (
                    <DataTableRow
                        key={index}
                        data={item}
                        handleActiveDialog={props.handleActiveDialog}
                        handleActiveModal={props.handleActiveModal}
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
                <button onClick={() => props.handleActiveModal(props.data)}>
                    <BiEditAlt />
                </button>
                <button onClick={() => props.handleActiveDialog(props.data)}>
                    <RiDeleteBin5Line />
                </button>
            </div>
        </td>
    </tr>
);
