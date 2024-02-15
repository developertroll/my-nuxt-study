import { V as VContainer, _ as __nuxt_component_0$1 } from './VContainer-4NWy8H7F.mjs';
import { withAsyncContext, mergeProps, withCtx, unref, createVNode, useSSRContext, ref, shallowRef, toRef, getCurrentInstance, onServerPrefetch, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { V as VCard, a as VCardTitle, b as VCardSubtitle, c as VCardActions } from './VCard-Fv_wuxA9.mjs';
import { V as VBtn } from './VBtn-EhsR2CPI.mjs';
import { e as useRoute, d as useHead, k as asyncDataDefaults, l as useNuxtApp, c as createError } from '../server.mjs';
import './VImg-Y6OqFhVj.mjs';
import './group-3_VSJJx7.mjs';
import './createSimpleFunctional-Y-4xv7Q4.mjs';
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

const _sfc_main$1 = {
  __name: "Detailed",
  __ssrInlineRender: true,
  props: {
    project: Object
  },
  setup(__props) {
    const openLink = (link) => {
      if (link === "placeholder") {
        alert("\uD574\uB2F9 \uD504\uB85C\uC81D\uD2B8\uB294 \uBBF8\uC644\uC131\uC785\uB2C8\uB2E4.");
        return;
      }
      (void 0).open(link, "_blank");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ImageThumbnail = __nuxt_component_0$1;
      _push(ssrRenderComponent(VCard, mergeProps({
        variant: "elevated",
        width: "75%"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ImageThumbnail, {
              imgLink: __props.project.imgLink,
              size: "600"
            }, null, _parent2, _scopeId));
            _push2(`<div class="d-flex justify-space-between"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(VCardTitle, { class: "text-h5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.project.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.project.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardSubtitle, { class: "text-wrap" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.project.detail)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.project.detail), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(VCardActions, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, {
                    onClick: ($event) => openLink(__props.project.link)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\uB9C1\uD06C(\uC0C8\uCC3D\uC73C\uB85C \uC5F4\uB9BD\uB2C8\uB2E4)`);
                      } else {
                        return [
                          createTextVNode("\uB9C1\uD06C(\uC0C8\uCC3D\uC73C\uB85C \uC5F4\uB9BD\uB2C8\uB2E4)")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VBtn, {
                      onClick: ($event) => openLink(__props.project.link)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\uB9C1\uD06C(\uC0C8\uCC3D\uC73C\uB85C \uC5F4\uB9BD\uB2C8\uB2E4)")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ImageThumbnail, {
                imgLink: __props.project.imgLink,
                size: "600"
              }, null, 8, ["imgLink"]),
              createVNode("div", { class: "d-flex justify-space-between" }, [
                createVNode("div", null, [
                  createVNode(VCardTitle, { class: "text-h5" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(__props.project.title), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardSubtitle, { class: "text-wrap" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(__props.project.detail), 1)
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode(VCardActions, null, {
                default: withCtx(() => [
                  createVNode(VBtn, {
                    onClick: ($event) => openLink(__props.project.link)
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\uB9C1\uD06C(\uC0C8\uCC3D\uC73C\uB85C \uC5F4\uB9BD\uB2C8\uB2E4)")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/Detailed.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _a2, _b, _c, _d, _e, _f, _g, _h, _i;
  var _a;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxt = useNuxtApp();
  const getDefault = () => null;
  const getDefaultCachedData = () => nuxt.isHydrating ? nuxt.payload.data[key] : nuxt.static.data[key];
  options.server = (_a2 = options.server) != null ? _a2 : true;
  options.default = (_b = options.default) != null ? _b : getDefault;
  options.getCachedData = (_c = options.getCachedData) != null ? _c : getDefaultCachedData;
  options.lazy = (_d = options.lazy) != null ? _d : false;
  options.immediate = (_e = options.immediate) != null ? _e : true;
  options.deep = (_f = options.deep) != null ? _f : asyncDataDefaults.deep;
  options.dedupe = (_g = options.dedupe) != null ? _g : "cancel";
  const hasCachedData = () => ![null, void 0].includes(options.getCachedData(key));
  if (!nuxt._asyncData[key] || !options.immediate) {
    (_h = (_a = nuxt.payload._errors)[key]) != null ? _h : _a[key] = null;
    const _ref = options.deep ? ref : shallowRef;
    nuxt._asyncData[key] = {
      data: _ref((_i = options.getCachedData(key)) != null ? _i : options.default()),
      pending: ref(!hasCachedData()),
      error: toRef(nuxt.payload._errors, key),
      status: ref("idle")
    };
  }
  const asyncData = { ...nuxt._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    var _a3;
    if (nuxt._asyncDataPromises[key]) {
      if (isDefer((_a3 = opts.dedupe) != null ? _a3 : options.dedupe)) {
        return nuxt._asyncDataPromises[key];
      }
      nuxt._asyncDataPromises[key].cancelled = true;
    }
    if ((opts._initial || nuxt.isHydrating && opts._initial !== false) && hasCachedData()) {
      return Promise.resolve(options.getCachedData(key));
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((_result) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      nuxt.payload.data[key] = result;
      asyncData.data.value = result;
      asyncData.error.value = null;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      asyncData.error.value = createError(error);
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxt._asyncDataPromises[key];
    });
    nuxt._asyncDataPromises[key] = promise;
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxt.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
const _sfc_main = {
  __name: "[idx]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "data",
      () => fetch("/api/Project").then((res) => res.json())
    )), __temp = await __temp, __restore(), __temp);
    const route = useRoute();
    const pData = data.value.data.find((item) => item.idx == route.params.idx);
    useHead({
      title: pData.title
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardDetailed = __nuxt_component_0;
      _push(ssrRenderComponent(VContainer, mergeProps({ transition: "scroll-x-transition" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, {
              icon: "mdi-arrow-left",
              onClick: ($event) => _ctx.$router.back()
            }, null, _parent2, _scopeId));
            _push2(`<div class="d-flex align-center flex-column"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CardDetailed, { project: unref(pData) }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(VBtn, {
                icon: "mdi-arrow-left",
                onClick: ($event) => _ctx.$router.back()
              }, null, 8, ["onClick"]),
              createVNode("div", { class: "d-flex align-center flex-column" }, [
                createVNode(_component_CardDetailed, { project: unref(pData) }, null, 8, ["project"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/[idx].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_idx_-yXWi7KmG.mjs.map
