import { LktObject } from 'lkt-ts-interfaces';
import { Component } from 'vue';
export declare const openConfirm: (alias: string, key?: string | number, props?: LktObject) => void;
export declare const closeConfirm: (alias: string, key?: string | number) => void;
export declare const addConfirm: (alias: string, component: Component) => void;
