#!/bin/bash

# CEO Portfolio Deployment Script
echo "🚀 Deploying Dr. Tofazzal Hossain CEO Portfolio..."

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Deploy to Vercel
    echo "🌐 Deploying to Vercel..."
    npx vercel --prod
    
    if [ $? -eq 0 ]; then
        echo "🎉 Deployment successful!"
        echo "📋 Your CEO portfolio is now live!"
        echo ""
        echo "🔗 Production URL: https://tofazzalhossainbhuiyan.vercel.app"
        echo "📊 Analytics: https://vercel.com/arswe/tofazzalhossainbhuiyan"
        echo ""
        echo "✨ Next Steps:"
        echo "   1. Set up custom domain (optional)"
        echo "   2. Configure environment variables (if needed)"
        echo "   3. Set up analytics tracking"
        echo "   4. Test all functionality"
    else
        echo "❌ Deployment failed!"
        exit 1
    fi
else
    echo "❌ Build failed!"
    exit 1
fi
