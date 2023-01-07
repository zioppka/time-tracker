import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { useSelector } from 'react-redux';

export function GraphPieChart() {
    const data = [
        { name: 'sleep', value: 8 },
        { name: 'work', value: 8 },
        { name: 'train', value: 3 },
        { name: 'other', value: 2 },
    ];
    const appData = useSelector((state) => state.timeTracker);
    console.log(appData);
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        name,
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
                {`${name} ${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <PieChart width={400} height={400}>
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
