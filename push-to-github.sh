#!/bin/bash
# Script to push Zenvora Tiling website to GitHub

echo "🚀 Pushing Zenvora Tiling website to GitHub..."
echo "Repository: https://github.com/lubosik/Zenvora-Tiling.git"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Not in the project directory"
    exit 1
fi

# Show current status
echo "📊 Current git status:"
git status --short
echo ""

# Show what will be pushed
echo "📦 Commits to push:"
git log origin/main..HEAD --oneline 2>/dev/null || git log --oneline -5
echo ""

# Try to push
echo "⬆️  Attempting to push..."
if git push -u origin main; then
    echo ""
    echo "✅ Success! Website pushed to GitHub"
    echo "🌐 View at: https://github.com/lubosik/Zenvora-Tiling"
else
    echo ""
    echo "❌ Push failed. This is usually an authentication issue."
    echo ""
    echo "🔐 To fix authentication, try one of these:"
    echo ""
    echo "Option 1: Use GitHub CLI (recommended)"
    echo "  1. Install: brew install gh"
    echo "  2. Authenticate: gh auth login"
    echo "  3. Run this script again"
    echo ""
    echo "Option 2: Use Personal Access Token"
    echo "  1. Go to: https://github.com/settings/tokens"
    echo "  2. Generate new token (classic) with 'repo' scope"
    echo "  3. Run: git push -u origin main"
    echo "  4. When prompted, use token as password"
    echo ""
    echo "Option 3: Use SSH (if you have SSH keys set up)"
    echo "  1. Run: git remote set-url origin git@github.com:lubosik/Zenvora-Tiling.git"
    echo "  2. Run: git push -u origin main"
    echo ""
    exit 1
fi
