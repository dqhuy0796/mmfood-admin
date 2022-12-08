import classNames from 'classnames/bind';
import React from 'react';
import { MdClose } from 'react-icons/md';
import RoundButton from '~/components/shared/RoundButton';
import styles from './RightSideModal.module.scss';

const cb = classNames.bind(styles);

class RightSideModal extends React.Component {
    state = {};

    componentDidMount() {
        document.body.style.overflow = 'hidden';
    }

    componentWillUnmount() {
        document.body.style.overflow = 'unset';
    }

    render() {
        return (
            <div className={cb('modal')}>
                <div className={cb('overlay')}></div>
                <div className={cb('wrapper')}>
                    <div className={cb('header')}>
                        <span>{this.props.title}</span>
                        <RoundButton onClick={this.props.handleCollapseModal}>
                            <MdClose />
                        </RoundButton>
                    </div>
                    <div className={cb('body')}>{this.props.children}</div>
                </div>
            </div>
        );
    }
}

export default RightSideModal;
