import config from './Config';
import { getUserDetails } from './GraphService';
import { UserAgentApplication } from 'msal';

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
    } catch (err) {
        let error = {};
        if (typeof err === 'string') {
            var errParts = err.split('|');
            error =
                errParts.length > 1
                    ? { message: errParts[1], debug: errParts[0] }
                    : { message: err };
        } else {
            error = {
                message: err.message,
                debug: JSON.stringify(err),
            };
        }

        return error;
    }
};

export const getUserProfile = async () => {
    try {
        var accessToken = await userAgentApplication.acquireTokenSilent({
            scopes: config.scopes,
            authority: config.authority,
        });

        if (accessToken) {
            var user = await getUserDetails(accessToken);
            return user;
        }
    } catch (err) {
        var error = {};
        if (typeof err === 'string') {
            var errParts = err.split('|');
            error =
                errParts.length > 1
                    ? { message: errParts[1], debug: errParts[0] }
                    : { message: err };
        } else {
            error = {
                message: err.message,
                debug: JSON.stringify(err),
            };
        }

        return error;
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
