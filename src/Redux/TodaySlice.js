import { createSlice } from '@reduxjs/toolkit';

const TodaySlice = createSlice({
    name: 'TimeTracker',
    initialState: [],
    reducers: {
        addBusiness(state, action) {
            return [
                ...state,
                {
                    name: action.payload.name,
                    category: action.payload.category,
                    time: action.payload.time,
                    date: action.payload.date,
                },
            ];
        },
    },
});

export const { addBusiness } = TodaySlice.actions;
export default TodaySlice.reducer;
