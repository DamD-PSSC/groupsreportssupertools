export const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'SET_AUTH_ERROR':
            return {
                ...state,
                errorMessage: action.error.message,
                isAuthenticated: false,
            };

        case 'USER_LOGIN':
            return {
                ...state,
                isAuthenticated: true,
                user: action.user,
                errorMessage: null,
            };

        case 'USER_LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                user: {},
                errorMessage: null,
            };
        default:
            return state;
    }
};
