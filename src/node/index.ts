import { mergeConfigs } from '../utils';
import globals from 'globals';
import nodePlugin from 'eslint-plugin-n';
import { commonConfig } from '../commonConfig';


export const nodeConfig = mergeConfigs(
    nodePlugin.configs['flat/recommended-module'],
    commonConfig,
    {
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
        settings: {
            node: {
                version: '>=21.0.0',
            },
        },
        rules: {
            'n/no-missing-import': 'off',
            'n/no-unpublished-import': 'off',
        },
    },
);