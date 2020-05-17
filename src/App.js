import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import cx from 'classnames';
import styles from './App.module.scss';
import FindGroupPage from './components/pages/FindGroupPage/FindGroupPage';
import LoginPage from './components/pages/LoginPage/LoginPage';

const App = () => {
    return (
        <BrowserRouter>
            <div className={cx(styles.applicationWrapper)}>
                <Route exact path="/" component={LoginPage} />
                <Route exact path="/findgroup" component={FindGroupPage} />
            </div>
        </BrowserRouter>
    );
};

export default App;
