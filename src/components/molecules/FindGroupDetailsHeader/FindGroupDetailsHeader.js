import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import cx from 'classnames';
import styles from './FindGroupDetailsHeader.module.scss';
import IconButton from '../../atoms/IconButton/IconButton';
import { GroupsContext } from '../../../contexts/GroupsContext';

const FindGroupDetailsHeader = () => {
    const {
        groups: { group },
        dispatch,
    } = useContext(GroupsContext);

    const history = useHistory();

    return (
        <>
            <div className={cx(styles.iconButtonBackWrapper)}>
                <IconButton
                    iconType="faArrowLeft"
                    iconText="Back"
                    onClick={() => {
                        history.goBack();
                    }}
                />
            </div>

            <div
                className={cx(
                    styles.headerWrapper,
                    'column',
                    'has-text-centered',
                    'is-full',
                    'card-header'
                )}
            >
                <h2 className="has-text-white is-size-2 has-text-weight-bold">
                    {group && group.displayName ? (
                        group.displayName
                    ) : (
                        <p>displayNamePlaceholder</p>
                    )}
                </h2>
            </div>
        </>
    );
};
export default FindGroupDetailsHeader;
