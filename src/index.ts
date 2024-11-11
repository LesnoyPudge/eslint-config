import { baseConfig } from './base';
import { reactConfig } from './react';
import { disableTypeCheckedConfig } from './disableTypeChecked';
import tslint from 'typescript-eslint';
import { mergeConfigs } from './utils';
import { nodeConfig } from './node';
import { webConfig } from './web';
import 'eslint-plugin-only-warn';
import { commonConfig } from './commonConfig';



export const config = {
    createConfig: tslint.config,
    mergeConfigs,
    configs: {
        common: commonConfig,
        base: baseConfig,
        disableTypeChecked: disableTypeCheckedConfig,
        react: reactConfig,
        node: nodeConfig,
        web: webConfig,
    },
};