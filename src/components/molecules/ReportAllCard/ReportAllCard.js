import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import cx from 'classnames';
import styles from './ReportAllCard.module.scss';
import IconButton from '../../atoms/IconButton/IconButton';
import CheckboxField from '../../atoms/CheckboxField/CheckboxField';

const ReportAllCard = () => {
    const { register, handleSubmit } = useForm();
    const [loadingProcess, setLoadingProcess] = useState(false);

    const onSubmit = (data, e) => {
        e.target.reset();
        setLoadingProcess(true);
        setTimeout(() => {
            setLoadingProcess(false);
        }, 2000);
        console.log(data);
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
                    <IconButton
                        iconText="Fetch"
                        iconType="faFileDownload"
                        type="submit"
                        isLoading={loadingProcess}
                    />
                </div>
            </div>
        </form>
    );
};

export default ReportAllCard;
