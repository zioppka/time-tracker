import './App.css';
import { Header } from './Header/Header';
import { Advice } from './Advice/Advice';
import { Copyright } from './Copyright/Copyright';
import { TimeForm } from './TimeForm/TimeForm';
import { Graphs } from './Graphs/Graphs';

export default function App() {
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
