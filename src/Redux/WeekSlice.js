import { createSlice } from '@reduxjs/toolkit';
import { nameDay, weekDays } from '../helpers';
import { getBusinessWeek } from '../network/network';

const WeekSlice = createSlice({
    name: 'TimeTracker',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBusinessWeek.fulfilled, (state, action) => {
            action.payload.forEach((item) => {
                const day = nameDay[new Date(item.date).getDay()];

                weekDays.forEach((dayWeek) => {
                    if (dayWeek.name === day) {
                        if (item.category === 'sleep') {
                            dayWeek.sleep += +item.time;
                        }
                        if (item.category === 'work') {
                            dayWeek.work += +item.time;
                        }
                        if (item.category === 'personal') {
                            dayWeek.personal += +item.time;
                        }
                    }
                });
            });
            return [...state, ...weekDays];
        });
    },
});

export default WeekSlice.reducer;
