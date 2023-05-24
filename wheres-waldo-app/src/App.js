import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

function App() {
    return (
        <div className='App'>
            <header className='App-header'></header>
        </div>
    );
}

export default App;
