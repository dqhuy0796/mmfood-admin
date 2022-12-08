import classNames from 'classnames/bind';
import React from 'react';
import styles from './Users.module.scss';
import AdminMenu from '~/layouts/AdminMenu/AdminMenu';
import PillSmallButton from '../../../components/shared/PillSmallButton';
import RealtimeClock from '~/components/partial/RealtimeClock';
import { BiUserPlus, BiUpload, BiPrinter, BiSpreadsheet } from 'react-icons/bi';
import { GrDocumentPdf } from 'react-icons/gr';
import { RiDeleteBin5Line } from 'react-icons/ri';

const cb = classNames.bind(styles);

class Users extends React.Component {
    state = {
        menu: [
            {
                id: 1,
                icon: <BiUserPlus />,
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
                icon: <GrDocumentPdf />,
                title: 'Xuất PDF',
            },
            {
                id: 6,
                icon: <RiDeleteBin5Line />,
                title: 'Xóa tất cả',
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
                        <div className={cb('body')}></div>
                        <div className={cb('footer')}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Users;
