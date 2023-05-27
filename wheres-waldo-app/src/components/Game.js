import React from 'react';

const Game = (props) => {
    const returnToSelect = props.returnToSelect;
    const level = props.level;

    return (
        <div className='main-game'>
            <h1>Level {level} </h1>
            <button onClick={returnToSelect}>Return to Select Level</button>
        </div>
    );
};

export default Game;
