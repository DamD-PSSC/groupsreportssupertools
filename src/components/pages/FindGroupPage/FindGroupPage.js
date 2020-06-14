import React, { useContext, useEffect } from 'react';
import cx from 'classnames';
import styles from './FindGroupPage.module.scss';
import FindGroupHeader from '../../molecules/FindGroupHeader/FindGroupHeader';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import ErrorNotification from '../../atoms/ErrorNotification/ErrorNotification';
import { motion } from 'framer-motion';

const FindGroupPage = () => {
    const {
        auth: { isAuthenticated },
    } = useContext(AuthContext);
    const history = useHistory();

    useEffect(() => {
        if (!isAuthenticated) {
            history.push('/');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <motion.div
                className={cx(styles.contentWrapper)}
                exit={{ opacity: 0 }}
            >
                <div>
                    <FindGroupHeader />
                </div>
                <ErrorNotification />
            </motion.div>
        </>
    );
};

export default FindGroupPage;
