import React from 'react';
import cx from 'classnames';
import styles from './ListSingleRow.module.scss';

const ListSingleRow = ({ ListName, ListValue }) => (
    <div className="columns is-vcentered">
        <div
            className={cx(
                'column',
                'has-text-centered',
                'is-half',
                'has-text-white',
                'is-size-3',
                'is-paddingless'
            )}
        >
            <p>{ListName}</p>
        </div>
        <div
            className={cx(
                'column',
                'has-text-centered',
                'is-half',
                'has-text-white',
                'is-size-3',
                'is-paddingless'
            )}
        >
            {ListValue.map((item) => (
                <p>{item}</p>
            ))}
        </div>
    </div>
);

export default ListSingleRow;
