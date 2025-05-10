/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import tslint from 'typescript-eslint';
import { CONST } from '../../constants';
import { mergeConfigs } from '../../utils';
import { commonConfig } from '../../commonConfig';
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
// @ts-expect-error
import controlStatementsPlugin from 'eslint-plugin-jsx-control-statements';
import { fixupPluginRules } from '@eslint/compat';
import jsxAllyPlugin from 'eslint-plugin-jsx-a11y';
import importExport from '@lesnoypudge/eslint-plugin-import-export';
import marginTop from '@lesnoypudge/eslint-plugin-margin-top';



const configs = mergeConfigs(
    eslint.configs.recommended,
    tslint.configs.eslintRecommended,
    importPlugin.flatConfigs.recommended,
    importPlugin.flatConfigs.typescript,
    importExport.configs.recommended,
    marginTop.configs.recommended,
    ...tslint.configs.strictTypeChecked,
    ...tslint.configs.stylisticTypeChecked,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    eslintPluginNoUseExtendNative.configs.recommended,
    eslintPluginUnicorn.configs['flat/recommended'],
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    avaPlugin.configs['flat/recommended'],
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    pluginPromise.configs['flat/recommended'],
    // nodePlugin.configs['flat/recommended-module'],
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
);

export const baseConfig = mergeConfigs(
    {
        plugins: {
            ...tslint.configs.base.plugins,
            ...configs.plugins,
            'prefer-arrow': preferArrowPlugin,
            'jsx-control-statements': fixupPluginRules(
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                controlStatementsPlugin,
            ),
            'jsx-a11y': jsxAllyPlugin,
        },
        languageOptions: {
            globals: {
                ...configs.languageOptions?.globals,
                ...(
                    controlStatementsPlugin
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                        .environments['jsx-control-statements']
                        .globals
                ),
            },
        },
        rules: {
            ...configs.rules,
            ...jsxAllyPlugin.flatConfigs.recommended.rules,
            ...jsxAllyPlugin.flatConfigs.strict.rules,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            ...controlStatementsPlugin.configs.recommended.rules,
        },
    },
    commonConfig,
    {
        name: 'baseConfig',
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
                'beforeSelfClosing': 'never',
                'afterOpening': 'never',
                'beforeClosing': 'never',
            }],
            '@typescript-eslint/no-namespace': 'off',
            'import-x/no-unresolved': 'off',
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
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    'args': 'all',
                    'argsIgnorePattern': '^_',
                    'caughtErrors': 'all',
                    'caughtErrorsIgnorePattern': '^_',
                    'destructuredArrayIgnorePattern': '^_',
                    'varsIgnorePattern': '^_',
                    'ignoreRestSiblings': true,
                },
            ],
            'unicorn/no-null': 'off',
            'unicorn/explicit-length-check': 'off',
            'import-x/export': 'off',
            '@stylistic/lines-between-class-members': 'off',
            '@stylistic/jsx-quotes': ['warn', 'prefer-single'],
            'unicorn/expiring-todo-comments': 'off',
            '@typescript-eslint/no-unnecessary-condition': 'off',
            'unicorn/prefer-array-index-of': 'off',
            '@typescript-eslint/consistent-indexed-object-style': 'off',
            'promise/no-callback-in-promise': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',
            '@typescript-eslint/no-unnecessary-type-assertion': 'off',
            'prefer-const': 'off',
            'unicorn/prefer-top-level-await': 'off',
            '@stylistic/multiline-ternary': 'off',
            '@stylistic/jsx-one-expression-per-line': 'off',
            'unicorn/numeric-separators-style': [
                'warn',
                {
                    'number': {
                        'minimumDigits': 0,
                        'groupLength': 3,
                    },
                },
            ],
            'jsx-control-statements/jsx-for-require-each': 'off',
            'import-x/no-named-as-default-member': 'off',
            'jsx-a11y/no-autofocus': 'off',
            '@typescript-eslint/no-invalid-void-type': 'off',
            'unicorn/prefer-export-from': 'off',
            '@stylistic/jsx-closing-bracket-location': 'off',
            'unicorn/no-nested-ternary': 'off',
            'unicorn/no-abusive-eslint-disable': 'off',
            '@stylistic/no-extra-parens': 'off',
            'unicorn/no-static-only-class': 'off',
            '@typescript-eslint/no-extraneous-class': 'off',
            'jsx-control-statements/jsx-use-if-tag': 'off',
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@stylistic/max-len': ['warn', {
                'code': 100,
                'ignoreStrings': true,
                'ignoreTemplateLiterals': true,
                'ignoreRegExpLiterals': true,
                'ignoreComments': true,
            }],
            'jsx-control-statements/jsx-jcs-no-undef': 'off',
            'unicorn/consistent-function-scoping': 'off',
            '@typescript-eslint/prefer-function-type': 'off',
        },
    },
);