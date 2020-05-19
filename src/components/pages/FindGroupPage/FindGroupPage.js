import React from 'react';
import cx from 'classnames';
import styles from './FindGroupPage.module.scss';
import FindGroupHeader from '../../molecules/FindGroupHeader/FindGroupHeader';

const FindGroupPage = () => (
    <>
        <div className={cx(styles.contentWrapper)}>
            <div>
                <FindGroupHeader />
            </div>
        </div>
    </>
);

export default FindGroupPage;
