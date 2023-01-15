import './Graphs.css';
import { VerticalChart } from './Charts/VerticalChart';
import { ShapePieChart } from './Charts/ShapePieChart';
import { Editor } from './Editor/Editor';
import { useState } from 'react';

export function Graphs() {
    const [showEditor, setShowEditor] = useState(false);
    const openEditor = () => {
        setShowEditor(true);
    };

    const closeEditor = () => {
        setShowEditor(false);
    };

    return (
        <div className={'graphs'}>
            <div className={'container'}>
                <h1>Graphs</h1>
                <div className={'PieChart'}>
                    <p className={'chart-info'}>Summary of the day</p>
                    <ShapePieChart />
                    <p className={'chart-info'}>Summary for the week</p>
                    <VerticalChart />
                    <div>
                        <button className="view-btn" onClick={openEditor}>
                            View data
                        </button>
                        <Editor closeEditor={closeEditor} status={showEditor} />
                    </div>
                </div>
            </div>
        </div>
    );
}
