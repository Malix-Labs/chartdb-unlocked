# GitHub Pages Setup Instructions

This repository now includes a GitHub Actions workflow that automatically builds and deploys the app to GitHub Pages.

## How It Works

The workflow (`.github/workflows/deploy-pages.yaml`) automatically:
1. Builds the app when changes are pushed to the `main` branch
2. Deploys the build artifacts to a `gh-pages` branch
3. Makes the app available at: **https://malix-labs.github.io/chartdb-unlocked/**

## One-Time Configuration Required

After this PR is merged, you need to configure GitHub Pages in your repository settings:

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages** (in the left sidebar)
3. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `gh-pages` and `/ (root)`
4. Click **Save**

That's it! GitHub Pages will be enabled.

## First Deployment

- The workflow will run automatically on the next push to `main`
- You can also trigger it manually:
  1. Go to **Actions** tab
  2. Select "Deploy to GitHub Pages" workflow
  3. Click "Run workflow" → "Run workflow"

## Accessing Your App

Once deployed, your app will be available at:
- **URL**: https://malix-labs.github.io/chartdb-unlocked/

## Workflow Details

The workflow uses:
- **Node.js 24.x** (as specified in `.nvmrc`)
- **peaceiris/actions-gh-pages@v4** - A popular GitHub action that simplifies gh-pages deployment
- **Base path configuration** - Automatically sets `/chartdb-unlocked/` as the base URL for assets

## Manual Trigger

The workflow includes `workflow_dispatch` trigger, allowing manual runs from the GitHub Actions UI.

## Notes

- The workflow only runs on pushes to `main` branch
- Build artifacts are NOT committed to your main branch (they go to `gh-pages` branch)
- The `.nojekyll` file prevents GitHub Pages from processing files with Jekyll
