import tslint from 'typescript-eslint';
import { CONST } from './constants';
import path from 'node:path';
import globals from 'globals';
import { mergeConfigs } from './utils';



export const commonConfig = mergeConfigs(
    {
        languageOptions: {
            globals: {
                ...globals.es2021,
                ...globals.builtin,
            },
            parserOptions: {
                ...tslint.configs.base.languageOptions?.parserOptions,
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