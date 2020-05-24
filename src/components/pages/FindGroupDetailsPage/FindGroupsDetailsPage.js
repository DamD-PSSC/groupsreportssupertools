import React from 'react';
import cx from 'classnames';
import styles from './FindGroupDetailsPage.module.scss';
import FindGroupDetailsHeader from '../../molecules/FindGroupDetailsHeader/FindGroupDetailsHeader';
import TextSingleRow from '../../atoms/TextSingleRow/TextSingleRow';
import ListSingleRow from '../../atoms/ListSingleRow/ListSingleRow';
import ListHalfColumn from '../../atoms/ListHalfColumn/ListHalfColumn';
import IconButton from '../../atoms/IconButton/IconButton';

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
        <ListSingleRow
            ListName="Provision Options"
            ListValue={['<List1>', '<List2>']}
        />
        <ListSingleRow
            ListName="Mail Aliases"
            ListValue={['<List1>', '<List2>']}
        />
        <div className={cx('columns', 'is-vcentered')}>
            <ListHalfColumn
                ListName="Owners"
                ListValue={['<List1>', '<List2>']}
            />
            <ListHalfColumn
                ListName="Members"
                ListValue={['<List1>', '<List2>']}
            />
        </div>
        <TextSingleRow DataName="Visibility" DataValue="<Visibility>" />
        <div className={cx('column', 'has-text-centered')}>
            <IconButton iconType="faSave" iconText="Export" />
        </div>
    </>
);

export default FindGroupDetailsPage;
