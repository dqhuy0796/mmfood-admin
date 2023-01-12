import React from 'react';
import { BsCheckLg } from 'react-icons/bs';
import classNames from 'classnames/bind';
import styles from './Timeline.module.scss';
const css = classNames.bind(styles);

class Timeline extends React.Component {
    state = {};

    render() {
        return (
            <ul className={css('timeline')}>
                {this.props.data.map((item, index) => (
                    <TimeNode key={index} data={item} />
                ))}
            </ul>
        );
    }
}

const TimeNode = (props) => {
    let date = props.data.time.slice(0, 10);
    let time = props.data.time.slice(11, 16);
    return (
        <div className={css('time-node')}>
            <div className={css('icon')}>
                <span>
                    <BsCheckLg />
                </span>
            </div>
            <div className={css('description')}>
                <p className={css('content')}>{props.data.description || 'Không xác định'}</p>
                <p className={css('time')}>
                    <span>{time}</span>
                    <span>{date}</span>
                </p>
            </div>
        </div>
    );
};

export default Timeline;
