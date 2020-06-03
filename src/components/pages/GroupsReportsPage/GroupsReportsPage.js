import React, { useContext, useEffect } from 'react';
import cx from 'classnames';
import styles from './GroupsReportsPage.module.scss';
import ReportAllCard from '../../molecules/ReportAllCard/ReportAllCard';
import ReportFilteredCard from '../../molecules/ReportFilteredCard/ReportFilteredCard';
import { GroupsContext } from '../../../contexts/GroupsContext';

const GroupsReportsPage = () => {
    const { groups, dispatch } = useContext(GroupsContext);
    useEffect(() => {
        dispatch({ type: 'CLEAR_GROUP_DATA' });
    }, []);
    return (
        <div className={cx(styles.contentWrapper, 'section')}>
            <ReportAllCard />
            <ReportFilteredCard />
        </div>
    );
};

export default GroupsReportsPage;
