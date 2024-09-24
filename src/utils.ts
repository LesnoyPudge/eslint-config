


const isObject = (o: unknown): o is Record<any, any> => {
    return Object.prototype.toString.call(o) === '[object Object]';
}

export const merge = <
    _Obj extends Record<string, unknown>
>(...objects: [_Obj, ..._Obj[]]): _Obj => {
    if (objects.length === 0) return {} as _Obj;
    if (objects.length < 2) return objects[0]!;

    if (objects.length > 2) {
        const last = objects.pop()!;
        const merged = merge(...objects)!;
        
        return merge(last, merged);
    }
    
    const result = structuredClone(objects[0]!);
    const source = objects[1]!;
    
    const loop = (
        target: Record<any, any>, 
        source: Record<any, any>,
    ) => {
        Object.getOwnPropertyNames(source).forEach((key) => {
            const targetValue = target[key];
            const sourceValue = source[key];

            if (isObject(targetValue) && isObject(sourceValue)) {
                return loop(targetValue, sourceValue);
            }

            if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
                target[key] = Array.from(new Set([
                    ...targetValue, 
                    ...sourceValue
                ]))

                return;
            }

            target[key] = sourceValue;
        })
    }

    loop(result, source);

    return result;
}

// export const extractRules = (
//     configs: TSESLint.FlatConfig.ConfigArray
// ): TSESLint.SharedConfig.RulesRecord => {
//     return configs.map((config) => {
//         return config.rules ?? {};
//     }).reduce((acc, cur) => {
//         acc = {...acc, ...cur}
//         return acc;
//     }, {})
// }