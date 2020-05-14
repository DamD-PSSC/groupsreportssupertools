import React from 'react';
import styles from './LoginHeader.module.scss';
import cx from 'classnames';
import LoginButton from '../../atoms/LoginButton/LoginButton';

const LoginHeader = () => (
    <div className="has-text-centered ">
        <h1 className={cx(styles.loginTitle, 'title is-1', 'has-text-white')}>
            Click here to sign in
        </h1>
        <LoginButton />
    </div>
);

export default LoginHeader;
