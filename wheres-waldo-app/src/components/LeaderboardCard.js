const LeaderboardCard = (props) => {
    const { name, author, source, image, index, startGame } = props;
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
