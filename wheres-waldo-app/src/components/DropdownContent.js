const DropdownContent = (props) => {
    const images = props.images;
    const clickCoordinates = props.clickCoordinates;
    const coordinates = props.coordinates.map((str) =>
        JSON.parse(str.replace(/([{,]\s*)([a-zA-Z0-9_]+)\s*:/g, '$1"$2":'))
    );

    return (
        <div className='dropdown-content' style={props.style}>
            {images.map((image, index) => (
                <div className='dropdown-item' key={index}>
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
