export const GroupsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_GROUP_ERROR':
            return {
                ...state,
                error: action.group.message,
            };
        case 'SET_GROUP_DETAILS':
            return {
                ...state,
                group: action.group.value[0],
                error: '',
            };
        case 'SET_GROUP_OWNERS':
            return {
                ...state,
                groupOwners: action.groupOwners.value,
                error: '',
            };
        case 'SET_GROUP_MEMBERS':
            return {
                ...state,
                groupMembers: action.groupMembers.value,
                error: '',
            };
        case 'SET_GROUPS_FILTERED':
            return {
                ...state,
                groupsFiltered: action.groupsFilteredFetch,
                error: '',
            };
        case 'SET_GROUPS_FILTERED_BY_STRING':
            return {
                ...state,
                groupsFilteredByString: action.groupsFilteredFetch,
                error: '',
            };
        case 'CREATE_GROUP':
            return {
                ...state,
                newGroupDate: action.group,
                error: '',
            };
        case 'CLEAR_FILTERED_DATA':
            return {
                ...state,
                groupsFilteredByString: [],
                groupsFiltered: [],
                error: '',
            };
        default:
            return state;
    }
};
