import { at as openBlock, au as createElementBlock, ax as createBaseVNode, aD as toDisplayString, av as createCommentVNode, aw as renderSlot, aJ as normalizeStyle, aE as resolveComponent, aF as createBlock, aG as withCtx, aH as createVNode, aI as defineComponent } from "./vendor-D7amjHY-.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$1 = {
  name: "EhmdsCard",
  props: {
    title: {
      type: String,
      default: ""
    },
    background: {
      type: String,
      default: "#fff"
    },
    border: {
      type: String,
      default: "#e0e0e0"
    }
  }
};
const _hoisted_1$1 = {
  key: 0,
  class: "ehmds-card-header"
};
const _hoisted_2 = { class: "ehmds-card-body" };
const _hoisted_3 = {
  key: 1,
  class: "ehmds-card-footer"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: "ehmds-card",
      style: normalizeStyle({ backgroundColor: $props.background, borderColor: $props.border })
    },
    [
      $props.title ? (openBlock(), createElementBlock("header", _hoisted_1$1, [
        createBaseVNode(
          "h3",
          null,
          toDisplayString($props.title),
          1
          /* TEXT */
        )
      ])) : createCommentVNode("v-if", true),
      createBaseVNode("div", _hoisted_2, [
        renderSlot(_ctx.$slots, "default", {}, void 0)
      ]),
      _ctx.$slots.footer ? (openBlock(), createElementBlock("footer", _hoisted_3, [
        renderSlot(_ctx.$slots, "footer", {}, void 0)
      ])) : createCommentVNode("v-if", true)
    ],
    4
    /* STYLE */
  );
}
_sfc_main$1.__file = "src/components/Card.vue";
const EhmdsCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-c6c3362a"], ["__file", "/Users/patrik/repo/ehmds-docs-poc-01/src/components/Card.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Card.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { EhmdsCard };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { style: { "display": "grid", "grid-template-columns": "repeat(auto-fit, minmax(300px, 1fr))", "gap": "1rem" } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "EHMDS/Card" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic" }, {
        default: withCtx(() => [
          createVNode($setup["EhmdsCard"], {
            title: "Card Title",
            background: "#ffffff",
            border: "#e0e0e0"
          }, {
            default: withCtx(() => [..._cache[0] || (_cache[0] = [
              createBaseVNode(
                "p",
                null,
                "This is the card content. You can put any content here including text, images, or other components.",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "No Title" }, {
        default: withCtx(() => [
          createVNode($setup["EhmdsCard"], {
            background: "#ffffff",
            border: "#e0e0e0"
          }, {
            default: withCtx(() => [..._cache[1] || (_cache[1] = [
              createBaseVNode(
                "p",
                null,
                "This card has no title header, just content.",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "With Footer" }, {
        default: withCtx(() => [
          createVNode($setup["EhmdsCard"], {
            title: "Card with Footer",
            background: "#ffffff",
            border: "#e0e0e0"
          }, {
            default: withCtx(() => [..._cache[2] || (_cache[2] = [
              createBaseVNode(
                "p",
                null,
                "This card has a footer section with action buttons.",
                -1
                /* CACHED */
              )
            ])]),
            footer: withCtx(() => [..._cache[3] || (_cache[3] = [
              createBaseVNode(
                "button",
                null,
                "Cancel",
                -1
                /* CACHED */
              ),
              createBaseVNode(
                "button",
                { style: { "margin-left": "8px" } },
                "Confirm",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Custom Styled" }, {
        default: withCtx(() => [
          createVNode($setup["EhmdsCard"], {
            title: "Custom Styled Card",
            background: "#f0f4f8",
            border: "#2c5aa0"
          }, {
            default: withCtx(() => [..._cache[4] || (_cache[4] = [
              createBaseVNode(
                "p",
                null,
                "This card uses EHMDS theme colors for background and border.",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Card Grid" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["EhmdsCard"], {
              title: "Card 1",
              background: "#ffffff",
              border: "#e0e0e0"
            }, {
              default: withCtx(() => [..._cache[5] || (_cache[5] = [
                createBaseVNode(
                  "p",
                  null,
                  "Content for card 1",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            createVNode($setup["EhmdsCard"], {
              title: "Card 2",
              background: "#f0f4f8",
              border: "#2c5aa0"
            }, {
              default: withCtx(() => [..._cache[6] || (_cache[6] = [
                createBaseVNode(
                  "p",
                  null,
                  "Content for card 2",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            createVNode($setup["EhmdsCard"], {
              title: "Card 3",
              background: "#fff5f0",
              border: "#ff6b35"
            }, {
              default: withCtx(() => [..._cache[7] || (_cache[7] = [
                createBaseVNode(
                  "p",
                  null,
                  "Content for card 3",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            })
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
_sfc_main.__file = "src/components/Card.story.vue";
const Card_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/patrik/repo/ehmds-docs-poc-01/src/components/Card.story.vue"]]);
export {
  Card_story as default
};
