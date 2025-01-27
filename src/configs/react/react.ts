import { mergeConfigs } from '../../utils';
import reactPlugin from 'eslint-plugin-react';
// @ts-expect-error
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import { commonConfig } from '../../commonConfig';
// @ts-expect-error
import reactCompilerPlugin from 'eslint-plugin-react-compiler';



// https://github.com/facebook/react/issues/28313
export const reactConfig = mergeConfigs(
    commonConfig,
    {
        ...reactPlugin.configs.flat.recommended,
        settings: { react: { version: 'detect' } },
    },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    reactCompilerPlugin.configs.recommended,
    {
        plugins: {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            'react-hooks': reactHooksPlugin,
            'react-refresh': reactRefreshPlugin,
        },
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        rules: {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            ...reactHooksPlugin.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { 'allowConstantExport': true },
            ],
        },
    },
);