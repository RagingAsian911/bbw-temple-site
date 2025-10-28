#!/bin/bash
echo "🔥 Launching BBW Temple v1.0.0-OneDrop..."

# Ensure Git is initialized
git init

# Add all files
git add .

# Commit with ritual tag
git commit -m "Final invocation: v1.0.0-OneDrop"

# Push to origin
git remote add origin https://github.com/YOUR_USERNAME/bbw-temple.git
git push -u origin main

# Tag the ritual
git tag v1.0.0-OneDrop
git push origin v1.0.0-OneDrop

echo "✅ Stack deployed and sealed."
