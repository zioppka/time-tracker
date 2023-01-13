import { createSlice } from '@reduxjs/toolkit';
import { createBusiness, getBusinessToday } from '../network/network';

const TodaySlice = createSlice({
    name: 'TimeTracker',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createBusiness.fulfilled, (state, action) => {
                return [
                    ...state,
                    {
                        name: action.payload.name,
                        category: action.payload.category,
                        time: action.payload.time,
                        date: action.payload.date,
                    },
                ];
            })
            .addCase(getBusinessToday.fulfilled, (state, action) => {
                const todayList = [];

                action.payload.forEach((item) => {
                    todayList.push({
                        name: item.name,
                        category: item.category,
                        time: item.time,
                        date: item.date,
                    });
                });

                return [...state, ...todayList];
            });
    },
});

export default TodaySlice.reducer;
