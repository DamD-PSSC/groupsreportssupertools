import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';
import styles from './Navbar.module.scss';
import Logo from '../../atoms/Logo/Logo';
import NavbarButton from '../../atoms/NavbarButton/NavbarButton';
import { AuthContext } from '../../../contexts/AuthContext';
import LogoutButton from '../../atoms/LogoutButton/LogoutButton';

const Navbar = () => {
    const {
        auth: { isAuthenticated, user },
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
                            <NavLink to="/findgroup">
                                <NavbarButton buttonText="Find a group" />
                            </NavLink>
                            <NavLink to="/groupsreports" activeClassName="">
                                <NavbarButton buttonText="Groups reports" />
                            </NavLink>
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
                            <LogoutButton />
                        </div>
                    ) : null}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
