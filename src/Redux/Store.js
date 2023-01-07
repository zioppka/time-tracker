import { combineReducers, configureStore } from '@reduxjs/toolkit';
import TimeTrackerSlice from './TimeTrackerSlice';

const rootReducer = combineReducers({
    timeTracker: TimeTrackerSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});
