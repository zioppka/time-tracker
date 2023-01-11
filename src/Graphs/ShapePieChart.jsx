import React, { useCallback, useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { useSelector } from 'react-redux';
import { renderActiveShape } from './RenderActiveShape';

const COLORS = ['#e74c3c', '#00ffce', '#FFBB28', '#beff00', '#3498fe'];

export function ShapePieChart() {
    const appData = useSelector((state) => state.timeTracker);
    const [activeIndex, setActiveIndex] = useState(0);
    const colorMap = new Map();
    const data = [];
    colorMap.set('Пусто', 'white');

    const onPieEnter = useCallback(
        (_, index) => {
            setActiveIndex(index);
        },
        [setActiveIndex]
    );

    appData.forEach((item) => {
        if (new Date(item.date).getDate() === new Date().getDate()) {
            let existing = data.find((d) => d.name === item.name);
            if (existing) {
                existing.value += +item.time;
            } else {
                data.push({
                    name: item.name,
                    value: +item.time,
                    category: item.category,
                });
            }
        }
    });

    data.forEach((item) => {
        if (!colorMap.has(item.category) && item.name !== 'Пусто') {
            colorMap.set(item.category, COLORS[colorMap.size % COLORS.length]);
        }
    });

    let totalTime = 24;
    let usedTime = data.reduce((acc, entry) => acc + entry.value, 0);
    let emptyTime = totalTime - usedTime;

    data.unshift({
        name: 'Пусто',
        value: emptyTime,
        category: 'Пусто',
    });

    return (
        <PieChart width={900} height={560}>
            <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={data}
                innerRadius={135}
                outerRadius={220}
                fill="#8884d8"
                dataKey="value"
                startAngle={-270}
                endAngle={90}
                onMouseEnter={onPieEnter}
            >
                {' '}
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colorMap.get(entry.category)} />
                ))}
            </Pie>
        </PieChart>
    );
}
