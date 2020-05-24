import React from 'react';
import cx from 'classnames';
import styles from './ListHalfColumn.module.scss';

const ListHalfColumn = ({ ListName, ListValue }) => (
    <div
        className={cx(
            'column',
            'is-half',
            'has-text-white',
            'has-text-centered',
            'is-size-3'
        )}
    >
        <p>{ListName}</p>
        {ListValue.map((item) => (
            <p>{item}</p>
        ))}
    </div>
);

export default ListHalfColumn;
