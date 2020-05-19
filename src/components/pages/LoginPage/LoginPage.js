import React from 'react';
import cx from 'classnames';
import styles from './LoginPage.module.scss';
import Logo from '../../atoms/Logo/Logo';
import LoginHeader from '../../molecules/LoginHeader/LoginHeader';

const LoginPage = () => (
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

export default LoginPage;
