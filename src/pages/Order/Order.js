import React from 'react';
import { BiPlus, BiPrinter, BiSpreadsheet, BiUpload } from 'react-icons/bi';
import _ from 'lodash';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { VscFilePdf } from 'react-icons/vsc';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OrderDetailModal from '~/components/modals/OrderDetailModal';
import DialogMessage from '~/components/partial/DialogMessage/DialogMessage';
import Navbar from '~/components/partial/Navbar';
import RealtimeClock from '~/components/partial/RealtimeClock';
import Button from '~/components/shared/buttons/Button';
import OrderItem from '~/components/partial/OrderItem';
import { orderService } from '~/services';
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
        dataOrders: [],
        menu: [],
    };

    componentDidMount() {
        this.handleMapOptionMenu();
        this.handleGetAllOrders();
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
                    // onClick: () => this.handleActiveModal(),
                    onClick: () => this.handleActiveDialog(),
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
    // event handle
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
                    title: 'Sửa thông tin bài viết',
                    data: data,
                },
            }));
        } else {
            this.setState((prevState) => ({
                ...prevState,
                modal: {
                    ...prevState.modal,
                    title: 'Thêm bài viết mới',
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
                    message: `Bạn có chắc chắn muốn xóa bài biết ${data.title} `,
                    button: [
                        {
                            title: 'Xác nhận',
                            color: 'error',
                            onClick: () => {
                                this.handleActiveDialog();
                                this.handleDeletePost(data.id);
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
    handleGetAllOrders = async () => {
        try {
            let response = await orderService.getOrderService();
            if (response && response.code === 0) {
                this.setState((prevState) => ({
                    ...prevState,
                    dataOrders: response.result,
                }));
            }
        } catch (error) {
            console.log(error);
        }
    };
    handleConfirmOrder = async (uuid) => {
        let res = await orderService.confirmOrderService(uuid);
        if (res && res.code === 0) {
            toast.success(`Đã xác nhận đơn hàng #${uuid}`);
            this.handleGetAllOrders();
        }
    };
    handleDeliveryOrder = async (uuid) => {
        let res = await orderService.deliveryOrderService(uuid);
        if (res && res.code === 0) {
            toast.success(`Đang giao đơn hàng #${uuid}`);
            this.handleGetAllOrders();
        }
    };
    handleCancelOrder = async (uuid) => {
        let res = await orderService.cancelOrderService(uuid);
        if (res && res.code === 0) {
            toast.success(`Đã hủy đơn hàng #${uuid}`);
            this.handleGetAllOrders();
        }
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
                        <div className={cb('body')}>
                            <ul className={cb('list')}>
                                {this.state.dataOrders && this.state.dataOrders.length > 0 ? (
                                    this.state.dataOrders.map((item, index) => (
                                        <li key={index} className={cb('order-item')}>
                                            <OrderItem
                                                data={item}
                                                handleActiveModal={this.handleActiveModal}
                                                handleConfirmOrder={this.handleConfirmOrder}
                                                handleDeliveryOrder={this.handleDeliveryOrder}
                                                handleCancelOrder={this.handleCancelOrder}
                                            />
                                        </li>
                                    ))
                                ) : (
                                    <div className={cb('empty')}>
                                        <p>Khong có đơn hàng nào</p>
                                    </div>
                                )}
                            </ul>
                        </div>
                        <div className={cb('footer')}>
                            {this.state.modal.active && (
                                <OrderDetailModal
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
            </div>
        );
    }
}

export default Order;
