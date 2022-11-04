import React from 'react';
import classNames from 'classnames/bind';
import styles from './PaymentLeftContainer.module.scss';
import TransparentButton from '~/components/shared/TransparentButton';
import EditAddressModal from '~/components/modals/EditAddressModal';

const cb = classNames.bind(styles);

const customer = {
    name: 'Sam Quoc Anh',
    phone: '0988 999 555',
    address: 'Tổ 4, phường Tân Thịnh, thành phố Thái Nguyên',
};
class LeftContainer extends React.Component {
    render() {
        return (
            <div className={cb('left')}>
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
                <div className={cb('address-title')}>
                    <span className={cb('address-title-name')}>Địa chỉ giao hàng</span>
                    <TransparentButton onClick={this.handleCollapseModal}>Chỉnh sửa</TransparentButton>
                    <EditAddressModal
                        isModalActive={this.state.isModalActive}
                        handleCollapseModal={this.handleCollapseModal}
                    />
                </div>
                <div className={cb('address-inner')}>
                    <div className={cb('address-inner-container')}>
                        <span>{customer.name}</span>
                        <span>{customer.phone}</span>
                    </div>
                    <div className={cb('address-inner-info')}>
                        <span>{customer.address}</span>
                    </div>
                </div>
            </div>
        );
    }
}
const Package = (props) => (
    <div className={cb('package')}>
        <div className={cb('package-box')}>
            <div className={cb('left')}>
                <span>Gói hàng 1 của 1</span>
            </div>
            <div className={cb('right')}>
                <span className={cb('active')}>Được xử lý bởi</span>
                <span>Lazada</span>
            </div>
        </div>
        <DeliveryService />
        <CartItem />
    </div>
);
const DeliveryService = (props) => (
    <div className={cb('delivery')}>
        <div className={cb('delivery-title')}>
            <span>Tùy chọn giao hàng</span>
        </div>
        <DeliveryServiceItem />
    </div>
);
const DeliveryServiceItem = (props) => (
    <div className={cb('delivery-items')}>
        <div className={cb('delivery-items-list')}>
            <div className={cb('items-list-top')}>
                <div className={cb('items-price')}>
                    <span>icon</span>
                    <span>7.840 ₫</span>
                </div>
                <div className={cb('items-name')}>Giao hàng tiêu chuẩn </div>
            </div>
            <div className={cb('items-list-bottom')}>
                <span>Nhận vào: 24 thg 12</span>
            </div>
        </div>
    </div>
);

const CartItem = (props) => (
    <div className={cb('cart')}>
        <div className={cb('cart-inner')}>
            <div className={cb('cart-left')}>
                <div className={cb('img')}>
                    <a href="">
                        <img
                            src="https://lzd-img-global.slatic.net/g/ff/kf/S7f05f592202f4fdeb2dc3bdf474e20f2Y.jpg_2200x2200q80.jpg_.webp"
                            alt=""
                        />
                    </a>
                </div>
                <div className={cb('content')}>
                    <a href="">
                        <img
                            src="https://lzd-img-global.slatic.net/g/gcp/lazada/562dc651-73a0-4224-bfd9-1b4baf729c96_ALL-54-18.png_2200x2200q80.jpg_.webp"
                            alt=""
                        />
                        <span>Quần áo đẹp mùa thu</span>
                    </a>
                    <a href="">
                        <span>No Brand, Nhóm màu:Trắng Đen, Size:1 đôi tất nike</span>
                    </a>
                    0
                </div>
            </div>
            <div className={cb('cart-middle')}>
                <p className={cb('current-price')}>7.840 ₫</p>
                <p className={cb('origin-price')}>15.840 ₫</p>
                <p className={cb('promotion-ratio')}>-95%</p>
            </div>
            <div className={cb('cart-right')}>
                <span>Số lượng </span>
                <span>1</span>
            </div>
        </div>
    </div>
);
export default LeftContainer;
