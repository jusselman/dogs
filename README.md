# 🐕 Dogs - Dog Walking Service Web Application

A professional dog walking service web application built with Next.js, TypeScript, PostgreSQL, and Prisma. This application allows dog owners to register, provide detailed information about their dogs, and book walking appointments once approved.

## Features

### Current Features (MVP)
- ✅ User registration with detailed client and dog information
- ✅ Multi-step registration form with validation
- ✅ Comprehensive dog profile (health, behavior, preferences)
- ✅ Email notifications to walker and client
- ✅ Pending approval workflow for new clients
- ✅ Responsive design (desktop and mobile)
- ✅ PostgreSQL database with Prisma ORM
- ✅ Password hashing and authentication preparation

### Planned Features
- 📅 Calendar booking system for approved clients
- 👤 User authentication and login
- 💬 Messaging system between clients and walker
- 🔄 Recurring appointment scheduling
- 👨‍💼 Walker admin dashboard
- 💰 Pricing calculator based on dog size/breed
- ⏰ Blocked time slot management
- 📊 Appointment management

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Styling:** Tailwind CSS
- **Email:** Nodemailer
- **Authentication:** NextAuth.js (planned)

## Database Schema

The database is designed to support both dog-walking services (current) and handyman services (future expansion).

### Key Models:
- **User**: Client information, authentication, approval status
- **Dog**: Complete dog profile with health, behavior, and routine information
- **Appointment**: Booking system supporting both services with recurring appointments
- **BlockedTimeSlot**: Walker availability management
- **Message**: Email communication system
- **WalkerSettings**: Business configuration and pricing

## Getting Started

### Prerequisites
- Node.js 18+ installed
- PostgreSQL database
- Gmail account (or other SMTP service) for email functionality

### Installation

1. **Clone the repository:**
```bash
cd dogs-app
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

Edit `.env` with your actual values:
```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/dogs_db?schema=public"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-with: openssl rand -base64 32"

# Email (Gmail example)
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-gmail-app-password"
EMAIL_FROM="Dogs <noreply@dogs.com>"

# Walker contact
WALKER_EMAIL="walker@dogs.com"
WALKER_PHONE="+1234567890"
```

**Note on Gmail:** You'll need to create an App Password:
1. Go to Google Account settings
2. Security → 2-Step Verification
3. App passwords → Generate new password
4. Use this password in `EMAIL_SERVER_PASSWORD`

4. **Set up the database:**
```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev --name init

# (Optional) Open Prisma Studio to view your database
npx prisma studio
```

5. **Run the development server:**
```bash
npm run dev
```

6. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
dogs-app/
├── prisma/
│   └── schema.prisma          # Database schema
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/
│   │   │       └── register/
│   │   │           └── route.ts    # Registration API endpoint
│   │   ├── register/
│   │   │   └── page.tsx           # Multi-step registration form
│   │   ├── pending-approval/
│   │   │   └── page.tsx           # Post-registration page
│   │   ├── tour/
│   │   │   └── page.tsx           # Feature tour page
│   │   ├── layout.tsx             # Root layout
│   │   ├── page.tsx               # Home page
│   │   └── globals.css            # Global styles
│   └── lib/
│       ├── prisma.ts              # Prisma client singleton
│       ├── auth.ts                # Password hashing utilities
│       └── email.ts               # Email sending utilities
├── .env                           # Environment variables (create this)
├── .env.example                   # Environment template
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## Usage

### For Dog Owners (Clients)

1. **Register:**
   - Go to the home page and click "Register"
   - Fill out your personal information
   - Provide detailed information about your dog
   - Review and submit

2. **Wait for Approval:**
   - You'll receive a confirmation email
   - The walker will review your registration
   - Within 48 hours, you'll be contacted to schedule a meet & greet

3. **Post-Approval (Coming Soon):**
   - Log in to your account
   - Access the booking calendar
   - Schedule walks at available times
   - Set up recurring appointments

### For the Walker (Admin)

**Current Functionality:**
- Receive email notifications for new registrations
- Review client and dog information via email
- Contact clients directly to schedule meet & greets
- Manually approve clients (database update)

**Planned Admin Features:**
- Admin dashboard to manage registrations
- Approve/reject clients through the interface
- Set pricing for individual dogs
- Manage calendar availability
- View and manage all appointments
- Block time slots for handyman work

## Database Commands

```bash
# Generate Prisma Client after schema changes
npx prisma generate

# Create a new migration
npx prisma migrate dev --name migration_name

# Reset database (WARNING: deletes all data)
npx prisma migrate reset

# Open Prisma Studio (database GUI)
npx prisma studio

# View migration status
npx prisma migrate status
```

## Important Notes

### New Client Workflow
1. Client registers through the website
2. Registration creates a User and Dog record (approved=false)
3. Email sent to walker with all details
4. Walker contacts client for meet & greet
5. After meet & greet, walker manually approves client
6. Client can then book appointments

### Approval Process (Manual for now)
To approve a client, update the database:
```sql
UPDATE "User" SET approved = true WHERE email = 'client@email.com';
```

Or use Prisma Studio (GUI):
```bash
npx prisma studio
```

### 48-Hour Booking Policy
- Minimum 48 hours advance notice required
- Enforced in booking system (upcoming feature)
- Configurable in WalkerSettings table

## Future Expansion: Handyman Service

The database is already structured to support a handyman service:

- `ServiceType` enum includes both DOG_WALKING and HANDYMAN
- Appointments can be tagged with service type
- Blocked time slots prevent double-booking across services
- Simply create a second website/interface that connects to the same database

## Deployment

### Recommended Stack:
- **Frontend + Backend:** Vercel
- **Database:** Railway, Vercel Postgres, or Supabase
- **Email:** SendGrid or existing SMTP

### Deployment Steps:

1. **Push to GitHub**
2. **Connect to Vercel:**
   - Import your repository
   - Add environment variables
   - Deploy

3. **Set up PostgreSQL:**
   - Create database on Railway/Vercel
   - Copy DATABASE_URL to Vercel environment variables
   - Run migrations: `npx prisma migrate deploy`

## Troubleshooting

### Email not sending
- Check EMAIL_SERVER_* variables are correct
- For Gmail, ensure you're using an App Password, not your regular password
- Check if less secure app access is enabled (if not using App Password)

### Database connection issues
- Verify PostgreSQL is running
- Check DATABASE_URL format
- Ensure database exists: `createdb dogs_db`

### Build errors
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Regenerate Prisma client: `npx prisma generate`

## Contributing

This is a private project for a specific business. If you're working on this project:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit for review

## License

Proprietary - All rights reserved

## Contact

For questions or support, contact the walker at walker@dogs.com

---

Built with ❤️ for dogs and their humans
