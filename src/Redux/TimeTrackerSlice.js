import { createSlice } from '@reduxjs/toolkit';

const TimeTrackerSlice = createSlice({
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
                },
            ];
        },
    },
});

export const { addBusiness } = TimeTrackerSlice.actions;
export default TimeTrackerSlice.reducer;
