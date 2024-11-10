import { commonConfig } from '../commonConfig';
import { mergeConfigs } from '../utils';
import globals from 'globals';



export const webConfig = mergeConfigs(
    commonConfig,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.serviceworker,
            },
        },
    },
);