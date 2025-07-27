#!/bin/bash

# Manual deployment script to avoid E2BIG error
echo "🚀 Starting manual deployment..."

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ ! -d "build" ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build completed successfully!"

# Create gh-pages branch if it doesn't exist
echo "🌿 Setting up gh-pages branch..."
git checkout -b gh-pages 2>/dev/null || git checkout gh-pages

# Remove all files except .git
echo "🧹 Cleaning gh-pages branch..."
git rm -rf . 2>/dev/null || true

# Copy build files
echo "📋 Copying build files..."
cp -r build/* .

# Add all files
echo "➕ Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy portfolio $(date)"

# Push to gh-pages branch
echo "🚀 Pushing to gh-pages branch..."
git push origin gh-pages --force

# Switch back to main branch
echo "🔄 Switching back to main branch..."
git checkout main

echo "✅ Deployment completed!"
echo "🌐 Your portfolio should be live at: https://tintintheguy.github.io/tin-portfolio"
echo "⏰ It may take a few minutes for changes to appear." 