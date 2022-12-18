import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import faker from 'faker';
import React from 'react';
import { Bar } from 'react-chartjs-2';
//style
import classNames from 'classnames/bind';
import styles from './BarChart.module.scss';
const css = classNames.bind(styles);

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Doanh số bán online',
        },
    },
};

const labels = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Đồ ăn',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Đồ uống',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
            label: 'Combo',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(53, 235, 162, 0.5)',
        },
        {
            label: 'Loại khác',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(162, 53, 235, 0.5)',
        },
    ],
};

function BarChart() {
    return (
        <div className={css('wrapper')}>
            <div className={css('title')}>
                <p>doanh số bán trong tuần</p>
            </div>
            <div className={css('chart')}>
                <Bar options={options} data={data} />
            </div>
        </div>
    );
}

export default BarChart;
