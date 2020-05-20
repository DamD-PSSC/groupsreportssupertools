import React from 'react';
import cx from 'classnames';
import styles from './FindGroupDetailsPage.module.scss';
import FindGroupDetailsHeader from '../../molecules/FindGroupDetailsHeader/FindGroupDetailsHeader';
import TextSingleRow from '../../atoms/TextSingleRow/TextSingleRow';

const FindGroupDetailsPage = () => (
    <>
        <div
            className={cx(
                styles.contentWrapper,
                'columns',
                'is-vcentered',
                'is-relative'
            )}
        >
            <FindGroupDetailsHeader />
        </div>

        <TextSingleRow DataName="Created time" DataValue="<CreatedTime>" />
        <TextSingleRow DataName="Description" DataValue="<Description20>" />
        <TextSingleRow DataName="Mail Address" DataValue="<MailAddress>" />
        <TextSingleRow DataName="Mail Nickname" DataValue="<MailNickname>" />
    </>
);

export default FindGroupDetailsPage;
