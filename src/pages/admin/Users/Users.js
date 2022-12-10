import classNames from 'classnames/bind';
import React from 'react';
import styles from './Users.module.scss';
import AdminMenu from '~/layouts/AdminMenu/AdminMenu';
import Button from '~/components/shared/buttons/Button';
import RealtimeClock from '~/components/partial/RealtimeClock';
import { BiPlus, BiUpload, BiPrinter, BiSpreadsheet, BiEditAlt } from 'react-icons/bi';
import { VscFilePdf } from 'react-icons/vsc';
import { RiDeleteBin5Line } from 'react-icons/ri';
import UserModal from '~/components/modals/UserModal';

import * as service from '~/services';

const cb = classNames.bind(styles);

class Users extends React.Component {
    state = {
        isModalActive: false,
        currentUser: {},
        dataUsers: [],
        menu: [
            {
                id: 1,
                icon: <BiPlus />,
                title: 'Thêm mới',
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
    };

    componentDidMount() {
        // this.handleGetUsers();
    }

    handleGetUsers = async () => {
        let apiData = await service.GetUsers();
        this.setState((prevState) => ({
            ...prevState,
            dataUsers: apiData.users,
        }));
    };

    handleCollapseModal = () => {
        this.setState((prevState) => ({
            ...prevState,
            isModalActive: !prevState.isModalActive,
        }));
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
                                    <Button
                                        size={'tiny'}
                                        shape={'pill'}
                                        color={'white'}
                                        onClick={this.handleCollapseModal}
                                    >
                                        <span>{item.icon}</span>
                                        <span>{item.title}</span>
                                    </Button>
                                </li>
                            ))}
                        </ul>
                        <div className={cb('body')}>
                            <DataTable data={this.state.dataUsers} />
                        </div>
                        <div className={cb('footer')}>
                            {this.state.isModalActive && (
                                <UserModal
                                    title={'Thêm tài khoản mới'}
                                    handleCollapseModal={this.handleCollapseModal}
                                />
                            )}
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
                props.data.map((item, index) => <DataTableRow key={index} data={item} />)
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
        <td className={cb('avatar')}>
            <img src={props.data.avatarUrl} alt={props.data.name} />
        </td>
        <td>{props.data.phone}</td>
        <td>{props.data.email}</td>
        <td>{props.data.address}</td>
        <td>{props.data.role}</td>
        <td>
            <div className={cb('action')}>
                <button>
                    <BiEditAlt />
                </button>
                <button>
                    <RiDeleteBin5Line />
                </button>
            </div>
        </td>
    </tr>
);
