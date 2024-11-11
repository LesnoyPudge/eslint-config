import { fixupPluginRules } from '@eslint/compat';
import { mergeConfigs } from '../utils';
import jsxAllyPlugin from 'eslint-plugin-jsx-a11y';
// @ts-expect-error
import reactPlugin from 'eslint-plugin-react';
// @ts-expect-error
import reactHooksPlugin from 'eslint-plugin-react-hooks';
// @ts-expect-error
import controlStatementsPlugin from 'eslint-plugin-jsx-control-statements';
// @ts-expect-error
import reactRefreshPlugin from 'eslint-plugin-react-refresh'



// https://github.com/facebook/react/issues/28313
export const reactConfig = mergeConfigs(
    jsxAllyPlugin.flatConfigs.recommended,
    jsxAllyPlugin.flatConfigs.strict,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    reactPlugin.configs.flat.recommended,
    {
        plugins: {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            'react-hooks': reactHooksPlugin,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            'react-refresh': reactRefreshPlugin,
            'jsx-control-statements': fixupPluginRules(
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                controlStatementsPlugin,
            ),
        },
        languageOptions: {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            globals: (
                controlStatementsPlugin
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    .environments['jsx-control-statements'].globals
            ),
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            ...reactHooksPlugin.configs.recommended.rules,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            ...controlStatementsPlugin.configs.recommended.rules,
            "react-refresh/only-export-components": [
                "warn",
                { "allowConstantExport": true }
            ],
            'jsx-control-statements/jsx-jcs-no-undef': 'off',
        }
    },
);