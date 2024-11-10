import { config } from "./build/index.js";



const _config = config.createConfig(
    config.configs.base,
    config.configs.disableTypeChecked,
);

// fs.writeFileSync(
//     'output.json', 
//     JSON.stringify(_config[0].rules, null, 4)
// )

export default _config;