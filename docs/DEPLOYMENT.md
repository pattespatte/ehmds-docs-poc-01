# Deployment Guide

EHMDS documentation uses three different documentation tools deployed side-by-side on GitHub Pages.

## Documentation Tools

| Tool | Purpose | Local URL | Production URL |
|------|---------|-----------|----------------|
| **VitePress** | Main documentation site | `http://localhost:5173/` | `/` |
| **Storybook** | Component documentation | `http://localhost:6006/` | `/storybook/` |
| **Histoire** | Alternative component docs | `http://localhost:6006/` | `/histoire/` |

## Local Development

Run all three tools simultaneously (each on different ports):

```bash
# Terminal 1 - VitePress (main docs)
npm run docs:dev

# Terminal 2 - Storybook
npm run storybook

# Terminal 3 - Histoire (when not running Storybook)
npm run histoire:dev
```

## Building

Build all three documentation sites:

```bash
npm run build:all
```

Or build individually:

```bash
npm run docs:build        # VitePress → docs/.vitepress/dist
npm run build-storybook   # Storybook → storybook-static
npm run histoire:build    # Histoire → histoire-dist
```

## Deployment

### Option 1: Automated via GitHub Actions

1. Push to `main` branch
2. GitHub Actions automatically builds and deploys to GitHub Pages
3. Visit `https://pattespatte.github.io/ehmds-docs-poc-01/`

### Option 2: Manual Deployment

```bash
npm run deploy
```

This script:
1. Builds all three tools
2. Combines them into a single deploy directory
3. Pushes to the `gh-pages` branch using `gh-pages` CLI

## GitHub Pages Configuration

Ensure your GitHub repository settings are configured:

1. Go to **Settings** → **Pages**
2. Source: **GitHub Actions**

## File Structure After Deployment

```
gh-pages branch
├── .nojekyll
├── index.html              # VitePress (main)
├── assets/                 # VitePress assets
├── storybook/              # Storybook subdirectory
│   ├── index.html
│   └── ...
└── histoire/               # Histoire subdirectory
    ├── index.html
    └── ...
```

## Navigation

VitePress includes navigation links to Storybook and Histoire in the header navbar.

## Troubleshooting

### Storybook/Histoire not found on GitHub Pages

Ensure the `base` path is correctly set in configs:
- VitePress: `base: '/ehmds-docs-poc-01/'`
- Storybook: Uses relative paths by default
- Histoire: `build.baseUrl: '/ehmds-docs-poc-01/histoire/'`

### Build errors

Run with legacy peer deps (for Vite 7 compatibility):

```bash
npm install --legacy-peer-deps
```
