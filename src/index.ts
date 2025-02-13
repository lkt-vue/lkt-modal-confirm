import {App, Plugin} from 'vue';

import {addConfirm, closeConfirm, openConfirm} from 'lkt-modal';
import {default as modal} from './lib-components/LktModalConfirm.vue';

const LktModalConfirm: Plugin = {
    install: (app: App, options: any) => {
        // Register plugin components
        if (app.component('lkt-modal-confirm') === undefined) app.component('lkt-modal-confirm', modal);
    }
};

export default LktModalConfirm;

export {addConfirm, closeConfirm, openConfirm};
