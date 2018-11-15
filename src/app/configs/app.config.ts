import { InjectionToken, isDevMode } from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

const serverURL = 'https://boost-detector.westeurope.cloudapp.azure.com';
const opendotaURL = 'https://api.opendota.com/api';
export const AppConfig = {
    routes: {
        account: 'account',
        error404: '404'
    },
    endpoints: {
        api: {
            checkAccount: (accountId: string) => `${serverURL}/accounts/${accountId}/checks`
        },
        opendota: {
            search: (query: string) => `${opendotaURL}/search?q=${query}`
        }
    },
};
