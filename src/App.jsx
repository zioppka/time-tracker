import './App.css';
import { Header } from './Header/Header';
import { Advice } from './Advice/Advice';
import { Copyright } from './Copyright/Copyright';
import { TimeForm } from './TimeForm/TimeForm';
import { Graphs } from './Graphs/Graphs';
import { getBusinessToday, getBusinessWeek } from './network/network';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export default function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBusinessToday());
        dispatch(getBusinessWeek());
    }, []);

    return (
        <div className={'App'}>
            <Header />
            <TimeForm />
            <Graphs />
            <Advice />
            <Copyright />
        </div>
    );
}
