import React, { useContext } from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';
import styles from './ErrorNotification.module.scss';
import { GroupsContext } from '../../../contexts/GroupsContext';

const ErrorNotification = () => {
    const {
        groups: { error },
    } = useContext(GroupsContext);
    return (
        <>
            {error ? (
                <motion.div
                    className={cx(
                        styles.errorMessageWrapper,
                        'notification',
                        'is-danger',
                        'has-text-centered'
                    )}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <p>{error}</p>
                </motion.div>
            ) : null}
        </>
    );
};

export default ErrorNotification;
