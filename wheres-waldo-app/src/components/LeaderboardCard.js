import Scoreboard from './Scoreboard';

const LeaderboardCard = (props) => {
    const { name, author, source, image, index, startGame, scores } = props;

    // Sort the scores array based on the "time" property in ascending order
    scores.sort((a, b) => {
        const timeA = a.time.split(':');
        const timeB = b.time.split(':');

        const minutesA = parseInt(timeA[0], 10);
        const secondsA = parseInt(timeA[1], 10);
        const minutesB = parseInt(timeB[0], 10);
        const secondsB = parseInt(timeB[1], 10);

        // Compare minutes first
        if (minutesA !== minutesB) {
            return minutesA - minutesB;
        }

        // If minutes are the same, compare seconds
        return secondsA - secondsB;
    });

    return (
        <div className='level-card'>
            <div className='card-header leaderboard-header'>
                <h2>Level {index + 1}</h2>
                <h4>{name}</h4>
            </div>

            <div className='img-container'>
                <img
                    src={image}
                    alt={name}
                    className='leaderboard-card-img'
                ></img>
            </div>

            <div className='card-footer'>
                <p>
                    <span>Author:</span> {author}
                </p>
                <p>
                    <a href={source} target='_blank' rel='noreferrer'>
                        Source
                    </a>
                </p>
            </div>
            <div className='leaderboard-scores'>
                <h3>Top Scores:</h3>
                {scores.length === 0 && (
                    <p className='no-scores'>No scores yet</p>
                )}
                {scores.length > 0 && <Scoreboard scores={scores} />}
            </div>
            <div className='card-btn'>
                <button
                    onClick={() => startGame(index)}
                    className='btn btn-secondary'
                >
                    Play this level
                </button>
            </div>
        </div>
    );
};

export default LeaderboardCard;
