import { openModal as p, closeModal as k, addModal as b } from "lkt-modal";
import { defineComponent as g, useSlots as x, resolveComponent as d, openBlock as S, createBlock as z, createSlots as N, withCtx as l, createVNode as f, createTextVNode as m, toDisplayString as c, renderSlot as s, unref as h } from "vue";
const K = (e, t = "_", o = {}) => {
  let n = e;
  n.indexOf("confirm__") === 0 && (n = n.substring(9)), p("confirm__" + e, t, o);
}, r = (e, t = "_") => {
  let o = e;
  o.indexOf("confirm__") === 0 && (o = o.substring(9)), k("confirm__" + o, t);
}, V = (e, t) => {
  let o = e;
  o.indexOf("confirm__") === 0 && (o = o.substring(9)), b("confirm__" + e, t);
}, T = { name: "LktModalConfirm", inheritAttrs: !1 }, v = /* @__PURE__ */ g({
  ...T,
  props: {
    palette: { type: String, default: "" },
    size: { type: String, default: "" },
    preTitle: { type: String, default: "" },
    title: { type: String, default: "" },
    loading: { type: Boolean, default: !1 },
    showClose: { type: Boolean, default: !0 },
    disabledClose: { type: Boolean, default: !1 },
    disabledVeilClick: { type: Boolean, default: !1 },
    modalName: { type: String, default: "" },
    modalKey: { type: [String, Number], default: "_" },
    zIndex: { type: Number, default: 500 },
    onConfirm: { type: [Function, void 0], default: void 0 },
    cancelText: { type: String, default: "Cancel" },
    confirmText: { type: String, default: "Confirm" }
  },
  setup(e) {
    const t = e, o = x(), n = (i) => {
      i.preventDefault(), i.stopPropagation(), typeof t.onConfirm == "function" && t.onConfirm(), r(t.modalName, t.modalKey);
    }, u = () => r(t.modalName, t.modalKey);
    return (i, B) => {
      const a = d("lkt-button"), y = d("lkt-modal");
      return S(), z(y, {
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
        "disabled-veil-click": e.disabledVeilClick
      }, N({
        "footer-button-cancel": l((C) => [
          f(a, { onClick: u }, {
            default: l(() => [
              m(c(e.cancelText), 1)
            ]),
            _: 1
          })
        ]),
        "footer-button-confirm": l((C) => [
          f(a, { onClick: n }, {
            default: l(() => [
              m(c(e.confirmText), 1)
            ]),
            _: 1
          })
        ]),
        default: l(() => [
          s(i.$slots, "default")
        ]),
        _: 2
      }, [
        h(o)["pre-title"] ? {
          name: "pre-title",
          fn: l(() => [
            s(i.$slots, "pre-title")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["pre-title", "title", "modal-name", "modal-key", "z-index", "palette", "size", "loading", "show-close", "disabled-close", "disabled-veil-click"]);
    };
  }
}), _ = {
  install: (e, t) => {
    e.component("lkt-modal-confirm", v);
  }
};
export {
  V as addConfirm,
  r as closeConfirm,
  _ as default,
  K as openConfirm
};
