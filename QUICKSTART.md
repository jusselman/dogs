# Quick Setup Guide

## 🚀 Get Running in 5 Minutes

### Step 1: Install Dependencies
```bash
cd dogs-app
npm install
```

### Step 2: Set Up PostgreSQL

**Option A: Local PostgreSQL**
```bash
# macOS (using Homebrew)
brew install postgresql
brew services start postgresql
createdb dogs_db

# Ubuntu/Debian
sudo apt-get install postgresql
sudo service postgresql start
sudo -u postgres createdb dogs_db
```

**Option B: Docker**
```bash
docker run --name dogs-postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=dogs_db -p 5432:5432 -d postgres
```

**Option C: Cloud (Railway)**
1. Go to https://railway.app
2. Create new project → Provision PostgreSQL
3. Copy the DATABASE_URL

### Step 3: Configure Environment
```bash
cp .env.example .env
```

Edit `.env` and update these key values:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/dogs_db?schema=public"

# For Gmail (recommended for testing)
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-app-password"  # Get from Google Account → Security → App passwords

WALKER_EMAIL="your-walker-email@example.com"
WALKER_PHONE="+15551234567"
```

### Step 4: Initialize Database
```bash
npx prisma generate
npx prisma migrate dev --name init
```

### Step 5: Run the App
```bash
npm run dev
```

Open http://localhost:3000 🎉

## Testing the Registration Flow

1. Go to http://localhost:3000
2. Click "Register"
3. Fill out the form with test data
4. Submit
5. Check the email address you set as WALKER_EMAIL - you should receive a registration notification
6. The client will also receive a confirmation email

## Viewing the Database

Use Prisma Studio for a visual database interface:
```bash
npx prisma studio
```

This opens at http://localhost:5555

## Common Issues

**"Can't connect to database"**
- Make sure PostgreSQL is running
- Check your DATABASE_URL in .env
- Try: `psql -U postgres -c "SELECT 1"` to test connection

**"Email not sending"**
- Use Gmail with an App Password (not your regular password)
- Or use a service like SendGrid for production

**"Module not found"**
- Run: `npm install` again
- Clear cache: `rm -rf .next && npm run dev`

## Next Steps

After basic setup works:
1. Test the registration flow
2. Customize the branding/colors
3. Set up a production database (Railway, Vercel, Supabase)
4. Deploy to Vercel
5. Build the calendar booking system (next phase)

## Need Help?

Check the full README.md for detailed documentation and troubleshooting.
