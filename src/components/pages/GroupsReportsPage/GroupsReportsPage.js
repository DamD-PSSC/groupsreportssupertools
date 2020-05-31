import React from 'react';
import cx from 'classnames';
import styles from './GroupsReportsPage.module.scss';
import ReportAllCard from '../../molecules/ReportAllCard/ReportAllCard';
import ReportFilteredCard from '../../molecules/ReportFilteredCard/ReportFilteredCard';

const GroupsReportsPage = () => {
    return (
        <div className={cx(styles.contentWrapper, 'section')}>
            <ReportAllCard />
            <ReportFilteredCard />
        </div>
    );
};

export default GroupsReportsPage;
