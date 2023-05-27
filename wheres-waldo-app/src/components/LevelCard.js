const LevelCard = (props) => {
    const { name, author, source, image, characters, index, startGame } = props;
    return (
        <div className='level-card'>
            <div className='card-header'>
                <h3>Level {index + 1}</h3>
            </div>
            <div className='card-name'>
                <h4>{name}</h4>
            </div>
            <div>
                <img src={image} alt={name} className='card-img'></img>
            </div>
            <div className='card-chars'>
                {characters.map((char) => (
                    <img
                        src={char}
                        alt='character'
                        className='character-img'
                    ></img>
                ))}
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
                <button onClick={() => startGame()}>Play</button>
            </div>
        </div>
    );
};

export default LevelCard;