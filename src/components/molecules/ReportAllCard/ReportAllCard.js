import React from 'react';
import cx from 'classnames';
import styles from './ReportAllCard.module.scss';
import IconButton from '../../atoms/IconButton/IconButton';
import CheckboxField from '../../atoms/CheckboxField/CheckboxField';

const ReportAllCard = () => {
    return (
        <div className={cx(styles.reportAllCardWrapper, 'card')}>
            <div className={cx(styles.cardHeaderWrapper, 'card-header')}>
                <p className="card-header-title has-text-white is-size-4">
                    Report with all organization groups
                </p>
            </div>
            <div className="card-content">
                <div className="content columns">
                    <div className={cx(styles.columnWrapper, 'column')}>
                        <CheckboxField fieldName="Display Name" />
                        <CheckboxField fieldName="Description" />
                        <CheckboxField fieldName="Members & Owners" />
                        <CheckboxField fieldName="Group type" />
                        <CheckboxField fieldName="Mail" />
                    </div>
                    <div className={cx(styles.columnWrapper, 'column')}>
                        <CheckboxField fieldName="Mail Enabled" />
                        <CheckboxField fieldName="Mail Nickname" />
                        <CheckboxField fieldName="SMTP Addresses" />
                        <CheckboxField fieldName="Provisioning Options" />
                        <CheckboxField fieldName="Visibility" />
                    </div>
                </div>
            </div>
            <div className={cx(styles.cardFooterWrapper, 'card-footer')}>
                <IconButton iconText="Find" iconType="faSearch" />
            </div>
        </div>
    );
};

export default ReportAllCard;
