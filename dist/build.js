import { openModal as C, closeModal as k, addModal as _ } from "lkt-modal";
import { defineComponent as b, useSlots as y, resolveComponent as d, openBlock as g, createBlock as z, withCtx as a, renderSlot as s, createVNode as f, createTextVNode as m, toDisplayString as r } from "vue";
const w = (t, o = "_", l = {}) => {
  let n = t;
  n.indexOf("confirm__") === 0 && (n = n.substring(9)), C("confirm__" + n, o, l);
}, c = (t, o = "_") => {
  let l = t;
  l.indexOf("confirm__") === 0 && (l = l.substring(9)), k("confirm__" + l, o);
}, M = (t, o) => {
  let l = t;
  l.indexOf("confirm__") === 0 && (l = l.substring(9)), _("confirm__" + l, o);
}, h = { name: "LktModalConfirm", inheritAttrs: !1 }, T = /* @__PURE__ */ b({
  ...h,
  props: {
    palette: { default: "" },
    size: { default: "" },
    preTitle: { default: "" },
    title: { default: "" },
    loading: { type: Boolean, default: !1 },
    showClose: { type: Boolean, default: !0 },
    disabledClose: { type: Boolean, default: !1 },
    disabledVeilClick: { type: Boolean, default: !1 },
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    onConfirm: { type: Function, default: void 0 },
    cancelText: { default: "" },
    confirmText: { default: "" }
  },
  setup(t) {
    const o = t;
    y();
    const l = (e) => {
      e.preventDefault(), e.stopPropagation(), typeof o.onConfirm == "function" && o.onConfirm(), c(o.modalName, o.modalKey);
    }, n = () => c(o.modalName, o.modalKey);
    return (e, B) => {
      const i = d("lkt-button"), p = d("lkt-modal");
      return g(), z(p, {
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
      }, {
        "pre-title": a(() => [
          s(e.$slots, "pre-title")
        ]),
        "footer-button-cancel": a((u) => [
          f(i, { onClick: n }, {
            default: a(() => [
              m(r(e.cancelText), 1)
            ]),
            _: 1
          })
        ]),
        "footer-button-confirm": a((u) => [
          f(i, { onClick: l }, {
            default: a(() => [
              m(r(e.confirmText), 1)
            ]),
            _: 1
          })
        ]),
        default: a(() => [
          s(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["pre-title", "title", "modal-name", "modal-key", "z-index", "palette", "size", "loading", "show-close", "disabled-close", "disabled-veil-click"]);
    };
  }
}), K = {
  install: (t, o) => {
    t.component("lkt-modal-confirm") === void 0 && t.component("lkt-modal-confirm", T);
  }
};
export {
  M as addConfirm,
  c as closeConfirm,
  K as default,
  w as openConfirm
};
