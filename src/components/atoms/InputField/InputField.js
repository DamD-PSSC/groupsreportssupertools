import React from 'react';
import cx from 'classnames';
import styles from './InputField.module.scss';

const InputField = ({ field, form, ...props }) => {
    return (
        <input
            className={cx(styles.inputField, 'input')}
            type="text"
            {...field}
            {...props}
        />
    );
};

export default InputField;
