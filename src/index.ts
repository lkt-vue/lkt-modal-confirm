/* eslint-disable import/prefer-default-export */
import {App} from 'vue';

import {addConfirm, closeConfirm, openConfirm} from './functions/functions';
import {default as modal} from './lib-components/LktModalConfirm.vue';
import LktModal from "lkt-modal";
import LktButton from "lkt-button";

const LktModalConfirm = {
    install: (app: App, options: any) => {
        // Register plugin components
        if (app.component('lkt-modal-confirm') === undefined) app.component('lkt-modal-confirm', modal);

        // Register additional components
        if (app.component('lkt-modal') === undefined)  app.use(LktModal);
        if (app.component('lkt-button') === undefined)  app.use(LktButton);
    }
};

export default LktModalConfirm;

export {addConfirm, closeConfirm, openConfirm};
