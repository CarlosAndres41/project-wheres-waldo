import React, { useEffect, useState } from 'react';

import DropdownContent from './DropdownContent';
import EndGame from './EndGame';

const Game = (props) => {
    const returnToSelect = props.returnToSelect;
    const level = props.level;
    const data = props.data;
    const database = props.db;

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

    // Game states
    const [found, setFound] = useState([false, false, false]);
    const [foundAll, setFoundAll] = useState(false);

    const [userName, setUserName] = useState('Player');

    // Timer
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    const toggleDropdown = (e) => {
        setOpenDropdown(!openDropdown);

        const { clientX, clientY } = e;
        const dropdownWidth = 300;
        const dropdownHeight = 200;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Calculate the new position of the dropdown
        let left = clientX;
        let top = clientY;

        // Adjust the position to keep the dropdown within the viewport
        if (left + dropdownWidth > viewportWidth) {
            left = viewportWidth - dropdownWidth;
        }

        if (top + dropdownHeight > viewportHeight) {
            top = viewportHeight - dropdownHeight;
        }

        setDropdownPosition({
            x: left,
            y: top,
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

    // useEffect for timer
    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
        }

        if (foundAll) {
            setIsRunning(false);
        }
        return () => clearInterval(interval);
    }, [isRunning, foundAll]);

    // Use effect for foundAll
    // useEffect(() => {
    //     setIsRunning(false);
    // }, [foundAll]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60)
            .toString()
            .padStart(2, '0');
        const seconds = (time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    return (
        <>
            <div className={foundAll ? ' main-game hidden' : 'main-game'}>
                <div className='game-header'>
                    <h1>
                        Level {level} - {data[level - 1].name}
                    </h1>
                    <h2>{formatTime(timer)}</h2>
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
                        openDropdown={openDropdown}
                        setOpenDropdown={setOpenDropdown}
                        found={found}
                        setFound={setFound}
                        foundAll={foundAll}
                        setFoundAll={setFoundAll}
                    />
                )}
                <div className='game-btn-container'>
                    <button
                        onClick={returnToSelect}
                        className='btn btn-secondary'
                    >
                        Return to Select Level
                    </button>
                </div>
            </div>
            {foundAll && (
                <EndGame
                    returnToSelect={returnToSelect}
                    foundAll={foundAll}
                    setFound={setFound}
                    setFoundAll={setFoundAll}
                    finalTime={formatTime(timer)}
                    userName={userName}
                    setUserName={setUserName}
                    setTimer={setTimer}
                    setIsRunning={setIsRunning}
                    database={database}
                    id={data[level - 1].id}
                />
            )}
        </>
    );
};

export default Game;
