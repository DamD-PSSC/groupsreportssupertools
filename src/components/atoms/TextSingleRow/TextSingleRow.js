import React from 'react';
import cx from 'classnames';
import styles from './TextSingleRow.module.scss';

const TextSingleRow = ({ DataName, DataValue }) => (
    <div className={cx('columns', 'is-vcentered')}>
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
            <p>{DataName}:</p>
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
            <p>{DataValue}</p>
        </div>
    </div>
);

export default TextSingleRow;
