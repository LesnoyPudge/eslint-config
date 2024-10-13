import { CONST } from '../constants';
import tslint from 'typescript-eslint';



export const disableTypeCheckedConfig = {
    extends: [tslint.configs.disableTypeChecked],
    files: CONST.JS_EXTENSIONS,
};