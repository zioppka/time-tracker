import { getBusinessToday } from './network';
import { addBusiness } from '../Redux/TimeTrackerSlice';
import { store } from '../Redux/Store';

getBusinessToday().then((result) => {
    result.forEach((item) => {
        store.dispatch(addBusiness(item));
    });
});
