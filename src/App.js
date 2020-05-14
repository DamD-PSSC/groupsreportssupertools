import React from 'react';
import styles from './App.module.scss';
import LoginButton from './components/atoms/LoginButton/LoginButton';

function App() {
    return (
        <div>
            <h1 className="has-text-success">Hello world</h1>
            <LoginButton />
        </div>
    );
}

export default App;
