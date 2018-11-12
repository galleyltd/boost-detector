import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

const serverURL = 'https://boost-detector.westeurope.cloudapp.azure.com'
export const AppConfig: any = {
    routes: {
        player: 'player',
        error404: '404'
    },
    endpoints: {
        player: `${serverURL}/player`
        // matches: `${serverURL}/matches`
    },
};
