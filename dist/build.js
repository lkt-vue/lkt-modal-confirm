import { openModal as k, closeModal as y, addModal as b } from "lkt-modal";
import { defineComponent as h, useSlots as B, resolveComponent as f, openBlock as _, createBlock as g, createSlots as v, withCtx as a, renderSlot as s, unref as z, createVNode as m, createTextVNode as r, toDisplayString as c } from "vue";
const P = (t, o = "_", l = {}) => {
  let n = t;
  n.indexOf("confirm__") === 0 && (n = n.substring(9)), k("confirm__" + n, o, l);
}, u = (t, o = "_") => {
  let l = t;
  l.indexOf("confirm__") === 0 && (l = l.substring(9)), y("confirm__" + l, o);
}, S = (t, o) => {
  let l = t;
  l.indexOf("confirm__") === 0 && (l = l.substring(9)), b("confirm__" + l, o);
}, T = { name: "LktModalConfirm", inheritAttrs: !1 }, K = /* @__PURE__ */ h({
  ...T,
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
    const o = t, l = B(), n = (e = void 0) => {
      e && (e.preventDefault(), e.stopPropagation()), typeof o.onConfirm == "function" && o.onConfirm(), u(o.modalName, o.modalKey);
    }, i = () => u(o.modalName, o.modalKey);
    return (e, N) => {
      const d = f("lkt-button"), p = f("lkt-modal");
      return _(), g(p, {
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
      }, v({
        default: a(() => [
          s(e.$slots, "default", {
            doConfirm: n,
            doCancel: i
          })
        ]),
        _: 2
      }, [
        z(l).preTitle ? {
          name: "pre-title",
          fn: a(() => [
            s(e.$slots, "pre-title")
          ]),
          key: "0"
        } : void 0,
        e.hiddenButtons ? void 0 : {
          name: "footer-button-cancel",
          fn: a((C) => [
            m(d, {
              onClick: i,
              palette: e.cancelPalette
            }, {
              default: a(() => [
                r(c(e.cancelText), 1)
              ]),
              _: 1
            }, 8, ["palette"])
          ]),
          key: "1"
        },
        e.hiddenButtons ? void 0 : {
          name: "footer-button-confirm",
          fn: a((C) => [
            m(d, {
              onClick: n,
              palette: e.confirmPalette
            }, {
              default: a(() => [
                r(c(e.confirmText), 1)
              ]),
              _: 1
            }, 8, ["palette"])
          ]),
          key: "2"
        }
      ]), 1032, ["pre-title", "title", "modal-name", "modal-key", "z-index", "palette", "size", "loading", "show-close", "disabled-close", "disabled-veil-click", "hidden-footer", "close-confirm", "close-confirm-key"]);
    };
  }
}), V = {
  install: (t, o) => {
    t.component("lkt-modal-confirm") === void 0 && t.component("lkt-modal-confirm", K);
  }
};
export {
  S as addConfirm,
  u as closeConfirm,
  V as default,
  P as openConfirm
};
