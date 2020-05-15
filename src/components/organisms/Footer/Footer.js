import React from 'react';
import cx from 'classnames';
import styles from './Footer.module.scss';

const Footer = () => (
    <footer className={cx(styles.footerWrapper, 'has-background-dark')}>
        <div className="content has-text-centered has-text-white">
            <p className="is-size-4">2020 Created by sirarchi.</p>
        </div>
    </footer>
);

export default Footer;
