import jsxAllyPlugin from 'eslint-plugin-jsx-a11y';
// @ts-expect-error
import reactPlugin from 'eslint-plugin-react';
// @ts-expect-error
import reactHooksPlugin from 'eslint-plugin-react-hooks';
// @ts-expect-error
import controlStatementsPlugin from 'eslint-plugin-jsx-control-statements';
import { mergeConfigs } from '../utils';



export const reactRulesConfig = mergeConfigs(
    jsxAllyPlugin.flatConfigs.recommended,
    jsxAllyPlugin.flatConfigs.strict,
    reactPlugin.configs.flat.recommended,
    {
        rules: {
            ...reactHooksPlugin.configs.recommended.rules,
            ...controlStatementsPlugin.configs.recommended.rules,
            'react-refresh/only-export-components': 'warn',
            'jsx-control-statements/jsx-jcs-no-undef': 'off',
        },
    },
);