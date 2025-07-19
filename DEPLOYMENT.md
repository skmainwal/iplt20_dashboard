# IPL T20 Cricket Application - Deployment Guide

This guide covers multiple deployment options for your React + Node.js application.

## 🚀 Quick Deploy Options

### Option 1: Render (Recommended)
**Best for**: Easy setup, free tier available, all-in-one deployment
**Time**: 10-15 minutes

1. **Sign up at [render.com](https://render.com)**
2. **Deploy using Blueprint**:
   - Click "New +" → "Blueprint"
   - Connect your GitHub repo
   - Render will auto-detect services from `render.yaml`
   - Click "Create Blueprint"

3. **Set Environment Variables**:
   - Backend: `NODE_ENV=production`, `PORT=10000`
   - Frontend: `REACT_APP_API_URL=https://your-backend-url.onrender.com`

### Option 2: Railway (All-in-One)
**Best for**: Simple deployment, good performance
**Time**: 5-10 minutes

1. **Sign up at [railway.app](https://railway.app)**
2. **Deploy both services**:
   - Connect your GitHub repo
   - Railway will auto-detect both frontend and backend
   - Set environment variables:
     - `REACT_APP_API_URL=https://your-backend-url.railway.app`
   - Deploy!

### Option 3: Vercel + Railway
**Best for**: Best performance, separate frontend/backend
**Time**: 15-20 minutes

1. **Deploy Backend to Railway**:
   - Follow Railway steps above for backend only

2. **Deploy Frontend to Vercel**:
   - Sign up at [vercel.com](https://vercel.com)
   - Import your GitHub repo
   - Set environment variable: `REACT_APP_API_URL=https://your-backend-url.railway.app`
   - Deploy!

## 📋 Pre-Deployment Checklist

### ✅ Backend Preparation
- [x] Server package.json created
- [x] Environment variables configured
- [x] CORS enabled
- [x] Port configuration set

### ✅ Frontend Preparation
- [x] API configuration centralized
- [x] Environment variables set up
- [x] Build script configured
- [x] Proxy removed for production

### ✅ Configuration Files
- [x] `vercel.json` for Vercel deployment
- [x] `render.yaml` for Render deployment
- [x] `Procfile` for Heroku deployment

## 🔧 Environment Variables

### Backend Variables
```bash
NODE_ENV=production
PORT=5000
```

### Frontend Variables
```bash
REACT_APP_API_URL=https://your-backend-url.com
```

## 🛠️ Manual Deployment Steps

### 1. Prepare Your Repository
```bash
# Ensure all changes are committed
git add .
git commit -m "Prepare for deployment"
git push origin main
```

### 2. Test Locally
```bash
# Test production build
npm run build
npm run server
```

### 3. Choose Your Platform

#### Render Deployment
1. Go to [render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: `iplt20-backend`
   - **Build Command**: `cd server && npm install`
   - **Start Command**: `cd server && npm start`
   - **Environment**: Node
5. Add environment variables:
   - `NODE_ENV`: `production`
6. Click "Create Web Service"

#### Railway Deployment
1. Go to [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Railway will auto-detect your services
5. Configure environment variables
6. Deploy!

#### Vercel Deployment
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Create React App
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
5. Add environment variable: `REACT_APP_API_URL`
6. Deploy!

## 🔍 Post-Deployment Verification

### Check Backend
```bash
curl https://your-backend-url.com/api/competitions/men
```

### Check Frontend
- Visit your frontend URL
- Test all features:
  - Points table
  - Match schedule
  - Top run scorers
  - Live scores

### Common Issues & Solutions

#### CORS Errors
- Ensure backend has CORS configured
- Check that frontend URL is in allowed origins

#### API Connection Issues
- Verify `REACT_APP_API_URL` is correct
- Check backend is running and accessible

#### Build Failures
- Ensure all dependencies are in package.json
- Check Node.js version compatibility

## 📊 Performance Optimization

### Backend
- Enable compression
- Add caching headers
- Use CDN for static assets

### Frontend
- Enable gzip compression
- Optimize images
- Use lazy loading

## 🔒 Security Considerations

### Environment Variables
- Never commit API keys
- Use platform-specific secret management
- Rotate keys regularly

### CORS Configuration
- Limit allowed origins
- Use specific domains, not wildcards

## 📞 Support

If you encounter issues:
1. Check the platform's documentation
2. Review deployment logs
3. Test locally first
4. Check environment variables

## 🎯 Recommended Deployment Flow

1. **Start with Render** (easiest)
2. **Test thoroughly**
3. **Optimize performance**
4. **Consider Vercel + Railway** for production

---

**Happy Deploying! 🚀** 