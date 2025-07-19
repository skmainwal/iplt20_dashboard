#!/bin/bash

# Render Deployment Script for IPL T20 Cricket Application
echo "🚀 Starting Render deployment preparation..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not found. Please initialize git first:"
    echo "   git init"
    echo "   git add ."
    echo "   git commit -m 'Initial commit'"
    exit 1
fi

# Check if all changes are committed
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  You have uncommitted changes. Please commit them first:"
    echo "   git add ."
    echo "   git commit -m 'Prepare for Render deployment'"
    exit 1
fi

# Test build
echo "🔨 Testing production build..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Please fix the issues before deploying."
    exit 1
fi

# Test server
echo "🧪 Testing server..."
timeout 10s npm run server &
SERVER_PID=$!

sleep 3

# Test API endpoint
curl -s http://localhost:5000/api/competitions/men > /dev/null
if [ $? -eq 0 ]; then
    echo "✅ Server test successful!"
else
    echo "❌ Server test failed. Please check your server configuration."
    kill $SERVER_PID 2>/dev/null
    exit 1
fi

kill $SERVER_PID 2>/dev/null

echo ""
echo "🎉 Your application is ready for Render deployment!"
echo ""
echo "📋 Next steps:"
echo "1. Go to [render.com](https://render.com)"
echo "2. Sign up/Login to your account"
echo "3. Click 'New +' → 'Blueprint'"
echo "4. Connect your GitHub repository"
echo "5. Render will auto-detect services from render.yaml"
echo "6. Click 'Create Blueprint'"
echo ""
echo "🔧 After deployment, set environment variables:"
echo "   Backend:"
echo "   - NODE_ENV=production"
echo "   - PORT=10000"
echo ""
echo "   Frontend:"
echo "   - REACT_APP_API_URL=https://iplt20-backend.onrender.com"
echo ""
echo "📖 For detailed instructions, see:"
echo "   - RENDER_QUICK_START.md (Quick guide)"
echo "   - RENDER_DEPLOYMENT.md (Detailed guide)"
echo ""
echo "🌐 Your app URLs will be:"
echo "   - Frontend: https://iplt20-frontend.onrender.com"
echo "   - Backend: https://iplt20-backend.onrender.com"
echo ""
echo "Good luck! 🚀" 