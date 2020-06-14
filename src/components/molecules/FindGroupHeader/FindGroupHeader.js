import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import cx from 'classnames';
import styles from './FindGroupHeader.module.scss';
import InputField from '../../atoms/InputField/InputField';
import IconButton from '../../atoms/IconButton/IconButton';
import { Form, Formik, Field } from 'formik';
import { getGroupDetails } from '../../../GraphService';
import { GroupsContext } from '../../../contexts/GroupsContext';
import { motion } from 'framer-motion';

// TODO: Change Formik to React-Hooks-Form (with try catch error handle)

const FindGroupHeader = () => {
    const {
        groups: { error },
        dispatch,
    } = useContext(GroupsContext);

    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'CLEAR_GROUP_DATA' });
    }, []);

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
            <Formik
                initialValues={{ groupName: '' }}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    const groupData = await getGroupDetails(
                        values.groupName.trim().toLowerCase()
                    );
                    if (!groupData.statusCode && groupData.value.length) {
                        dispatch({
                            type: 'SET_GROUP_DETAILS',
                            groupData,
                        });
                        setSubmitting(false);
                        resetForm();
                        history.push('/findgroupdetails');
                    } else if (groupData.statusCode) {
                        dispatch({
                            type: 'SET_GROUP_ERROR',
                            error: groupData,
                        });
                        setSubmitting(false);
                        resetForm();
                    } else {
                        groupData.message = `Failed to find group with name "${values.groupName
                            .trim()
                            .toLowerCase()}"`;
                        dispatch({
                            type: 'SET_GROUP_ERROR',
                            error: groupData,
                        });
                        setSubmitting(false);
                        resetForm();
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
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
                            <Field
                                name="groupName"
                                type="text"
                                placeholder="What group are your looking for..."
                                component={InputField}
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
                                isLoading={isSubmitting}
                                type="submit"
                                disabled={isSubmitting}
                            />
                        </motion.div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default FindGroupHeader;
