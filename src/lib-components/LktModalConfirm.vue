<script lang="ts">
export default {name: 'LktModalConfirm', inheritAttrs: false};
</script>

<script setup lang="ts">
import {useSlots} from "vue";
import {closeConfirm} from "../functions/functions";

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
    modalName?: string
    modalKey?: string
    zIndex?: number
    onConfirm?: Function|undefined
    cancelText: string
    confirmText: string
}>(), {
    palette: '',
    size: '',
    preTitle: '',
    title: '',
    loading: false,
    showClose: true,
    disabledClose: false,
    disabledVeilClick: false,
    modalName: '',
    modalKey: '_',
    zIndex: 500,
    onConfirm: undefined,
    cancelText: '',
    confirmText: '',
});

const slots = useSlots();

const doConfirm = ($event: Event) => {
    $event.preventDefault();
    $event.stopPropagation();
    if (typeof props.onConfirm === 'function') {
        props.onConfirm();
    }
    closeConfirm(props.modalName, props.modalKey)
}

const doCancel = () => closeConfirm(props.modalName, props.modalKey);
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
               v-bind:disabled-veil-click="disabledVeilClick">

        <template v-slot:pre-title>
            <slot name="pre-title"></slot>
        </template>

        <template v-slot:footer-button-cancel="s">
            <lkt-button v-on:click="doCancel">{{cancelText}}</lkt-button>
        </template>

        <template v-slot:footer-button-confirm="s">
            <lkt-button v-on:click="doConfirm">{{confirmText}}</lkt-button>
        </template>

        <slot></slot>
    </lkt-modal>
</template>