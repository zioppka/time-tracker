import './Header.css';

export function Header() {
    const userName = 'Marat';
    return (
        <div className={'container'}>
            <div className={'header'}>
                <h1 className={'title'}>Time tracker</h1>
                <h1 className={'user-name'}>{userName}</h1>
            </div>
        </div>
    );
}
