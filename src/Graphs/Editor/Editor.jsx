import React from 'react';
import './Editor.css';
export function Editor({ closeEditor, status }) {
    return (
        <div className={`editor-wrapper ${status ? 'open' : 'close'}`}>
            <div className={`editor ${status ? 'open' : 'close'}`}>
                <div className={'editor-content'}>
                    <button className={'view-btn-close'} onClick={() => closeEditor()}>
                        Close and save
                    </button>
                </div>
            </div>
        </div>
    );
}
