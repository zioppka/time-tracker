import { combineReducers, configureStore } from '@reduxjs/toolkit';
import TodaySlice from './TodaySlice';
import WeekSlice from './WeekSlice';

const rootReducer = combineReducers({
    day: TodaySlice,
    week: WeekSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});
