const DropdownContent = (props) => {
    const images = props.images;
    return (
        <div className='dropdown-content' style={props.style}>
            {images.map((image, index) => (
                <div className='dropdown-item'>
                    <span>{props.names[index]}</span>
                    <img
                        src={image}
                        alt='item image'
                        className='dropdown-img'
                    />
                </div>
            ))}
        </div>
    );
};

export default DropdownContent;
