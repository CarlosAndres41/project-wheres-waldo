const EndGame = (props) => {
    const handlePlayAgain = () => {
        props.setFound([false, false, false]);
        props.setFoundAll(false);
    };

    return (
        <div className={props.foundAll ? 'end-game show' : 'end-game'}>
            <div className='message'>
                <h1>Congratulations, you have won the game</h1>
            </div>
            <div className='end-game-btns'>
                <button className='btn btn-secondary' onClick={handlePlayAgain}>
                    Play Again
                </button>
                <button
                    className='btn btn-secondary'
                    onClick={props.returnToSelect}
                >
                    Select Level
                </button>
            </div>
        </div>
    );
};

export default EndGame;
