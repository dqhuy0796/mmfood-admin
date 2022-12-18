import React from 'react';
import { BiPlus, BiPrinter, BiSpreadsheet, BiUpload } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { VscFilePdf } from 'react-icons/vsc';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '~/components/partial/Navbar';
import RealtimeClock from '~/components/partial/RealtimeClock';
import Button from '~/components/shared/buttons/Button';
//style
import classNames from 'classnames/bind';
import styles from './Order.module.scss';

const cb = classNames.bind(styles);

class Order extends React.Component {
    state = {
        dialog: {
            active: false,
        },
        modal: {
            active: false,
        },
        currentOrder: {},
        data: [],
        menu: [],
    };

    componentDidMount() {
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

    render() {
        return (
            <div className={cb('wrapper')}>
                <Navbar />
                <div className={cb('container')}>
                    <div className={cb('title')}>
                        <h6>Quản lý đơn hàng</h6>
                        <span>{<RealtimeClock />}</span>
                    </div>
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
                        <div className={cb('body')}></div>
                        <div className={cb('footer')}>
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

export default Order;
