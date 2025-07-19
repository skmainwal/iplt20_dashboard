# 🚀 Render Quick Start Guide

## Prerequisites
1. **Render Account**: Sign up at [render.com](https://render.com)
2. **GitHub Repository**: Your code must be on GitHub
3. **Credit Card**: Required for verification (free tier available)

## Quick Deploy (10 minutes)

### 1. Prepare Your Repository
```bash
# Ensure all changes are committed
git add .
git commit -m "Prepare for Render deployment"
git push origin main
```

### 2. Deploy Using Blueprint (Recommended)

#### Step 1: Go to Render
1. Visit [render.com](https://render.com)
2. Sign up/Login to your account
3. Click "New +" → "Blueprint"

#### Step 2: Connect Repository
1. Connect your GitHub account
2. Select your repository: `iplt20_dashboard`
3. Render will auto-detect services from `render.yaml`

#### Step 3: Review Configuration
Render will show you both services:

**Backend Service:**
- Name: `iplt20-backend`
- Type: Web Service
- Build: `cd server && npm install`
- Start: `cd server && npm start`

**Frontend Service:**
- Name: `iplt20-frontend`
- Type: Static Site
- Build: `npm install && npm run build`
- Publish: `build`

#### Step 4: Deploy
1. Click "Create Blueprint"
2. Wait for deployment (5-10 minutes)
3. Both services will be deployed automatically

### 3. Set Environment Variables

After deployment, set these environment variables:

#### Backend Service
Go to your backend service → Environment → Add:
- `NODE_ENV`: `production`
- `PORT`: `10000`

#### Frontend Service
Go to your frontend service → Environment → Add:
- `REACT_APP_API_URL`: `https://iplt20-backend.onrender.com`

### 4. Test Your Application

#### Backend Test
```bash
curl https://iplt20-backend.onrender.com/api/competitions/men
```

#### Frontend Test
Visit: `https://iplt20-frontend.onrender.com`

## ✅ What's Included

### Backend Features
- ✅ Express.js server
- ✅ API endpoints for cricket data
- ✅ CORS enabled
- ✅ Production configuration

### Frontend Features
- ✅ React app with Tailwind CSS
- ✅ Live score updates
- ✅ Match schedule
- ✅ Points table
- ✅ Player statistics
- ✅ Responsive design

### Deployment Features
- ✅ Automatic build process
- ✅ Environment variable management
- ✅ SSL certificates included
- ✅ Custom domains support
- ✅ Automatic deployments

## 🔧 Configuration Files

- **`render.yaml`**: Defines both services
- **`server/package.json`**: Backend dependencies
- **`package.json`**: Frontend dependencies and scripts

## 📱 Your App URLs

After deployment:
- **Frontend**: `https://iplt20-frontend.onrender.com`
- **Backend**: `https://iplt20-backend.onrender.com`

## 🛠️ Useful Commands

```bash
# Check deployment status
# Go to Render dashboard → Services

# View logs
# Go to service → Logs tab

# Test API locally
curl http://localhost:5000/api/competitions/men

# Test production API
curl https://iplt20-backend.onrender.com/api/competitions/men
```

## 💰 Pricing

### Free Tier
- **Web Services**: 750 hours/month
- **Static Sites**: Unlimited
- **Bandwidth**: 100GB/month
- **Perfect for development and small projects**

### Paid Plans
- **Individual**: $7/month - 2,500 hours
- **Team**: $19/month - 10,000 hours
- **Business**: $99/month - 50,000 hours

## 🆘 Troubleshooting

### Build Failures
1. Check build logs in Render dashboard
2. Ensure all dependencies are in package.json
3. Verify Node.js version compatibility

### API Connection Issues
1. Verify `REACT_APP_API_URL` is set correctly
2. Check CORS configuration
3. Ensure backend is running

### Environment Variables
1. Verify all variables are set
2. Check variable names match exactly
3. Restart services after changing variables

## 📊 Monitoring

### Render Dashboard
- Monitor service health
- View real-time logs
- Check performance metrics
- Manage environment variables

### Logs
- Access logs from Render dashboard
- Real-time log streaming
- Error tracking and debugging

## 🔒 Security

### SSL Certificates
- Automatic SSL for all services
- Custom domain support
- Security headers included

### Environment Variables
- Secure environment variable management
- Never commit sensitive data
- Easy variable updates

## 🎯 Next Steps

After successful deployment:
1. **Test all features**:
   - Points table
   - Match schedule
   - Top run scorers
   - Live scores

2. **Set up custom domain** (optional)
3. **Configure monitoring** and alerts
4. **Optimize performance**
5. **Set up CI/CD** pipeline

## 📖 Detailed Guide

For more detailed information, see:
- [RENDER_DEPLOYMENT.md](./RENDER_DEPLOYMENT.md) - Complete deployment guide
- [DEPLOYMENT.md](./DEPLOYMENT.md) - General deployment options

---

**Your IPL T20 Cricket Application is ready for Render! 🏏** 