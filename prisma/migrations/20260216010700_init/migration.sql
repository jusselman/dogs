-- CreateEnum
CREATE TYPE "ServiceType" AS ENUM ('DOG_WALKING', 'HANDYMAN');

-- CreateEnum
CREATE TYPE "AppointmentStatus" AS ENUM ('PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED', 'REJECTED');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('CLIENT', 'WALKER', 'ADMIN');

-- CreateEnum
CREATE TYPE "RecurrenceType" AS ENUM ('NONE', 'DAILY', 'WEEKLY', 'BIWEEKLY', 'MONTHLY');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "emergencyContactName" TEXT,
    "emergencyContactPhone" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'CLIENT',
    "approved" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dog" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "sex" TEXT NOT NULL,
    "neutered" BOOLEAN NOT NULL,
    "vetName" TEXT,
    "vetClinic" TEXT,
    "vetPhone" TEXT,
    "vaccinationStatus" TEXT,
    "medications" TEXT,
    "allergies" TEXT,
    "medicalConditions" TEXT,
    "specialNeeds" TEXT,
    "temperament" TEXT,
    "behavioralIssues" TEXT,
    "leashManners" TEXT,
    "socialization" TEXT,
    "triggers" TEXT,
    "feedingSchedule" TEXT,
    "pottyHabits" TEXT,
    "walkPreferences" TEXT,
    "houseRules" TEXT,
    "accessInstructions" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ownerId" TEXT NOT NULL,

    CONSTRAINT "Dog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appointment" (
    "id" TEXT NOT NULL,
    "serviceType" "ServiceType" NOT NULL DEFAULT 'DOG_WALKING',
    "status" "AppointmentStatus" NOT NULL DEFAULT 'PENDING',
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "duration" INTEGER NOT NULL,
    "isRecurring" BOOLEAN NOT NULL DEFAULT false,
    "recurrenceType" "RecurrenceType" NOT NULL DEFAULT 'NONE',
    "recurrenceEndDate" TIMESTAMP(3),
    "parentAppointmentId" TEXT,
    "price" DOUBLE PRECISION,
    "priceNotes" TEXT,
    "notes" TEXT,
    "walkerNotes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "clientId" TEXT,
    "dogId" TEXT,
    "handymanServiceDescription" TEXT,
    "handymanLocation" TEXT,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlockedTimeSlot" (
    "id" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "reason" TEXT,
    "serviceType" "ServiceType",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BlockedTimeSlot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "subject" TEXT,
    "body" TEXT NOT NULL,
    "fromEmail" TEXT NOT NULL,
    "toEmail" TEXT NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "senderId" TEXT,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WalkerSettings" (
    "id" TEXT NOT NULL,
    "businessName" TEXT NOT NULL DEFAULT 'Dogs',
    "businessEmail" TEXT NOT NULL,
    "businessPhone" TEXT NOT NULL,
    "businessAddress" TEXT,
    "basePriceFor30Min" DOUBLE PRECISION NOT NULL DEFAULT 25.00,
    "largeDogSurcharge" DOUBLE PRECISION NOT NULL DEFAULT 10.00,
    "largeDogWeightThreshold" DOUBLE PRECISION NOT NULL DEFAULT 70.00,
    "defaultWalkDuration" INTEGER NOT NULL DEFAULT 30,
    "minAdvanceBookingHours" INTEGER NOT NULL DEFAULT 48,
    "maxDogsPerSlot" INTEGER NOT NULL DEFAULT 4,
    "businessHours" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WalkerSettings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "Dog_ownerId_idx" ON "Dog"("ownerId");

-- CreateIndex
CREATE INDEX "Appointment_startTime_idx" ON "Appointment"("startTime");

-- CreateIndex
CREATE INDEX "Appointment_clientId_idx" ON "Appointment"("clientId");

-- CreateIndex
CREATE INDEX "Appointment_dogId_idx" ON "Appointment"("dogId");

-- CreateIndex
CREATE INDEX "Appointment_serviceType_idx" ON "Appointment"("serviceType");

-- CreateIndex
CREATE INDEX "Appointment_status_idx" ON "Appointment"("status");

-- CreateIndex
CREATE INDEX "BlockedTimeSlot_startTime_idx" ON "BlockedTimeSlot"("startTime");

-- CreateIndex
CREATE INDEX "BlockedTimeSlot_endTime_idx" ON "BlockedTimeSlot"("endTime");

-- CreateIndex
CREATE INDEX "Message_sentAt_idx" ON "Message"("sentAt");

-- CreateIndex
CREATE INDEX "Message_toEmail_idx" ON "Message"("toEmail");

-- AddForeignKey
ALTER TABLE "Dog" ADD CONSTRAINT "Dog_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_parentAppointmentId_fkey" FOREIGN KEY ("parentAppointmentId") REFERENCES "Appointment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_dogId_fkey" FOREIGN KEY ("dogId") REFERENCES "Dog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
