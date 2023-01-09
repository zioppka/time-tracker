import './TimeForm.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBusiness } from '../Redux/TimeTrackerSlice';
import { createBusiness } from '../network/network';

export function TimeForm() {
    const [business, setBusiness] = useState('');
    const [category, setCategory] = useState('');
    const [time, setTime] = useState('');
    const [warningMessage, setWarningMessage] = useState('');
    const appData = useSelector((state) => state.timeTracker);
    const dispatch = useDispatch();

    let totalHoursToday = 0;
    appData.forEach((item) => {
        totalHoursToday += +item.time;
    });

    function newBusiness(e) {
        e.preventDefault();

        if (business === '' || time === '' || category === '') {
            setWarningMessage('Enter fields');
            return;
        }
        console.log(totalHoursToday);
        if (totalHoursToday >= 24 || time + totalHoursToday > 24) {
            return alert('Are you a dork? There are only 24 hours in a day!!!');
        }

        const data = {
            name: business,
            category: category,
            time: time,
            date: new Date(),
        };

        dispatch(addBusiness(data));

        createBusiness(data);
        setWarningMessage('');
        setBusiness('');
        setCategory('');
        setTime('');
    }

    return (
        <form className={'time-form'} onSubmit={newBusiness}>
            <div className={'container'}>
                <input
                    type="text"
                    className="time-input"
                    placeholder={'Business'}
                    onChange={(e) => setBusiness(e.target.value)}
                    value={business}
                />
                <input
                    type="text"
                    className="time-input"
                    placeholder={'Category'}
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                />
                <input
                    type="text"
                    className="time-input"
                    placeholder={'How many time did it take'}
                    onChange={(e) => setTime(e.target.value)}
                    value={time}
                />
                <p>{warningMessage}</p>
                <button className="time-btn">Send</button>
            </div>
        </form>
    );
}
