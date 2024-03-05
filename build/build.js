import { openModal as C, closeModal as k, addModal as y } from "lkt-modal";
import { defineComponent as b, resolveComponent as d, openBlock as h, createBlock as B, createSlots as _, withCtx as a, renderSlot as f, createVNode as s, createTextVNode as m, toDisplayString as r } from "vue";
const N = (t, l = "_", o = {}) => {
  let n = t;
  n.indexOf("confirm__") === 0 && (n = n.substring(9)), C("confirm__" + n, l, o);
}, c = (t, l = "_") => {
  let o = t;
  o.indexOf("confirm__") === 0 && (o = o.substring(9)), k("confirm__" + o, l);
}, w = (t, l) => {
  let o = t;
  o.indexOf("confirm__") === 0 && (o = o.substring(9)), y("confirm__" + o, l);
}, g = { name: "LktModalConfirm", inheritAttrs: !1 }, z = /* @__PURE__ */ b({
  ...g,
  props: {
    palette: { default: "" },
    size: { default: "" },
    preTitle: { default: "" },
    title: { default: "" },
    loading: { type: Boolean, default: !1 },
    showClose: { type: Boolean, default: !0 },
    disabledClose: { type: Boolean, default: !1 },
    disabledVeilClick: { type: Boolean, default: !1 },
    hiddenButtons: { type: Boolean, default: !1 },
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    onConfirm: { type: Function, default: void 0 },
    cancelText: { default: "" },
    confirmText: { default: "" },
    cancelPalette: { default: "" },
    confirmPalette: { default: "" },
    closeConfirm: { default: "" },
    closeConfirmKey: { default: "_" }
  },
  setup(t) {
    const l = t, o = (e = void 0) => {
      e && (e.preventDefault(), e.stopPropagation()), typeof l.onConfirm == "function" && l.onConfirm(), c(l.modalName, l.modalKey);
    }, n = () => c(l.modalName, l.modalKey);
    return (e, v) => {
      const i = d("lkt-button"), u = d("lkt-modal");
      return h(), B(u, {
        "pre-title": e.preTitle,
        title: e.title,
        "modal-name": e.modalName,
        "modal-key": e.modalKey,
        "z-index": e.zIndex,
        palette: e.palette,
        size: e.size,
        loading: e.loading,
        "show-close": e.showClose,
        "disabled-close": e.disabledClose,
        "disabled-veil-click": e.disabledVeilClick,
        "hidden-footer": e.hiddenButtons,
        "close-confirm": e.closeConfirm,
        "close-confirm-key": e.closeConfirmKey
      }, _({
        "pre-title": a(() => [
          f(e.$slots, "pre-title")
        ]),
        default: a(() => [
          f(e.$slots, "default", {
            doConfirm: o,
            doCancel: n
          })
        ]),
        _: 2
      }, [
        e.hiddenButtons ? void 0 : {
          name: "footer-button-cancel",
          fn: a((p) => [
            s(i, {
              onClick: n,
              palette: e.cancelPalette
            }, {
              default: a(() => [
                m(r(e.cancelText), 1)
              ]),
              _: 1
            }, 8, ["palette"])
          ]),
          key: "0"
        },
        e.hiddenButtons ? void 0 : {
          name: "footer-button-confirm",
          fn: a((p) => [
            s(i, {
              onClick: o,
              palette: e.confirmPalette
            }, {
              default: a(() => [
                m(r(e.confirmText), 1)
              ]),
              _: 1
            }, 8, ["palette"])
          ]),
          key: "1"
        }
      ]), 1032, ["pre-title", "title", "modal-name", "modal-key", "z-index", "palette", "size", "loading", "show-close", "disabled-close", "disabled-veil-click", "hidden-footer", "close-confirm", "close-confirm-key"]);
    };
  }
}), M = {
  install: (t, l) => {
    t.component("lkt-modal-confirm") === void 0 && t.component("lkt-modal-confirm", z);
  }
};
export {
  w as addConfirm,
  c as closeConfirm,
  M as default,
  N as openConfirm
};
