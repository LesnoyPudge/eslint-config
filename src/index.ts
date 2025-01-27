import { createConfig, mergeConfigs } from './utils';
import 'eslint-plugin-only-warn';
import { commonConfig } from './commonConfig';
import {
    baseConfig,
    disableTypeCheckedConfig,
    nodeConfig,
    reactConfig,
    webConfig,
} from './configs';



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