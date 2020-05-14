import React from 'react';
import styles from './LoginButton.module.scss';
import cx from 'classnames';

const LoginButton = () => (
    <div>
        <button
            className={cx(
                styles.loginButton,
                'button',
                'is-size-4',
                'has-text-white'
            )}
        >
            Login
        </button>
    </div>
);

export default LoginButton;
