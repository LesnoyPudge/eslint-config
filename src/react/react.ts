import tslint from "typescript-eslint";
import jsxAllyPlugin from "eslint-plugin-jsx-a11y";
// @ts-expect-error
import reactPlugin from 'eslint-plugin-react';
// @ts-expect-error
import reactHooksPlugin from 'eslint-plugin-react-hooks';
// @ts-expect-error
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import { fixupPluginRules } from '@eslint/compat';
// @ts-expect-error
import controlStatementsPlugin from 'eslint-plugin-jsx-control-statements';



export const reactConfig = tslint.config(
    jsxAllyPlugin.flatConfigs.recommended,
    jsxAllyPlugin.flatConfigs.strict,
    reactPlugin.configs.flat.recommended,
    // https://github.com/facebook/react/issues/28313
    ...tslint.config({
        plugins: {
            "react-hooks": reactHooksPlugin,
        },
        rules: {
            ...reactHooksPlugin.configs.recommended.rules
        }
    }),
    ...tslint.config({
        files: ['**/*.tsx', '**/*.jsx'],
        plugins: {
            "react-refresh": reactRefreshPlugin,
        },
        rules: {
            "react-refresh/only-export-components": "warn",
        },
    }),
    ...tslint.config({
        plugins: {
            'jsx-control-statements': fixupPluginRules(
                controlStatementsPlugin,
            ),
        },
        languageOptions: {
            globals: (
                controlStatementsPlugin
                    .environments['jsx-control-statements'].globals
            ),
        },
        rules: {
            ...controlStatementsPlugin.configs.recommended.rules,
            'jsx-control-statements/jsx-jcs-no-undef': 'off',
        },
    }),
)