import React from 'react';
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { useSelector } from 'react-redux';

export function VerticalChart() {
    const data = useSelector((state) => state.week);

    return (
        <ComposedChart
            layout="vertical"
            width={650}
            height={400}
            data={data}
            margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 30,
            }}
        >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis type="number" stroke="#000000" />
            <YAxis dataKey="name" type="category" scale="band" stroke="#000000" />
            <Tooltip />
            <Area dataKey="personal" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="sleep" barSize={20} fill="#413ea0" />
            <Line dataKey="work" stroke="#ff7300" />
        </ComposedChart>
    );
}
