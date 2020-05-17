import React from 'react';
import styles from './App.module.scss';
import IconButton from './components/atoms/IconButton/IconButton';

const App = () => {
    return (
        <div>
            <IconButton iconText="Find" iconType="faTools" />
            <IconButton iconText="Export" iconType="faSave" />
            <IconButton iconText="Back" iconType="faArrowLeft" />
        </div>
    );
};

export default App;
