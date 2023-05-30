import React, { useState } from 'react';

import DropdownContent from './DropdownContent';

const Game = (props) => {
    const returnToSelect = props.returnToSelect;
    const level = props.level;
    const data = props.data;

    const [openDropdown, setOpenDropdown] = useState(false);
    const [dropddownPosition, setDropdownPosition] = useState({
        x: 0,
        y: 0,
    });
    const [fixedCoordinates, setFixedCoordinates] = useState({ x: 0, y: 0 });
    const [originalImageSize, setOriginalImageSize] = useState({
        width: 0,
        height: 0,
    });

    const toggleDropdown = (e) => {
        setOpenDropdown(!openDropdown);
        setDropdownPosition({
            x: e.clientX,
            y: e.clientY,
        });

        const imageRect = e.target.getBoundingClientRect();
        const offsetX =
            (e.clientX - imageRect.left) *
            (originalImageSize.width / imageRect.width);
        const offsetY =
            (e.clientY - imageRect.top) *
            (originalImageSize.height / imageRect.height);
        setFixedCoordinates({ x: offsetX, y: offsetY });
    };

    // Set the original image size when it is loaded or when its size changes
    const handleImageLoad = (e) => {
        const { naturalWidth, naturalHeight } = e.target;
        setOriginalImageSize({ width: naturalWidth, height: naturalHeight });
    };

    const dropdownStyle = {
        left: dropddownPosition.x,
        top: dropddownPosition.y,
        position: 'fixed',
        display: openDropdown ? 'block' : 'none',
    };

    return (
        <div className='main-game'>
            <div className='game-header'>
                <h1>
                    Level {level} - {data[level - 1].name}
                </h1>
            </div>
            <div className='game-board'>
                <img
                    src={data[level - 1].image}
                    alt={data[level - 1].name}
                    className='game-image'
                    onClick={toggleDropdown}
                    onLoad={handleImageLoad}
                />
            </div>
            {openDropdown && (
                <DropdownContent
                    style={dropdownStyle}
                    images={data[level - 1].characters}
                    names={data[level - 1].characterNames}
                    clickCoordinates={fixedCoordinates}
                    coordinates={data[level - 1].coordinates}
                    toggleDropdown={toggleDropdown}
                />
            )}
            <div className='game-btn-container'>
                <button onClick={returnToSelect} className='btn btn-secondary'>
                    Return to Select Level
                </button>
            </div>
        </div>
    );
};

export default Game;
