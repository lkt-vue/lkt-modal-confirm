import {LktObject} from 'lkt-ts-interfaces';
import {Component} from 'vue';
import {addModal, closeModal, openModal, ValidModalKey} from "lkt-modal";

export const openConfirm = (
    alias: string,
    key: ValidModalKey = '_',
    props: LktObject = {}
) => {
    let name = alias;
    if (name.indexOf('confirm__') === 0) name = name.substring(9);
    openModal('confirm__'+alias, key, props);
};
export const closeConfirm = (alias: string, key: ValidModalKey = '_') => {
    let name = alias;
    if (name.indexOf('confirm__') === 0) name = name.substring(9);
    closeModal('confirm__'+name, key);
};

export const addConfirm = (alias: string, component: Component) => {
    let name = alias;
    if (name.indexOf('confirm__') === 0) name = name.substring(9);
    addModal('confirm__'+alias, component);
};
