const Scoreboard = (props) => {
    const scores = props.scores;
    return (
        <div className='scoreboard'>
            <div className='scoreboard-header'>
                <h4>Player name:</h4>
                <h4>Time:</h4>
            </div>
            {scores.map((score, index) => (
                <div className='scoreboard-row' key={index}>
                    <p>{score.name}</p>
                    <p>{score.time}</p>
                </div>
            ))}
        </div>
    );
};

export default Scoreboard;
