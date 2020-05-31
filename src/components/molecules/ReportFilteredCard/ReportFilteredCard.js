import React from 'react';
import cx from 'classnames';
import styles from './ReportFilteredCard.module.scss';
import IconButton from '../../atoms/IconButton/IconButton';

const ReportFilteredCard = () => {
    return (
        <div className={cx(styles.reportFilteredCardWrapper, 'card')}>
            <div className={cx(styles.cardHeaderWrapper, 'card-header')}>
                <p className="card-header-title has-text-white is-size-4">
                    Report with groups by "Text" filter
                </p>
            </div>
            <div className="card-content">
                <div className="content">
                    <input
                        className="input is-medium"
                        type="text"
                        placeholder='Input "text" filter...'
                    />
                </div>
            </div>
            <div className={cx(styles.cardFooterWrapper, 'card-footer')}>
                <IconButton iconText="Find" iconType="faSearch" />
            </div>
        </div>
    );
};

export default ReportFilteredCard;
