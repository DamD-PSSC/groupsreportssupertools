import React, { useState } from 'react';
import cx from 'classnames';
import styles from './InputField.module.scss';

const InputField = ({ placeholder }) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <input
            className={
                inputValue.length
                    ? cx(styles.inputField, 'input', 'is-primary')
                    : cx(styles.inputField, 'input')
            }
            type="text"
            placeholder={placeholder}
            onChange={(event) => {
                setInputValue(event.target.value);
            }}
        />
    );
};

export default InputField;
