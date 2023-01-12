import { createSlice } from '@reduxjs/toolkit';

const WeekSlice = createSlice({
    name: 'TimeTracker',
    initialState: [],
    reducers: {
        updateBusiness(state, action) {
            return action.payload;
        },
    },
});

export const { updateBusiness } = WeekSlice.actions;
export default WeekSlice.reducer;
