import { useState } from 'react';

const DropdownContent = (props) => {
    const images = props.images;
    const clickCoordinates = props.clickCoordinates;
    const coordinates = props.coordinates.map((str) =>
        JSON.parse(str.replace(/([{,]\s*)([a-zA-Z0-9_]+)\s*:/g, '$1"$2":'))
    );

    const [isShaking, setIsShaking] = useState;

    const handleShake = () => {
        setIsShaking(true);
        setTimeout(() => {
            setIsShaking(false);
        }, 400);
    };

    const handleClick = (index) => {
        const radius = 50;
        const centerPoint = coordinates[index];
        const clickX = clickCoordinates.x;
        const clickY = clickCoordinates.y;

        const distance = Math.sqrt(
            Math.pow(clickX - centerPoint.x, 2) +
                Math.pow(clickY - centerPoint.y, 2)
        );

        if (distance <= radius) {
            console.log('Whithin radius');
        } else {
            console.log('Outside radius');
        }
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
