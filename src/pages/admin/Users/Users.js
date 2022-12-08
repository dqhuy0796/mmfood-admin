import classNames from 'classnames/bind';
import React from 'react';
import styles from './Users.module.scss';
import AdminMenu from '~/layouts/AdminMenu/AdminMenu';
import PillSmallButton from '../../../components/shared/PillSmallButton';
import RealtimeClock from '~/components/partial/RealtimeClock';
import { BiPlus, BiUpload, BiPrinter, BiSpreadsheet } from 'react-icons/bi';
import { VscFilePdf } from 'react-icons/vsc';
import { RiDeleteBin5Line } from 'react-icons/ri';

const cb = classNames.bind(styles);

class Users extends React.Component {
    state = {
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
        dataTable: [
            {
                id: 1,
                name: 'Nguyễn Thị Hoài',
                birth: '21/08/2001',
                avatarUrl: '',
                phone: '0989.989.989',
                email: 'example@email.com',
                address: 'Hiệp Hòa - Bắc Giang',
                role: 'admin',
            },
            {
                id: 2,
                name: 'Nguyễn Thị Hâm',
                birth: '21/08/2001',
                avatarUrl: '',
                phone: '0989.989.989',
                email: 'example@email.com',
                address: 'Hiệp Hòa - Bắc Giang',
                role: 'admin',
            },
            {
                id: 3,
                name: 'Nguyễn Thị Hấp',
                birth: '21/08/2001',
                avatarUrl: '',
                phone: '0989.989.989',
                email: 'example@email.com',
                address: 'Hiệp Hòa - Bắc Giang',
                role: 'admin',
            },
        ],
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
                        <div className={cb('header')}>
                            <ul>
                                {this.state.menu.map((item, index) => (
                                    <li key={index}>
                                        <PillSmallButton icon={item.icon}>
                                            <span>{item.title}</span>
                                        </PillSmallButton>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={cb('body')}>
                            <table cellPadding="0" cellSpacing="0" border="0" className={cb('main-table')}>
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
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.dataTable.map((item, index) => (
                                        <DataTableRow key={index} data={item} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className={cb('footer')}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Users;

const DataTableRow = (props) => (
    <tr>
        <td>
            <input type={'checkbox'} />
        </td>
        <td>{props.data.id}</td>
        <td>{props.data.name}</td>
        <td>{props.data.birth}</td>
        <td>{props.data.avatarUrl}</td>
        <td>{props.data.phone}</td>
        <td>{props.data.email}</td>
        <td>{props.data.address}</td>
        <td>{props.data.role}</td>
    </tr>
);
