'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type FormStep = 'client' | 'dog' | 'review'

interface ClientInfo {
  name: string
  email: string
  password: string
  phone: string
  address: string
  emergencyContactName: string
  emergencyContactPhone: string
}

interface DogInfo {
  name: string
  breed: string
  age: number
  weight: number
  sex: 'Male' | 'Female' | ''
  neutered: boolean
  vetName: string
  vetClinic: string
  vetPhone: string
  vaccinationStatus: string
  medications: string
  allergies: string
  medicalConditions: string
  specialNeeds: string
  temperament: string
  behavioralIssues: string
  leashManners: string
  socialization: string
  triggers: string
  feedingSchedule: string
  pottyHabits: string
  walkPreferences: string
  houseRules: string
  accessInstructions: string
}

export default function RegisterPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState<FormStep>('client')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [clientInfo, setClientInfo] = useState<ClientInfo>({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
  })

  const [dogInfo, setDogInfo] = useState<DogInfo>({
    name: '',
    breed: '',
    age: 0,
    weight: 0,
    sex: '',
    neutered: false,
    vetName: '',
    vetClinic: '',
    vetPhone: '',
    vaccinationStatus: '',
    medications: '',
    allergies: '',
    medicalConditions: '',
    specialNeeds: '',
    temperament: '',
    behavioralIssues: '',
    leashManners: '',
    socialization: '',
    triggers: '',
    feedingSchedule: '',
    pottyHabits: '',
    walkPreferences: '',
    houseRules: '',
    accessInstructions: '',
  })

  const handleClientSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep('dog')
  }

  const handleDogSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep('review')
  }

  const handleFinalSubmit = async () => {
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientInfo,
          dogInfo,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed')
      }

      // Success! Redirect to pending approval page
      router.push('/pending-approval')
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="text-4xl font-bold text-blue-600">
            🐕 Dogs
          </Link>
          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            Create Your Account
          </h2>
          <p className="mt-2 text-gray-600">
            Join the Dogs family - we can't wait to meet your pup!
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            <div className={`flex items-center ${currentStep === 'client' ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === 'client' ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>
                1
              </div>
              <span className="ml-2 hidden sm:inline">Your Info</span>
            </div>
            <div className="w-16 h-1 bg-gray-300"></div>
            <div className={`flex items-center ${currentStep === 'dog' ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === 'dog' ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>
                2
              </div>
              <span className="ml-2 hidden sm:inline">Dog Info</span>
            </div>
            <div className="w-16 h-1 bg-gray-300"></div>
            <div className={`flex items-center ${currentStep === 'review' ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === 'review' ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>
                3
              </div>
              <span className="ml-2 hidden sm:inline">Review</span>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-800">{error}</p>
            </div>
          )}

          {/* Step 1: Client Information */}
          {currentStep === 'client' && (
            <form onSubmit={handleClientSubmit} className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Information</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={clientInfo.name}
                  onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={clientInfo.email}
                  onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password *
                </label>
                <input
                  type="password"
                  required
                  minLength={8}
                  value={clientInfo.password}
                  onChange={(e) => setClientInfo({ ...clientInfo, password: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                />
                <p className="text-sm text-gray-500 mt-1">Must be at least 8 characters</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={clientInfo.phone}
                  onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Home Address *
                </label>
                <textarea
                  required
                  value={clientInfo.address}
                  onChange={(e) => setClientInfo({ ...clientInfo, address: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  rows={3}
                  placeholder="Street address, City, State, ZIP"
                />
              </div>

              <div className="pt-4 border-t">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Emergency Contact</h4>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Emergency Contact Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={clientInfo.emergencyContactName}
                      onChange={(e) => setClientInfo({ ...clientInfo, emergencyContactName: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Emergency Contact Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={clientInfo.emergencyContactPhone}
                      onChange={(e) => setClientInfo({ ...clientInfo, emergencyContactPhone: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-6">
                <Link
                  href="/"
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Next: Dog Information
                </button>
              </div>
            </form>
          )}

          {/* Step 2: Dog Information */}
          {currentStep === 'dog' && (
            <form onSubmit={handleDogSubmit} className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tell Us About Your Dog</h3>
              
              {/* Basic Info */}
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Basic Information</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Dog's Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={dogInfo.name}
                      onChange={(e) => setDogInfo({ ...dogInfo, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Breed *
                    </label>
                    <input
                      type="text"
                      required
                      value={dogInfo.breed}
                      onChange={(e) => setDogInfo({ ...dogInfo, breed: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                      placeholder="e.g., Golden Retriever, Mixed"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Age (years) *
                    </label>
                    <input
                      type="number"
                      required
                      min="0"
                      value={dogInfo.age || ''}
                      onChange={(e) => setDogInfo({ ...dogInfo, age: parseInt(e.target.value) || 0 })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Weight (lbs) *
                    </label>
                    <input
                      type="number"
                      required
                      min="0"
                      step="0.1"
                      value={dogInfo.weight || ''}
                      onChange={(e) => setDogInfo({ ...dogInfo, weight: parseFloat(e.target.value) || 0 })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Sex *
                    </label>
                    <select
                      required
                      value={dogInfo.sex}
                      onChange={(e) => setDogInfo({ ...dogInfo, sex: e.target.value as 'Male' | 'Female' })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    >
                      <option value="">Select...</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                  <div>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={dogInfo.neutered}
                        onChange={(e) => setDogInfo({ ...dogInfo, neutered: e.target.checked })}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm font-medium text-gray-700">Neutered/Spayed</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Health Information */}
              <div className="space-y-4 pt-4 border-t">
                <h4 className="font-medium text-gray-900">Health & Veterinary Information</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Veterinarian Name
                    </label>
                    <input
                      type="text"
                      value={dogInfo.vetName}
                      onChange={(e) => setDogInfo({ ...dogInfo, vetName: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Vet Clinic Name
                    </label>
                    <input
                      type="text"
                      value={dogInfo.vetClinic}
                      onChange={(e) => setDogInfo({ ...dogInfo, vetClinic: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Vet Phone Number
                    </label>
                    <input
                      type="tel"
                      value={dogInfo.vetPhone}
                      onChange={(e) => setDogInfo({ ...dogInfo, vetPhone: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Vaccination Status
                    </label>
                    <input
                      type="text"
                      value={dogInfo.vaccinationStatus}
                      onChange={(e) => setDogInfo({ ...dogInfo, vaccinationStatus: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                      placeholder="e.g., Up to date, Due in 3 months"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Medications & Supplements
                  </label>
                  <textarea
                    value={dogInfo.medications}
                    onChange={(e) => setDogInfo({ ...dogInfo, medications: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    rows={2}
                    placeholder="List any medications your dog takes"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Allergies
                  </label>
                  <textarea
                    value={dogInfo.allergies}
                    onChange={(e) => setDogInfo({ ...dogInfo, allergies: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    rows={2}
                    placeholder="Food allergies, environmental allergies, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Medical Conditions
                  </label>
                  <textarea
                    value={dogInfo.medicalConditions}
                    onChange={(e) => setDogInfo({ ...dogInfo, medicalConditions: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    rows={2}
                    placeholder="Any ongoing health issues, past surgeries, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Special Needs *
                  </label>
                  <textarea
                    required
                    value={dogInfo.specialNeeds}
                    onChange={(e) => setDogInfo({ ...dogInfo, specialNeeds: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    rows={2}
                    placeholder="Mobility issues, vision/hearing impairments, or write 'None'"
                  />
                </div>
              </div>

              {/* Behavior Information */}
              <div className="space-y-4 pt-4 border-t">
                <h4 className="font-medium text-gray-900">Behavior & Personality</h4>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Temperament
                  </label>
                  <input
                    type="text"
                    value={dogInfo.temperament}
                    onChange={(e) => setDogInfo({ ...dogInfo, temperament: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    placeholder="e.g., Friendly, shy, anxious, energetic"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Behavioral Issues *
                  </label>
                  <textarea
                    required
                    value={dogInfo.behavioralIssues}
                    onChange={(e) => setDogInfo({ ...dogInfo, behavioralIssues: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    rows={3}
                    placeholder="Any aggression, reactivity, resource guarding, biting history, or write 'None'. This is very important for safety."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Leash Manners
                  </label>
                  <textarea
                    value={dogInfo.leashManners}
                    onChange={(e) => setDogInfo({ ...dogInfo, leashManners: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    rows={2}
                    placeholder="Does your dog pull? Preferred equipment (harness, gentle leader)?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Socialization
                  </label>
                  <textarea
                    value={dogInfo.socialization}
                    onChange={(e) => setDogInfo({ ...dogInfo, socialization: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    rows={2}
                    placeholder="How is your dog with other dogs, people, kids, other animals?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Triggers to Avoid
                  </label>
                  <textarea
                    value={dogInfo.triggers}
                    onChange={(e) => setDogInfo({ ...dogInfo, triggers: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    rows={2}
                    placeholder="Things that upset or stress your dog (loud noises, certain animals, etc.)"
                  />
                </div>
              </div>

              {/* Daily Routine */}
              <div className="space-y-4 pt-4 border-t">
                <h4 className="font-medium text-gray-900">Daily Routine & Preferences</h4>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Feeding Schedule
                  </label>
                  <textarea
                    value={dogInfo.feedingSchedule}
                    onChange={(e) => setDogInfo({ ...dogInfo, feedingSchedule: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    rows={2}
                    placeholder="When and what does your dog eat?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Potty Habits
                  </label>
                  <textarea
                    value={dogInfo.pottyHabits}
                    onChange={(e) => setDogInfo({ ...dogInfo, pottyHabits: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    rows={2}
                    placeholder="Any cues or patterns we should know about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Walk Preferences
                  </label>
                  <textarea
                    value={dogInfo.walkPreferences}
                    onChange={(e) => setDogInfo({ ...dogInfo, walkPreferences: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    rows={2}
                    placeholder="Favorite routes, off-leash areas preferences, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    House Rules & Access Instructions *
                  </label>
                  <textarea
                    required
                    value={dogInfo.houseRules}
                    onChange={(e) => setDogInfo({ ...dogInfo, houseRules: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    rows={2}
                    placeholder="Any rules we should follow in your home?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Home Access Instructions *
                  </label>
                  <textarea
                    required
                    value={dogInfo.accessInstructions}
                    onChange={(e) => setDogInfo({ ...dogInfo, accessInstructions: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    rows={3}
                    placeholder="Where to find keys, door codes, alarm codes, parking instructions, etc."
                  />
                </div>
              </div>

              <div className="flex justify-between pt-6">
                <button
                  type="button"
                  onClick={() => setCurrentStep('client')}
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Next: Review
                </button>
              </div>
            </form>
          )}

          {/* Step 3: Review */}
          {currentStep === 'review' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Review Your Information</h3>
              
              {/* Client Info Summary */}
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900 flex items-center justify-between">
                  Your Information
                  <button
                    onClick={() => setCurrentStep('client')}
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    Edit
                  </button>
                </h4>
                <div className="bg-gray-50 p-4 rounded-md space-y-2 text-sm text-gray-900">
                  <p><span className="font-medium">Name:</span> {clientInfo.name}</p>
                  <p><span className="font-medium">Email:</span> {clientInfo.email}</p>
                  <p><span className="font-medium">Phone:</span> {clientInfo.phone}</p>
                  <p><span className="font-medium">Address:</span> {clientInfo.address}</p>
                  <p><span className="font-medium">Emergency Contact:</span> {clientInfo.emergencyContactName} - {clientInfo.emergencyContactPhone}</p>
                </div>
              </div>

              {/* Dog Info Summary */}
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900 flex items-center justify-between">
                  Dog Information
                  <button
                    onClick={() => setCurrentStep('dog')}
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    Edit
                  </button>
                </h4>
                <div className="bg-gray-50 p-4 rounded-md space-y-2 text-sm text-gray-900">
                  <p><span className="font-medium">Name:</span> {dogInfo.name}</p>
                  <p><span className="font-medium">Breed:</span> {dogInfo.breed}</p>
                  <p><span className="font-medium">Age:</span> {dogInfo.age} years</p>
                  <p><span className="font-medium">Weight:</span> {dogInfo.weight} lbs</p>
                  <p><span className="font-medium">Sex:</span> {dogInfo.sex} {dogInfo.neutered && '(Neutered/Spayed)'}</p>
                  {dogInfo.behavioralIssues && (
                    <p><span className="font-medium">Behavioral Notes:</span> {dogInfo.behavioralIssues}</p>
                  )}
                  {dogInfo.specialNeeds && (
                    <p><span className="font-medium">Special Needs:</span> {dogInfo.specialNeeds}</p>
                  )}
                </div>
              </div>

              {/* Important Notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                <h4 className="font-semibold text-blue-900 mb-2">What Happens Next?</h4>
                <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                  <li>Your registration will be submitted for approval</li>
                  <li>Our walker will review {dogInfo.name}'s information</li>
                  <li>We'll reach out within 48 hours to schedule a meet & greet</li>
                  <li>Once approved, you can schedule walks through your calendar</li>
                  <li>We require 48 hours notice for new bookings</li>
                </ul>
              </div>

              <div className="flex justify-between pt-6">
                <button
                  type="button"
                  onClick={() => setCurrentStep('dog')}
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  disabled={loading}
                >
                  Back
                </button>
                <button
                  onClick={handleFinalSubmit}
                  disabled={loading}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {loading ? 'Submitting...' : 'Submit Registration'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
