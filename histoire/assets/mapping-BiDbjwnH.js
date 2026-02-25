const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Button.story-B1SFqYai.js","assets/vendor-D7amjHY-.js","assets/_plugin-vue_export-helper-1tPrXgE0.js","assets/Card.story-Bj5kp7I9.js","assets/HomeView.vue-DhPJr3oX.js","assets/story-Cz4GQpQy.js","assets/StoryView.vue-DeXsfbr6.js","assets/responsive-Bp3G1Fj7.js","assets/BaseEmpty.vue-BEf0a62x.js","assets/state-BlQZFlXN.js"])))=>i.map(i=>d[i]);
import { O as defineAsyncComponent, P as useDark, Q as useToggle, k as watch, R as createRouter, S as createWebHistory, U as createWebHashHistory, d as defineComponent, n as ref, V as watchEffect, W as markRaw, y as createBlock, X as mergeProps, Y as resolveDynamicComponent, g as createCommentVNode, o as openBlock, A as reactive } from "./vendor-D7amjHY-.js";
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/ehmds-docs-poc-01/histoire/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    let allSettled = function(promises$2) {
      return Promise.all(promises$2.map((p) => Promise.resolve(p).then((value$1) => ({
        status: "fulfilled",
        value: value$1
      }), (reason) => ({
        status: "rejected",
        reason
      }))));
    };
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
    const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
    promise = allSettled(deps.map((dep) => {
      dep = assetsURL(dep);
      if (dep in seen) return;
      seen[dep] = true;
      const isCss = dep.endsWith(".css");
      const cssSelector = isCss ? '[rel="stylesheet"]' : "";
      if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) return;
      const link = document.createElement("link");
      link.rel = isCss ? "stylesheet" : scriptRel;
      if (!isCss) link.as = "script";
      link.crossOrigin = "";
      link.href = dep;
      if (cspNonce) link.setAttribute("nonce", cspNonce);
      document.head.appendChild(link);
      if (isCss) return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(/* @__PURE__ */ new Error(`Unable to preload CSS for ${dep}`)));
      });
    }));
  }
  function handlePreloadError(err$2) {
    const e$1 = new Event("vite:preloadError", { cancelable: true });
    e$1.payload = err$2;
    window.dispatchEvent(e$1);
    if (!e$1.defaultPrevented) throw err$2;
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
const Comp0 = defineAsyncComponent(() => __vitePreload(() => import("./Button.story-B1SFqYai.js"), true ? __vite__mapDeps([0,1,2]) : void 0));
const Comp1 = defineAsyncComponent(() => __vitePreload(() => import("./Card.story-Bj5kp7I9.js"), true ? __vite__mapDeps([3,1,2]) : void 0));
let files = [
  { "id": "src-components-button-story-vue", "path": ["EHMDS", "Button"], "filePath": "src/components/Button.story.vue", "story": { "id": "src-components-button-story-vue", "title": "Button", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "src-components-button-story-vue-0", "title": "EHMDS Primary" }, { "id": "src-components-button-story-vue-1", "title": "EHMDS Secondary" }, { "id": "src-components-button-story-vue-2", "title": "EHMDS Accent" }, { "id": "src-components-button-story-vue-3", "title": "FKUI Primary" }, { "id": "src-components-button-story-vue-4", "title": "FKUI Secondary" }, { "id": "src-components-button-story-vue-5", "title": "FKUI Tertiary" }, { "id": "src-components-button-story-vue-6", "title": "Sizes" }, { "id": "src-components-button-story-vue-7", "title": "Rounded" }, { "id": "src-components-button-story-vue-8", "title": "With Shadow" }, { "id": "src-components-button-story-vue-9", "title": "Full Width" }, { "id": "src-components-button-story-vue-10", "title": "Disabled" }, { "id": "src-components-button-story-vue-11", "title": "Loading" }, { "id": "src-components-button-story-vue-12", "title": "All Variants" }] }, "supportPluginId": "vue3", "index": 0, component: Comp0, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-button-story-vue-B3daJbd6.js"), true ? [] : void 0) },
  { "id": "src-components-card-story-vue", "path": ["EHMDS", "Card"], "filePath": "src/components/Card.story.vue", "story": { "id": "src-components-card-story-vue", "title": "Card", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "src-components-card-story-vue-0", "title": "Basic" }, { "id": "src-components-card-story-vue-1", "title": "No Title" }, { "id": "src-components-card-story-vue-2", "title": "With Footer" }, { "id": "src-components-card-story-vue-3", "title": "Custom Styled" }, { "id": "src-components-card-story-vue-4", "title": "Card Grid" }] }, "supportPluginId": "vue3", "index": 1, component: Comp1, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-card-story-vue-D973P3-w.js"), true ? [] : void 0) }
];
let tree = [{ "title": "EHMDS", "children": [{ "title": "Button", "index": 0 }, { "title": "Card", "index": 1 }] }];
const config = { "plugins": [{ "name": "builtin:tailwind-tokens" }, { "name": "builtin:vanilla-support", "supportPlugin": { "id": "vanilla", "moduleName": "/Users/patrik/repo/ehmds-docs-poc-01/node_modules/histoire/dist/node/builtin-plugins/vanilla-support", "setupFn": "setupVanilla" } }, { "name": "@histoire/plugin-vue", "supportPlugin": { "id": "vue3", "moduleName": "@histoire/plugin-vue", "setupFn": "setupVue3", "importStoriesPrepend": "import { defineAsyncComponent as defineAsyncComponentVue3 } from 'vue'" }, "commands": [{ "id": "histoire:plugin-vue:generate-story", "label": "Generate Vue 3 story from component", "icon": "https://vuejs.org/logo.svg", "searchText": "generate create", "clientSetupFile": "@histoire/plugin-vue/dist/commands/generate-story.client.js" }] }], "outDir": "/Users/patrik/repo/ehmds-docs-poc-01/.histoire/dist", "storyMatch": ["**/*.story.vue", "**/*.story.svelte"], "storyIgnored": ["**/node_modules/**", "**/dist/**"], "supportMatch": [{ "id": "vanilla", "patterns": ["**/*.js"], "pluginIds": ["vanilla"] }, { "id": "vue", "patterns": ["**/*.vue"], "pluginIds": ["vue3"] }], "tree": { "file": "title", "order": "asc", "title": "EHMDS Design System" }, "theme": { "title": "Histoire", "colors": { "primary": { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b" }, "gray": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "750": "#323238", "800": "#27272a", "850": "#1f1f21", "900": "#18181b", "950": "#101012" } }, "defaultColorScheme": "auto", "storeColorScheme": true, "darkClass": "dark" }, "responsivePresets": [{ "label": "Mobile (Small)", "width": 320, "height": 560 }, { "label": "Mobile (Medium)", "width": 360, "height": 640 }, { "label": "Mobile (Large)", "width": 414, "height": 896 }, { "label": "Tablet", "width": 768, "height": 1024 }, { "label": "Laptop (Small)", "width": 1024, "height": null }, { "label": "Laptop (Large)", "width": 1366, "height": null }, { "label": "Desktop", "width": 1920, "height": null }, { "label": "4K", "width": 3840, "height": null }], "backgroundPresets": [{ "label": "Transparent", "color": "transparent", "contrastColor": "#333" }, { "label": "White", "color": "#fff", "contrastColor": "#333" }, { "label": "Light gray", "color": "#aaa", "contrastColor": "#000" }, { "label": "Dark gray", "color": "#333", "contrastColor": "#fff" }, { "label": "Black", "color": "#000", "contrastColor": "#eee" }], "sandboxDarkClass": "dark", "routerMode": "history", "build": { "excludeFromVendorsChunk": [] }, "viteIgnorePlugins": [], "setupFile": "/src/histoire-setup.ts" };
const logos = {};
const histoireConfig = config;
const customLogos = logos;
const isDark = useDark({
  valueDark: "htw-dark",
  initialValue: histoireConfig.theme.defaultColorScheme,
  storageKey: "histoire-color-scheme",
  storage: histoireConfig.theme.storeColorScheme ? localStorage : sessionStorage
});
const toggleDark = useToggle(isDark);
function applyDarkToControls() {
  window.__hst_controls_dark?.forEach((ref2) => {
    ref2.value = isDark.value;
  });
}
watch(isDark, () => {
  applyDarkToControls();
}, {
  immediate: true
});
window.__hst_controls_dark_ready = () => {
  applyDarkToControls();
};
const base = "/ehmds-docs-poc-01/histoire/";
function createRouterHistory() {
  switch (histoireConfig.routerMode) {
    case "hash":
      return createWebHashHistory(base);
    case "history":
    default:
      return createWebHistory(base);
  }
}
const router = createRouter({
  history: createRouterHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => __vitePreload(() => import("./HomeView.vue-DhPJr3oX.js"), true ? __vite__mapDeps([4,5,1]) : void 0)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.vue-DeXsfbr6.js"), true ? __vite__mapDeps([6,1,5,7,8,9]) : void 0)
    }
  ]
});
const clientSupportPlugins = {
  "vanilla": () => __vitePreload(() => import("./vendor-D7amjHY-.js").then((n) => n.aN), true ? [] : void 0),
  "vue3": () => __vitePreload(() => import("./vendor-D7amjHY-.js").then((n) => n.aO), true ? [] : void 0)
};
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "GenericMountStory",
  props: {
    story: {}
  },
  setup(__props) {
    const props = __props;
    const mountComponent = ref(null);
    watchEffect(async () => {
      const clientPlugin = clientSupportPlugins[props.story.file?.supportPluginId];
      if (clientPlugin) {
        const pluginModule = await clientPlugin();
        mountComponent.value = markRaw(pluginModule.MountStory);
      }
    });
    return (_ctx, _cache) => {
      return mountComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(mountComponent.value), mergeProps({
        key: 0,
        class: "histoire-generic-mount-story",
        story: __props.story
      }, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
    };
  }
});
function mapFile(file, existingFile) {
  let result;
  {
    result = {
      ...file,
      component: markRaw(file.component),
      story: {
        ...file.story,
        title: file.story.title,
        file: markRaw(file),
        variants: file.story.variants.map((v) => mapVariant(v)),
        slots: () => ({})
      }
    };
  }
  return result;
}
function mapVariant(variant, existingVariant) {
  let result;
  {
    result = {
      ...variant,
      state: reactive({
        _hPropState: {},
        _hPropDefs: {}
      }),
      setupApp: null,
      slots: () => ({}),
      previewReady: false
    };
  }
  return result;
}
export {
  __vitePreload as _,
  tree as a,
  _sfc_main as b,
  customLogos as c,
  clientSupportPlugins as d,
  base as e,
  files as f,
  histoireConfig as h,
  isDark as i,
  mapFile as m,
  router as r,
  toggleDark as t
};
