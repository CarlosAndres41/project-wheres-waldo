import React from 'react';

const Game = (props) => {
    const returnToSelect = props.returnToSelect;

    return (
        <div className='main-game'>
            <h1>Game</h1>
            <button onClick={returnToSelect}>Return to Select Level</button>
        </div>
    );
};

export default Game;
