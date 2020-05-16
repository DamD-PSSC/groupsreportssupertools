import React from 'react';
import styles from './App.module.scss';
import InputField from './components/atoms/InputField/InputField';

const App = () => {
    return (
        <div>
            <InputField placeholder="What group are you looking for..." />
        </div>
    );
};

export default App;
