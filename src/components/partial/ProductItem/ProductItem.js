import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import RoundedButton from '~/components/shared/RoundedButton';
import styles from './ProductItem.module.scss';

const cb = classNames.bind(styles);

const calcDiscount = (newPrice, oldPrice) => Math.round(((newPrice - oldPrice) / oldPrice) * 100);

class ProductItem extends React.Component {
    state = {};

    render() {
        return (
            <Link className={cb('product-item')}>
                <div className={cb('discount')}>
                    <p>
                        <span>{calcDiscount(this.props.data.newPrice, this.props.data.oldPrice)}</span>
                        <span>%</span>
                    </p>
                </div>
                <div className={cb('header')}>
                    <img src={this.props.data.url} alt={this.props.data.name} />
                </div>
                <div className={cb('body')}>
                    <p className={cb('name')}>
                        <span>{this.props.data.name}</span>
                    </p>
                    <p className={cb('size')}>
                        <span>Kích thước: </span>
                        <span>{this.props.data.size}</span>
                    </p>
                    <p className={cb('price')}>
                        <ItemPrice value={this.props.data.newPrice} />
                        <ItemPrice value={this.props.data.oldPrice} />
                    </p>
                </div>
                <div className={cb('overlay')}>
                    <div>
                        <RoundedButton type="orange">
                            <span>Đặt món</span>
                        </RoundedButton>
                    </div>
                </div>
            </Link>
        );
    }
}

const ItemPrice = (props) => <span>{props.value.toLocaleString('vn-VI', { style: 'currency', currency: 'VND' })}</span>;

export default ProductItem;
