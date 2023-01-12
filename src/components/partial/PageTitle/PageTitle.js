import classNames from 'classnames/bind';
import React from 'react';
import styles from './PageTitle.module.scss';
import RealtimeClock from '../RealtimeClock';

const scss = classNames.bind(styles);

class PageTitle extends React.Component {
    render() {
        return (
            <div className={scss('title')}>
                <h6>{this.props.title}</h6>
                <span>{<RealtimeClock />}</span>
            </div>
        );
    }
}

export default PageTitle;
