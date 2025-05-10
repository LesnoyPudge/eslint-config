import { config } from './build/index.js';



const _config = config.createConfig(
    config.configs.base,
    config.configs.disableTypeChecked,
);

// fs.writeFileSync(
//     'output.json',
//     JSON.stringify({ ...config.configs.base, plugins: {} }, null, 4),
// );

export default _config;