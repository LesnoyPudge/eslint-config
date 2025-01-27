import { config } from './build/index.js';
// import fs from 'node:fs';



const _config = config.createConfig(
    config.configs.base,
    config.configs.node,
    config.configs.disableTypeChecked,
);

// fs.writeFileSync(
//     'output.json',
//     JSON.stringify({ ...config.configs.base, plugins: {} }, null, 4),
// );

export default _config;