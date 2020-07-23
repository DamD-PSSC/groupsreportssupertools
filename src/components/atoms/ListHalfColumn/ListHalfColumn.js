import React from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';
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
        <motion.div
            className={cx(styles.listDataWrapper)}
            whileHover={{
                overflowY: 'scroll',
                height: 130,
                transition: { duration: 0.8 },
            }}
        >
            {ListValue.map((item, index) => (
                <p key={index}>
                    {item.displayName}, {item.userPrincipalName}
                </p>
            ))}
        </motion.div>
    </div>
);

export default ListHalfColumn;
