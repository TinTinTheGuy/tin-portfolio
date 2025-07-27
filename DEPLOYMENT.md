# 🚀 Deploy Your Portfolio Online (FREE)

## **GitHub Pages Deployment (Recommended)**

### **Step 1: Create GitHub Repository**
1. Go to [GitHub.com](https://github.com)
2. Click "New repository"
3. Name it: `tin-portfolio`
4. Make it **Public** (required for free hosting)
5. Don't initialize with README (we'll push existing code)

### **Step 2: Push Your Code**
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio commit"

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/tin-portfolio.git

# Push to GitHub
git push -u origin main
```

### **Step 3: Deploy to GitHub Pages**
```bash
# Deploy your portfolio
npm run deploy
```

### **Step 4: Enable GitHub Pages**
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "gh-pages" branch
6. Click "Save"

### **Step 5: Your Portfolio is Live!**
Your portfolio will be available at:
`https://YOUR_USERNAME.github.io/tin-portfolio`

---

## **Alternative Free Hosting Options:**

### **1. Netlify (Also Great)**
- Drag & drop deployment
- Custom domain support
- Automatic builds from GitHub

### **2. Vercel (Excellent for React)**
- Zero configuration
- Automatic deployments
- Great performance

### **3. Surge.sh (Simple)**
```bash
npm install -g surge
surge
```

---

## **Custom Domain (Optional)**
1. Buy a domain (Namecheap, GoDaddy, etc.)
2. Add CNAME record pointing to `YOUR_USERNAME.github.io`
3. Update GitHub Pages settings with your domain

---

## **Troubleshooting:**
- **Build errors:** Check console for missing dependencies
- **404 errors:** Make sure homepage in package.json is correct
- **Images not loading:** Ensure all images are in public folder
- **Styling issues:** Clear browser cache

Your portfolio will be live and accessible to anyone with the URL! 🎉 