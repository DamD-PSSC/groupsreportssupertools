import React, { useContext, useEffect } from 'react';
import cx from 'classnames';
import styles from './FindGroupPage.module.scss';
import FindGroupHeader from '../../molecules/FindGroupHeader/FindGroupHeader';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';

const FindGroupPage = () => {
    const {
        auth: { isAuthenticated },
    } = useContext(AuthContext);
    const history = useHistory();

    useEffect(() => {
        if (!isAuthenticated) {
            history.push('/');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className={cx(styles.contentWrapper)}>
                <div>
                    <FindGroupHeader />
                </div>
            </div>
        </>
    );
};

export default FindGroupPage;
