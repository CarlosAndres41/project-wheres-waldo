const DropdownContent = (props) => {
    const images = props.images;
    const clickCoordinates = props.clickCoordinates;
    const coordinates = props.coordinates.map((str) =>
        JSON.parse(str.replace(/([{,]\s*)([a-zA-Z0-9_]+)\s*:/g, '$1"$2":'))
    );

    const handleClick = (index) => {
        console.log(
            clickCoordinates.x,
            clickCoordinates.y,
            coordinates[index].x,
            coordinates[index].y
        );
    };

    return (
        <div className='dropdown-content' style={props.style}>
            {images.map((image, index) => (
                <div
                    className='dropdown-item'
                    key={index}
                    onClick={() => handleClick(index)}
                >
                    <span>{props.names[index]}</span>
                    <img
                        src={image}
                        alt={props.names[index]}
                        className='dropdown-img'
                    />
                </div>
            ))}
        </div>
    );
};

export default DropdownContent;
