declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    palette?: string | undefined;
    size?: string | undefined;
    preTitle?: string | undefined;
    title?: string | undefined;
    loading?: boolean | undefined;
    showClose?: boolean | undefined;
    disabledClose?: boolean | undefined;
    disabledVeilClick?: boolean | undefined;
    hiddenButtons?: boolean | undefined;
    modalName?: string | undefined;
    modalKey?: string | undefined;
    zIndex?: number | undefined;
    onConfirm?: Function | undefined;
    cancelText: string;
    confirmText: string;
    cancelPalette: string;
    confirmPalette: string;
    closeConfirm: string;
    closeConfirmKey: string;
}>, {
    palette: string;
    size: string;
    preTitle: string;
    title: string;
    loading: boolean;
    showClose: boolean;
    disabledClose: boolean;
    disabledVeilClick: boolean;
    hiddenButtons: boolean;
    modalName: string;
    modalKey: string;
    zIndex: number;
    onConfirm: undefined;
    cancelText: string;
    confirmText: string;
    cancelPalette: string;
    confirmPalette: string;
    closeConfirm: string;
    closeConfirmKey: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    palette?: string | undefined;
    size?: string | undefined;
    preTitle?: string | undefined;
    title?: string | undefined;
    loading?: boolean | undefined;
    showClose?: boolean | undefined;
    disabledClose?: boolean | undefined;
    disabledVeilClick?: boolean | undefined;
    hiddenButtons?: boolean | undefined;
    modalName?: string | undefined;
    modalKey?: string | undefined;
    zIndex?: number | undefined;
    onConfirm?: Function | undefined;
    cancelText: string;
    confirmText: string;
    cancelPalette: string;
    confirmPalette: string;
    closeConfirm: string;
    closeConfirmKey: string;
}>, {
    palette: string;
    size: string;
    preTitle: string;
    title: string;
    loading: boolean;
    showClose: boolean;
    disabledClose: boolean;
    disabledVeilClick: boolean;
    hiddenButtons: boolean;
    modalName: string;
    modalKey: string;
    zIndex: number;
    onConfirm: undefined;
    cancelText: string;
    confirmText: string;
    cancelPalette: string;
    confirmPalette: string;
    closeConfirm: string;
    closeConfirmKey: string;
}>>>, {
    zIndex: number;
    loading: boolean;
    title: string;
    size: string;
    palette: string;
    preTitle: string;
    showClose: boolean;
    disabledClose: boolean;
    disabledVeilClick: boolean;
    hiddenButtons: boolean;
    modalName: string;
    modalKey: string;
    onConfirm: Function;
    cancelText: string;
    confirmText: string;
    cancelPalette: string;
    confirmPalette: string;
    closeConfirm: string;
    closeConfirmKey: string;
}, {}>, {
    "pre-title"?(_: {}): any;
    default?(_: {
        doConfirm: ($event?: Event | undefined) => void;
        doCancel: () => void;
    }): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
