import React from 'react';
import cx from 'classnames';
import styles from './NavbarButton.module.scss';

const NavbarButton = ({ buttonText, active }) => (
    <button
        className={
            active
                ? cx(styles.navbarButtonActive, 'button', 'is-outlined')
                : cx(
                      styles.navbarButton,
                      'button',
                      'has-text-white',
                      'is-outlined'
                  )
        }
    >
        {buttonText}
    </button>
);

export default NavbarButton;
