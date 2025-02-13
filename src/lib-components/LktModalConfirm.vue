<script setup lang="ts">
import {closeConfirm as closeConfirmFn} from "lkt-modal";
import {useSlots} from "vue";

// Props
const props = withDefaults(defineProps<{
    palette?: string
    size?: string
    preTitle?: string
    title?: string
    loading?: boolean
    showClose?: boolean
    disabledClose?: boolean
    disabledVeilClick?: boolean
    hiddenButtons?: boolean
    modalName?: string
    modalKey?: string
    zIndex?: number
    onConfirm?: Function|undefined
    cancelText: string
    confirmText: string
    cancelPalette: string
    confirmPalette: string
    closeConfirm: string
    closeConfirmKey: string
}>(), {
    palette: '',
    size: '',
    preTitle: '',
    title: '',
    loading: false,
    showClose: true,
    disabledClose: false,
    disabledVeilClick: false,
    hiddenButtons: false,
    modalName: '',
    modalKey: '_',
    zIndex: 500,
    onConfirm: undefined,
    cancelText: '',
    confirmText: '',
    cancelPalette: '',
    confirmPalette: '',
    closeConfirm: '',
    closeConfirmKey: '_',
});

const slots = useSlots();

const doConfirm = ($event: Event|undefined = undefined) => {
    if ($event) {
        $event.preventDefault();
        $event.stopPropagation();
    }
    if (typeof props.onConfirm === 'function') {
        props.onConfirm();
    }
    closeConfirmFn(props.modalName, props.modalKey)
}

const doCancel = () => closeConfirmFn(props.modalName, props.modalKey);
</script>

<template>
    <lkt-modal v-bind:pre-title="preTitle"
               v-bind:title="title"
               v-bind:modal-name="modalName"
               v-bind:modal-key="modalKey"
               v-bind:z-index="zIndex"
               v-bind:palette="palette"
               v-bind:size="size"
               v-bind:loading="loading"
               v-bind:show-close="showClose"
               v-bind:disabled-close="disabledClose"
               v-bind:disabled-veil-click="disabledVeilClick"
               v-bind:hidden-footer="hiddenButtons"
               v-bind:close-confirm="closeConfirm"
               v-bind:close-confirm-key="closeConfirmKey"
    >
        <template v-slot:pre-title v-if="slots.preTitle">
            <slot name="pre-title"></slot>
        </template>

        <template v-if="!hiddenButtons" v-slot:footer-button-cancel="s">
            <lkt-button v-on:click="doCancel" :palette="cancelPalette">{{cancelText}}</lkt-button>
        </template>

        <template v-if="!hiddenButtons" v-slot:footer-button-confirm="s">
            <lkt-button v-on:click="doConfirm" :palette="confirmPalette">{{confirmText}}</lkt-button>
        </template>

        <slot v-bind:doConfirm="doConfirm" v-bind:doCancel="doCancel"/>
    </lkt-modal>
</template>