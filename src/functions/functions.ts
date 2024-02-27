import {LktObject} from 'lkt-ts-interfaces';
import {Component} from 'vue';
import {addModal, closeModal, openModal} from "lkt-modal";

export const openConfirm = (
    alias: string,
    key: string|number = '_',
    props: LktObject = {}
) => {
    let name = alias;
    if (name.indexOf('confirm__') === 0) name = name.substring(9);
    //@ts-ignore
    openModal('confirm__'+name, key, props);
};
export const closeConfirm = (alias: string, key: string|number = '_') => {
    let name = alias;
    if (name.indexOf('confirm__') === 0) name = name.substring(9);
    //@ts-ignore
    closeModal('confirm__'+name, key);
};

export const addConfirm = (alias: string, component: Component) => {
    let name = alias;
    if (name.indexOf('confirm__') === 0) name = name.substring(9);
    addModal('confirm__'+name, component);
};
