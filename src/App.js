import React, { useEffect, useContext } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import cx from 'classnames';
import styles from './App.module.scss';
import FindGroupPage from './components/pages/FindGroupPage/FindGroupPage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import FindGroupDetailsPage from './components/pages/FindGroupDetailsPage/FindGroupsDetailsPage';
import Navbar from './components/organisms/Navbar/Navbar';
import Footer from './components/organisms/Footer/Footer';
import { getUserProfile } from './MSAuth';
import { AuthContext } from './contexts/AuthContext';

// TODO: Add delay to render LoginPage.

const App = () => {
    const {
        auth: { errorMessage },
        dispatch,
    } = useContext(AuthContext);

    useEffect(() => {
        async function fetchDataProfile() {
            try {
                const user = await getUserProfile();
                if (user) {
                    dispatch({ type: 'USER_LOGIN', user });
                }
            } catch (err) {
                console.log(err);
            }
        }
        fetchDataProfile();
    }, []);

    return (
        <BrowserRouter>
            <div className={cx(styles.applicationWrapper)}>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <Route exact path="/findgroup" component={FindGroupPage} />
                    <Route
                        exact
                        path="/findgroupdetails"
                        component={FindGroupDetailsPage}
                    />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
