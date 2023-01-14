import { createAsyncThunk } from '@reduxjs/toolkit';

export const createBusiness = createAsyncThunk('timeTracker/createBusiness', async function (data) {
    try {
        await fetch('http://localhost:3001/tracker', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(data),
        });
        return data;
    } catch (err) {
        console.log(err);
    }
});

export const getBusinessToday = createAsyncThunk('timeTracker/getBusinessToday', async function () {
    try {
        const resp = await fetch('http://localhost:3001/tracker/day');
        return resp.json();
    } catch (err) {
        console.log(err);
    }
});

export const getBusinessWeek = createAsyncThunk('timeTracker/getBusinessWeek', async function () {
    try {
        const resp = await fetch('http://localhost:3001/tracker/week');
        return resp.json();
    } catch (err) {
        console.log(err);
    }
});
