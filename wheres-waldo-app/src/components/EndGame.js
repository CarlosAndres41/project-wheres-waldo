import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { useState } from 'react';

const EndGame = (props) => {
    const [showSaveScore, setShowSaveScore] = useState(true);
    const [saveError, setSaveError] = useState(false);

    const handlePlayAgain = () => {
        props.setFound([false, false, false]);
        props.setFoundAll(false);
        props.setTimer(0);
        // props.setUserName('');
        props.setIsRunning(true);
        setShowSaveScore(true);
        setSaveError(false);
    };

    const handleInputChange = (e) => {
        props.setUserName(e.target.value);
    };

    async function handleSaveScore(e) {
        e.preventDefault();
        // console.log(props.id);
        const levelRef = doc(props.database, 'Images', props.id);
        try {
            setShowSaveScore(false);
            await updateDoc(levelRef, {
                scores: arrayUnion({
                    name: props.userName,
                    time: props.finalTime,
                }),
            });
        } catch (error) {
            setSaveError(true);
        }
    }

    return (
        <div className={props.foundAll ? 'end-game show' : 'end-game'}>
            <div className='message'>
                <h1>Congratulations, you have won the game</h1>
                <h2>You found all the characters</h2>
                <h2>Your final time: {props.finalTime}</h2>
            </div>
            <div className='end-game-form'>
                <form>
                    <label htmlFor='name'>Enter your name:</label>
                    <input
                        type='text'
                        id='name'
                        placeholder={props.userName}
                        onChange={handleInputChange}
                    />
                    {showSaveScore && (
                        <button
                            className='btn btn-secondary save-score'
                            onClick={handleSaveScore}
                        >
                            Save Score
                        </button>
                    )}
                    {!showSaveScore && (
                        <h4 className='saved-score'>
                            Your score has been saved!
                        </h4>
                    )}
                    {saveError && (
                        <h4 className='saved-error'>
                            There was an error saving your score. Please try
                            again.
                        </h4>
                    )}
                </form>
            </div>
            <div className='end-game-btns'>
                <button className='btn btn-secondary' onClick={handlePlayAgain}>
                    Play Again
                </button>
                <button
                    className='btn btn-secondary'
                    onClick={props.returnToSelect}
                >
                    Select Level
                </button>
            </div>
        </div>
    );
};

export default EndGame;
