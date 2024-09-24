import "eslint-plugin-only-warn";
import tslint from "typescript-eslint";
import { CONST } from "../constants";
import path from "node:path";
import globals from "globals";
import { baseRulesConfig } from "./rules";



export const baseConfig = tslint.config(
    ...baseRulesConfig,
    {
        languageOptions: {
            globals: {
                ...globals.es2021,
                ...globals.node,
                ...globals.browser,
                ...globals.serviceworker,
                ...globals.builtin,
            },
            parserOptions: {
                ecmaVersion: 'latest',
		        sourceType: 'module',
                allowAutomaticSingleRunInference: true,
                cacheLifetime: {
                    glob: 'Infinity',
                },
                project: ['tsconfig.json'],
                tsconfigRootDir: path.resolve(),
                warnOnUnsupportedTypeScriptVersion: false,
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        files: [
            ...[
                ...CONST.JS_EXTENSIONS, 
                ...CONST.TS_EXTENSIONS,
            ].map((ext) => `**/*.${ext}`),
        ],
        
        ignores: [
            ...CONST.IGNORED_PATHS,
        ],
    },
)

// console.log(JSON.stringify(baseConfig, null, 4));