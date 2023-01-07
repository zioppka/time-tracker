import './Graphs.css';
import { GraphPieChart } from './PieChart';
import { VerticalChart } from './VerticalChart';

export function Graphs() {
    return (
        <div className={'graphs'}>
            <div className={'container'}>
                <h1>Graphs</h1>
                <div className={'PieChart'}>
                    <p>Summary of the day</p>
                    <GraphPieChart />
                    <p>Summary for the week</p>
                    <VerticalChart />
                </div>
            </div>
        </div>
    );
}
