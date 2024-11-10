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
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            'react-hooks': reactHooksPlugin,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            'react-refresh': reactRefreshPlugin,
            'jsx-control-statements': fixupPluginRules(
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
        },
    },
    reactRulesConfig,
);