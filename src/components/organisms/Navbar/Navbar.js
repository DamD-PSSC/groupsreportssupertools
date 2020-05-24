import React, { useContext } from 'react';
import styles from './Navbar.module.scss';
import cx from 'classnames';
import Logo from '../../atoms/Logo/Logo';
import NavbarButton from '../../atoms/NavbarButton/NavbarButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../../contexts/AuthContext';

const Navbar = () => {
    const {
        auth: { isAuthenticated, user },
        dispatch,
    } = useContext(AuthContext);

    return (
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
                    {isAuthenticated ? (
                        <div className="navbar-item">
                            <NavbarButton buttonText="Find a group" />
                            <NavbarButton buttonText="Groups reports" />
                            <FontAwesomeIcon
                                icon={faUser}
                                size="2x"
                                className={cx(
                                    styles.userIcon,
                                    'has-text-white'
                                )}
                            />
                            <p
                                className={cx(
                                    styles.usernameItem,
                                    'is-size-4',
                                    'has-text-white'
                                )}
                            >
                                {user.displayName}
                            </p>
                        </div>
                    ) : null}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
