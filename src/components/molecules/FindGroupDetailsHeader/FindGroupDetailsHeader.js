import React from 'react';
import cx from 'classnames';
import styles from './FindGroupDetailsHeader.module.scss';
import IconButton from '../../atoms/IconButton/IconButton';

const FindGroupDetailsHeader = () => (
    <>
        <div className={cx(styles.iconButtonBackWrapper)}>
            <IconButton iconType="faArrowLeft" iconText="Back" />
        </div>

        <div
            className={cx(
                styles.headerWrapper,
                'column',
                'has-text-centered',
                'is-full'
            )}
        >
            <h2 className="has-text-white is-size-2 has-text-weight-bold">
                "Display Name"
            </h2>
        </div>
    </>
);

export default FindGroupDetailsHeader;
