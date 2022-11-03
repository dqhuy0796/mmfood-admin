import React from 'react';
import classNames from 'classnames/bind';
import styles from './RoundButton.module.scss';
import { Link } from 'react-router-dom';

const cb = classNames.bind(styles);

class RoundButton extends React.Component {
    // var Comp = 'button';

    // if (this.props.to) {
    //     btnProps.to = to;
    //     Comp = Link;
    // } else if (this.props.href) {
    //     btnProps.href = href;
    //     Comp = 'a';

    // const btnProps = [
    //     onClick,
    //     ...this.props
    // ]

    render() {
        return (
            <button className={cb('wrapper')} to={this.props.to} href={this.props.href} onClick={this.props.onClick}>
                {this.props.icon}
            </button>
        );
    }
}

export default RoundButton;
