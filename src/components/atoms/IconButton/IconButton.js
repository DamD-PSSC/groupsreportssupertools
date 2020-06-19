import React from 'react';
import cx from 'classnames';
import styles from './IconButton.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import {
    faTools,
    faSave,
    faArrowLeft,
    faSearch,
    faFileDownload,
    faSync,
} from '@fortawesome/free-solid-svg-icons';

const IconButton = ({ iconText, iconType, isLoading, ...props }) => {
    const iconList = {
        faTools,
        faSave,
        faArrowLeft,
        faSearch,
        faFileDownload,
        faSync,
    };
    return (
        <>
            <motion.button
                className={cx(styles.iconButton, 'button', 'has-text-white', {
                    'is-loading': isLoading,
                })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                {...props}
            >
                <span className={cx(styles.iconButtonText)}>{iconText}</span>
                {isLoading ? null : (
                    <span className={cx(styles.iconButtonIconWrapper, 'icon')}>
                        <FontAwesomeIcon
                            icon={iconList[iconType]}
                            className={cx(styles.iconButtonIcon)}
                        />
                    </span>
                )}
            </motion.button>
        </>
    );
};

export default IconButton;
