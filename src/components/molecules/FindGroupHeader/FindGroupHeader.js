import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import cx from 'classnames';
import styles from './FindGroupHeader.module.scss';
import InputField from '../../atoms/InputField/InputField';
import IconButton from '../../atoms/IconButton/IconButton';
import { getGroupDetails } from '../../../GraphService';
import { GroupsContext } from '../../../contexts/GroupsContext';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

// TODO: Add shake animation to Error message

const FindGroupHeader = () => {
    const {
        groups: { error },
        dispatch,
    } = useContext(GroupsContext);
    const { register, handleSubmit } = useForm();
    const [loadingProcess, setLoadingProcess] = useState(false);

    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'CLEAR_GROUP_DATA' });
    }, []);

    const onSubmit = async (data, e) => {
        e.target.reset();
        setLoadingProcess(true);
        let groupData = {};
        try {
            groupData = await getGroupDetails(
                data.groupName.trim().toLowerCase()
            );
            if (groupData.value.length) {
                dispatch({
                    type: 'SET_GROUP_DETAILS',
                    groupData,
                });
                history.push('/findgroupdetails');
            } else {
                groupData.message = `Failed to find group with name "${data.groupName
                    .trim()
                    .toLowerCase()}"`;
                dispatch({
                    type: 'SET_GROUP_ERROR',
                    error: groupData,
                });
            }
            setLoadingProcess(false);
        } catch (error) {
            dispatch({
                type: 'SET_GROUP_ERROR',
                error: error,
            });
            setLoadingProcess(false);
        }
    };

    return (
        <div
            className={cx(
                styles.findGroupHeaderWrapper,
                'container',
                'has-text-centered'
            )}
        >
            <motion.h1
                className={cx(
                    styles.findGroupHeaderTitle,
                    'title is-1',
                    'has-text-white'
                )}
                initial={{ y: -70 }}
                animate={{ y: 0 }}
                transition={{
                    ease: 'easeOut',
                    duration: 0.8,
                }}
            >
                One Tool, all informations.
            </motion.h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <motion.div
                    className={cx(styles.inputFieldWrapper)}
                    initial={{ x: -1080 }}
                    animate={{ x: 0 }}
                    transition={{
                        ease: 'easeOut',
                        duration: 1.5,
                        type: 'spring',
                        stiffness: 70,
                    }}
                >
                    <InputField
                        name="groupName"
                        type="text"
                        placeholder="What group are your looking for..."
                        register={register}
                    />
                </motion.div>
                <motion.div
                    initial={{ y: 70 }}
                    animate={{ y: 0 }}
                    transition={{
                        ease: 'easeOut',
                        duration: 0.8,
                    }}
                >
                    <IconButton
                        iconText="Find"
                        iconType="faTools"
                        isLoading={loadingProcess}
                        type="submit"
                        disabled={loadingProcess}
                    />
                </motion.div>
            </form>
        </div>
    );
};

export default FindGroupHeader;
