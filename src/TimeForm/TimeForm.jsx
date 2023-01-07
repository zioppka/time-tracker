import './TimeForm.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBusiness } from '../Redux/TimeTrackerSlice';

export function TimeForm() {
    const [business, setBusiness] = useState('');
    const [category, setCategory] = useState('');
    const [time, setTime] = useState('');

    const dispatch = useDispatch();

    function newBusiness(e) {
        e.preventDefault();

        dispatch(
            addBusiness({
                name: business,
                category: category,
                time: time,
            })
        );
    }

    return (
        <form className={'time-form'} onSubmit={newBusiness}>
            <div className={'container'}>
                <input
                    type="text"
                    className="time-input"
                    placeholder={'Business'}
                    onChange={(e) => setBusiness(e.target.value)}
                />
                <input
                    type="text"
                    className="time-input"
                    placeholder={'Category'}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <input
                    type="text"
                    className="time-input"
                    placeholder={'How many time did it take'}
                    onChange={(e) => setTime(e.target.value)}
                />
                <button className="time-btn">Send</button>
            </div>
        </form>
    );
}
