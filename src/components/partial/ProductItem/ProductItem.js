import React from 'react';
import { Link } from 'react-router-dom';
import { BiEditAlt } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';
import IconButton from '~/components/shared/buttons/IconButton';
// redux and action
import { connect } from 'react-redux';
// style
import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';
const cb = classNames.bind(styles);

const calcDiscount = (newPrice, oldPrice) => Math.round(((newPrice - oldPrice) / oldPrice) * 100);

class ProductItem extends React.Component {
    state = {};

    render() {
        return (
            <Link className={cb('product-item')}>
                {this.props.data.oldPrice > this.props.data.newPrice && (
                    <div className={cb('discount')}>
                        <p>
                            <span>{calcDiscount(this.props.data.newPrice, this.props.data.oldPrice)}</span>
                            <span>%</span>
                        </p>
                    </div>
                )}
                <div className={cb('header')}>
                    <IconButton
                        className={cb('delete')}
                        size={'medium'}
                        shape={'rect'}
                        color={'blur'}
                        onClick={() => this.props.handleActiveDialog(this.props.data)}
                    >
                        <MdDeleteOutline />
                    </IconButton>
                    <IconButton
                        className={cb('edit')}
                        size={'medium'}
                        shape={'rect'}
                        color={'blur'}
                        onClick={() => this.props.handleActiveModal(this.props.data)}
                    >
                        <BiEditAlt />
                    </IconButton>
                    <img src={this.props.data.imageUrl} alt={this.props.data.name} />
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
            </Link>
        );
    }
}

const ItemPrice = (props) => <span>{props.value.toLocaleString('vn-VI', { style: 'currency', currency: 'VND' })}</span>;

const mapStateToProps = (state) => ({
    // cart: state.cart,
});

const mapActionsToProps = (action) => ({
    // itemAdd: (item) => action(cartItemAdd(item)),
});

export default connect(mapStateToProps, mapActionsToProps)(ProductItem);
