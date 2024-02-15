import { createVNode, useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { V as VImg } from './VImg-Y6OqFhVj.mjs';
import { p as propsFactory, m as makeComponentProps, g as genericComponent, q as useRtl, j as useRender } from '../server.mjs';
import { a as makeTagProps } from './group-3_VSJJx7.mjs';

const _sfc_main = {
  __name: "Thumbnail",
  __ssrInlineRender: true,
  props: {
    imgLink: { type: String, required: true },
    size: { type: Number, default: 125 }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VImg, mergeProps({
        src: __props.imgLink,
        alt: "image",
        cover: "",
        "aspect-ratio": "16/9",
        width: __props.size
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Image/Thumbnail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;
const makeVContainerProps = propsFactory({
  fluid: {
    type: Boolean,
    default: false
  },
  ...makeComponentProps(),
  ...makeTagProps()
}, "VContainer");
const VContainer = genericComponent()({
  name: "VContainer",
  props: makeVContainerProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      rtlClasses
    } = useRtl();
    useRender(() => createVNode(props.tag, {
      "class": ["v-container", {
        "v-container--fluid": props.fluid
      }, rtlClasses.value, props.class],
      "style": props.style
    }, slots));
    return {};
  }
});

export { VContainer as V, __nuxt_component_0 as _ };
//# sourceMappingURL=VContainer-4NWy8H7F.mjs.map
