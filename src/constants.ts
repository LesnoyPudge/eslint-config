


export namespace CONST {
    export const TS_EXTENSIONS = [
        'ts',
        'tsx',
        'mts',
        'cts',
    ];

    export const JS_EXTENSIONS = [
        'js',
        'jsx',
        'mjs',
        'cjs',
    ];

    export const IGNORED_PATHS = [
        '**/node_modules/**',
        'dist/**',
        'coverage/**',
        'vendor/**',
        'build/**',
        '**/*.generated.*',
    ]

    export const STYLE = {
        SPACE: 4,
        QUOTES: 'single'
    } as const;
}