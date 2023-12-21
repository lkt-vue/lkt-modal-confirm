import { LktObject } from 'lkt-ts-interfaces';
import { Component } from 'vue';
import { ValidModalKey } from "lkt-modal";
export declare const openConfirm: (alias: string, key?: ValidModalKey, props?: LktObject) => void;
export declare const closeConfirm: (alias: string, key?: ValidModalKey) => void;
export declare const addConfirm: (alias: string, component: Component) => void;
