import React, { useEffect, useContext } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import cx from 'classnames';
import { AnimatePresence } from 'framer-motion';
import FindGroupPage from './components/pages/FindGroupPage/FindGroupPage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import FindGroupDetailsPage from './components/pages/FindGroupDetailsPage/FindGroupsDetailsPage';
import GroupsReportsPage from './components/pages/GroupsReportsPage/GroupsReportsPage';
import Navbar from './components/organisms/Navbar/Navbar';
import Footer from './components/organisms/Footer/Footer';
import { getUserProfile } from './MSAuth';
import { AuthContext } from './contexts/AuthContext';
import GroupsContextProvider from './contexts/GroupsContext';
import styles from './App.module.scss';

// TODO: Add delay to render LoginPage.
// TODO: Add global mixins.

const App = () => {
    const location = useLocation();
    // eslint-disable-next-line no-unused-vars
    const { auth, dispatch } = useContext(AuthContext);

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
        <div className={cx(styles.applicationWrapper)}>
            <Navbar />
            <GroupsContextProvider>
                <AnimatePresence exitBeforeEnter initial={false}>
                    <Switch location={location} key={location.key}>
                        <Route exact path="/" component={LoginPage} />
                        <Route
                            exact
                            path="/findgroup"
                            component={FindGroupPage}
                        />
                        <Route
                            exact
                            path="/findgroupdetails"
                            component={FindGroupDetailsPage}
                        />
                        <Route
                            exact
                            path="/groupsreports"
                            component={GroupsReportsPage}
                        />
                    </Switch>
                </AnimatePresence>
            </GroupsContextProvider>
            <Footer />
        </div>
    );
};

export default App;
