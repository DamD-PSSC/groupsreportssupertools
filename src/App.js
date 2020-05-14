import React from 'react';
import styles from './App.module.scss';
import LoginHeader from './components/molecules/LoginHeader/LoginHeader';

function App() {
    return (
        <div>
            <h1 className="has-text-success">Hello world</h1>
            <LoginHeader />
        </div>
    );
}

export default App;
