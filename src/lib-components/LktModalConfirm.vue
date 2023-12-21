<script lang="ts">
export default {name: 'LktModalConfirm', inheritAttrs: false};
</script>

<script setup lang="ts">
import {useSlots} from "vue";
import {closeConfirm} from "../functions/functions";

const props = defineProps({
    palette: {type: String, default: ''},
    size: {type: String, default: ''},
    preTitle: {type: String, default: ''},
    title: {type: String, default: ''},
    loading: {type: Boolean, default: false},
    showClose: {type: Boolean, default: true},
    disabledClose: {type: Boolean, default: false},
    disabledVeilClick: {type: Boolean, default: false},
    modalName: {type: String, default: ''},
    modalKey: {type: [String, Number], default: '_'},
    zIndex: {type: Number, default: 500},
    onConfirm: {type: [Function, undefined], default: undefined},
    cancelText: {type: String, default: 'Cancel'},
    confirmText: {type: String, default: 'Confirm'},
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

        <template v-slot:pre-title v-if="!!slots['pre-title']">
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