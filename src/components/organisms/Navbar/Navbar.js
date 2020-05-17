import React from 'react';
import styles from './Navbar.module.scss';
import cx from 'classnames';
import Logo from '../../atoms/Logo/Logo';
import NavbarButton from '../../atoms/NavbarButton/NavbarButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
    <nav
        className={cx(styles.navbarWrapper, 'navbar')}
        role="navigation"
        aria-label="main navigation"
    >
        <div className="navbar-brand">
            <Logo />
        </div>
        <div className="navbar-menu">
            <div className="navbar-end">
                <div className="navbar-item">
                    <NavbarButton buttonText="Find a group" />
                    <NavbarButton buttonText="Groups reports" />
                    <FontAwesomeIcon
                        icon={faUser}
                        size="2x"
                        className={cx(styles.userIcon, 'has-text-white')}
                    />
                    <p
                        className={cx(
                            styles.usernameItem,
                            'is-size-4',
                            'has-text-white'
                        )}
                    >
                        UserName
                    </p>
                </div>
            </div>
        </div>
    </nav>
);

export default Navbar;
