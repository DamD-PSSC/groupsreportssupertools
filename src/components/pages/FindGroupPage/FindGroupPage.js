import React from 'react';
import cx from 'classnames';
import styles from './FindGroupPage.module.scss';
import Navbar from '../../organisms/Navbar/Navbar';
import Footer from '../../organisms/Footer/Footer';
import FindGroupHeader from '../../molecules/FindGroupHeader/FindGroupHeader';

const FindGroupPage = () => (
    <>
        <Navbar />
        <div className={cx(styles.contentWrapper)}>
            <div>
                <FindGroupHeader />
            </div>
        </div>
        <Footer />
    </>
);

export default FindGroupPage;
