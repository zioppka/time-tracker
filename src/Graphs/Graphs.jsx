import './Graphs.css';
import { VerticalChart } from './VerticalChart';
import { ShapePieChart } from './ShapePieChart';

export function Graphs() {
    return (
        <div className={'graphs'}>
            <div className={'container'}>
                <h1>Graphs</h1>
                <div className={'PieChart'}>
                    <p>Summary of the day</p>
                    <ShapePieChart />
                    <p>Summary for the week</p>
                    <VerticalChart />
                </div>
            </div>
        </div>
    );
}
