import React from 'react';
import cx from 'classnames';
import styles from './InputField.module.scss';

const InputField = ({ register, ...props }) => {
    return (
        <input
            className={cx(styles.inputField, 'input')}
            type="text"
            ref={register}
            {...props}
        />
    );
};

export default InputField;
