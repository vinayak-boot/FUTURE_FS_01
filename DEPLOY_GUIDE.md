# How to Deploy to GitHub Pages

Since GitHub Pages only hosts **static websites** (Frontend), your React Frontend will work, but your Node.js Backend (Contact Form) **will not work** unless hosted separately (e.g., on Render.com).

## Step 1: Prepare Frontend
1.  Open `client/package.json`.
2.  Add `"homepage": "https://<YOUR_GITHUB_USERNAME>.github.io/<REPO_NAME>",` at the top level.
3.  Add these scripts to `scripts`:
    ```json
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
    ```

## Step 2: Install gh-pages
Run this in your `client` folder:
```bash
npm install gh-pages --save-dev
```

## Step 3: Push to GitHub
1.  Create a new Repository on GitHub.
2.  Initialize Git in your project root (if not already):
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin <YOUR_REPO_URL>
    git push -u origin main
    ```

## Step 4: Deploy
Run this in your `client` folder:
```bash
npm run deploy
```

## Important Note on Backend
For the contact form to work on the live site:
1.  Deploy your `server` folder to a service like **Render** or **Railway**.
2.  Update your Frontend's API call in `Contact.jsx` to point to the live server URL (e.g., `https://my-portfolio-api.onrender.com/api/contact`) instead of `localhost:5000`.
