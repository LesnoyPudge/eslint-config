import fs from 'node:fs';
import { config } from './build/index.js';



fs.writeFileSync(
    'output.json',
    JSON.stringify({ ...config.configs.base, plugins: {} }, null, 4),
);