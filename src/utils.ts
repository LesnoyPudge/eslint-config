// eslint-disable-next-line n/no-extraneous-import
import type { TSESLint } from '@typescript-eslint/utils';
import tslint from 'typescript-eslint';



const isObject = (o: unknown): o is Record<any, any> => {
    return Object.prototype.toString.call(o) === '[object Object]';
};

const mergeTwo = <
    _Object extends Record<any, any>,
>(
    _target: _Object,
    _source: _Object,
) => {
    const result = {} as _Object;

    const loop = (
        result: Record<any, any>,
        target: Record<any, any>,
        source: Record<any, any>,
    ) => {
        for (const key of new Set([
            ...Object.keys(target),
            ...Object.keys(source),
        ])) {
            if (Object.hasOwn(source, key)) {
                result[key] = (
                    isObject(source[key])
                        ? { ...source[key] }
                        : source[key]
                );
            }

            if (Object.hasOwn(target, key)) {
                result[key] = (
                    isObject(target[key])
                        ? { ...target[key] }
                        : target[key]
                );
            }
        }

        for (const key of Object.keys(source)) {
            const targetValue = target[key];
            const sourceValue = source[key];

            if (isObject(targetValue) && isObject(sourceValue)) {
                // rules should be sallowly merged
                if (key === 'rules') {
                    result[key] = Object.assign({}, targetValue, sourceValue);
                    continue;
                }

                if (key === 'plugins') {}

                loop(result[key], targetValue, sourceValue);
                continue;
            }

            if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
                result[key] = [...new Set([
                    ...targetValue,
                    ...sourceValue,
                ])];

                continue;
            }

            result[key] = sourceValue;
        }
    };

    loop(result, _target, _source);

    return result;
};

export const merge = <
    _Object extends Record<any, any>,
>(...objects: _Object[]): _Object => {
    if (objects.length === 0) return {} as _Object;
    if (objects.length === 1) return objects[0]!;
    if (objects.length > 2) {
        const last = objects.at(-1)!;
        const merged = merge(...objects.slice(0, -1));

        return mergeTwo(merged, last);
    }
    // console.log(...objects);
    return mergeTwo(objects[0]!, objects[1]!);
};

export const mergeConfigs = (
    ...configs: TSESLint.FlatConfig.ConfigArray
) => merge(...configs);

export const extractRules = (
    configs: TSESLint.FlatConfig.ConfigArray,
): TSESLint.SharedConfig.RulesRecord => {
    return configs.map((config) => {
        return config.rules ?? {};
    }).reduce((accumulator, current) => {
        accumulator = { ...accumulator, ...current };
        return accumulator;
    }, {});
};

export const createConfig: typeof tslint.config = (
    ...configs
) => {
    const usedPlugins = new Set<string>();
    const cleanedConfigs = configs.map((config) => {
        const plugins = config.plugins ?? {};

        const cleanedPlugins = (
            Object.keys(plugins)
                .reduce<typeof plugins>((acc, cur) => {
                    if (usedPlugins.has(cur)) {
                        return acc;
                    }

                    usedPlugins.add(cur);
                    acc[cur] = plugins[cur]!;

                    return acc;
                }, {})
        );

        config.plugins = cleanedPlugins;
        return config;
    });

    return tslint.config(...cleanedConfigs);
};