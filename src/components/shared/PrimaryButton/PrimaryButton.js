import React from 'react';
import classNames from 'classnames/bind';
import styles from './PrimaryButton.module.scss';
import { Link } from 'react-router-dom';

const cb = classNames.bind(styles);

class PrimaryButton extends React.Component {
    render() {
        return (
            <button
                className={cb('wrapper', this.props.className)}
                to={this.props.to}
                href={this.props.href}
                onClick={this.props.onClick}
            >
                {this.props.children}
            </button>
        );
    }
}

export default PrimaryButton;
