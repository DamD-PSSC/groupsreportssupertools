import React from 'react';
import cx from 'classnames';
import styles from './TextSingleRow.module.scss';

const TextSingleRow = ({ DataName, DataValue }) => (
    <div className={cx(styles.textSingleRowWrapper, 'columns', 'is-vcentered')}>
        <div
            className={cx(
                'column',
                'has-text-centered',
                'is-half',
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
                'is-size-3',
                'is-paddingless'
            )}
        >
            <p>{DataValue}</p>
        </div>
    </div>
);

export default TextSingleRow;
