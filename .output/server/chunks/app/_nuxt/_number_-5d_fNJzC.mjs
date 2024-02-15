import { u as useCounter } from './count-kYPKHbvb.mjs';
import { e as useRoute } from '../server.mjs';
import { unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import './state-9ItFgjXZ.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@fortawesome/free-solid-svg-icons';

const _sfc_main = {
  __name: "[number]",
  __ssrInlineRender: true,
  setup(__props) {
    const count = useCounter();
    const route = useRoute();
    console.log(route.params.number);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}> number: ${ssrInterpolate(_ctx.$route.params.number)} <h1>Count: ${ssrInterpolate(unref(count))}</h1></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/count/[number].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_number_-5d_fNJzC.mjs.map
