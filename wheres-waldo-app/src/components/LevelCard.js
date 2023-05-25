const LevelCard = (props) => {
    const { name, author, source, image, index } = props;
    return (
        <div className='level-card'>
            <div className='card-header'>
                <h3>Level {index + 1}</h3>
            </div>
            <div className='card-name'>
                <h4>{name}</h4>
            </div>
            <div className='card-img'>
                <img src={image} alt={name}></img>
            </div>
            <div className='card-chars'></div>
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
        </div>
    );
};

export default LevelCard;
