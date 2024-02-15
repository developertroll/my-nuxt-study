import { p as propsFactory, m as makeComponentProps, f as makeThemeProps, g as genericComponent, h as provideTheme, i as provideDefaults, j as useRender, I as IconValue, d as useHead } from '../server.mjs';
import { computed, toRef, createVNode, inject, withDirectives, vShow, resolveDirective, provide, mergeProps, withCtx, createTextVNode, useSSRContext, shallowRef, watch } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { V as VCard, a as VCardTitle } from './VCard-Fv_wuxA9.mjs';
import { m as makeGroupProps, a as makeTagProps, u as useGroup, R as Ripple, b as useBackgroundColor, V as VIcon, c as makeElevationProps, d as makeGroupItemProps, e as makeRoundedProps, f as useGroupItem, g as useElevation, h as useRounded } from './group-3_VSJJx7.mjs';
import { V as VExpandTransition } from './index-vnfwnana.mjs';
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
import './createSimpleFunctional-Y-4xv7Q4.mjs';
import './VImg-Y6OqFhVj.mjs';

const VExpansionPanelSymbol = Symbol.for("vuetify:v-expansion-panel");
const allowedVariants = ["default", "accordion", "inset", "popout"];
const makeVExpansionPanelsProps = propsFactory({
  color: String,
  static: Boolean,
  variant: {
    type: String,
    default: "default",
    validator: (v) => allowedVariants.includes(v)
  },
  readonly: Boolean,
  ...makeComponentProps(),
  ...makeGroupProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VExpansionPanels");
const VExpansionPanels = genericComponent()({
  name: "VExpansionPanels",
  props: makeVExpansionPanelsProps(),
  emits: {
    "update:modelValue": (val) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useGroup(props, VExpansionPanelSymbol);
    const {
      themeClasses
    } = provideTheme(props);
    const variantClass = computed(() => props.variant && `v-expansion-panels--variant-${props.variant}`);
    provideDefaults({
      VExpansionPanel: {
        color: toRef(props, "color"),
        readonly: toRef(props, "readonly"),
        static: toRef(props, "static")
      }
    });
    useRender(() => createVNode(props.tag, {
      "class": ["v-expansion-panels", themeClasses.value, variantClass.value, props.class],
      "style": props.style
    }, slots));
    return {};
  }
});
const makeLazyProps = propsFactory({
  eager: Boolean
}, "lazy");
function useLazy(props, active) {
  const isBooted = shallowRef(false);
  const hasContent = computed(() => isBooted.value || props.eager || active.value);
  watch(active, () => isBooted.value = true);
  function onAfterLeave() {
    if (!props.eager)
      isBooted.value = false;
  }
  return {
    isBooted,
    hasContent,
    onAfterLeave
  };
}
const makeVExpansionPanelTextProps = propsFactory({
  ...makeComponentProps(),
  ...makeLazyProps()
}, "VExpansionPanelText");
const VExpansionPanelText = genericComponent()({
  name: "VExpansionPanelText",
  props: makeVExpansionPanelTextProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const expansionPanel = inject(VExpansionPanelSymbol);
    if (!expansionPanel)
      throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
    const {
      hasContent,
      onAfterLeave
    } = useLazy(props, expansionPanel.isSelected);
    useRender(() => createVNode(VExpandTransition, {
      "onAfterLeave": onAfterLeave
    }, {
      default: () => {
        var _a;
        return [withDirectives(createVNode("div", {
          "class": ["v-expansion-panel-text", props.class],
          "style": props.style
        }, [slots.default && hasContent.value && createVNode("div", {
          "class": "v-expansion-panel-text__wrapper"
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)])]), [[vShow, expansionPanel.isSelected.value]])];
      }
    }));
    return {};
  }
});
const makeVExpansionPanelTitleProps = propsFactory({
  color: String,
  expandIcon: {
    type: IconValue,
    default: "$expand"
  },
  collapseIcon: {
    type: IconValue,
    default: "$collapse"
  },
  hideActions: Boolean,
  static: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: false
  },
  readonly: Boolean,
  ...makeComponentProps()
}, "VExpansionPanelTitle");
const VExpansionPanelTitle = genericComponent()({
  name: "VExpansionPanelTitle",
  directives: {
    Ripple
  },
  props: makeVExpansionPanelTitleProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const expansionPanel = inject(VExpansionPanelSymbol);
    if (!expansionPanel)
      throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(props, "color");
    const slotProps = computed(() => ({
      collapseIcon: props.collapseIcon,
      disabled: expansionPanel.disabled.value,
      expanded: expansionPanel.isSelected.value,
      expandIcon: props.expandIcon,
      readonly: props.readonly
    }));
    useRender(() => {
      var _a;
      return withDirectives(createVNode("button", {
        "class": ["v-expansion-panel-title", {
          "v-expansion-panel-title--active": expansionPanel.isSelected.value,
          "v-expansion-panel-title--static": props.static
        }, backgroundColorClasses.value, props.class],
        "style": [backgroundColorStyles.value, props.style],
        "type": "button",
        "tabindex": expansionPanel.disabled.value ? -1 : void 0,
        "disabled": expansionPanel.disabled.value,
        "aria-expanded": expansionPanel.isSelected.value,
        "onClick": !props.readonly ? expansionPanel.toggle : void 0
      }, [createVNode("span", {
        "class": "v-expansion-panel-title__overlay"
      }, null), (_a = slots.default) == null ? void 0 : _a.call(slots, slotProps.value), !props.hideActions && createVNode("span", {
        "class": "v-expansion-panel-title__icon"
      }, [slots.actions ? slots.actions(slotProps.value) : createVNode(VIcon, {
        "icon": expansionPanel.isSelected.value ? props.collapseIcon : props.expandIcon
      }, null)])]), [[resolveDirective("ripple"), props.ripple]]);
    });
    return {};
  }
});
const makeVExpansionPanelProps = propsFactory({
  title: String,
  text: String,
  bgColor: String,
  ...makeComponentProps(),
  ...makeElevationProps(),
  ...makeGroupItemProps(),
  ...makeLazyProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeVExpansionPanelTitleProps()
}, "VExpansionPanel");
const VExpansionPanel = genericComponent()({
  name: "VExpansionPanel",
  props: makeVExpansionPanelProps(),
  emits: {
    "group:selected": (val) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const groupItem = useGroupItem(props, VExpansionPanelSymbol);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(props, "bgColor");
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const isDisabled = computed(() => (groupItem == null ? void 0 : groupItem.disabled.value) || props.disabled);
    const selectedIndices = computed(() => groupItem.group.items.value.reduce((arr, item, index) => {
      if (groupItem.group.selected.value.includes(item.id))
        arr.push(index);
      return arr;
    }, []));
    const isBeforeSelected = computed(() => {
      const index = groupItem.group.items.value.findIndex((item) => item.id === groupItem.id);
      return !groupItem.isSelected.value && selectedIndices.value.some((selectedIndex) => selectedIndex - index === 1);
    });
    const isAfterSelected = computed(() => {
      const index = groupItem.group.items.value.findIndex((item) => item.id === groupItem.id);
      return !groupItem.isSelected.value && selectedIndices.value.some((selectedIndex) => selectedIndex - index === -1);
    });
    provide(VExpansionPanelSymbol, groupItem);
    provideDefaults({
      VExpansionPanelText: {
        eager: toRef(props, "eager")
      },
      VExpansionPanelTitle: {
        readonly: toRef(props, "readonly")
      }
    });
    useRender(() => {
      const hasText = !!(slots.text || props.text);
      const hasTitle = !!(slots.title || props.title);
      return createVNode(props.tag, {
        "class": ["v-expansion-panel", {
          "v-expansion-panel--active": groupItem.isSelected.value,
          "v-expansion-panel--before-active": isBeforeSelected.value,
          "v-expansion-panel--after-active": isAfterSelected.value,
          "v-expansion-panel--disabled": isDisabled.value
        }, roundedClasses.value, backgroundColorClasses.value, props.class],
        "style": [backgroundColorStyles.value, props.style]
      }, {
        default: () => {
          var _a;
          return [createVNode("div", {
            "class": ["v-expansion-panel__shadow", ...elevationClasses.value]
          }, null), hasTitle && createVNode(VExpansionPanelTitle, {
            "key": "title",
            "collapseIcon": props.collapseIcon,
            "color": props.color,
            "expandIcon": props.expandIcon,
            "hideActions": props.hideActions,
            "ripple": props.ripple
          }, {
            default: () => [slots.title ? slots.title() : props.title]
          }), hasText && createVNode(VExpansionPanelText, {
            "key": "text"
          }, {
            default: () => [slots.text ? slots.text() : props.text]
          }), (_a = slots.default) == null ? void 0 : _a.call(slots)];
        }
      });
    });
    return {};
  }
});
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "MainPage"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, mergeProps({
        varian: "outlined",
        transition: "scroll-x-transition"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(VCardTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\uC7A5\uD0DC\uADDC\uC758 \uD3EC\uD2B8\uD3F4\uB9AC\uC624 \uBAA8\uC74C\uC9D1`);
                } else {
                  return [
                    createTextVNode("\uC7A5\uD0DC\uADDC\uC758 \uD3EC\uD2B8\uD3F4\uB9AC\uC624 \uBAA8\uC74C\uC9D1")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(VExpansionPanels, {
              variant: "accordion",
              multiple: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VExpansionPanel, {
                    title: "\uC18C\uAC1C",
                    text: "\uC774 \uD398\uC774\uC9C0\uB294 \uC81C\uAC00 \uACF5\uBD80\uD558\uBA74\uC11C \uB9CC\uB4E4\uC5B4\uBCF8 \uAC04\uC774 \uD504\uB85C\uC81D\uD2B8/\uD398\uC774\uC9C0 \uB4F1\uC744 \uBAA8\uC544\uB193\uC740 \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4. \uD604\uC7AC \uBCF4\uACE0 \uACC4\uC2E0 \uD398\uC774\uC9C0\uB294 Nuxt.js\uB97C \uC0AC\uC6A9\uD558\uC5EC \uB9CC\uB4E4\uC5C8\uC73C\uBA70 Vuetify\uB97C \uC0AC\uC6A9\uD574 \uB514\uC790\uC778\uC744 \uAD6C\uC131\uD558\uC600\uC2B5\uB2C8\uB2E4.",
                    value: "menu1"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VExpansionPanel, {
                    title: "\uC0AC\uC6A9\uD55C \uC5B8\uC5B4\uB4E4",
                    text: "nodejs, vue, nuxt, javascript, typescript, html, scss",
                    value: "menu2"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VExpansionPanel, {
                    title: "\uC7A5\uAE30\uBAA9\uD45C",
                    text: "react \uBC0F nextjs\uB97C \uC0AC\uC6A9\uD574 \uC1FC\uD551\uBAB0 \uAD6C\uC131\uD558\uAE30, spring boot\uB97C Restapi \uCC98\uB7FC \uC0AC\uC6A9\uD574\uC11C \uD574\uB2F9 react \uD398\uC774\uC9C0\uC640 \uC5F0\uB3D9\uD558\uAE30",
                    value: "menu3"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VExpansionPanel, {
                    title: "\uC8FC\uC18C",
                    text: "\uAE43\uD5C8\uBE0C \uC8FC\uC18C: https://github.com/developertroll?tab=repositories",
                    value: "menu4"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VExpansionPanel, {
                      title: "\uC18C\uAC1C",
                      text: "\uC774 \uD398\uC774\uC9C0\uB294 \uC81C\uAC00 \uACF5\uBD80\uD558\uBA74\uC11C \uB9CC\uB4E4\uC5B4\uBCF8 \uAC04\uC774 \uD504\uB85C\uC81D\uD2B8/\uD398\uC774\uC9C0 \uB4F1\uC744 \uBAA8\uC544\uB193\uC740 \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4. \uD604\uC7AC \uBCF4\uACE0 \uACC4\uC2E0 \uD398\uC774\uC9C0\uB294 Nuxt.js\uB97C \uC0AC\uC6A9\uD558\uC5EC \uB9CC\uB4E4\uC5C8\uC73C\uBA70 Vuetify\uB97C \uC0AC\uC6A9\uD574 \uB514\uC790\uC778\uC744 \uAD6C\uC131\uD558\uC600\uC2B5\uB2C8\uB2E4.",
                      value: "menu1"
                    }),
                    createVNode(VExpansionPanel, {
                      title: "\uC0AC\uC6A9\uD55C \uC5B8\uC5B4\uB4E4",
                      text: "nodejs, vue, nuxt, javascript, typescript, html, scss",
                      value: "menu2"
                    }),
                    createVNode(VExpansionPanel, {
                      title: "\uC7A5\uAE30\uBAA9\uD45C",
                      text: "react \uBC0F nextjs\uB97C \uC0AC\uC6A9\uD574 \uC1FC\uD551\uBAB0 \uAD6C\uC131\uD558\uAE30, spring boot\uB97C Restapi \uCC98\uB7FC \uC0AC\uC6A9\uD574\uC11C \uD574\uB2F9 react \uD398\uC774\uC9C0\uC640 \uC5F0\uB3D9\uD558\uAE30",
                      value: "menu3"
                    }),
                    createVNode(VExpansionPanel, {
                      title: "\uC8FC\uC18C",
                      text: "\uAE43\uD5C8\uBE0C \uC8FC\uC18C: https://github.com/developertroll?tab=repositories",
                      value: "menu4"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "text-center" }, [
                createVNode(VCardTitle, null, {
                  default: withCtx(() => [
                    createTextVNode("\uC7A5\uD0DC\uADDC\uC758 \uD3EC\uD2B8\uD3F4\uB9AC\uC624 \uBAA8\uC74C\uC9D1")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", null, [
                createVNode(VExpansionPanels, {
                  variant: "accordion",
                  multiple: ""
                }, {
                  default: withCtx(() => [
                    createVNode(VExpansionPanel, {
                      title: "\uC18C\uAC1C",
                      text: "\uC774 \uD398\uC774\uC9C0\uB294 \uC81C\uAC00 \uACF5\uBD80\uD558\uBA74\uC11C \uB9CC\uB4E4\uC5B4\uBCF8 \uAC04\uC774 \uD504\uB85C\uC81D\uD2B8/\uD398\uC774\uC9C0 \uB4F1\uC744 \uBAA8\uC544\uB193\uC740 \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4. \uD604\uC7AC \uBCF4\uACE0 \uACC4\uC2E0 \uD398\uC774\uC9C0\uB294 Nuxt.js\uB97C \uC0AC\uC6A9\uD558\uC5EC \uB9CC\uB4E4\uC5C8\uC73C\uBA70 Vuetify\uB97C \uC0AC\uC6A9\uD574 \uB514\uC790\uC778\uC744 \uAD6C\uC131\uD558\uC600\uC2B5\uB2C8\uB2E4.",
                      value: "menu1"
                    }),
                    createVNode(VExpansionPanel, {
                      title: "\uC0AC\uC6A9\uD55C \uC5B8\uC5B4\uB4E4",
                      text: "nodejs, vue, nuxt, javascript, typescript, html, scss",
                      value: "menu2"
                    }),
                    createVNode(VExpansionPanel, {
                      title: "\uC7A5\uAE30\uBAA9\uD45C",
                      text: "react \uBC0F nextjs\uB97C \uC0AC\uC6A9\uD574 \uC1FC\uD551\uBAB0 \uAD6C\uC131\uD558\uAE30, spring boot\uB97C Restapi \uCC98\uB7FC \uC0AC\uC6A9\uD574\uC11C \uD574\uB2F9 react \uD398\uC774\uC9C0\uC640 \uC5F0\uB3D9\uD558\uAE30",
                      value: "menu3"
                    }),
                    createVNode(VExpansionPanel, {
                      title: "\uC8FC\uC18C",
                      text: "\uAE43\uD5C8\uBE0C \uC8FC\uC18C: https://github.com/developertroll?tab=repositories",
                      value: "menu4"
                    })
                  ]),
                  _: 1
                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-QCVVQL9u.mjs.map
