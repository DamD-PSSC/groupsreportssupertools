import React from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';
import styles from './ListSingleRow.module.scss';

const ListSingleRow = ({ ListName, ListValue }) => (
    <div className={cx(styles.listSingleRowWrapper, 'columns', 'is-vcentered')}>
        <div
            className={cx(
                'column',
                'has-text-centered',
                'is-half',
                'is-size-3',
                'is-paddingless'
            )}
        >
            <p>{ListName}:</p>
        </div>
        <motion.div
            className={cx(
                styles.listDataWrapper,
                'column',
                'has-text-centered',
                'is-half',
                'is-size-3',
                'is-paddingless'
            )}
            whileHover={{
                overflowY: 'scroll',
                maxHeight: 110,
                transition: { duration: 0.8 },
            }}
        >
            {ListValue.map((item, index) => (
                <p key={index}>
                    {item.includes('SMTP:') ? <b>{item}</b> : item}
                </p>
            ))}
        </motion.div>
    </div>
);

export default ListSingleRow;
