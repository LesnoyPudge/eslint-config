import tslint from 'typescript-eslint';
import eslint from '@eslint/js';
// @ts-expect-error
import preferArrowPlugin from 'eslint-plugin-prefer-arrow';
import stylisticPlugin from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import-x';
import restrictedGlobals from 'confusing-browser-globals';
// @ts-expect-error
import eslintPluginNoUseExtendNative from 'eslint-plugin-no-use-extend-native';
// @ts-expect-error
import avaPlugin from 'eslint-plugin-ava';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
// @ts-expect-error
import pluginPromise from 'eslint-plugin-promise';
import nodePlugin from 'eslint-plugin-n';
import { CONST } from '../constants';
import { mergeConfigs } from '../utils';



const unfilteredConfig = mergeConfigs(
    eslint.configs.recommended,
    tslint.configs.eslintRecommended,
    importPlugin.flatConfigs.recommended,
    importPlugin.flatConfigs.typescript,
    ...tslint.configs.strictTypeChecked,
    ...tslint.configs.stylisticTypeChecked,
    eslintPluginNoUseExtendNative.configs.recommended,
    eslintPluginUnicorn.configs['flat/recommended'],
    avaPlugin.configs['flat/recommended'],
    pluginPromise.configs['flat/recommended'],
    nodePlugin.configs['flat/recommended-module'],
    stylisticPlugin.configs['disable-legacy'],
    stylisticPlugin.configs.customize({
        arrowParens: true,
        blockSpacing: true,
        braceStyle: '1tbs',
        commaDangle: 'always-multiline',
        flat: true,
        indent: CONST.STYLE.SPACE,
        jsx: true,
        quoteProps: 'consistent',
        quotes: CONST.STYLE.QUOTES,
        semi: true,
    }),
    {
        plugins: {
            'prefer-arrow': preferArrowPlugin,
        },
        rules: {
            'import-x/no-extraneous-dependencies': 'error',
            'prefer-arrow/prefer-arrow-functions': [
                'warn',
                {
                    disallowPrototype: true,
                    singleReturnOnly: false,
                    classPropertiesAllowed: false,
                },
            ],
            '@stylistic/max-len': ['warn', { 'code': 80 }],
            '@stylistic/eol-last': ['warn', 'never'],
            '@stylistic/no-multiple-empty-lines': [
                'warn',
                {
                    max: 3,
                    maxEOF: 0,
                    maxBOF: 3,
                },
            ],
            '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
            'no-restricted-globals': ['warn', ...restrictedGlobals],
            '@stylistic/jsx-tag-spacing': ['warn', {
                'closingSlash': 'never',
                'beforeSelfClosing': 'proportional-always',
                'afterOpening': 'never',
                'beforeClosing': 'never',
            }],
            '@typescript-eslint/no-namespace': 'off',
            'import-x/no-unresolved': 'off',
            'n/no-missing-import': 'off',
            '@typescript-eslint/ban-ts-comment': 'off',
        },
    },
);

export const baseRulesConfig = {
    plugins: unfilteredConfig.plugins,
    rules: unfilteredConfig.rules,
};