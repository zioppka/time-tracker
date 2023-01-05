import './App.css';
import { Header } from './Header/Header';
import { Advice } from './Advice/Advice';
import { Copyright } from './Copyright/Copyright';

export default function App() {
    return (
        <div className={'App'}>
            <Header />
            <Advice />
            <Copyright />
        </div>
    );
}
