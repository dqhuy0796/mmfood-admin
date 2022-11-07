import classNames from 'classnames/bind';
import React from 'react';
import { MdClose } from 'react-icons/md';
import RoundButton from '~/components/shared/RoundButton';
import styles from './RightSideModal.module.scss';

const cb = classNames.bind(styles);

class RightSideModal extends React.Component {
    state = {};
    render() {
        return (
            <div className={cb('wrapper', this.props.isModalActive && 'active')}>
                <div className={cb('header')}>
                    <span>{this.props.title}</span>
                    <RoundButton icon={<MdClose />} onClick={this.props.handleCollapseModal} />
                </div>
                <ul className={cb('body')}>{this.props.body}</ul>
                <div className={cb('footer')}>{this.props.footer}</div>
            </div>
        );
    }
}

export default RightSideModal;
