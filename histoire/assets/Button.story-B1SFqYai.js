import { at as openBlock, au as createElementBlock, av as createCommentVNode, aw as renderSlot, ax as createBaseVNode, ay as normalizeClass, az as mergeProps, aA as toRefs, aB as computed, aC as createTextVNode, aD as toDisplayString, aE as resolveComponent, aF as createBlock, aG as withCtx, aH as createVNode, aI as defineComponent } from "./vendor-D7amjHY-.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const FKUI_VARIANTS = ["primary", "secondary", "tertiary", "success", "warning", "error"];
const EHMDS_VARIANTS = ["ehmds-primary", "ehmds-secondary", "ehmds-accent"];
const VALID_VARIANTS = [...FKUI_VARIANTS, ...EHMDS_VARIANTS];
const VALID_SIZES = ["small", "medium", "large"];
const VALID_TYPES = ["button", "submit", "reset"];
const _sfc_main$1 = /* @__PURE__ */ Object.assign({
  name: "EhmdsButton",
  inheritAttrs: false
}, {
  __name: "Button",
  props: {
    /**
     * Button variant - extends FKUI variants with EHMDS custom variants
     * @type {'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'ehmds-primary' | 'ehmds-secondary' | 'ehmds-accent'}
     */
    variant: {
      type: String,
      default: "primary",
      validator: (value) => {
        const isValid = VALID_VARIANTS.includes(value);
        if (!isValid) {
          console.warn(`[EhmdsButton] Invalid variant '${value}'. Expected one of: ${VALID_VARIANTS.join(", ")}`);
        }
        return isValid;
      }
    },
    /**
     * Button size
     * @type {'small' | 'medium' | 'large'}
     */
    size: {
      type: String,
      default: "medium",
      validator: (value) => {
        const isValid = VALID_SIZES.includes(value);
        if (!isValid) {
          console.warn(`[EhmdsButton] Invalid size '${value}'. Expected one of: ${VALID_SIZES.join(", ")}`);
        }
        return isValid;
      }
    },
    /**
     * Button label text - used as fallback when no slot content is provided
     */
    label: {
      type: String,
      default: ""
    },
    /**
     * Button type attribute for form handling
     * @type {'button' | 'submit' | 'reset'}
     */
    type: {
      type: String,
      default: "button",
      validator: (value) => {
        const isValid = VALID_TYPES.includes(value);
        if (!isValid) {
          console.warn(`[EhmdsButton] Invalid type '${value}'. Expected one of: ${VALID_TYPES.join(", ")}`);
        }
        return isValid;
      }
    },
    /**
     * Disabled state
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Add rounded corners (EHMDS enhancement)
     */
    rounded: {
      type: Boolean,
      default: false
    },
    /**
     * Add shadow effect (EHMDS enhancement)
     */
    shadow: {
      type: Boolean,
      default: false
    },
    /**
     * Full width button
     */
    fullWidth: {
      type: Boolean,
      default: false
    },
    /**
     * Loading state - prevents interaction and shows loading indicator
     */
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    /**
     * Emitted when button is clicked
     * @param {MouseEvent} event - The click event
     */
    click: (event) => event instanceof MouseEvent
  },
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { variant, disabled, rounded, shadow, fullWidth, loading, size } = toRefs(props);
    const buttonClasses = computed(() => {
      const classes = [
        "ehmds-button",
        `ehmds-button--${variant.value}`,
        `ehmds-button--${size.value}`
      ];
      if (rounded.value) classes.push("ehmds-button--rounded");
      if (shadow.value) classes.push("ehmds-button--shadow");
      if (fullWidth.value) classes.push("ehmds-button--full-width");
      if (loading.value) classes.push("ehmds-button--loading");
      if (disabled.value) classes.push("ehmds-button--disabled");
      return classes;
    });
    const handleClick = (event) => {
      if (disabled.value || loading.value) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      emit("click", event);
    };
    __expose({
      focus: () => {
      }
    });
    const __returned__ = { FKUI_VARIANTS, EHMDS_VARIANTS, VALID_VARIANTS, VALID_SIZES, VALID_TYPES, props, emit, variant, disabled, rounded, shadow, fullWidth, loading, size, buttonClasses, handleClick, computed, toRefs };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = ["type", "disabled"];
const _hoisted_2$1 = {
  key: 0,
  class: "ehmds-button__loading",
  "aria-hidden": "true"
};
const _hoisted_3$1 = {
  key: 1,
  class: "ehmds-button__icon"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", mergeProps({
    class: $setup.buttonClasses,
    type: $props.type,
    disabled: $setup.disabled || $setup.loading
  }, _ctx.$attrs, { onClick: $setup.handleClick }), [
    createCommentVNode(" Loading indicator "),
    $setup.loading ? (openBlock(), createElementBlock("span", _hoisted_2$1)) : createCommentVNode("v-if", true),
    createCommentVNode(" Icon slot - if provided "),
    _ctx.$slots.icon && !$setup.loading ? (openBlock(), createElementBlock("span", _hoisted_3$1, [
      renderSlot(_ctx.$slots, "icon", {}, void 0)
    ])) : createCommentVNode("v-if", true),
    createCommentVNode(" Button content "),
    createBaseVNode(
      "span",
      {
        class: normalizeClass(["ehmds-button__content", { "ehmds-button__content--loading": $setup.loading }])
      },
      [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode(
            toDisplayString($props.label),
            1
            /* TEXT */
          )
        ])
      ],
      2
      /* CLASS */
    )
  ], 16, _hoisted_1$1);
}
_sfc_main$1.__file = "src/components/Button.vue";
const EhmdsButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-3c9d0845"], ["__file", "/Users/patrik/repo/ehmds-docs-poc-01/src/components/Button.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Button.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { EhmdsButton };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { style: { "display": "flex", "gap": "1rem", "align-items": "center" } };
const _hoisted_2 = { style: { "display": "flex", "flex-direction": "column", "gap": "1rem", "padding": "2rem" } };
const _hoisted_3 = { style: { "display": "flex", "gap": "1rem", "flex-wrap": "wrap" } };
const _hoisted_4 = { style: { "display": "flex", "gap": "1rem", "flex-wrap": "wrap" } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "EHMDS/Button" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "EHMDS Primary" }, {
        default: withCtx(() => [
          createVNode($setup["EhmdsButton"], {
            variant: "ehmds-primary",
            label: "Primary Button"
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "EHMDS Secondary" }, {
        default: withCtx(() => [
          createVNode($setup["EhmdsButton"], {
            variant: "ehmds-secondary",
            label: "Secondary Button"
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "EHMDS Accent" }, {
        default: withCtx(() => [
          createVNode($setup["EhmdsButton"], {
            variant: "ehmds-accent",
            label: "Accent Button"
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "FKUI Primary" }, {
        default: withCtx(() => [
          createVNode($setup["EhmdsButton"], {
            variant: "primary",
            label: "FKUI Primary"
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "FKUI Secondary" }, {
        default: withCtx(() => [
          createVNode($setup["EhmdsButton"], {
            variant: "secondary",
            label: "FKUI Secondary"
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "FKUI Tertiary" }, {
        default: withCtx(() => [
          createVNode($setup["EhmdsButton"], {
            variant: "tertiary",
            label: "FKUI Tertiary"
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Sizes" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["EhmdsButton"], {
              variant: "ehmds-primary",
              size: "small",
              label: "Small"
            }),
            createVNode($setup["EhmdsButton"], {
              variant: "ehmds-primary",
              size: "medium",
              label: "Medium"
            }),
            createVNode($setup["EhmdsButton"], {
              variant: "ehmds-primary",
              size: "large",
              label: "Large"
            })
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Rounded" }, {
        default: withCtx(() => [
          createVNode($setup["EhmdsButton"], {
            variant: "ehmds-primary",
            label: "Rounded Button",
            rounded: ""
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "With Shadow" }, {
        default: withCtx(() => [
          createVNode($setup["EhmdsButton"], {
            variant: "ehmds-primary",
            label: "Shadow Button",
            shadow: ""
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Full Width" }, {
        default: withCtx(() => [
          createVNode($setup["EhmdsButton"], {
            variant: "ehmds-primary",
            label: "Full Width Button",
            "full-width": ""
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Disabled" }, {
        default: withCtx(() => [
          createVNode($setup["EhmdsButton"], {
            variant: "ehmds-primary",
            label: "Disabled Button",
            disabled: ""
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Loading" }, {
        default: withCtx(() => [
          createVNode($setup["EhmdsButton"], {
            variant: "ehmds-primary",
            label: "Loading Button",
            loading: ""
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "All Variants" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", null, [
              _cache[0] || (_cache[0] = createBaseVNode(
                "h3",
                null,
                "EHMDS Variants",
                -1
                /* CACHED */
              )),
              createBaseVNode("div", _hoisted_3, [
                createVNode($setup["EhmdsButton"], {
                  variant: "ehmds-primary",
                  label: "EHMDS Primary"
                }),
                createVNode($setup["EhmdsButton"], {
                  variant: "ehmds-secondary",
                  label: "EHMDS Secondary"
                }),
                createVNode($setup["EhmdsButton"], {
                  variant: "ehmds-accent",
                  label: "EHMDS Accent"
                })
              ])
            ]),
            createBaseVNode("div", null, [
              _cache[1] || (_cache[1] = createBaseVNode(
                "h3",
                null,
                "FKUI Variants",
                -1
                /* CACHED */
              )),
              createBaseVNode("div", _hoisted_4, [
                createVNode($setup["EhmdsButton"], {
                  variant: "primary",
                  label: "Primary"
                }),
                createVNode($setup["EhmdsButton"], {
                  variant: "secondary",
                  label: "Secondary"
                }),
                createVNode($setup["EhmdsButton"], {
                  variant: "tertiary",
                  label: "Tertiary"
                }),
                createVNode($setup["EhmdsButton"], {
                  variant: "success",
                  label: "Success"
                }),
                createVNode($setup["EhmdsButton"], {
                  variant: "warning",
                  label: "Warning"
                }),
                createVNode($setup["EhmdsButton"], {
                  variant: "error",
                  label: "Error"
                })
              ])
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Button.story.vue";
const Button_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/patrik/repo/ehmds-docs-poc-01/src/components/Button.story.vue"]]);
export {
  Button_story as default
};
