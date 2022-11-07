import classNames from 'classnames/bind';
import React from 'react';
import { MdClose } from 'react-icons/md';
import CartItem from '~/components/partial/CartItem';
import PrimaryButton from '~/components/shared/PrimaryButton';
import RoundButton from '~/components/shared/RoundButton';
import config from '~/config';
import styles from './CartModal.module.scss';

const cb = classNames.bind(styles);

class CartModal extends React.Component {
    state = {
        cartItems: [
            {
                id: 1003,
                name: 'bánh canh ghẹ (đặc biệt)',
                oldPrice: 85000,
                newPrice: 75000,
                size: 'vừa',
                description: 'ngon vl',
                url: 'https://res.cloudinary.com/dqhuy/image/upload/v1667639893/MMFood/Food/banh-canh-dacbiet_nkjhsy.jpg',
            },
            {
                id: 2004,
                name: "trà sữa trân châu M'M",
                oldPrice: 35000,
                newPrice: 35000,
                size: 'vừa',
                description: 'ngon vắt lưỡi',
                url: 'https://res.cloudinary.com/dqhuy/image/upload/v1667640606/MMFood/Drink/trasua-tranchau_lcaggq.jpg',
            },
        ],
    };
    render() {
        return (
            <div className={cb('wrapper', this.props.isModalActive && 'active')}>
                <div className={cb('header')}>
                    <span>Giỏ hàng</span>
                    <RoundButton icon={<MdClose />} onClick={this.props.handleCollapseModal} />
                </div>
                <ul className={cb('body')}>
                    {this.state.cartItems.map((item, index) => (
                        <li key={index}>
                            <CartItem data={item} />
                        </li>
                    ))}
                </ul>
                <div className={cb('footer')}>
                    <PrimaryButton red={true} to={config.routes.payment}>
                        Thanh toán
                    </PrimaryButton>
                </div>
            </div>
        );
    }
}

export default CartModal;
