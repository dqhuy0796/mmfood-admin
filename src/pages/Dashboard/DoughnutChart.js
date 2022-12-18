import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import classNames from 'classnames/bind';
import styles from './DoughnutChart.module.scss';
const css = classNames.bind(styles);

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Đồ ăn', 'Đồ uống', 'Lẩu', 'Loại khác'],
    datasets: [
        {
            label: '# Số lượng sản phẩm bán ra',
            data: [1200, 1900, 300, 500],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
        },
        title: {
            display: true,
            text: 'Doanh số bán online',
        },
    },
};

function DoughnutChart() {
    return (
        <div className={css('wrapper')}>
            <div className={css('content')}>
                <p>nội dung còn trống do không biết ghi gì cả</p>
                <p>nội dung còn trống do không biết ghi gì cả</p>
                <p>nội dung còn trống do không biết ghi gì cả</p>
                <p>nội dung còn trống do không biết ghi gì cả</p>
                <p>nội dung còn trống do không biết ghi gì cả</p>
                <p>nội dung còn trống do không biết ghi gì cả</p>
                <p>nội dung còn trống do không biết ghi gì cả</p>
                <p>nội dung còn trống do không biết ghi gì cả</p>
            </div>
            <div className={css('chart')}>
                <Doughnut options={options} data={data} />
            </div>
        </div>
    );
}
export default DoughnutChart;
