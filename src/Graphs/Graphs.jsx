import './Graphs.css';
import { VerticalChart } from './Charts/VerticalChart';
import { ShapePieChart } from './Charts/ShapePieChart';
import { Editor } from './Editor/Editor';

export function Graphs() {
    function openEditor() {}

    return (
        <div className={'graphs'}>
            <div className={'container'}>
                <h1>Graphs</h1>
                <div className={'PieChart'}>
                    <p className={'chart-info'}>Summary of the day</p>
                    <ShapePieChart />
                    <p className={'chart-info'}>Summary for the week</p>
                    <VerticalChart />
                    <button className={'view-btn'} onClick={openEditor}>
                        View data
                    </button>
                    <Editor />
                </div>
            </div>
        </div>
    );
}
