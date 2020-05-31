import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import cx from 'classnames';
import styles from './FindGroupHeader.module.scss';
import InputField from '../../atoms/InputField/InputField';
import IconButton from '../../atoms/IconButton/IconButton';
import { Form, Formik, Field } from 'formik';
import { getGroupDetails } from '../../../GraphService';
import { GroupsContext } from '../../../contexts/GroupsContext';

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
            <h1
                className={cx(
                    styles.findGroupHeaderTitle,
                    'title is-1',
                    'has-text-white'
                )}
            >
                One Tool, all informations.
            </h1>
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
                            groupData,
                        });
                        setSubmitting(false);
                        resetForm();
                    } else {
                        groupData.message = `Brak poszukiwanej grupy "${values.groupName
                            .trim()
                            .toLowerCase()}"`;
                        dispatch({
                            type: 'SET_GROUP_ERROR',
                            groupData,
                        });
                        setSubmitting(false);
                        resetForm();
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className={cx(styles.inputFieldWrapper)}>
                            <Field
                                name="groupName"
                                type="text"
                                placeholder="What group are your looking for..."
                                component={InputField}
                            />
                        </div>
                        <IconButton
                            iconText="Find"
                            iconType="faTools"
                            isLoading={isSubmitting}
                            type="submit"
                            disabled={isSubmitting}
                        />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default FindGroupHeader;
