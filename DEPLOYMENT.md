# Deployment Guide - Petra Nešić Portfolio Demo

## 🚀 Quick Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy the project
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? petra-portfolio-demo
# - Directory? ./
# - Build command? npm run build
# - Output directory? dist
# - Development command? npm run dev

# For production deployment
vercel --prod
```

### Option 2: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository (GitHub/GitLab/Bitbucket)
4. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click "Deploy"

## 📦 Alternative: Deploy to Netlify

### Via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# For production
netlify deploy --prod
```

### Via Netlify Dashboard

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository
4. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click "Deploy site"

## 🛠️ Build Configuration

The project is pre-configured for deployment. Build settings:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

## 🌐 Custom Domain (Optional)

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS records

## 📊 Performance Tips

Before deploying, consider:

1. **Image Optimization**: Replace placeholder images with optimized sports graphics
2. **Font Loading**: The demo uses Google Fonts (Inter) - consider self-hosting for better performance
3. **Analytics**: Add Google Analytics or Vercel Analytics for tracking

## 🔧 Environment Variables

No environment variables are required for the demo. If you add:
- Contact form (Formspree, etc.)
- Analytics
- CMS integration

Create a `.env` file:

```env
VITE_FORMSPREE_ID=your_id_here
VITE_GA_TRACKING_ID=your_ga_id
```

## ✅ Pre-Deployment Checklist

- [ ] Test locally: `npm run dev`
- [ ] Build successfully: `npm run build`
- [ ] Preview build: `npm run preview`
- [ ] Update portfolio images in `src/data/portfolio.js`
- [ ] Update contact information
- [ ] Test on mobile devices
- [ ] Check all links work

## 🎯 Sharing the Demo

Once deployed, share with Petra:

```
Subject: Portfolio Website Demo - Petra Nešić

Hi Petra,

I've created a demo portfolio website for you. Check it out here:
👉 [Your Vercel URL]

Features:
✨ Explosive Hero section with your branding
🎨 Portfolio gallery with category filters (Football/Basketball/Tennis)
📱 Fully responsive design
⚡ Smooth animations and velocity trails effect
🎯 Modern purple & electric mint color scheme

This is a demo to show you what's possible. If you like it, we can:
- Add your real graphics
- Customize colors/fonts
- Add more features
- Set up a custom domain

Let me know what you think!
```

## 🐛 Troubleshooting

**Build fails:**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Tailwind styles not working:**
- Ensure `tailwind.config.js` exists
- Check `postcss.config.js` is configured
- Verify `@tailwind` directives in `src/index.css`

**Port already in use:**
```bash
# Kill existing processes
taskkill /F /IM node.exe
# Or on Mac/Linux
killall node
```

## 📞 Support

For deployment issues:
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)

---

**Happy Deploying!** 🚀
