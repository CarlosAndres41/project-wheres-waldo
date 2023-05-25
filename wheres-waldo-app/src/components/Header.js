import Icon from '@mdi/react';
import { mdiCursorDefaultClickOutline } from '@mdi/js';

const Header = () => {
    return (
        <header className='app-header'>
            <div className='app-name-logo'>
                <Icon
                    path={mdiCursorDefaultClickOutline}
                    title='App Logo'
                    size={3}
                    // horizontal
                    // vertical
                    // rotate={90}
                    // color='red'
                    // spin
                />
                <h1>Wimmelbilder App</h1>
            </div>
            <div className='header-buttons'>
                <button className='btn btn-primary'>Leaaderboard</button>
            </div>
        </header>
    );
};

export default Header;
