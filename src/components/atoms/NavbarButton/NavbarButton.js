import React from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';
import styles from './NavbarButton.module.scss';

const NavbarButton = ({ buttonText, ...props }) => (
    <motion.button
        className={cx(styles.navbarButton, 'button', 'has-text-white')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        {...props}
    >
        {buttonText}
    </motion.button>
);

export default NavbarButton;
