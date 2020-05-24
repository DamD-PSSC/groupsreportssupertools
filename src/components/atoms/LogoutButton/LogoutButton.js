import React, { useContext } from 'react';
import styles from './LogoutButton.module.scss';
import cx from 'classnames';
import { AuthContext } from '../../../contexts/AuthContext';
import { logout } from '../../../MSAuth';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

// TODO: Add hover effect

const LogoutButton = () => {
    const { auth, dispatch } = useContext(AuthContext);

    const history = useHistory();

    return (
        <div>
            <button
                className={cx(
                    styles.logoutButton,
                    'button',
                    'has-text-white',
                    'is-paddingless'
                )}
                onClick={async () => {
                    try {
                        const user = await logout();
                        dispatch({ type: 'USER_LOGOUT', user });
                        history.push('/');
                    } catch (error) {
                        dispatch({ type: 'SET_AUTH_ERROR', error });
                    }
                }}
            >
                <span className={cx('icon')}>
                    <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
                </span>
            </button>
        </div>
    );
};

export default LogoutButton;
