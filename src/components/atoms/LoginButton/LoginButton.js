import React, { useContext } from 'react';
import styles from './LoginButton.module.scss';
import cx from 'classnames';
import { AuthContext } from '../../../contexts/AuthContext';
import { login } from '../../../MSAuth';

const LoginButton = () => {
    const { auth, dispatch } = useContext(AuthContext);

    return (
        <div>
            <button
                className={cx(
                    styles.loginButton,
                    'button',
                    'is-size-4',
                    'has-text-white'
                )}
                onClick={async () => {
                    try {
                        const user = await login();
                        dispatch({ type: 'USER_LOGIN', user });
                    } catch (error) {
                        dispatch({ type: 'SET_AUTH_ERROR', error });
                    }
                }}
            >
                Login
            </button>
        </div>
    );
};

export default LoginButton;
