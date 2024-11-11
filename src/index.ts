import { baseConfig } from './base';
import { reactConfig } from './react';
import { disableTypeCheckedConfig } from './disableTypeChecked';
import { createConfig, mergeConfigs } from './utils';
import { nodeConfig } from './node';
import { webConfig } from './web';
import 'eslint-plugin-only-warn';
import { commonConfig } from './commonConfig';



export const config = {
    createConfig,
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