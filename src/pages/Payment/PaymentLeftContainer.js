import classNames from 'classnames/bind';
import React from 'react';
import { MdCheckCircle, MdRadioButtonUnchecked } from 'react-icons/md';
import { Link } from 'react-router-dom';
import EditAddressModal from '~/components/modals/EditAddressModal';
import TransparentButton from '~/components/shared/TransparentButton';
import styles from './PaymentLeftContainer.module.scss';

const cb = classNames.bind(styles);

const customer = {
    name: 'Sam Quoc Anh',
    phone: '0988 999 555',
    address: 'Tổ 4, phường Tân Thịnh, thành phố Thái Nguyên',
};
class LeftContainer extends React.Component {
    render() {
        return (
            <div className={cb('wrapper')}>
                <Address />
                <Package />
            </div>
        );
    }
}
class Address extends React.Component {
    state = {
        isModalActive: false,
    };

    handleCollapseModal = () => {
        this.setState((prevState) => ({
            ...prevState,
            isModalActive: !prevState.isModalActive,
        }));
    };

    render() {
        return (
            <div className={cb('address')}>
                <div className={cb('header')}>
                    <p className={cb('title')}>
                        <span>Địa chỉ giao hàng</span>
                    </p>
                    <TransparentButton onClick={this.handleCollapseModal}>Chỉnh sửa</TransparentButton>
                    <EditAddressModal
                        isModalActive={this.state.isModalActive}
                        handleCollapseModal={this.handleCollapseModal}
                    />
                </div>
                <ul className={cb('body')}>
                    <li>
                        <p className={cb('text')}>{customer.name}</p>
                    </li>
                    <li>
                        <p className={cb('text')}>{customer.phone}</p>
                    </li>
                    <li>
                        <p className={cb('text')}>{customer.address}</p>
                    </li>
                </ul>
                <div className={cb('footer')}></div>
            </div>
        );
    }
}
const Package = (props) => (
    <div className={cb('package')}>
        <p className={cb('title')}>
            <span>Gói hàng 1 của 1</span>
        </p>
        <DeliveryService />
        <CartItemDetail />
        <CartItemDetail />
    </div>
);
class DeliveryService extends React.Component {
    state = {
        deliveryServices: [
            {
                name: 'Giao hàng tiêu chuẩn',
                date: '24 tháng 12',
                price: '7.840 ₫',
                selected: true,
            },
            {
                name: 'Giao hàng tiết kiệm',
                date: '24 tháng 12',
                price: '8.840 ₫',
                selected: false,
            },
            {
                name: 'Giao hàng nhanh',
                date: '24 tháng 12',
                price: '7.840 ₫',
                selected: false,
            },
            {
                name: 'Viettel post',
                date: '24 tháng 12',
                price: '7.840 ₫',
                selected: false,
            },
        ],
    };
    handleSelectDeliveryService = (index) => {
        let temp = this.state.deliveryServices;
        temp.map((item) => (item.selected = false));
        // temp[index].selected = true;
        this.setState((prevState) => ({
            ...prevState,
            deliveryServices: temp,
        }));
    };

    render() {
        return (
            <div className={cb('delivery')}>
                <p className={cb('header')}>
                    <span>Tùy chọn giao hàng</span>
                </p>
                <div className={cb('body')}>
                    {this.state.deliveryServices.map((item, index) => (
                        <DeliveryServiceItem key={index} selected={item.selected} data={item} />
                    ))}
                </div>
            </div>
        );
    }
}
const DeliveryServiceItem = (props) => (
    <div className={cb('delivery-item', props.selected && 'selected')} onClick={props.onClick}>
        <div className={cb('check')}>{props.selected ? <MdCheckCircle /> : <MdRadioButtonUnchecked />}</div>
        <ul>
            <li>
                <span>{props.data.price}</span>
            </li>
            <li>
                <span>Nhận vào: {props.data.date}</span>
            </li>
            <li>
                <span>{props.data.name}</span>
            </li>
        </ul>
    </div>
);
const CartItemDetail = (props) => (
    <div className={cb('cart-item')}>
        <div className={cb('image')}>
            <Link to={''} className={cb('image-link')}>
                <img
                    src="https://lzd-img-global.slatic.net/g/ff/kf/S7f05f592202f4fdeb2dc3bdf474e20f2Y.jpg_2200x2200q80.jpg_.webp"
                    alt=""
                />
            </Link>
        </div>
        <div className={cb('info')}>
            <p className={cb('name')}>
                <span>Quần áo đẹp mùa thu</span>
            </p>
            <p className={cb('description')}>
                <span>No Brand</span>
                <span>Nhóm màu:Trắng Đen</span>
            </p>
            <p className={cb('price')}>
                <span>7.840 ₫</span>
                <span>15.840 ₫</span>
            </p>
        </div>
        <div className={cb('quantity')}>
            <span>Số lượng</span>
            <span>1</span>
        </div>
    </div>
);
export default LeftContainer;
