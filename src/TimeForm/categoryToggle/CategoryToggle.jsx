import React from 'react';
import './CategoryToggle.css';
export function CategoryToggle({ onChange, active }) {
    return (
        <div className={'category-buttons'}>
            <input
                type="button"
                className={
                    active === 'study'
                        ? 'category-toggle category-toggle__active'
                        : 'category-toggle'
                }
                tabIndex={2}
                onClick={() => onChange('study')}
                value={'study'}
            />
            <input
                type="button"
                className={
                    active === 'work'
                        ? 'category-toggle category-toggle__active'
                        : 'category-toggle'
                }
                tabIndex={2}
                onClick={() => onChange('work')}
                value={'work'}
            />
            <input
                type="button"
                className={
                    active === 'personal'
                        ? 'category-toggle category-toggle__active'
                        : 'category-toggle'
                }
                tabIndex={2}
                onClick={() => onChange('personal')}
                value={'personal'}
            />
            <input
                type="button"
                className={
                    active === 'sleep'
                        ? 'category-toggle category-toggle__active'
                        : 'category-toggle'
                }
                tabIndex={2}
                onClick={() => onChange('sleep')}
                value={'sleep'}
            />
        </div>
    );
}
