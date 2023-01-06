import './TimeForm.css';

export function TimeForm() {
    return (
        <form className={'time-form'}>
            <div className={'container'}>
                <input type="text" className="time-input" placeholder={'business'} />
                <input type="text" className="time-input" placeholder={'category'} />
                <input
                    type="text"
                    className="time-input"
                    placeholder={'how many hours did it take'}
                />
                <button className="time-btn">Send</button>
            </div>
        </form>
    );
}
