import React, { useReducer, createContext } from 'react';
import { GroupsReducer } from '../reducers/GroupsReducer';

export const GroupsContext = createContext();

const initialState = {
    group: null,
    groupOwners: [],
    groupMembers: [],
    groupsFiltered: [],
    groupsFilteredByString: [],
    singleGroupExportData: [],
    error: '',
};

const GroupsContextProvider = (props) => {
    const [groups, dispatch] = useReducer(GroupsReducer, initialState);

    return (
        <GroupsContext.Provider value={{ groups, dispatch }}>
            {props.children}
        </GroupsContext.Provider>
    );
};

export default GroupsContextProvider;
