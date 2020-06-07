import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import cx from 'classnames';
import styles from './ReportFilteredCard.module.scss';
import IconButton from '../../atoms/IconButton/IconButton';

const ReportFilteredCard = () => {
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

export default ReportFilteredCard;
