import { getToken } from './MSAuth';

const graph = require('@microsoft/microsoft-graph-client');

async function getAuthenticatedClient() {
    try {
        const accessToken = await getToken();
        const client = graph.Client.init({
            authProvider: (done) => {
                done(null, accessToken.accessToken);
            },
        });

        return client;
    } catch (error) {
        console.log('GetAClientErr: ' + error);
    }
}

export async function getUserDetails() {
    try {
        const client = await getAuthenticatedClient();

        const user = await client.api('/me').get();

        return user;
    } catch (error) {
        console.log('GetUDetails: ' + error);
    }
}

export async function getGroupDetails(groupName) {
    try {
        const client = await getAuthenticatedClient();

        const groupDetails = await client
            .api(`/groups?$filter=mail eq '${groupName}'`)
            .get();

        return groupDetails;
    } catch (error) {
        return error;
    }
}

export async function getGroupOwners(groupId) {
    try {
        const client = await getAuthenticatedClient();

        const owners = await client.api(`groups/${groupId}/owners`).get();

        return owners;
    } catch (error) {
        return error;
    }
}

export async function getGroupMembers(groupId) {
    try {
        const client = await getAuthenticatedClient();

        const members = await client.api(`groups/${groupId}/members`).get();

        return members;
    } catch (error) {
        return error;
    }
}
