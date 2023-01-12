import { getBusinessToday, getBusinessWeek } from './network';
import { addBusiness } from '../Redux/TodaySlice';
import { store } from '../Redux/Store';
import { nameDay } from '../helpers';
import { updateBusiness } from '../Redux/WeekSlice';

getBusinessToday().then((result) => {
    result.forEach((item) => {
        store.dispatch(addBusiness(item));
    });
});

const daysWeek = [
    {
        name: nameDay[1],
        sleep: 0,
        work: 0,
        personal: 0,
    },
    {
        name: nameDay[2],
        sleep: 0,
        work: 0,
        personal: 0,
    },
    {
        name: nameDay[3],
        sleep: 0,
        work: 0,
        personal: 0,
    },
    {
        name: nameDay[4],
        sleep: 0,
        work: 0,
        personal: 0,
    },
    {
        name: nameDay[5],
        sleep: 0,
        work: 0,
        personal: 0,
    },
    {
        name: nameDay[6],
        sleep: 0,
        work: 0,
        personal: 0,
    },
    {
        name: nameDay[0],
        sleep: 0,
        work: 0,
        personal: 0,
    },
];
getBusinessWeek().then((result) => {
    result.forEach((item) => {
        const day = nameDay[new Date(item.date).getDay()];

        daysWeek.forEach((dayWeek) => {
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
    store.dispatch(updateBusiness(daysWeek));
});
