import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import Header from './components/Header';
import SelectLevel from './components/SelectLevel';
import LevelCard from './components/LevelCard';
import Game from './components/Game';
import Leaderboard from './components/Leaderboard';
import LeaderboardCard from './components/LeaderboardCard';

import { useState } from 'react';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAcTl4E-lXekv1ioObOu0a5eTk4nL8hJdA',
    authDomain: 'photo-tagging-app-d6d60.firebaseapp.com',
    projectId: 'photo-tagging-app-d6d60',
    storageBucket: 'photo-tagging-app-d6d60.appspot.com',
    messagingSenderId: '685653178500',
    appId: '1:685653178500:web:0dfa694263df42d1066ad1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const querySnapshot = await getDocs(collection(db, 'Images'));

const data = [];
querySnapshot.forEach((doc) => {
    data.push({
        id: doc.id,
        name: doc.data().Name,
        author: doc.data().Author,
        source: doc.data().Source,
        image: doc.data().imageURL,
        characters: doc.data().Characters,
        characterNames: doc.data().CharacterNames,
        coordinates: doc.data().Coordinates,
        scores: doc.data().scores,
    });
});

function App() {
    const [gameStart, setGameStart] = useState(false);
    const [showLevels, setShowLevels] = useState(true);
    const [showLeaderboard, setShowLeaderboard] = useState(false);
    const [level, setLevel] = useState(0);

    const startGame = (index) => {
        setGameStart(true);
        setShowLevels(false);
        setShowLeaderboard(false);
        setLevel(index + 1);
    };

    const returnToSelect = () => {
        setGameStart(false);
        setShowLevels(true);
        setShowLeaderboard(false);
    };

    const displayLeaderboard = () => {
        setShowLeaderboard(true);
        setShowLevels(false);
        setGameStart(false);
    };

    return (
        <div className='App'>
            <Header displayLeaderboard={displayLeaderboard} />
            {showLevels && (
                <SelectLevel>
                    {data.map((item, index) => (
                        <LevelCard
                            key={item.id}
                            name={item.name}
                            author={item.author}
                            source={item.source}
                            image={item.image}
                            characters={item.characters}
                            index={index}
                            startGame={startGame}
                        />
                    ))}
                </SelectLevel>
            )}
            {gameStart && (
                <Game
                    returnToSelect={returnToSelect}
                    level={level}
                    data={data}
                    db={db}
                />
            )}
            {showLeaderboard && (
                <Leaderboard returnToSelect={returnToSelect}>
                    {data.map((item, index) => (
                        <LeaderboardCard
                            key={item.id}
                            name={item.name}
                            author={item.author}
                            source={item.source}
                            image={item.image}
                            scores={item.scores}
                            index={index}
                            startGame={startGame}
                        />
                    ))}
                </Leaderboard>
            )}
        </div>
    );
}

export default App;
