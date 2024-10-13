import { config } from "./build/index.js";



export default config.createConfig(
    config.mergeConfigs(
        config.configs.base,
        config.configs.react,
    ),
    config.configs.disableTypeChecked,
);