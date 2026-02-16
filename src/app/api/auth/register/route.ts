import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { hashPassword } from '@/lib/auth'
import { sendEmail } from '@/lib/email'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { clientInfo, dogInfo } = body

    // Validate required fields
    if (!clientInfo.email || !clientInfo.password || !clientInfo.name) {
      return NextResponse.json(
        { error: 'Missing required client information' },
        { status: 400 }
      )
    }

    if (!dogInfo.name || !dogInfo.breed) {
      return NextResponse.json(
        { error: 'Missing required dog information' },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: clientInfo.email },
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'A user with this email already exists' },
        { status: 400 }
      )
    }

    // Hash the password
    const hashedPassword = await hashPassword(clientInfo.password)

    // Create user and dog in a transaction
    const result = await prisma.$transaction(async (tx) => {
      // Create the user
      const user = await tx.user.create({
        data: {
          email: clientInfo.email,
          password: hashedPassword,
          name: clientInfo.name,
          phone: clientInfo.phone,
          address: clientInfo.address,
          emergencyContactName: clientInfo.emergencyContactName,
          emergencyContactPhone: clientInfo.emergencyContactPhone,
          role: 'CLIENT',
          approved: false, // New clients need approval
        },
      })

      // Create the dog
      const dog = await tx.dog.create({
        data: {
          ownerId: user.id,
          name: dogInfo.name,
          breed: dogInfo.breed,
          age: dogInfo.age,
          weight: dogInfo.weight,
          sex: dogInfo.sex,
          neutered: dogInfo.neutered,
          vetName: dogInfo.vetName,
          vetClinic: dogInfo.vetClinic,
          vetPhone: dogInfo.vetPhone,
          vaccinationStatus: dogInfo.vaccinationStatus,
          medications: dogInfo.medications,
          allergies: dogInfo.allergies,
          medicalConditions: dogInfo.medicalConditions,
          specialNeeds: dogInfo.specialNeeds,
          temperament: dogInfo.temperament,
          behavioralIssues: dogInfo.behavioralIssues,
          leashManners: dogInfo.leashManners,
          socialization: dogInfo.socialization,
          triggers: dogInfo.triggers,
          feedingSchedule: dogInfo.feedingSchedule,
          pottyHabits: dogInfo.pottyHabits,
          walkPreferences: dogInfo.walkPreferences,
          houseRules: dogInfo.houseRules,
          accessInstructions: dogInfo.accessInstructions,
        },
      })

      return { user, dog }
    })

    // Send notification email to walker
    const walkerEmail = process.env.WALKER_EMAIL || 'walker@dogs.com'
    await sendEmail({
      to: walkerEmail,
      subject: `New Registration: ${dogInfo.name} (${clientInfo.name})`,
      html: `
        <h2>New Dog Walking Registration</h2>
        
        <h3>Client Information:</h3>
        <ul>
          <li><strong>Name:</strong> ${clientInfo.name}</li>
          <li><strong>Email:</strong> ${clientInfo.email}</li>
          <li><strong>Phone:</strong> ${clientInfo.phone}</li>
          <li><strong>Address:</strong> ${clientInfo.address}</li>
          <li><strong>Emergency Contact:</strong> ${clientInfo.emergencyContactName} - ${clientInfo.emergencyContactPhone}</li>
        </ul>

        <h3>Dog Information:</h3>
        <ul>
          <li><strong>Name:</strong> ${dogInfo.name}</li>
          <li><strong>Breed:</strong> ${dogInfo.breed}</li>
          <li><strong>Age:</strong> ${dogInfo.age} years</li>
          <li><strong>Weight:</strong> ${dogInfo.weight} lbs</li>
          <li><strong>Sex:</strong> ${dogInfo.sex} ${dogInfo.neutered ? '(Neutered/Spayed)' : ''}</li>
          <li><strong>Behavioral Issues:</strong> ${dogInfo.behavioralIssues || 'None specified'}</li>
          <li><strong>Special Needs:</strong> ${dogInfo.specialNeeds || 'None specified'}</li>
          <li><strong>Temperament:</strong> ${dogInfo.temperament || 'Not specified'}</li>
        </ul>

        <p><strong>Please review this registration and reach out to the client to schedule a meet & greet.</strong></p>
      `,
    })

    // Send confirmation email to client
    await sendEmail({
      to: clientInfo.email,
      subject: 'Welcome to Dogs - Registration Received!',
      html: `
        <h2>Welcome to Dogs, ${clientInfo.name}!</h2>
        
        <p>Thank you for registering with us. We're excited to meet ${dogInfo.name}!</p>
        
        <h3>What's Next?</h3>
        <ol>
          <li>We'll review ${dogInfo.name}'s information</li>
          <li>We'll reach out within 48 hours to schedule a meet & greet</li>
          <li>Once approved, you'll be able to book walks through your online calendar</li>
        </ol>
        
        <p>In the meantime, if you have any questions, feel free to reply to this email or call us at ${process.env.WALKER_PHONE || '(555) 123-4567'}.</p>
        
        <p>We look forward to walking ${dogInfo.name}!</p>
        
        <p>Best,<br>The Dogs Team</p>
      `,
    })

    return NextResponse.json({
      success: true,
      message: 'Registration successful',
      userId: result.user.id,
    })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Registration failed. Please try again.' },
      { status: 500 }
    )
  }
}
