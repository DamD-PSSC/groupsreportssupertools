import React, { useContext, useEffect } from 'react';
import cx from 'classnames';
import styles from './GroupsReportsPage.module.scss';
import ReportAllCard from '../../molecules/ReportAllCard/ReportAllCard';
import ReportFilteredCard from '../../molecules/ReportFilteredCard/ReportFilteredCard';
import { GroupsContext } from '../../../contexts/GroupsContext';
import { motion } from 'framer-motion';

const GroupsReportsPage = () => {
    const { groups, dispatch } = useContext(GroupsContext);
    useEffect(() => {
        dispatch({ type: 'CLEAR_GROUP_DATA' });
    }, []);
    return (
        <motion.div
            className={cx(styles.contentWrapper, 'section')}
            exit={{ opacity: 0 }}
        >
            <ReportAllCard />
            <ReportFilteredCard />
        </motion.div>
    );
};

export default GroupsReportsPage;
