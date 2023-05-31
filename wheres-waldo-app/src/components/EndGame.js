import { doc, updateDoc, arrayUnion } from 'firebase/firestore';

const EndGame = (props) => {
    const handlePlayAgain = () => {
        props.setFound([false, false, false]);
        props.setFoundAll(false);
        props.setTimer(0);
        // props.setUserName('');
        props.setIsRunning(true);
    };

    const handleInputChange = (e) => {
        props.setUserName(e.target.value);
    };

    async function handleSaveScore() {
        const levelRef = doc(props.db, 'Images', props.id);

        await updateDoc(levelRef, {
            scores: arrayUnion({
                name: props.userName,
                time: props.finalTime,
            }),
        });
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
                    <button
                        className='btn btn-secondary save-score'
                        onClick={props.saveScore}
                    >
                        Save Score
                    </button>
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
