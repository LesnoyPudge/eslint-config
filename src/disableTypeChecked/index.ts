import { CONST } from '../constants';
import tslint from 'typescript-eslint';



export const disableTypeCheckedConfig = {
    ...tslint.configs.disableTypeChecked,
    files: CONST.JS_EXTENSIONS.map((ext) => {
        return `**/*.${ext}`;
    }),
};