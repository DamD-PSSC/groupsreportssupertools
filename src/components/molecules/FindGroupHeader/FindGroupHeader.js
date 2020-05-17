import React from 'react';
import cx from 'classnames';
import styles from './FindGroupHeader.module.scss';
import InputField from '../../atoms/InputField/InputField';
import IconButton from '../../atoms/IconButton/IconButton';

const FindGroupHeader = () => (
    <div
        className={cx(
            styles.findGroupHeaderWrapper,
            'container',
            'has-text-centered'
        )}
    >
        <h1
            className={cx(
                styles.findGroupHeaderTitle,
                'title is-1',
                'has-text-white'
            )}
        >
            One Tool, all informations.
        </h1>
        <InputField placeholder="What group are your looking for..." />
        <IconButton iconText="Find" iconType="faTools" />
    </div>
);

export default FindGroupHeader;
