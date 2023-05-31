const Leaderboard = (props) => {
    return (
        <div className='level-select'>
            <div className='level-select-title'>
                <h2>Leaderboard</h2>
            </div>
            <div className='all-levels'>{props.children}</div>
            <div className='game-btn-container'>
                <button
                    onClick={props.returnToSelect}
                    className='btn btn-secondary'
                >
                    Return to Select Level
                </button>
            </div>
        </div>
    );
};

export default Leaderboard;
