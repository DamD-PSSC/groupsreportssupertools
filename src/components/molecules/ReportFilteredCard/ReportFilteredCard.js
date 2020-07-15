import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import cx from 'classnames';
import { CSVLink } from 'react-csv';
import styles from './ReportFilteredCard.module.scss';
import IconButton from '../../atoms/IconButton/IconButton';
import { GroupsContext } from '../../../contexts/GroupsContext';
import { getAllGroups } from '../../../GraphService';

const ReportFilteredCard = () => {
    const { register, handleSubmit } = useForm();
    const [loadingProcess, setLoadingProcess] = useState(false);
    const {
        groups: { groupsFilteredByString },
        dispatch,
    } = useContext(GroupsContext);

    const onSubmit = async (data, e) => {
        e.target.reset();
        setLoadingProcess(true);
        try {
            const groupsFilteredFetch = await getAllGroups(
                data.searchString.toLowerCase()
            );
            dispatch({
                type: 'SET_GROUPS_FILTERED_BY_STRING',
                groupsFilteredFetch,
            });
            setLoadingProcess(false);
        } catch (error) {
            dispatch({
                type: 'SET_GROUP_ERROR',
                error,
            });
            setLoadingProcess(false);
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cx(styles.reportFilteredCardWrapper, 'card')}>
                <div className={cx(styles.cardHeaderWrapper, 'card-header')}>
                    <p className="card-header-title has-text-white is-size-4">
                        Report with groups by "Text" filter
                    </p>
                </div>
                <div className="card-content">
                    <div className="content">
                        <input
                            name="searchString"
                            ref={register}
                            required
                            className="input is-medium"
                            type="text"
                            placeholder='Input "text" filter...'
                        />
                    </div>
                </div>
                <div className={cx(styles.cardFooterWrapper, 'card-footer')}>
                    {groupsFilteredByString.length ? (
                        <CSVLink data={groupsFilteredByString}>
                            <IconButton
                                iconText="Load"
                                iconType="faFileDownload"
                                type="button"
                                isLoading={loadingProcess}
                                onClick={() => {
                                    dispatch({
                                        type: 'CLEAR_FILTERED_DATA',
                                    });
                                }}
                            />
                        </CSVLink>
                    ) : (
                        <IconButton
                            iconText="Fetch"
                            iconType="faSync"
                            type="submit"
                            isLoading={loadingProcess}
                        />
                    )}
                </div>
            </div>
        </form>
    );
};

export default ReportFilteredCard;
