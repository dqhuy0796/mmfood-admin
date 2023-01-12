import React from 'react';
import Button from '~/components/shared/buttons/Button';
import OrderProductItem from '../OrderProductItem';
// style
import classNames from 'classnames/bind';
import styles from './OrderItem.module.scss';
const scss = classNames.bind(styles);

class OrderItem extends React.Component {
    render() {
        const data = this.props.data;
        const items = JSON.parse(data.items);
        const orderStates = JSON.parse(data.state);
        const currentState = orderStates[orderStates.length - 1];
        const paymentDetails = JSON.parse(data.paymentDetails);
        const receiverDetails = JSON.parse(data.receiverDetails);
        return (
            <div className={scss('wrapper')}>
                <div className={scss('header')}>
                    <p className={scss('uuid')}>{'#' + data.orderUuid}</p>
                    <Status code={currentState.code} />
                </div>
                <ul className={scss('body')}>
                    <div className={scss('receiver')}>
                        <p className={scss('title')}>Địa chỉ nhận hàng</p>
                        <p className={scss('name')}>{receiverDetails.name}</p>
                        <p className={scss('phone')}>{receiverDetails.phone}</p>
                        <p className={scss('address')}>{receiverDetails.address}</p>
                    </div>
                    <ul className={scss('list')}>
                        {items.length < 3 ? (
                            items.map((item, index) => (
                                <li key={index}>
                                    <OrderProductItem data={item} />
                                </li>
                            ))
                        ) : (
                            <>
                                {items.slice(0, 3).map((item, index) => (
                                    <li key={index}>
                                        <OrderProductItem data={item} />
                                    </li>
                                ))}
                                <li className={scss('hidden-item')}>
                                    <span>Và {items.length - 3} sản phẩm khác</span>
                                </li>
                            </>
                        )}
                    </ul>
                </ul>
                <div className={scss('footer')}>
                    <p>
                        <span>Thành tiền:</span>
                        <ItemPrice value={paymentDetails.totalPayment} />
                    </p>
                    <div className={scss('action')}>
                        {currentState.code === 0 && (
                            <Button
                                size={'tiny'}
                                color={'warning'}
                                onClick={() => this.props.handleConfirmOrder(data.orderUuid)}
                            >
                                Xác nhận
                            </Button>
                        )}
                        {currentState.code === 1 && (
                            <Button
                                size={'tiny'}
                                color={'success'}
                                onClick={() => this.props.handleDeliveryOrder(data.orderUuid)}
                            >
                                Giao hàng
                            </Button>
                        )}
                        {currentState.code < 3 && (
                            <Button
                                size={'tiny'}
                                color={'error'}
                                onClick={() => this.props.handleCancelOrder(data.orderUuid)}
                            >
                                Hủy đơn
                            </Button>
                        )}
                        <Button
                            size={'tiny'}
                            color={'info'}
                            onClick={() => this.props.handleActiveModal(this.props.data)}
                        >
                            Chi tiết
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

const ItemPrice = (props) => <span>{props.value.toLocaleString('vn-VI', { style: 'currency', currency: 'VND' })}</span>;

const Status = (props) => {
    let classNames = ['status'];
    let content = 'Chờ xử lý';
    switch (props.code) {
        case 0:
            classNames = [...classNames, 'grey'];
            content = 'Chờ xử lý';
            break;
        case 1:
            classNames = [...classNames, 'warning'];
            content = 'Đã xác nhận';
            break;
        case 2:
            classNames = [...classNames, 'blue'];
            content = 'Đang giao hàng';
            break;
        case 3:
            classNames = [...classNames, 'green'];
            content = 'Giao hàng thành công';
            break;
        case 4:
            classNames = [...classNames, 'error'];
            content = 'Đã hủy';
            break;
        default:
            break;
    }
    return (
        <p className={scss(classNames)} title="Trạng thái đơn hàng">
            {content}
        </p>
    );
};

export default OrderItem;
