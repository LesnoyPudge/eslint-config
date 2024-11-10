import { fixupPluginRules } from '@eslint/compat';
import { mergeConfigs } from '../utils';
import { reactRulesConfig } from './rules';



export const reactConfig = mergeConfigs(
    // https://github.com/facebook/react/issues/28313
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
    },
    reactRulesConfig,
);