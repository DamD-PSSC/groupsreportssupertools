import React from 'react';
import styles from './App.module.scss';
import Logo from './components/atoms/Logo/Logo';

function App() {
    return (
        <div>
            <h1 className="has-text-success">Hello world</h1>
            <Logo />
        </div>
    );
}

export default App;
