import { App } from 'vue';
import { addConfirm, closeConfirm, openConfirm } from './functions/functions';
declare const LktModalConfirm: {
    install: (app: App, options: any) => void;
};
export default LktModalConfirm;
export { addConfirm, closeConfirm, openConfirm };
