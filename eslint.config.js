import { config } from "./build/index.js";
import fs from "fs";


const _config = config.createConfig(
    config.configs.base,
    config.configs.disableTypeChecked,
);

console.log('writing')
fs.writeFileSync(
    'output.json', 
    JSON.stringify({...config.configs.react, plugins: {}}, null, 4)
)

export default _config;