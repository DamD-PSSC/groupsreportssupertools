import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import cx from 'classnames';
import { CSVLink } from 'react-csv';
import IconButton from '../../atoms/IconButton/IconButton';
import CheckboxField from '../../atoms/CheckboxField/CheckboxField';
import { GroupsContext } from '../../../contexts/GroupsContext';
import { getGroups } from '../../../GraphService';
import styles from './ReportAllCard.module.scss';

const ReportAllCard = () => {
    const { register, handleSubmit } = useForm();
    const [loadingProcess, setLoadingProcess] = useState(false);
    const {
        groups: { groupsFiltered },
        dispatch,
    } = useContext(GroupsContext);

    const onSubmit = async (data, e) => {
        e.target.reset();
        setLoadingProcess(true);
        data.exportValues.push('id');
        try {
            const groupsFilteredFetch = await getGroups(data.exportValues);
            dispatch({
                type: 'SET_GROUPS_FILTERED',
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
            <div className={cx(styles.reportAllCardWrapper, 'card')}>
                <div className={cx(styles.cardHeaderWrapper, 'card-header')}>
                    <p className="card-header-title has-text-white is-size-4">
                        Report with all organization groups
                    </p>
                </div>
                <div className="card-content">
                    <div className="content columns">
                        <div className={cx(styles.columnWrapper, 'column')}>
                            <CheckboxField
                                fieldName="Display Name"
                                name="exportValues"
                                value="displayName"
                                register={register}
                            />
                            <CheckboxField
                                fieldName="Description"
                                name="exportValues"
                                value="description"
                                register={register}
                            />
                            <CheckboxField
                                fieldName="Members & Owners"
                                name="exportValues"
                                value="members"
                                register={register}
                            />
                            <CheckboxField
                                fieldName="Group type"
                                name="exportValues"
                                value="groupTypes"
                                register={register}
                            />
                            <CheckboxField
                                fieldName="Mail"
                                name="exportValues"
                                value="mail"
                                register={register}
                            />
                        </div>
                        <div className={cx(styles.columnWrapper, 'column')}>
                            <CheckboxField
                                fieldName="Mail Enabled"
                                name="exportValues"
                                value="mailEnabled"
                                register={register}
                            />
                            <CheckboxField
                                fieldName="Mail Nickname"
                                name="exportValues"
                                value="mailNickname"
                                register={register}
                            />
                            <CheckboxField
                                fieldName="SMTP Addresses"
                                name="exportValues"
                                value="proxyAdresses"
                                register={register}
                            />
                            <CheckboxField
                                fieldName="Provisioning Options"
                                name="exportValues"
                                value="resourceProvisioningOptions"
                                register={register}
                            />
                            <CheckboxField
                                fieldName="Visibility"
                                name="exportValues"
                                value="visibility"
                                register={register}
                            />
                        </div>
                    </div>
                </div>
                <div className={cx(styles.cardFooterWrapper, 'card-footer')}>
                    {groupsFiltered.length ? (
                        <CSVLink data={groupsFiltered}>
                            <IconButton
                                iconText="Load"
                                iconType="faFileDownload"
                                type="button"
                                isLoading={loadingProcess}
                                onClick={() => {
                                    dispatch({ type: 'CLEAR_FILTERED_DATA' });
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

export default ReportAllCard;
