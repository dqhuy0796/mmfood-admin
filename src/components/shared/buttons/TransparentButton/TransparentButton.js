import React from 'react';
import classNames from 'classnames/bind';
import styles from './TransparentButton.module.scss';

const scss = classNames.bind(styles);

class TransparentButton extends React.Component {
    state = {};
    render() {
        return (
            <button className={scss('wrapper')} onClick={this.props.onClick}>
                {this.props.children}
            </button>
        );
    }
}

export default TransparentButton;
