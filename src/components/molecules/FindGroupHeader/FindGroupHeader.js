import React from 'react';
import cx from 'classnames';
import styles from './FindGroupHeader.module.scss';
import InputField from '../../atoms/InputField/InputField';
import IconButton from '../../atoms/IconButton/IconButton';
import { Form, Formik, Field } from 'formik';

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
        <Formik
            initialValues={{ groupName: '' }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                console.log(values.groupName);
                setSubmitting(false);
                resetForm();
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

export default FindGroupHeader;
