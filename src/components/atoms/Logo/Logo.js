import React from 'react';
import cx from 'classnames';
import styles from './Logo.module.scss';

const Logo = () => (
    <div className={cx(styles.logoWrapper)}>
        <h1
            className={cx(
                styles.logoTitle,
                'title',
                'has-text-white',
                'has-text-weight-bold'
            )}
        >
            Reports Groups Super Tools
        </h1>
        <h2 className={cx(styles.logoSubtitle, 'subtitle', 'has-text-right')}>
            Powered by Microsoft Graph
        </h2>
    </div>
);

export default Logo;
