import { aE as resolveComponent, at as openBlock, aF as createBlock, aG as withCtx, aH as createVNode, ax as createBaseVNode, aC as createTextVNode, aI as defineComponent } from "./vendor-D7amjHY-.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Guides.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Documentation/Guides" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Design System Guides" }, {
        default: withCtx(() => [..._cache[0] || (_cache[0] = [
          createBaseVNode(
            "div",
            { class: "guides-container" },
            [
              createBaseVNode("h1", null, "Guides"),
              createBaseVNode("p", null, "Here you will find guides for working with the EHM Design System."),
              createBaseVNode("h2", null, "Design Principles"),
              createBaseVNode("p", null, "The EHM Design System is built on the following principles:"),
              createBaseVNode("h3", null, "1. Accessibility First"),
              createBaseVNode("p", null, "All components are designed with accessibility in mind. We follow WCAG 2.2 AA guidelines and ensure our components are usable for everyone."),
              createBaseVNode("h3", null, "2. Consistency"),
              createBaseVNode("p", null, "Use the same components in the same way throughout your application. This creates a consistent and predictable user experience."),
              createBaseVNode("h3", null, "3. Simplicity"),
              createBaseVNode("p", null, "Our components are simple to use and understand. We avoid unnecessary complexity and focus on what's important."),
              createBaseVNode("h2", null, "Color Usage"),
              createBaseVNode("h3", null, "Primary Color"),
              createBaseVNode("p", null, [
                createTextVNode("Use the primary dark blue color ("),
                createBaseVNode("code", null, "hsla(228, 46%, 48%, 1)"),
                createTextVNode(") for:")
              ]),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "Primary buttons"),
                createBaseVNode("li", null, "Links"),
                createBaseVNode("li", null, "Active states"),
                createBaseVNode("li", null, "Accent color")
              ]),
              createBaseVNode("h3", null, "Secondary Color"),
              createBaseVNode("p", null, [
                createTextVNode("Use the secondary light blue color ("),
                createBaseVNode("code", null, "hsla(219, 29%, 53%, 1)"),
                createTextVNode(") for:")
              ]),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "Hover states"),
                createBaseVNode("li", null, "Secondary interactive elements")
              ]),
              createBaseVNode("h2", null, "Typography"),
              createBaseVNode("h3", null, "Headings"),
              createBaseVNode("p", null, [
                createTextVNode("Use "),
                createBaseVNode("strong", null, "Roboto Slab"),
                createTextVNode(" for main headings (H1). This creates a clear visual hierarchy.")
              ]),
              createBaseVNode("h3", null, "Body Text"),
              createBaseVNode("p", null, [
                createTextVNode("Use "),
                createBaseVNode("strong", null, "Noto Sans"),
                createTextVNode(" for all body text. It's a readable font that works well on all screen sizes.")
              ]),
              createBaseVNode("h2", null, "Component Selection"),
              createBaseVNode("h3", null, "When should I use a button?"),
              createBaseVNode("p", null, "Use buttons for:"),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "Actions that save, submit, or delete data"),
                createBaseVNode("li", null, "Navigation to a new page"),
                createBaseVNode("li", null, "Triggering a modal or dialog")
              ]),
              createBaseVNode("p", null, "Use links for:"),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "Navigation to another page"),
                createBaseVNode("li", null, "Fetching more information")
              ]),
              createBaseVNode("h3", null, "When should I use a card?"),
              createBaseVNode("p", null, "Use cards for:"),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "Grouping related content"),
                createBaseVNode("li", null, "Presenting information in a scannable format"),
                createBaseVNode("li", null, "Creating clickable panels")
              ]),
              createBaseVNode("h2", null, "Best Practices"),
              createBaseVNode("ol", null, [
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Use only one primary button per view"),
                  createTextVNode(" - This helps the user focus on the most important action")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Provide clear labels"),
                  createTextVNode(' - Avoid generic labels like "OK" or "Done"')
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Test on real devices"),
                  createTextVNode(" - Ensure your components work on different screen sizes")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Write clear text"),
                  createTextVNode(" - Use simple and clear language")
                ])
              ])
            ],
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
  });
}
_sfc_main.__file = "src/docs/Guides.story.vue";
const Guides_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9a9e3526"], ["__file", "/Users/patrik/repo/ehmds-docs-poc-01/src/docs/Guides.story.vue"]]);
export {
  Guides_story as default
};
