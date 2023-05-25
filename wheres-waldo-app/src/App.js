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
    });
});

function App() {
    console.log(data);
    return (
        <div className='App'>
            <Header />
            <SelectLevel>
                {querySnapshot.forEach((doc) => (
                    <LevelCard />
                ))}
            </SelectLevel>
        </div>
    );
}

export default App;
