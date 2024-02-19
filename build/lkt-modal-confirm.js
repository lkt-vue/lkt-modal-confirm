import C, { openModal as b, closeModal as g, addModal as p } from "lkt-modal";
import { defineComponent as x, useSlots as S, resolveComponent as d, openBlock as v, createBlock as z, createSlots as N, withCtx as l, createVNode as f, createTextVNode as m, toDisplayString as c, renderSlot as r, unref as h } from "vue";
import B from "lkt-button";
const _ = (e, t = "_", o = {}) => {
  let n = e;
  n.indexOf("confirm__") === 0 && (n = n.substring(9)), b("confirm__" + e, t, o);
}, s = (e, t = "_") => {
  let o = e;
  o.indexOf("confirm__") === 0 && (o = o.substring(9)), g("confirm__" + o, t);
}, O = (e, t) => {
  let o = e;
  o.indexOf("confirm__") === 0 && (o = o.substring(9)), p("confirm__" + e, t);
}, T = { name: "LktModalConfirm", inheritAttrs: !1 }, M = /* @__PURE__ */ x({
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
    const t = e, o = S(), n = (i) => {
      i.preventDefault(), i.stopPropagation(), typeof t.onConfirm == "function" && t.onConfirm(), s(t.modalName, t.modalKey);
    }, u = () => s(t.modalName, t.modalKey);
    return (i, w) => {
      const a = d("lkt-button"), k = d("lkt-modal");
      return v(), z(k, {
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
        "footer-button-cancel": l((y) => [
          f(a, { onClick: u }, {
            default: l(() => [
              m(c(e.cancelText), 1)
            ]),
            _: 1
          })
        ]),
        "footer-button-confirm": l((y) => [
          f(a, { onClick: n }, {
            default: l(() => [
              m(c(e.confirmText), 1)
            ]),
            _: 1
          })
        ]),
        default: l(() => [
          r(i.$slots, "default")
        ]),
        _: 2
      }, [
        h(o)["pre-title"] ? {
          name: "pre-title",
          fn: l(() => [
            r(i.$slots, "pre-title")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["pre-title", "title", "modal-name", "modal-key", "z-index", "palette", "size", "loading", "show-close", "disabled-close", "disabled-veil-click"]);
    };
  }
}), D = {
  install: (e, t) => {
    e.component("lkt-modal-confirm") === void 0 && e.component("lkt-modal-confirm", M), e.component("lkt-modal") === void 0 && e.use(C), e.component("lkt-button") === void 0 && e.use(B);
  }
};
export {
  O as addConfirm,
  s as closeConfirm,
  D as default,
  _ as openConfirm
};
