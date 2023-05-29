const DropdownContent = (props) => {
    const images = props.images;
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
