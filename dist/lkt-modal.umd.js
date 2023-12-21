(function(l,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("lkt-modal"),require("vue")):typeof define=="function"&&define.amd?define(["exports","lkt-modal","vue"],i):(l=typeof globalThis<"u"?globalThis:l||self,i(l.LktModal={},l.lktModal,l.Vue))})(this,function(l,i,t){"use strict";const r=(e,o="_",n={})=>{let d=e;d.indexOf("confirm__")===0&&(d=d.substring(9)),i.openModal("confirm__"+e,o,n)},f=(e,o="_")=>{let n=e;n.indexOf("confirm__")===0&&(n=n.substring(9)),i.closeModal("confirm__"+n,o)},s=(e,o)=>{let n=e;n.indexOf("confirm__")===0&&(n=n.substring(9)),i.addModal("confirm__"+e,o)},m={name:"LktModalConfirm",inheritAttrs:!1},u=t.defineComponent({...m,props:{palette:{type:String,default:""},size:{type:String,default:""},preTitle:{type:String,default:""},title:{type:String,default:""},loading:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},disabledClose:{type:Boolean,default:!1},disabledVeilClick:{type:Boolean,default:!1},modalName:{type:String,default:""},modalKey:{type:[String,Number],default:"_"},zIndex:{type:Number,default:500},onConfirm:{type:[Function,void 0],default:void 0},cancelText:{type:String,default:"Cancel"},confirmText:{type:String,default:"Confirm"}},setup(e){const o=e,n=t.useSlots(),d=a=>{a.preventDefault(),a.stopPropagation(),typeof o.onConfirm=="function"&&o.onConfirm(),f(o.modalName,o.modalKey)},y=()=>f(o.modalName,o.modalKey);return(a,b)=>{const c=t.resolveComponent("lkt-button"),p=t.resolveComponent("lkt-modal");return t.openBlock(),t.createBlock(p,{"pre-title":e.preTitle,title:e.title,"modal-name":e.modalName,"modal-key":e.modalKey,"z-index":e.zIndex,palette:e.palette,size:e.size,loading:e.loading,"show-close":e.showClose,"disabled-close":e.disabledClose,"disabled-veil-click":e.disabledVeilClick},t.createSlots({"footer-button-cancel":t.withCtx(k=>[t.createVNode(c,{onClick:y},{default:t.withCtx(()=>[t.createTextVNode(t.toDisplayString(e.cancelText),1)]),_:1})]),"footer-button-confirm":t.withCtx(k=>[t.createVNode(c,{onClick:d},{default:t.withCtx(()=>[t.createTextVNode(t.toDisplayString(e.confirmText),1)]),_:1})]),default:t.withCtx(()=>[t.renderSlot(a.$slots,"default")]),_:2},[t.unref(n)["pre-title"]?{name:"pre-title",fn:t.withCtx(()=>[t.renderSlot(a.$slots,"pre-title")]),key:"0"}:void 0]),1032,["pre-title","title","modal-name","modal-key","z-index","palette","size","loading","show-close","disabled-close","disabled-veil-click"])}}}),C={install:(e,o)=>{e.component("lkt-modal-confirm",u)}};l.addConfirm=s,l.closeConfirm=f,l.default=C,l.openConfirm=r,Object.defineProperties(l,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});