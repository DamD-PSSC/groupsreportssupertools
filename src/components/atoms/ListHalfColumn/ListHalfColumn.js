import React from 'react';
import cx from 'classnames';
import styles from './ListHalfColumn.module.scss';

const ListHalfColumn = ({ ListName, ListValue }) => (
    <div
        className={cx(
            styles.listHalfColumnWrapper,
            'column',
            'is-half',
            'has-text-centered',
            'is-size-3'
        )}
    >
        <p className={cx(styles.listName)}>{ListName}:</p>
        <div className={cx(styles.listDataWrapper)}>
            {ListValue.map((item, index) => (
                <p key={index}>
                    {item.displayName}, {item.userPrincipalName}
                </p>
            ))}
        </div>
    </div>
);

export default ListHalfColumn;
