const Leaderboard = ({ children }) => {
    return (
        <div className='level-select'>
            <div className='level-select-title'>
                <h2>Leaderboard</h2>
            </div>
            <div className='all-levels'>{children}</div>
        </div>
    );
};

export default Leaderboard;
