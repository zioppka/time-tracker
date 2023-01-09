import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { useSelector } from 'react-redux';

const RADIAN = Math.PI / 180;

const COLORS = [
    '#1abc9c',
    '#3498db',
    '#9b59b6',
    '#f1c40f',
    '#e74c3c',
    '#2ecc71',
    '#16a085',
    '#27ae60',
    '#2980b9',
    '#8e44ad',
    '#0088FE',
    '#00C49F',
    '#FFBB28',
    '#FF8042',
    '#228666',
];

const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    name,
    value,
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.3;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
        >
            {`${name} ${(percent * 100).toFixed(0)}% (${value}h)`}
        </text>
    );
};

export function GraphPieChart() {
    const appData = useSelector((state) => state.timeTracker);
    const data = [];
    appData.forEach((item) => {
        if (new Date(item.date).getDate() === new Date().getDate()) {
            data.push({
                name: item.name,
                value: +item.time,
            });
        }
    });
    console.log(appData);
    console.log(data);

    return (
        <PieChart width={550} height={400}>
            <Pie
                data={data}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={200}
                innerRadius={100}
                fill="#8884d8"
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
        </PieChart>
    );
}
