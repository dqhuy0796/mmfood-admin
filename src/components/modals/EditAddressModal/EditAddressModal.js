import classNames from 'classnames/bind';
import React from 'react';
import { MdCheckCircle, MdClose, MdOutlineRadioButtonUnchecked, MdAddLocation } from 'react-icons/md';
import RoundButton from '~/components/shared/RoundButton';
import PrimaryButton from '~/components/shared/PrimaryButton';
import TransparentButton from '~/components/shared/TransparentButton';
import styles from './EditAddressModal.module.scss';

const cb = classNames.bind(styles);

const customer = {
    name: 'Sam Quoc Anh',
    phone: '0988 999 555',
    address: 'Tổ 4, phường Tân Thịnh, thành phố Thái Nguyên',
};

class EditAddressModal extends React.Component {
    state = {};
    render() {
        return (
            <div className={cb('wrapper', this.props.isModalActive && 'active')}>
                <div className={cb('header')}>
                    <span>Địa chỉ nhận hàng</span>
                    <RoundButton icon={<MdClose />} onClick={this.props.handleCollapseModal} />
                </div>
                <ul className={cb('body')}>
                    <li>
                        <TransparentButton>
                            <MdAddLocation />
                            <span>Thêm địa chỉ mới</span>
                        </TransparentButton>
                    </li>
                    <li>
                        <AddressDetail data={customer} />
                    </li>
                </ul>
                <div className={cb('footer')}></div>
            </div>
        );
    }
}

const AddressDetail = (props) => (
    <div className={cb('address-detail')}>
        <div className={cb('check')}>
            <MdCheckCircle />
        </div>
        <div className={cb('detail')}>
            <ul className={cb('info')}>
                <li>
                    <p className={cb('title')}>{customer.name}</p>
                </li>
                <li>
                    <p className={cb('title')}>{customer.phone}</p>
                </li>
                <li>
                    <p className={cb('title')}>{customer.address}</p>
                </li>
                <li>
                    <p className={cb('title')}>Lựa chọn địa chỉ thường dùng</p>
                    <div className={cb('select-type')}>
                        <TypeAddressCheck isChecked={true} title={'Văn phòng'} />
                        <TypeAddressCheck isChecked={false} title={'Nhà riêng'} />
                    </div>
                </li>
                <li>
                    <p className={cb('title')}>
                        <span>Mã vùng:</span>
                        <span>Thái Nguyên - Tp. Thái Nguyên - P. Tân Thịnh</span>
                    </p>
                </li>
                <li>
                    <div className={cb('default-address')}>
                        <span>Địa chỉ nhận hàng mặc định</span>
                        <span>Địa chỉ thanh toán mặc định</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
);

const TypeAddressCheck = (props) => (
    <div className={cb('type-address', props.isChecked && 'highlight-border')}>
        <span className={cb('check')}>{props.isChecked ? <MdCheckCircle /> : <MdOutlineRadioButtonUnchecked />}</span>
        <span className={cb('content')}>{props.title}</span>
    </div>
);

export default EditAddressModal;
