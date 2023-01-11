import { getBusinessToday, getBusinessWeek } from './network';
import { addBusiness } from '../Redux/TimeTrackerSlice';
import { store } from '../Redux/Store';

getBusinessToday().then((result) => {
    result.forEach((item) => {
        store.dispatch(addBusiness(item));
    });
});

getBusinessWeek().then((result) => {
    console.log(result);
});
