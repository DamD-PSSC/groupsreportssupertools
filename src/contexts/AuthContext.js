import React, { useReducer, createContext } from 'react';
import { AuthReducer } from '../reducers/AuthReducer';
import config from '../Config';

export const AuthContext = createContext();

const initialState = {
    isAuthenticated: false,
    user: {},
    errorMessage: null,
    clientId: config.appId,
    redirectUri: config.redirectUri,
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: true,
};

const AuthContextProvider = (props) => {
    const [auth, dispatch] = useReducer(AuthReducer, initialState);

    return (
        <AuthContext.Provider value={{ auth, dispatch }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
