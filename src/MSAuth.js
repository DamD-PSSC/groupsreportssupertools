import { UserAgentApplication } from 'msal';
import config from './Config';
import { getUserDetails } from './GraphService';

// Create object for handle MS Token.
const userAgentApplication = new UserAgentApplication({
    auth: {
        clientId: config.appId,
        redirectUri: config.redirectUri,
    },
    cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: true,
    },
});

export const getToken = async () => {
    try {
        const accessToken = await userAgentApplication.acquireTokenSilent({
            scopes: config.scopes,
            authority: config.authority,
        });

        if (accessToken) {
            return accessToken;
        }
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getUserProfile = async () => {
    try {
        const accessToken = await userAgentApplication.acquireTokenSilent({
            scopes: config.scopes,
            authority: config.authority,
        });

        if (accessToken) {
            const user = await getUserDetails(accessToken);
            return user;
        }
    } catch (error) {
        throw new Error(error.message);
    }
};

export const login = async () => {
    try {
        await userAgentApplication.loginPopup({
            scopes: config.scopes,
            prompt: 'select_account',
            authority: config.authority,
        });

        const user = await getUserProfile();
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const logout = () => {
    userAgentApplication.logout();
    return null;
};
