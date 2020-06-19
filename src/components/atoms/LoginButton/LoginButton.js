import React, { useContext } from 'react';
import styles from './LoginButton.module.scss';
import cx from 'classnames';
import { AuthContext } from '../../../contexts/AuthContext';
import { login } from '../../../MSAuth';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

const LoginButton = () => {
    const { auth, dispatch } = useContext(AuthContext);

    const history = useHistory();

    return (
        <div>
            <motion.button
                className={cx(
                    styles.loginButton,
                    'button',
                    'is-size-4',
                    'has-text-white'
                )}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1 }}
                onClick={async () => {
                    try {
                        const user = await login();
                        dispatch({ type: 'USER_LOGIN', user });
                        history.push('/findgroup');
                    } catch (error) {
                        dispatch({ type: 'SET_AUTH_ERROR', error });
                    }
                }}
            >
                Login
            </motion.button>
        </div>
    );
};

export default LoginButton;
