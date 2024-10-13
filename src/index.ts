import { baseConfig } from './base';
import { reactConfig } from './react';
import { disableTypeCheckedConfig } from './disableTypeChecked';
import tslint from 'typescript-eslint';
import { mergeConfigs } from './utils';



export const config = {
    createConfig: tslint.config,
    mergeConfigs,
    configs: {
        base: baseConfig,
        disableTypeChecked: disableTypeCheckedConfig,
        react: reactConfig,
    },
};