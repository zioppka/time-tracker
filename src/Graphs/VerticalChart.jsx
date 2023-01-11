import React from 'react';
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
    {
        name: 'Monday',
        sleep: 8,
        work: 8,
        personal: 3,
    },
    {
        name: 'Thursday',
        sleep: 8,
        work: 8,
        personal: 2,
    },
    {
        name: 'Wednesday',
        sleep: 7,
        work: 8,
        personal: 3,
    },
    {
        name: 'Friday',
        sleep: 8,
        work: 8,
        personal: 4,
    },
    {
        name: 'Saturday',
        sleep: 9,
        work: 0,
        personal: 9,
    },
    {
        name: 'Sunday',
        sleep: 8,
        work: 0,
        personal: 8,
    },
];

const nameDay = ['Sunday', 'Monday', 'Thursday', 'Wednesday', 'Friday', 'Saturday'];

export function VerticalChart() {
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
