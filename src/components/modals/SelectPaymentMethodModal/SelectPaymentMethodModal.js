import classNames from 'classnames/bind';
import React from 'react';
import { BsChevronRight } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import RoundButton from '~/components/shared/RoundButton';
import styles from './SelectPaymentMethodModal.module.scss';

const cb = classNames.bind(styles);

// Cần tối ưu lại cái này
const allPaymentMethods = {
    suggestion: [
        {
            imageUrl:
                'https://lzd-img-global.slatic.net/g/tps/tfs/TB1Iey_osKfxu4jSZPfXXb3dXXa-96-96.png_2200x2200q80.jpg_.webp',
            title: 'Thẻ tín dụng/Thẻ ghi nợ',
            description: 'Thẻ tín dụng/Thẻ ghi nợ',
            popular: [
                {
                    imageUrl:
                        'https://lzd-img-global.slatic.net/g/tps/tfs/TB1sH7_bxrI8KJjy0FpXXb5hVXa-80-80.png_2200x2200q80.jpg_.webp',
                    title: 'mastercard',
                    description: 'mastercard',
                },
                {
                    imageUrl:
                        'https://lzd-img-global.slatic.net/g/tps/tfs/TB1JmMulOqAXuNjy1XdXXaYcVXa-80-80.png_2200x2200q80.jpg_.webp',
                    title: 'jcb',
                    description: 'JCB',
                },
                {
                    imageUrl:
                        'https://lzd-img-global.slatic.net/g/tps/tfs/TB1RI0cbLDH8KJjy1XcXXcpdXXa-80-80.png_2200x2200q80.jpg_.webp',
                    title: 'visa',
                    description: 'visa',
                },
            ],
        },
    ],
    other_suggestion: [
        {
            imageUrl:
                'https://lzd-img-global.slatic.net/g/tps/tfs/TB17BAYE7L0gK0jSZFAXXcA9pXa-80-80.png_2200x2200q80.jpg_.webp',
            title: 'ZaloPay',
            description: '**** 5555',
        },
    ],
    all: [
        {
            imageUrl:
                'https://lzd-img-global.slatic.net/g/tps/tfs/TB1L1Felmf2gK0jSZFPXXXsopXa-160-160.png_2200x2200q80.jpg_.webp',
            title: 'Ví MoMo',
            description: 'Bạn phải có tài khoản MoMo',
        },
        {
            imageUrl:
                'https://lzd-img-global.slatic.net/g/tps/tfs/O1CN012GqGXB23W2xdKEEa1_!!6000000007262-2-tps-284-200.png_2200x2200q80.jpg_.webp',
            title: 'Thẻ ATM nội địa/Internet Banking',
            description: 'Thanh toán qua Napas',
        },
        {
            imageUrl:
                'https://lzd-img-global.slatic.net/g/tps/tfs/TB1ZP8kM1T2gK0jSZFvXXXnFXXa-96-96.png_2200x2200q80.jpg_.webp',
            title: 'Thanh toán khi nhận hàng',
            description: 'Cash On Delivery',
        },
    ],
    other: [
        {
            imageUrl:
                'https://lzd-img-global.slatic.net/g/tps/tfs/TB154YWJY9YBuNjy0FgXXcxcXXa-562-48.png_2200x2200q80.jpg_.webp',
            title: 'Phương thức thanh toán',
            description: 'All payment method',
        },
    ],
};

class SelectPaymentMethodModal extends React.Component {
    state = {};
    render() {
        return (
            <div className={cb('wrapper', this.props.isModalActive && 'active')}>
                <div className={cb('header')}>
                    <span>Chọn phương thức thanh toán</span>
                    <RoundButton icon={<MdClose />} onClick={this.props.handleCollapseModal} />
                </div>
                <ul className={cb('body')}>
                    <li>
                        <p>Phương thức thanh toán khuyên dùng</p>
                        <PaymentMethodItem data={allPaymentMethods.suggestion[0]} />
                    </li>

                    <li>
                        <p>Phương thức thanh toán khuyên dùng khác</p>
                        <PaymentMethodItem data={allPaymentMethods.other_suggestion[0]} />
                    </li>

                    <li>
                        <p>Tất cả phương thức thanh toán</p>
                        {allPaymentMethods.all.map((item, index) => (
                            <PaymentMethodItem key={index} data={item} />
                        ))}
                    </li>
                </ul>
                <div className={cb('footer')}>
                    <img src={allPaymentMethods.other[0].imageUrl} alt={allPaymentMethods.other[0].title} />
                </div>
            </div>
        );
    }
}

const PaymentMethodItem = (props) => (
    <div className={cb('method')}>
        <div className={cb('image')}>
            <img src={props.data.imageUrl} alt={props.data.title} />
        </div>
        <div className={cb('text')}>
            <p>{props.data.title}</p>
            <p>{props.data.description}</p>
        </div>
        {props.data.popular && (
            <div className={cb('payment-list')}>
                {props.data.popular.map((item, index) => (
                    <img key={index} src={item.imageUrl} alt={item.title} />
                ))}
            </div>
        )}
        <div className={cb('button')}>
            <BsChevronRight />
        </div>
    </div>
);

export default SelectPaymentMethodModal;
