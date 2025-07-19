# Render Deployment Guide - All-in-One

This guide will help you deploy both the React frontend and Node.js backend on Render using their all-in-one approach.

## 🚀 Quick Deploy Steps

### 1. Prerequisites
- Render account (sign up at [render.com](https://render.com))
- GitHub repository ready
- Credit card for verification (free tier available)

### 2. Deploy Using Blueprint (Recommended)

#### Step 1: Connect Repository
1. Go to [render.com](https://render.com)
2. Click "New +" → "Blueprint"
3. Connect your GitHub repository
4. Select your repository: `iplt20_dashboard`

#### Step 2: Configure Services
Render will automatically detect both services from `render.yaml`:

**Backend Service:**
- **Name**: `iplt20-backend`
- **Environment**: Node.js
- **Build Command**: `cd server && npm install`
- **Start Command**: `cd server && npm start`
- **Port**: 10000

**Frontend Service:**
- **Name**: `iplt20-frontend`
- **Environment**: Static Site
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `build`

#### Step 3: Set Environment Variables
Backend Environment Variables:
- `NODE_ENV`: `production`
- `PORT`: `10000`

Frontend Environment Variables:
- `REACT_APP_API_URL`: `https://iplt20-backend.onrender.com`

#### Step 4: Deploy
Click "Create Blueprint" and Render will deploy both services automatically.

### 3. Manual Deploy (Alternative)

#### Deploy Backend First
1. Go to [render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: `iplt20-backend`
   - **Environment**: Node.js
   - **Build Command**: `cd server && npm install`
   - **Start Command**: `cd server && npm start`
   - **Port**: 10000
5. Add Environment Variables:
   - `NODE_ENV`: `production`
6. Click "Create Web Service"

#### Deploy Frontend
1. Click "New +" → "Static Site"
2. Connect your GitHub repository
3. Configure:
   - **Name**: `iplt20-frontend`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `build`
4. Add Environment Variable:
   - `REACT_APP_API_URL`: `https://iplt20-backend.onrender.com`
5. Click "Create Static Site"

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
- [x] render.yaml configured

### ✅ Configuration Files
- [x] `render.yaml` for Render deployment
- [x] `server/package.json` for backend
- [x] Environment variables template

## 🔧 Environment Variables

### Backend Variables
```bash
NODE_ENV=production
PORT=10000
```

### Frontend Variables
```bash
REACT_APP_API_URL=https://iplt20-backend.onrender.com
```

## 🛠️ Manual Deployment Steps

### 1. Prepare Your Repository
```bash
# Ensure all changes are committed
git add .
git commit -m "Prepare for Render deployment"
git push origin main
```

### 2. Test Locally
```bash
# Test production build
npm run build
npm run server
```

### 3. Deploy on Render

#### Option A: Blueprint Deploy (Recommended)
1. Go to [render.com](https://render.com)
2. Click "New +" → "Blueprint"
3. Connect your GitHub repository
4. Render will auto-detect services from `render.yaml`
5. Review configuration and click "Create Blueprint"

#### Option B: Manual Deploy
1. **Deploy Backend**:
   - Create new Web Service
   - Set build command: `cd server && npm install`
   - Set start command: `cd server && npm start`
   - Add environment variables

2. **Deploy Frontend**:
   - Create new Static Site
   - Set build command: `npm install && npm run build`
   - Set publish directory: `build`
   - Add environment variable: `REACT_APP_API_URL`

## 🔍 Post-Deployment Verification

### 1. Check Backend
```bash
# Test API endpoint
curl https://iplt20-backend.onrender.com/api/competitions/men
```

### 2. Check Frontend
- Visit your frontend URL: `https://iplt20-frontend.onrender.com`
- Test all features:
  - Points table
  - Match schedule
  - Top run scorers
  - Live scores

### 3. Check Logs
- Go to Render dashboard
- Click on each service
- Check "Logs" tab for any errors

## 🛠️ Troubleshooting

### Common Issues

#### Build Failures
- Check build logs in Render dashboard
- Ensure all dependencies are in package.json
- Verify Node.js version compatibility

#### API Connection Issues
- Verify `REACT_APP_API_URL` is correct
- Check CORS configuration
- Ensure backend is running

#### Environment Variables
- Verify all environment variables are set
- Check variable names match exactly
- Restart services after changing variables

### Debugging Commands
```bash
# Check backend logs
# Go to Render dashboard → Backend service → Logs

# Check frontend logs
# Go to Render dashboard → Frontend service → Logs

# Test API locally
curl http://localhost:5000/api/competitions/men
```

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
- Use Render's environment variable management
- Rotate keys regularly

### CORS Configuration
- Configure CORS for your domain
- Limit allowed origins
- Use specific domains, not wildcards

## 💰 Render Pricing

### Free Tier
- **Web Services**: 750 hours/month
- **Static Sites**: Unlimited
- **Bandwidth**: 100GB/month

### Paid Plans
- **Individual**: $7/month - 2,500 hours
- **Team**: $19/month - 10,000 hours
- **Business**: $99/month - 50,000 hours

## 📞 Support

If you encounter issues:
1. Check Render documentation
2. Review deployment logs
3. Test locally first
4. Contact Render support

## 🎯 Next Steps

After successful deployment:
1. Set up custom domain (optional)
2. Configure SSL certificates
3. Set up monitoring and alerts
4. Optimize performance
5. Set up CI/CD pipeline

## 🚀 Quick Deploy Script

```bash
# 1. Ensure repository is ready
git add .
git commit -m "Prepare for Render deployment"
git push origin main

# 2. Go to Render and deploy using Blueprint
# 3. Set environment variables
# 4. Wait for deployment to complete
# 5. Test your application
```

---

**Happy Deploying on Render! 🚀** 