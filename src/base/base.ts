import 'eslint-plugin-only-warn';
import tslint from 'typescript-eslint';
import { CONST } from '../constants';
import path from 'node:path';
import globals from 'globals';
import { baseRulesConfig } from './rules';
import { mergeConfigs } from '../utils';



export const baseConfig = mergeConfigs(
    tslint.configs.base,
    baseRulesConfig,
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
                projectService: true,
                tsconfigRootDir: path.resolve(),
                ecmaVersion: 'latest',
                sourceType: 'module',
                allowAutomaticSingleRunInference: true,
                cacheLifetime: {
                    glob: 'Infinity',
                },
                project: 'tsconfig.json',
                warnOnUnsupportedTypeScriptVersion: false,
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },

        settings: {
            node: {
                version: '>=21.0.0',
            },
        },

        files: [
            ...CONST.JS_EXTENSIONS,
            ...CONST.TS_EXTENSIONS,
        ].map((extension) => `**/*.${extension}`),

        ignores: [
            ...CONST.IGNORED_PATHS,
        ],
    },
);