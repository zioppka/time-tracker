import React from 'react';
import './Advice.css';

export function Advice() {
    return (
        <div className={'advice'}>
            <div className="container">
                <p className={'advice-title'}>Advice</p>
                <p className={'tip'}>
                    You average less than 8 hours of sleep, make more time for it.
                </p>
                <p className={'tip'}>You usually work more than 8 hours, no need to overwork.</p>
                <p className={'tip'}>You almost never go outside, walk more!</p>
            </div>
        </div>
    );
}
