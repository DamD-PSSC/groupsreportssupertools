import React, { useContext } from 'react';
import styles from './ErrorNotification.module.scss';
import { GroupsContext } from '../../../contexts/GroupsContext';
import cx from 'classnames';

const ErrorNotification = () => {
    const {
        groups: { error, groupMessage },
        dispatch,
    } = useContext(GroupsContext);
    return (
        <>
            {error ? (
                <div
                    className={cx(
                        styles.errorMessageWrapper,
                        'notification',
                        'is-danger',
                        'has-text-centered'
                    )}
                >
                    <p>{error}</p>
                </div>
            ) : null}
        </>
    );
};

export default ErrorNotification;
