// @ts-expect-error
import reactHooksPlugin from 'eslint-plugin-react-hooks';
// @ts-expect-error
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import { fixupPluginRules } from '@eslint/compat';
// @ts-expect-error
import controlStatementsPlugin from 'eslint-plugin-jsx-control-statements';
import { mergeConfigs } from '../utils';
import { reactRulesConfig } from './rules';



export const reactConfig = mergeConfigs(
    // https://github.com/facebook/react/issues/28313
    {
        plugins: {
            'react-hooks': reactHooksPlugin,
            'react-refresh': reactRefreshPlugin,
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
    },
    reactRulesConfig,
);