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
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    reactPlugin.configs.flat.recommended,
    {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        rules: {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            ...reactHooksPlugin.configs.recommended.rules,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            ...controlStatementsPlugin.configs.recommended.rules,
            'react-refresh/only-export-components': 'warn',
            'jsx-control-statements/jsx-jcs-no-undef': 'off',
        },
    },
);