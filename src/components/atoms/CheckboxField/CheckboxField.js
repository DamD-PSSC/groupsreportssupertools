import React from 'react';
import cx from 'classnames';
import styles from './CheckboxField.module.scss';

const CheckboxField = ({ fieldName }) => (
    <label className="checkbox">
        <input className={cx(styles.checkboxField)} type="checkbox" />
        <span className={cx(styles.checkboxFieldText, 'is-size-4')}>
            {fieldName}
        </span>
    </label>
);

export default CheckboxField;
