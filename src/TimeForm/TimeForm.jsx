import './TimeForm.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBusiness } from '../network/network';
import { CategoryToggle } from './categoryToggle/CategoryToggle';

export function TimeForm() {
    const [business, setBusiness] = useState('');
    const [category, setCategory] = useState('');
    const [time, setTime] = useState(0);
    const [warningMessage, setWarningMessage] = useState('');
    const appData = useSelector((state) => state.day);
    const dispatch = useDispatch();

    let totalHoursToday = 0;
    appData.forEach((item) => {
        totalHoursToday += +item.time;
    });

    function newBusiness(e) {
        e.preventDefault();

        if (24 - totalHoursToday === 0) {
            setWarningMessage(`You don't have 24+ h in day`);
            return;
        }
        if (business === '' || time === 0 || category === '') {
            setWarningMessage('Enter fields');
            return;
        }

        const data = {
            name: business,
            category: category,
            time: time,
            date: new Date(),
        };

        dispatch(createBusiness(data));

        setWarningMessage('');
        setBusiness('');
        setCategory('');
        setTime(0);
    }

    return (
        <form className={'time-form'} onSubmit={newBusiness}>
            <div className={'container'}>
                <input
                    type="text"
                    maxLength={20}
                    className="time-input"
                    placeholder={'Business'}
                    tabIndex={1}
                    onChange={(e) => setBusiness(e.target.value)}
                    value={business}
                />
                <CategoryToggle onChange={setCategory} active={category} />
                <div className="time-range-input">
                    <label htmlFor={'sendForm'} className={'send-form'}>
                        How many time did it take
                    </label>
                    <input
                        type={'range'}
                        min={'0'}
                        max={24 - totalHoursToday}
                        step={'0.5'}
                        id={'sendForm'}
                        className={'slider'}
                        tabIndex={3}
                        onChange={(e) => setTime(e.target.value)}
                        value={time}
                    />
                    <div className={'values'}>
                        <div className="range-value range-value-start">{0}</div>
                        <div className="range-value range-value-end">{24 - totalHoursToday}</div>
                    </div>
                </div>
                <div className="range-value range-value-center">{time}</div>

                <p className={'warning'}>{warningMessage}</p>
                <button className="time-btn">Send</button>
            </div>
        </form>
    );
}
