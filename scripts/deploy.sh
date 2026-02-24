#!/bin/bash

# Deploy script for EHMDS Documentation
# Builds and deploys all three documentation tools to GitHub Pages

set -e

echo "🚀 Starting EHMDS Documentation deployment..."

# Configuration
REPO_URL=$(git config --get remote.origin.url)
BASE_DIR=".deploy-temp"
BASE_PATH="/ehmds-docs-poc-01"

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf $BASE_DIR
mkdir -p $BASE_DIR

# Build VitePress (main site at root)
echo "📚 Building VitePress..."
npm run docs:build
cp -r docs/.vitepress/dist $BASE_DIR/

# Build Storybook (to /storybook subdirectory)
echo "📕 Building Storybook..."
npm run build-storybook
mkdir -p $BASE_DIR/storybook
cp -r storybook-static/* $BASE_DIR/storybook/

# Build Histoire (to /histoire subdirectory)
echo "📖 Building Histoire..."
npm run histoire:build
mkdir -p $BASE_DIR/histoire
cp -r .histoire/dist/* $BASE_DIR/histoire/

# Create navigation page (index) if it doesn't exist in VitePress
cat >$BASE_DIR/.nojekyll <<EOF
EOF

# Deploy to GitHub Pages
echo "📤 Deploying to GitHub Pages..."
cd $BASE_DIR

if [ -z "$GH_TOKEN" ]; then
	# Use gh-pages CLI
	npx gh-pages --dist . --message "Deploy EHMDS documentation" --repo "$REPO_URL"
else
	# Manual git push with token
	git init
	git checkout -b gh-pages
	git add .
	git commit -m "Deploy EHMDS documentation"
	git push -f "https://x-access-token:$GH_TOKEN@github.com/pattespatte/ehmds-docs-poc-01.git" gh-pages
fi

cd ..
rm -rf $BASE_DIR

echo "✅ Deployment complete!"
echo ""
echo "🌐 Documentation URLs:"
echo "  • VitePress:   https://pattespatte.github.io/ehmds-docs-poc-01/"
echo "  • Storybook:  https://pattespatte.github.io/ehmds-docs-poc-01/storybook/"
echo "  • Histoire:   https://pattespatte.github.io/ehmds-docs-poc-01/histoire/"
