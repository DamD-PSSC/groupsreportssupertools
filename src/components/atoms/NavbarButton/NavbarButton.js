import React from 'react';
import cx from 'classnames';
import styles from './NavbarButton.module.scss';

const NavbarButton = ({ buttonText, active, ...props }) => (
    <button
        className={
            active
                ? cx(styles.navbarButtonActive, 'button')
                : cx(styles.navbarButton, 'button', 'has-text-white')
        }
        {...props}
    >
        {buttonText}
    </button>
);

export default NavbarButton;
