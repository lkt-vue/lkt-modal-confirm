import { openModal as C, closeModal as k, addModal as y } from "lkt-modal";
import { defineComponent as b, resolveComponent as f, openBlock as h, createBlock as _, unref as B, createSlots as g, withCtx as a, renderSlot as s, createVNode as m, createTextVNode as r, toDisplayString as c } from "vue";
const w = (t, l = "_", o = {}) => {
  let n = t;
  n.indexOf("confirm__") === 0 && (n = n.substring(9)), C("confirm__" + n, l, o);
}, i = (t, l = "_") => {
  let o = t;
  o.indexOf("confirm__") === 0 && (o = o.substring(9)), k("confirm__" + o, l);
}, M = (t, l) => {
  let o = t;
  o.indexOf("confirm__") === 0 && (o = o.substring(9)), y("confirm__" + o, l);
}, z = { name: "LktModalConfirm", inheritAttrs: !1 }, v = /* @__PURE__ */ b({
  ...z,
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
      e && (e.preventDefault(), e.stopPropagation()), typeof l.onConfirm == "function" && l.onConfirm(), i(l.modalName, l.modalKey);
    }, n = () => i(l.modalName, l.modalKey);
    return (e, T) => {
      const d = f("lkt-button"), u = f("lkt-modal");
      return h(), _(u, {
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
        "close-confirm": B(i),
        "close-confirm-key": e.closeConfirmKey
      }, g({
        "pre-title": a(() => [
          s(e.$slots, "pre-title")
        ]),
        default: a(() => [
          s(e.$slots, "default", {
            doConfirm: o,
            doCancel: n
          })
        ]),
        _: 2
      }, [
        e.hiddenButtons ? void 0 : {
          name: "footer-button-cancel",
          fn: a((p) => [
            m(d, {
              onClick: n,
              palette: e.cancelPalette
            }, {
              default: a(() => [
                r(c(e.cancelText), 1)
              ]),
              _: 1
            }, 8, ["palette"])
          ]),
          key: "0"
        },
        e.hiddenButtons ? void 0 : {
          name: "footer-button-confirm",
          fn: a((p) => [
            m(d, {
              onClick: o,
              palette: e.confirmPalette
            }, {
              default: a(() => [
                r(c(e.confirmText), 1)
              ]),
              _: 1
            }, 8, ["palette"])
          ]),
          key: "1"
        }
      ]), 1032, ["pre-title", "title", "modal-name", "modal-key", "z-index", "palette", "size", "loading", "show-close", "disabled-close", "disabled-veil-click", "hidden-footer", "close-confirm", "close-confirm-key"]);
    };
  }
}), P = {
  install: (t, l) => {
    t.component("lkt-modal-confirm") === void 0 && t.component("lkt-modal-confirm", v);
  }
};
export {
  M as addConfirm,
  i as closeConfirm,
  P as default,
  w as openConfirm
};
