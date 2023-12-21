/* eslint-disable import/prefer-default-export */
import {App} from 'vue';

import {addConfirm, closeConfirm, openConfirm} from './functions/functions';
import {default as modal} from './lib-components/LktModalConfirm.vue';

const LktModalConfirm = {
    install: (app: App, options: any) => {
        app.component('lkt-modal-confirm', modal);
    }
};

export default LktModalConfirm;

export {addConfirm, closeConfirm, openConfirm};
