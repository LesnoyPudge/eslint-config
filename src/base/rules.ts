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
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    eslintPluginNoUseExtendNative.configs.recommended,
    eslintPluginUnicorn.configs['flat/recommended'],
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    avaPlugin.configs['flat/recommended'],
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
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
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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
            '@stylistic/max-len': ['warn', {
                'code': 80,
                'ignoreComments': true,
            }],
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
            'unicorn/prevent-abbreviations': 'off',
            'unicorn/catch-error-name': 'off',
            'unicorn/no-array-for-each': 'off',
            'unicorn/no-array-reduce': 'off',
            'unicorn/filename-case': 'off',
            '@typescript-eslint/prefer-promise-reject-errors': 'off',
            'unicorn/error-message': 'off',
            '@typescript-eslint/no-confusing-void-expression': 'off',
            'promise/always-return': ['warn', {
                ignoreLastCallback: true,
            }],
            '@typescript-eslint/restrict-template-expressions': [
                'warn',
                {
                    allowNumber: true,
                },
            ],
            'unicorn/no-useless-undefined': ['warn', {
                checkArguments: false,
                checkArrowFunctionBody: false,
            }],
            'promise/param-names': 'off',
            '@typescript-eslint/no-unnecessary-type-parameters': 'off',
            '@typescript-eslint/unbound-method': 'off',
            'unicorn/no-array-callback-reference': 'off',
            '@typescript-eslint/no-unused-vars': ['warn', {
                argsIgnorePattern: '^_',
            }],
        },
    },
);

export const baseRulesConfig = {
    plugins: unfilteredConfig.plugins,
    rules: unfilteredConfig.rules,
};