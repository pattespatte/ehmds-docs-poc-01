# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

EHM Design System (EHMDS) is a Vue 3 design system built on top of FKUI (Försäkringskassan Design System). It provides enhanced UI components with additional styling options while maintaining design token compatibility with FKUI. The project includes comprehensive documentation across three tools: VitePress (main docs), Storybook, and Histoire.

## Key Architecture

### Component Structure

- **Components**: Located in `src/components/`. Each Vue component (e.g., `Button.vue`, `Card.vue`) has its own scoped styling using EHMDS CSS custom properties.
- **Entry Point**: `src/index.js` exports all components, themes, and a Vue plugin install function that globally registers components and applies CSS variables.
- **Theme System**: `src/themes/default.js` defines the design tokens (colors, typography, spacing, shadows) and generates CSS custom properties via `generateCSSVariables()`.

### FKUI Relationship

EHMDS has a **minimal dependency** on FKUI - primarily cosmetic:

- `src/assets/global.css` imports FKUI base styles and CSS variables
- Components define `FKUI_VARIANTS` constants for naming compatibility but do not import FKUI components
- All component styling is self-contained using EHMDS CSS variables
- The system will function identically if FKUI is removed (only the CSS imports in global.css would need removal)

### Documentation Tools

The project uses **three parallel documentation systems**:

1. **VitePress** (`docs/`): Main documentation site with guides and component docs. Base path: `/ehmds-docs-poc-01/`
2. **Storybook** (`.storybook/`): Component stories with `.stories.js` files. Includes addon-vitest for testing and addon-a11y for accessibility.
3. **Histoire** (`histoire.config.ts`): Alternative component storytelling with `.story.vue` files. Base path: `/ehmds-docs-poc-01/histoire/`

All three are deployed to GitHub Pages and linked via navigation.

## Common Commands

### Development

```bash
npm run demo              # Start Vite demo app (port 3000)
npm run storybook         # Start Storybook (port 6006)
npm run histoire:dev      # Start Histoire
npm run docs:dev          # Start VitePress documentation
```

### Building & Previewing

```bash
npm run docs:build        # Build VitePress docs
npm run build-storybook   # Build Storybook
npm run histoire:build    # Build Histoire
npm run build:all         # Build all three documentation systems
```

### Deployment

```bash
npm run deploy            # Deploy all documentation to GitHub Pages via scripts/deploy.sh
```

### Dependency Management

```bash
npm run update:fkui-deps  # Update FKUI dependencies to latest versions (runs scripts/update-fkui-deps.js)
```

### Testing

The project uses Vitest with Playwright for browser testing, integrated via Storybook's addon-vitest:

```bash
npm run test              # Run tests (configured in vite.config.js)
```

## Important Conventions

### Component Development

- Use `<script setup>` with Composition API
- Define variant constants (e.g., `FKUI_VARIANTS`, `EHMDS_VARIANTS`) outside setup for use in validators
- Include JSDoc comments for prop types with `@type` annotations for IDE autocomplete
- Use `defineOptions({ name: 'EhmdsXxx', inheritAttrs: false })` for component naming
- All styling uses scoped styles with EHMDS CSS custom properties (e.g., `var(--ehmds-color-primary)`)

### Story Files

- **Storybook**: Use `*.stories.js` files following Storybook CSF format
- **Histoire**: Use `*.story.vue` files with `<template>` syntax
- Both exist in parallel for the same components

### Theme Customization

The theme system generates CSS custom properties from the theme object. When adding new theme values:

1. Add to `src/themes/default.js` theme object
2. Update `generateCSSVariables()` to map the value to a CSS variable
3. Update `src/assets/global.css` with a fallback value

### GitHub Pages Configuration

All documentation tools require base path configuration for GitHub Pages deployment:

- VitePress: `base: '/ehmds-docs-poc-01/'` in `docs/.vitepress/config.js`
- Histoire: `base: '/ehmds-docs-poc-01/histoire/'` in `histoire.config.ts`
- Storybook: No base path needed (deployed to `/storybook/` subdirectory)
