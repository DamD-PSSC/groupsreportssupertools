import React from 'react';
import cx from 'classnames';
import styles from './FindGroupDetailsPage.module.scss';
import FindGroupDetailsHeader from '../../molecules/FindGroupDetailsHeader/FindGroupDetailsHeader';

const FindGroupDetailsPage = () => (
    <>
        <div
            className={cx(
                styles.contentWrapper,
                'columns',
                'is-vcentered',
                'is-relative'
            )}
        >
            <FindGroupDetailsHeader />
        </div>
    </>
);

export default FindGroupDetailsPage;
