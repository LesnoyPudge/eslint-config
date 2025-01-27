import tslint from 'typescript-eslint';
import { CONST } from './constants';
import path from 'node:path';
import globals from 'globals';
import { mergeConfigs } from './utils';



export const commonConfig = mergeConfigs(
    tslint.configs.base,
    {
        languageOptions: {
            globals: {
                ...globals.es2021,
                ...globals.builtin,
            },
            parserOptions: {
                projectService: true,
                tsconfigRootDir: path.resolve(),
                ecmaVersion: 'latest',
                sourceType: 'module',
                allowAutomaticSingleRunInference: true,
                project: 'tsconfig.json',
                warnOnUnsupportedTypeScriptVersion: false,
                ecmaFeatures: {
                    jsx: true,
                },
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