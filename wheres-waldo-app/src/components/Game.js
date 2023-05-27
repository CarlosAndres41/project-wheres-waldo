import React from 'react';

const Game = (props) => {
    const returnToSelect = props.returnToSelect;
    const level = props.level;
    const data = props.data;

    return (
        <div className='main-game'>
            <div className='game-header'>
                <h1>
                    Level {level} - {data[level - 1].name}
                </h1>
            </div>
            <div className='game-board'>
                <img
                    src={data[level - 1].image}
                    alt={data[level - 1].name}
                    className='game-image'
                />
            </div>
            <button onClick={returnToSelect}>Return to Select Level</button>
        </div>
    );
};

export default Game;
