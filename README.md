# EHM Design System Documentation PoC

> **Proof of Concept** comparing three documentation generators for Vue 3 component libraries: VitePress, Storybook, and Histoire.

This project demonstrates how to set up and use **three parallel documentation systems** for a Vue 3 design system, each with different strengths and use cases.

## 📑 Table of Contents

- [EHM Design System Documentation PoC](#ehm-design-system-documentation-poc)
  - [📑 Table of Contents](#-table-of-contents)
  - [Overview](#overview)
  - [Documentation Tools Comparison](#documentation-tools-comparison)
  - [Project Structure](#project-structure)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Local Development](#local-development)
  - [Documentation Tools](#documentation-tools)
    - [VitePress](#vitepress)
    - [Storybook](#storybook)
    - [Histoire](#histoire)
  - [Adding Content](#adding-content)
    - [Component Stories](#component-stories)
    - [Markdown Documentation](#markdown-documentation)
  - [Deployment](#deployment)
    - [GitHub Pages Configuration](#github-pages-configuration)
  - [Commands Reference](#commands-reference)
    - [Development Servers](#development-servers)
    - [Building](#building)
    - [Deployment](#deployment-1)
    - [Dependency Management](#dependency-management)
  - [Architecture](#architecture)
    - [Component Structure](#component-structure)
    - [Story Files](#story-files)
    - [Theme System](#theme-system)
    - [FKUI Relationship](#fkui-relationship)
  - [License](#license)

## Overview

This project is a **documentation generator comparison** that sets up the same Vue 3 design system (EHMDS) across three popular documentation tools:

- **VitePress** - Static site generator for content-focused documentation
- **Storybook** - Component workshop for interactive development and testing
- **Histoire** - Modern alternative to Storybook with Vue 3-first approach

Each tool has its own strengths, and this project demonstrates how to use them in parallel for comprehensive documentation coverage.

## Documentation Tools Comparison

| Feature | VitePress | Storybook | Histoire |
|---------|-----------|-----------|----------|
| **Primary Use** | Content docs | Component development | Component development |
| **Format** | Markdown | CSF Stories + MDX | Vue Stories |
| **Interactive** | Limited | Full | Full |
| **Testing** | None | Built-in (addon-vitest) | None |
| **Speed** | Fast | Medium | Fast |
| **Vue 3 Support** | Native | Via Plugin | Native |
| **Best For** | Guides, API docs | Interactive components | Modern Vue workflows |

## Project Structure

```
ehmds-docs-poc-01/
├── src/                          # Vue 3 design system components
│   ├── components/               # Button.vue, Card.vue
│   │   ├── Button.stories.js     # Storybook stories
│   │   ├── Button.story.vue      # Histoire stories
│   │   └── Card.*
│   ├── docs/                     # Documentation stories
│   │   └── Guides.stories.js     # Storybook docs
│   │   └── Guides.story.vue      # Histoire docs
│   └── assets/                   # Global styles
├── docs/                         # VitePress content
│   ├── .vitepress/               # VitePress config
│   ├── guide/                    # Guide pages
│   │   ├── getting-started.md
│   │   ├── guides.md             # Design guides
│   │   └── installation.md
│   └── components/               # Component documentation
│       ├── button.md
│       └── card.md
├── .storybook/                   # Storybook config
├── histoire.config.ts            # Histoire config
└── scripts/deploy.sh             # Deployment script
```

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/pattespatte/ehmds-docs-poc-01.git
cd ehmds-docs-poc-01

# Install dependencies
npm install
```

### Local Development

Start the documentation tool you want to work with:

```bash
# VitePress - Content documentation
npm run docs:dev

# Storybook - Component development
npm run storybook

# Histoire - Alternative component development
npm run histoire:dev
```

All three tools can run simultaneously on different ports:

- VitePress: `http://localhost:5173`
- Storybook: `http://localhost:6006`
- Histoire: `http://localhost:3001`

## Documentation Tools

### VitePress

**Best for:** User guides, API documentation, getting started guides

VitePress serves as the **main documentation site** with content-focused pages. It uses Markdown files and provides excellent search, navigation, and SEO.

**Location:** `docs/`

**Config:** `docs/.vitepress/config.js`

```javascript
export default defineConfig({
  title: 'EHM Design System',
  description: 'Documentation for EHMDS',
  base: '/ehmds-docs-poc-01/', // GitHub Pages base path

  themeConfig: {
    sidebar: {
      '/guide/': [
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Guides', link: '/guide/guides' }
      ]
    }
  }
})
```

**Adding content:** Create `.md` files in `docs/guide/` or `docs/components/`

### Storybook

**Best for:** Interactive component development, visual testing, documentation

Storybook provides an **interactive component workshop** with hot-reloading, controls, and add-ons for testing and accessibility.

**Location:** `.storybook/`

**Config:** `.storybook/main.js`

```javascript
export default {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y'
  ],
  framework: '@storybook/vue3-vite'
}
```

**Adding stories:** Create `*.stories.js` files next to components

### Histoire

**Best for:** Modern Vue 3 component development, fast storytelling

Histoire is a **modern alternative to Storybook** built with Vue 3 in mind. It offers a clean interface and fast development experience.

**Config:** `histoire.config.ts`

```typescript
export default defineConfig({
  plugins: [HstVue()],
  setupFile: '/src/histoire-setup.ts',
  tree: {
    title: 'EHMDS Design System'
  },
  vite: {
    base: '/ehmds-docs-poc-01/histoire/' // GitHub Pages
  }
})
```

**Adding stories:** Create `*.story.vue` files next to components

## Adding Content

### Component Stories

Each component has parallel story files for both tools:

**Storybook** (`src/components/Button.stories.js`):

```javascript
export default {
  title: 'EHMDS/Button',
  component: EhmdsButton,
};

export const Primary = {
  args: {
    variant: 'ehmds-primary',
    label: 'Primary Button'
  }
};
```

**Histoire** (`src/components/Button.story.vue`):

```vue
<template>
  <Story title="EHMDS/Button">
    <Variant title="Primary">
      <EhmdsButton variant="ehmds-primary" label="Primary Button" />
    </Variant>
  </Story>
</template>
```

### Markdown Documentation

Add content pages that work across all tools:

1. **VitePress** - Create `.md` files in `docs/`
2. **Storybook** - Create `*.stories.js` with `render()` functions returning HTML
3. **Histoire** - Create `*.story.vue` with template content

Example: Adding a "Guides" page across all three tools:

- **VitePress:** `docs/guide/guides.md` (Markdown)
- **Storybook:** `src/docs/Guides.stories.js` (JS with template)
- **Histoire:** `src/docs/Guides.story.vue` (Vue component with styled HTML)

## Deployment

All three documentation systems are deployed to GitHub Pages using a single script:

```bash
npm run deploy
```

This runs `scripts/deploy.sh` which:

1. Builds all three documentation systems
2. Copies them to respective subdirectories
3. Publishes to the `gh-pages` branch

**Live URLs:**

- VitePress: <https://pattespatte.github.io/ehmds-docs-poc-01/>
- Storybook: <https://pattespatte.github.io/ehmds-docs-poc-01/storybook/>
- Histoire: <https://pattespatte.github.io/ehmds-docs-poc-01/histoire/>

### GitHub Pages Configuration

Important: Each tool requires proper base path configuration for GitHub Pages:

- **VitePress:** `base: '/ehmds-docs-poc-01/'` in `docs/.vitepress/config.js`
- **Histoire:** `vite.base: '/ehmds-docs-poc-01/histoire/'` in `histoire.config.ts`
- **Storybook:** No base path (deployed to `/storybook/` subdirectory)

## Commands Reference

### Development Servers

```bash
npm run docs:dev          # VitePress dev server
npm run storybook         # Storybook dev server
npm run histoire:dev      # Histoire dev server
```

### Building

```bash
npm run docs:build        # Build VitePress
npm run build-storybook   # Build Storybook
npm run histoire:build    # Build Histoire
npm run build:all         # Build all three
```

### Deployment

```bash
npm run deploy            # Deploy all to GitHub Pages
```

### Dependency Management

```bash
npm run update:fkui-deps  # Update FKUI dependencies
```

## Architecture

### Component Structure

The demo design system components are located in `src/components/`:

- **Button.vue** - Enhanced button with FKUI + EHMDS variants
- **Card.vue** - Card component with elevation system

Each component:

- Uses `<script setup>` with Composition API
- Has scoped styles with EHMDS CSS custom properties
- Includes JSDoc comments for prop types
- Defines variant constants for validation

### Story Files

The project maintains **parallel story files** for each documentation tool:

```
src/components/
├── Button.vue              # Component
├── Button.stories.js       # Storybook stories
└── Button.story.vue        # Histoire stories
```

### Theme System

The theme system in `src/themes/default.js` defines design tokens:

- Colors (primary, secondary, accent, semantic)
- Typography (font families, sizes, weights)
- Spacing (8px grid system)
- Border radius
- Shadows
- Animation/transition values

CSS custom properties are generated via `generateCSSVariables()` and applied globally when the plugin is installed.

### FKUI Relationship

EHMDS has minimal dependency on FKUI (Försäkringskassan Design System):

- `src/assets/global.css` imports FKUI base styles
- Components define `FKUI_VARIANTS` for naming compatibility
- All styling is self-contained using EHMDS CSS variables
- The system functions identically without FKUI (only CSS imports need removal)

## License

MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by the EHMDS Team
