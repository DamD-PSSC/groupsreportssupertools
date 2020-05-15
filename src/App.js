import React from 'react';
import styles from './App.module.scss';
import NavbarButton from './components/atoms/NavbarButton/NavbarButton';

function App() {
    return (
        <div>
            <NavbarButton buttonText="Find a group" />
            <NavbarButton buttonText="Groups reports" active />
        </div>
    );
}

export default App;
