# DUYDUY MVP - Configuration & Deployment Guide

🚀 Complete setup guide for DUYDUY MVP using Next.js and Supabase

## 📋 Prerequisites

- Node.js 18+ installed
- Git repository set up
- Supabase account created
- Vercel account (or preferred deployment platform)

## 🔧 Environment Setup

### 1. Local Environment Configuration

1. **Copy environment template:**
   \`\`\`bash
   cp .env.local.example .env.local
   \`\`\`

2. **Fill in your Supabase credentials in `.env.local`:**
   \`\`\`env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
   \`\`\`

3. **Get your Supabase credentials:**
   - Go to [Supabase Dashboard](https://supabase.com/dashboard)
   - Select your project
   - Go to Settings → API
   - Copy the Project URL and API keys

### 2. Install Dependencies

\`\`\`bash
npm install
\`\`\`

## 🗄️ Database Setup

### 1. Run Database Migration

1. **Open Supabase SQL Editor:**
   - Go to your Supabase Dashboard
   - Navigate to SQL Editor
   - Create a new query

2. **Copy and run the migration script:**
   - Copy the contents of `scripts/create-tables.sql`
   - Paste into SQL Editor
   - Click "Run"
   - You should see: "Database schema created successfully! 🎉"

### 2. Verify Database Setup

The migration script creates:
- ✅ Users table (extends Supabase auth)
- ✅ Posts table with full content management
- ✅ Categories and post categorization
- ✅ Comments system with threading
- ✅ Likes and follows functionality
- ✅ Row Level Security (RLS) policies
- ✅ Performance indexes
- ✅ Sample data

## 🚀 Deployment Setup

### Option 1: Vercel Deployment (Recommended)

1. **Connect your repository to Vercel:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your Git repository

2. **Configure Environment Variables:**
   - In Vercel project settings → Environment Variables
   - Add the following variables for **All Environments**:
     \`\`\`
     NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
     SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
     \`\`\`

3. **Deploy:**
   - Click "Deploy"
   - Vercel will automatically deploy on every push to main branch

### Option 2: GitHub Actions CI/CD

The project includes a complete CI/CD pipeline in `.github/workflows/ci-cd.yml`:

1. **Set up GitHub Secrets:**
   - Go to your repository → Settings → Secrets and variables → Actions
   - Add the following secrets:
     \`\`\`
     NEXT_PUBLIC_SUPABASE_URL
     NEXT_PUBLIC_SUPABASE_ANON_KEY
     SUPABASE_SERVICE_ROLE_KEY
     VERCEL_TOKEN
     VERCEL_ORG_ID
     VERCEL_PROJECT_ID
     \`\`\`

2. **Pipeline Features:**
   - ✅ Automated testing on PR
   - ✅ Type checking and linting
   - ✅ Preview deployments for PRs
   - ✅ Production deployment on main branch
   - ✅ Database migration hooks

## ✅ Verification Steps

### 1. Local Development Test

\`\`\`bash
# Start development server
npm run dev

# Open http://localhost:3000
# You should see the DUYDUY MVP dashboard
\`\`\`

### 2. Connection Test

1. **Visit your local app at http://localhost:3000**
2. **Check the "Supabase Connection Test" card:**
   - Environment Variables should show "Set"
   - Click "Test Connection" button
   - Should show "Connection successful!"

### 3. Database Verification

\`\`\`sql
-- Run in Supabase SQL Editor to verify tables
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public';
\`\`\`

Expected tables:
- users
- posts
- categories
- post_categories
- comments
- likes
- follows

### 4. Production Deployment Test

1. **Push to main branch:**
   \`\`\`bash
   git add .
   git commit -m "feat: initial DUYDUY MVP setup"
   git push origin main
   \`\`\`

2. **Check deployment:**
   - Vercel should automatically deploy
   - Check deployment logs for any errors
   - Visit your production URL

## 📁 Project Structure

\`\`\`
duyduy-mvp/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main dashboard page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── connection-test.tsx # Supabase connection test
├── utils/
│   └── supabase/         # Supabase client utilities
│       ├── client.ts     # Client-side Supabase client
│       └── server.ts     # Server-side Supabase client
├── scripts/
│   └── create-tables.sql # Database migration script
├── .github/
│   └── workflows/
│       └── ci-cd.yml     # GitHub Actions pipeline
├── .env.local.example    # Environment variables template
├── vercel.json          # Vercel configuration
└── README.md           # This file
\`\`\`

## 🔒 Security Considerations

1. **Environment Variables:**
   - Never commit `.env.local` to Git
   - Use different keys for development/production
   - Rotate keys regularly

2. **Database Security:**
   - RLS policies are enabled by default
   - Service role key should only be used server-side
   - Regular security audits recommended

3. **Deployment Security:**
   - Use Vercel's environment variable encryption
   - Enable branch protection rules
   - Review deployment logs regularly

## 🐛 Troubleshooting

### Common Issues:

1. **"Connection failed" error:**
   - Check if environment variables are set correctly
   - Verify Supabase project is active
   - Check network connectivity

2. **Database migration fails:**
   - Ensure you have proper permissions
   - Check for syntax errors in SQL
   - Verify Supabase project is not paused

3. **Deployment fails:**
   - Check build logs in Vercel dashboard
   - Verify all environment variables are set
   - Ensure dependencies are properly installed

### Getting Help:

- Check Supabase documentation: https://supabase.com/docs
- Vercel documentation: https://vercel.com/docs
- Create an issue in the repository

## 🎯 Next Steps

After successful setup, you can start developing features:

1. **Authentication System** - Implement user registration/login
2. **Content Management** - Build post creation and editing
3. **User Interface** - Design the main application UI
4. **API Endpoints** - Create necessary API routes
5. **Testing** - Add comprehensive test coverage

## 📞 Support

For technical support or questions about this setup:
- Create an issue in the repository
- Check the troubleshooting section above
- Review Supabase and Vercel documentation

---

**Happy coding! 🚀**
---
chore: trigger CI
