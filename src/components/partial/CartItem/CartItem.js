import classNames from 'classnames/bind';
import React from 'react';
import styles from './CartItem.module.scss';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';

const scss = classNames.bind(styles);

class CartItem extends React.Component {
    state = {
        quantity: 1,
    };
    handleOnClickIncreaseQuantity = () => {
        this.setState((prevState) => ({
            ...prevState,
            quantity: prevState.quantity + 1,
        }));
    };
    handleOnClickDecreaseQuantity = () => {
        this.setState((prevState) => ({
            ...prevState,
            quantity: prevState.quantity <= 1 ? 1 : prevState.quantity - 1,
        }));
    };
    render() {
        return (
            <div className={scss('cart-item')}>
                <div className={scss('image')}>
                    <div className={scss('image-link')}>
                        <img src={this.props.data.url} alt={this.props.data.name} />
                    </div>
                </div>
                <div className={scss('info')}>
                    <p className={scss('name')}>
                        <span>{this.props.data.name}</span>
                    </p>
                    <p className={scss('size')}>
                        <span>Kích thước: </span>
                        <span>{this.props.data.size}</span>
                    </p>
                    <p className={scss('price')}>
                        <ItemPrice value={this.props.data.newPrice} />
                        <ItemPrice value={this.props.data.oldPrice} />
                    </p>
                </div>
                <div className={scss('quantity')}>
                    <span onClick={this.handleOnClickIncreaseQuantity}>
                        <BsChevronUp />
                    </span>
                    <span>{this.state.quantity}</span>
                    <span onClick={this.handleOnClickDecreaseQuantity}>
                        <BsChevronDown />
                    </span>
                </div>
            </div>
        );
    }
}
const ItemPrice = (props) => <span>{props.value.toLocaleString('vn-VI', { style: 'currency', currency: 'VND' })}</span>;

export default CartItem;
