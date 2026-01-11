# GitHub Pages Deployment Guide

## Step-by-Step Instructions to Fix 404 Error

### Step 1: Enable GitHub Pages in Repository Settings

1. Go to your GitHub repository: `https://github.com/dharsan-devaraj/portfolio`
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select **"GitHub Actions"** (NOT "Deploy from a branch")
5. Click **Save**

### Step 2: Push Your Code

Make sure all your code is pushed to the `main` branch:

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

### Step 3: Check GitHub Actions

1. Go to your repository on GitHub
2. Click on the **Actions** tab
3. You should see a workflow run called "Deploy to GitHub Pages"
4. Wait for it to complete (green checkmark)

### Step 4: Verify Deployment

1. Go back to **Settings** → **Pages**
2. You should see: "Your site is live at https://dharsan-devaraj.github.io/portfolio"
3. Wait 1-2 minutes after the workflow completes for DNS to propagate
4. Visit: https://dharsan-devaraj.github.io/portfolio

## Troubleshooting

### If you still see 404:

1. **Check the repository name:**
   - Repository must be named exactly: `portfolio`
   - Username must be: `dharsan-devaraj`
   - If different, update `vite.config.ts` base path accordingly

2. **Check GitHub Actions:**
   - Go to Actions tab
   - Check if the workflow ran successfully
   - If it failed, check the error logs

3. **Clear browser cache:**
   - Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
   - Or try incognito/private mode

4. **Wait a few minutes:**
   - GitHub Pages can take 1-5 minutes to update after deployment

5. **Check the workflow file:**
   - Make sure `.github/workflows/deploy.yml` exists
   - Make sure it's committed to the repository

### Manual Deployment (Alternative)

If GitHub Actions doesn't work:

1. Build locally:
   ```bash
   npm run build
   ```

2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add to package.json scripts:
   ```json
   "deploy": "gh-pages -d dist"
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. In repository Settings → Pages, select "Deploy from a branch" → "gh-pages" → "/ (root)"

## Important Notes

- The site URL is: `https://dharsan-devaraj.github.io/portfolio`
- Make sure the repository is **public** (or you have GitHub Pro for private repos)
- The workflow runs automatically on every push to `main` branch
- Changes may take 1-5 minutes to appear after deployment
