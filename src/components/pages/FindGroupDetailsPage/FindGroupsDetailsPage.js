import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import cx from 'classnames';
import moment from 'moment';
import { CSVLink } from 'react-csv';
import { motion } from 'framer-motion';
import FindGroupDetailsHeader from '../../molecules/FindGroupDetailsHeader/FindGroupDetailsHeader';
import TextSingleRow from '../../atoms/TextSingleRow/TextSingleRow';
import ListSingleRow from '../../atoms/ListSingleRow/ListSingleRow';
import ListHalfColumn from '../../atoms/ListHalfColumn/ListHalfColumn';
import IconButton from '../../atoms/IconButton/IconButton';
import { GroupsContext } from '../../../contexts/GroupsContext';
import { getGroupMembers, getGroupOwners } from '../../../GraphService';
import styles from './FindGroupDetailsPage.module.scss';

const FindGroupDetailsPage = () => {
    const {
        groups: { group, groupMembers, groupOwners, singleGroupExportData },
        dispatch,
    } = useContext(GroupsContext);

    const history = useHistory();

    useEffect(() => {
        if (!group) {
            history.push('/findgroup');
        }
    }, []);

    useEffect(() => {
        async function fetchGroupData() {
            if (group) {
                const groupOwnersData = await getGroupOwners(group.id);
                dispatch({
                    type: 'SET_GROUP_OWNERS',
                    groupOwners: groupOwnersData,
                });
                const groupMembersData = await getGroupMembers(group.id);
                dispatch({
                    type: 'SET_GROUP_MEMBERS',
                    groupMembers: groupMembersData,
                });
                const groupExportData = [
                    {
                        ...group,

                        owners: groupOwnersData.value.map(
                            (item) => item.userPrincipalName
                        ),

                        members: groupMembersData.value.map(
                            (item) => item.userPrincipalName
                        ),
                    },
                ];
                dispatch({
                    type: 'SET_SINGLE_GROUP_EXPORT_DATA',
                    groupExportData,
                });
            }
        }
        fetchGroupData();
    }, [group]);

    return (
        <motion.div exit={{ opacity: 0 }}>
            {group ? (
                <motion.div className={cx(styles.cardContentWrapper, 'card')}>
                    <div className={cx(styles.contentWrapper, 'is-relative')}>
                        <FindGroupDetailsHeader />
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <TextSingleRow
                                DataName="Created time"
                                DataValue={moment(group.createdDateTime)
                                    .format('DD-MM-YYYY')
                                    .toString()}
                            />
                            <TextSingleRow
                                DataName="Description"
                                DataValue={
                                    group.description &&
                                    group.description.length > 20
                                        ? `${group.description.substr(
                                              0,
                                              20
                                          )}...`
                                        : group.description
                                }
                            />
                            <TextSingleRow
                                DataName="Mail Address"
                                DataValue={group.mail}
                            />
                            <TextSingleRow
                                DataName="Mail Nickname"
                                DataValue={group.mailNickname}
                            />
                            <ListSingleRow
                                ListName="Provision Options"
                                ListValue={group.resourceProvisioningOptions}
                            />
                            <ListSingleRow
                                ListName="Mail Aliases"
                                ListValue={group.proxyAddresses.filter((item) =>
                                    item.toLowerCase().includes('smtp')
                                )}
                            />
                            <div
                                className={cx(
                                    styles.listHalfColumnWrapper,
                                    'columns',
                                    'is-vcentered'
                                )}
                            >
                                <ListHalfColumn
                                    ListName="Owners"
                                    ListValue={groupOwners}
                                />
                                <ListHalfColumn
                                    ListName="Members"
                                    ListValue={groupMembers}
                                />
                            </div>
                            <TextSingleRow
                                DataName="Visibility"
                                DataValue={group.visibility}
                            />
                        </div>
                    </div>
                    <div className={cx('column', 'has-text-centered')}>
                        {singleGroupExportData.length ? (
                            <CSVLink data={singleGroupExportData}>
                                <IconButton
                                    iconType="faSave"
                                    iconText="Export"
                                />
                            </CSVLink>
                        ) : null}
                    </div>
                </motion.div>
            ) : null}
        </motion.div>
    );
};

export default FindGroupDetailsPage;
