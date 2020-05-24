import React, { useContext, useEffect } from 'react';
import cx from 'classnames';
import styles from './LoginPage.module.scss';
import LoginHeader from '../../molecules/LoginHeader/LoginHeader';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';

const LoginPage = () => {
    const {
        auth: { isAuthenticated },
    } = useContext(AuthContext);
    const history = useHistory();

    useEffect(() => {
        if (isAuthenticated) {
            history.push('/findgroup');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated]);
    return (
        <>
            <section className="section">
                <div className={cx(styles.loginPageWrapper)}>
                    <div className={cx(styles.loginPageContent, 'container')}>
                        <LoginHeader />
                    </div>
                </div>
            </section>
        </>
    );
};

export default LoginPage;
