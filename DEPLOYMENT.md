# Deployment Guide

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run locally**
   ```bash
   npm start
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

## Netlify Deployment

### Method 1: Drag & Drop
1. Run `npm run build`
2. Go to [Netlify](https://netlify.com)
3. Drag the `build` folder to the deploy area

### Method 2: Git Integration
1. Push code to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

## Vercel Deployment

1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Deploy automatically

## Environment Variables

No environment variables required for this project.

## Build Commands

- **Development**: `npm start`
- **Production Build**: `npm run build`
- **Test**: `npm test`

## Troubleshooting

- Ensure Node.js version 14+ is installed
- Clear npm cache if build fails: `npm cache clean --force`
- Delete node_modules and reinstall: `rm -rf node_modules && npm install`