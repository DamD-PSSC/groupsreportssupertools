import React from 'react';
import cx from 'classnames';
import styles from './IconButton.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTools,
    faSave,
    faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

const IconButton = ({ iconText, iconType, isLoading, ...props }) => {
    const iconList = { faTools, faSave, faArrowLeft };
    return (
        <>
            <button
                className={cx(styles.iconButton, 'button', 'has-text-white', {
                    'is-loading': isLoading,
                })}
                {...props}
            >
                <span className={cx(styles.iconButtonText)}>{iconText}</span>
                <span className={cx(styles.iconButtonIconWrapper, 'icon')}>
                    <FontAwesomeIcon
                        icon={iconList[iconType]}
                        className={cx(styles.iconButtonIcon)}
                    />
                </span>
            </button>
        </>
    );
};

export default IconButton;
