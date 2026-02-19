'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { User, Mail, Lock, Phone, MapPin, Users, Heart, Stethoscope, Activity, Home } from 'lucide-react'

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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-amber-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-3 mb-6">
            <Image 
              src="/logo.jpg" 
              alt="Golden Gate Pawz" 
              width={60} 
              height={60}
              className="rounded-full"
            />
            <div className="flex flex-col items-start">
              <span className="text-2xl font-bold text-gray-900">Golden Gate Pawz</span>
              <span className="text-xs text-gray-600 uppercase tracking-wide">San Francisco</span>
            </div>
          </Link>
          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Join Our Pack
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            We can't wait to meet your pup!
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            <div className={`flex items-center ${currentStep === 'client' ? 'text-[#C0362C]' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${currentStep === 'client' ? 'bg-gradient-to-br from-[#C0362C] to-[#D4453C] text-white shadow-lg scale-110' : 'bg-gray-300'}`}>
                1
              </div>
              <span className="ml-2 hidden sm:inline font-medium">Your Info</span>
            </div>
            <div className={`w-16 h-1 rounded transition-all ${currentStep !== 'client' ? 'bg-gradient-to-r from-[#C0362C] to-[#D4453C]' : 'bg-gray-300'}`}></div>
            <div className={`flex items-center ${currentStep === 'dog' ? 'text-[#C0362C]' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${currentStep === 'dog' ? 'bg-gradient-to-br from-[#C0362C] to-[#D4453C] text-white shadow-lg scale-110' : 'bg-gray-300'}`}>
                2
              </div>
              <span className="ml-2 hidden sm:inline font-medium">Dog Info</span>
            </div>
            <div className={`w-16 h-1 rounded transition-all ${currentStep === 'review' ? 'bg-gradient-to-r from-[#C0362C] to-[#D4453C]' : 'bg-gray-300'}`}></div>
            <div className={`flex items-center ${currentStep === 'review' ? 'text-[#C0362C]' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${currentStep === 'review' ? 'bg-gradient-to-br from-[#C0362C] to-[#D4453C] text-white shadow-lg scale-110' : 'bg-gray-300'}`}>
                3
              </div>
              <span className="ml-2 hidden sm:inline font-medium">Review</span>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white shadow-2xl rounded-3xl p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-red-800 font-medium">{error}</p>
            </div>
          )}

          {/* Step 1: Client Information */}
          {currentStep === 'client' && (
            <form onSubmit={handleClientSubmit} className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#C0362C] to-[#D4453C] rounded-xl flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Your Information</h3>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={clientInfo.name}
                  onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C0362C] focus:border-[#C0362C] text-gray-900 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={clientInfo.email}
                  onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C0362C] focus:border-[#C0362C] text-gray-900 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password *
                </label>
                <input
                  type="password"
                  required
                  minLength={8}
                  value={clientInfo.password}
                  onChange={(e) => setClientInfo({ ...clientInfo, password: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C0362C] focus:border-[#C0362C] text-gray-900 transition-all"
                />
                <p className="text-sm text-gray-500 mt-2">Must be at least 8 characters</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={clientInfo.phone}
                  onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C0362C] focus:border-[#C0362C] text-gray-900 transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Home Address *
                </label>
                <textarea
                  required
                  value={clientInfo.address}
                  onChange={(e) => setClientInfo({ ...clientInfo, address: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C0362C] focus:border-[#C0362C] text-gray-900 transition-all"
                  rows={3}
                  placeholder="Street address, City, State, ZIP"
                />
              </div>

              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#C0362C]" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Emergency Contact</h4>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Emergency Contact Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={clientInfo.emergencyContactName}
                      onChange={(e) => setClientInfo({ ...clientInfo, emergencyContactName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C0362C] focus:border-[#C0362C] text-gray-900 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Emergency Contact Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={clientInfo.emergencyContactPhone}
                      onChange={(e) => setClientInfo({ ...clientInfo, emergencyContactPhone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C0362C] focus:border-[#C0362C] text-gray-900 transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-6">
                <Link
                  href="/"
                  className="px-6 py-3 border-2 border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 font-semibold transition-all"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-[#C0362C] to-[#D4453C] text-white rounded-xl hover:from-[#A02E24] hover:to-[#C0362C] font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Next: Dog Information
                </button>
              </div>
            </form>
          )}

          {/* Step 2: Dog Information */}
          {currentStep === 'dog' && (
            <form onSubmit={handleDogSubmit} className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#C0362C] to-[#D4453C] rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Tell Us About Your Dog</h3>
              </div>
              
              {/* Basic Info */}
              <div className="space-y-4">
                <h4 className="font-bold text-gray-900 text-lg">Basic Information</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Dog's Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={dogInfo.name}
                      onChange={(e) => setDogInfo({ ...dogInfo, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C0362C] focus:border-[#C0362C] text-gray-900 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Breed *
                    </label>
                    <input
                      type="text"
                      required
                      value={dogInfo.breed}
                      onChange={(e) => setDogInfo({ ...dogInfo, breed: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C0362C] focus:border-[#C0362C] text-gray-900 transition-all"
                      placeholder="e.g., Golden Retriever, Mixed"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Age (years) *
                    </label>
                    <input
                      type="number"
                      required
                      min="0"
                      value={dogInfo.age || ''}
                      onChange={(e) => setDogInfo({ ...dogInfo, age: parseInt(e.target.value) || 0 })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C0362C] focus:border-[#C0362C] text-gray-900 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Weight (lbs) *
                    </label>
                    <input
                      type="number"
                      required
                      min="0"
                      step="0.1"
                      value={dogInfo.weight || ''}
                      onChange={(e) => setDogInfo({ ...dogInfo, weight: parseFloat(e.target.value) || 0 })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C0362C] focus:border-[#C0362C] text-gray-900 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Sex *
                    </label>
                    <select
                      required
                      value={dogInfo.sex}
                      onChange={(e) => setDogInfo({ ...dogInfo, sex: e.target.value as 'Male' | 'Female' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C0362C] focus:border-[#C0362C] text-gray-900 transition-all"
                    >
                      <option value="">Select...</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                  <div className="flex items-center pt-8">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={dogInfo.neutered}
                        onChange={(e) => setDogInfo({ ...dogInfo, neutered: e.target.checked })}
                        className="w-5 h-5 text-[#C0362C] border-gray-300 rounded focus:ring-[#C0362C]"
                      />
                      <span className="text-sm font-semibold text-gray-700">Neutered/Spayed</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Health Information */}
              <div className="space-y-4 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Stethoscope className="w-5 h-5 text-[#C0362C]" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">Health & Veterinary Information</h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Veterinarian Name
                    </label>
                    <input
                      type="text"
                      value={dogInfo.vetName}
                      onChange={(e) => setDogInfo({ ...dogInfo, vetName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C0362C] focus:border-[#C0362C] text-gray-900 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Vet Clinic Name
                    </label>
                    <input
                      type="text"
                      value={dogInfo.vetClinic}
                      onChange={(e) => setDogInfo({ ...dogInfo, vetClinic: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C0362C] focus:border-[#C0362C] text-gray-900 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Vet Phone Number
                    </label>
                    <input
                      type="tel"
                      value={dogInfo.vetPhone}
                      onChange={(e) => setDogInfo({ ...dogInfo, vetPhone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C0362C] focus:border-[#C0362C] text-gray-900 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Vaccination Status
                    </label>
                    <input
                      type="text"
                      value={dogInfo.vaccinationStatus}
                      onChange={(e) => setDogInfo({ ...dogInfo, vaccinationStatus: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C0362C] focus:border-[#C0362C] text-gray-900 transition-all"
                      placeholder="e.g., Up to date, Due in 3 months"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Medications & Supplements
                  </label>
                  <textarea
                    value={dogInfo.medications}
                    onChange={(e) => setDogInfo({ ...dogInfo, medications: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C0362C] focus:border-[#C0362C] text-gray-900 transition-all"
                    rows={2}
                    placeholder="List any medications your dog takes"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Allergies
                  </label>
                  <textarea
                    value={dogInfo.allergies}
                    onChange={(e) => setDogInfo({ ...dogInfo, allergies: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C0362C] focus:border-[#C0362C] text-gray-900 transition-all"
                    rows={2}
                    placeholder="Food allergies, environmental allergies, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Medical Conditions
                  </label>
                  <textarea
                    value={dogInfo.medicalConditions}
                    onChange={(e) => setDogInfo({ ...dogInfo, medicalConditions: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C0362C] focus:border-[#C0362C] text-gray-900 transition-all"
                    rows={2}
                    placeholder="Any ongoing health issues, past surgeries, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Special Needs *
                  </label>
                  <textarea
                    required
                    value={dogInfo.specialNeeds}
                    onChange={(e) => setDogInfo({ ...dogInfo, specialNeeds: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C0362C] focus:border-[#C0362C] text-gray-900 transition-all"
                    rows={2}
                    placeholder="Mobility issues, vision/hearing impairments, or write 'None'"
                  />
                </div>
              </div>

              {/* Behavior Information */}
              <div className="space-y-4 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Activity className="w-5 h-5 text-[#C0362C]" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">Behavior & Personality</h4>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Temperament
                  </label>
                  <input
                    type="text"
                    value={dogInfo.temperament}
                    onChange={(e) => setDogInfo({ ...dogInfo, temperament: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C0362C] focus:border-[#C0362C] text-gray-900 transition-all"
                    placeholder="e.g., Friendly, shy, anxious, energetic"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Behavioral Issues *
                  </label>
                  <textarea
                    required
                    value={dogInfo.behavioralIssues}
                    onChange={(e) => setDogInfo({ ...dogInfo, behavioralIssues: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C0362C] focus:border-[#C0362C] text-gray-900 transition-all"
                    rows={3}
                    placeholder="Any aggression, reactivity, resource guarding, biting history, or write 'None'. This is very important for safety."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Leash Manners
                  </label>
                  <textarea
                    value={dogInfo.leashManners}
                    onChange={(e) => setDogInfo({ ...dogInfo, leashManners: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C0362C] focus:border-[#C0362C] text-gray-900 transition-all"
                    rows={2}
                    placeholder="Does your dog pull? Preferred equipment (harness, gentle leader)?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Socialization
                  </label>
                  <textarea
                    value={dogInfo.socialization}
                    onChange={(e) => setDogInfo({ ...dogInfo, socialization: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C0362C] focus:border-[#C0362C] text-gray-900 transition-all"
                    rows={2}
                    placeholder="How is your dog with other dogs, people, kids, other animals?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Triggers to Avoid
                  </label>
                  <textarea
                    value={dogInfo.triggers}
                    onChange={(e) => setDogInfo({ ...dogInfo, triggers: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C0362C] focus:border-[#C0362C] text-gray-900 transition-all"
                    rows={2}
                    placeholder="Things that upset or stress your dog (loud noises, certain animals, etc.)"
                  />
                </div>
              </div>

              {/* Daily Routine */}
              <div className="space-y-4 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Home className="w-5 h-5 text-[#C0362C]" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">Daily Routine & Preferences</h4>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Feeding Schedule
                  </label>
                  <textarea
                    value={dogInfo.feedingSchedule}
                    onChange={(e) => setDogInfo({ ...dogInfo, feedingSchedule: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C0362C] focus:border-[#C0362C] text-gray-900 transition-all"
                    rows={2}
                    placeholder="When and what does your dog eat?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Potty Habits
                  </label>
                  <textarea
                    value={dogInfo.pottyHabits}
                    onChange={(e) => setDogInfo({ ...dogInfo, pottyHabits: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C0362C] focus:border-[#C0362C] text-gray-900 transition-all"
                    rows={2}
                    placeholder="Any cues or patterns we should know about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Walk Preferences
                  </label>
                  <textarea
                    value={dogInfo.walkPreferences}
                    onChange={(e) => setDogInfo({ ...dogInfo, walkPreferences: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C0362C] focus:border-[#C0362C] text-gray-900 transition-all"
                    rows={2}
                    placeholder="Favorite routes, off-leash areas preferences, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    House Rules *
                  </label>
                  <textarea
                    required
                    value={dogInfo.houseRules}
                    onChange={(e) => setDogInfo({ ...dogInfo, houseRules: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C0362C] focus:border-[#C0362C] text-gray-900 transition-all"
                    rows={2}
                    placeholder="Any rules we should follow in your home?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Home Access Instructions *
                  </label>
                  <textarea
                    required
                    value={dogInfo.accessInstructions}
                    onChange={(e) => setDogInfo({ ...dogInfo, accessInstructions: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C0362C] focus:border-[#C0362C] text-gray-900 transition-all"
                    rows={3}
                    placeholder="Where to find keys, door codes, alarm codes, parking instructions, etc."
                  />
                </div>
              </div>

              <div className="flex justify-between pt-6">
                <button
                  type="button"
                  onClick={() => setCurrentStep('client')}
                  className="px-6 py-3 border-2 border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 font-semibold transition-all"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-[#C0362C] to-[#D4453C] text-white rounded-xl hover:from-[#A02E24] hover:to-[#C0362C] font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Next: Review
                </button>
              </div>
            </form>
          )}

          {/* Step 3: Review */}
          {currentStep === 'review' && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#C0362C] to-[#D4453C] rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white fill-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Review Your Information</h3>
              </div>
              
              {/* Client Info Summary */}
              <div className="space-y-3">
                <h4 className="font-bold text-gray-900 flex items-center justify-between">
                  Your Information
                  <button
                    onClick={() => setCurrentStep('client')}
                    className="text-sm text-[#C0362C] hover:text-[#A02E24] font-semibold transition-colors"
                  >
                    Edit
                  </button>
                </h4>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-5 rounded-xl space-y-2 text-sm text-gray-900 border border-orange-100">
                  <p><span className="font-semibold">Name:</span> {clientInfo.name}</p>
                  <p><span className="font-semibold">Email:</span> {clientInfo.email}</p>
                  <p><span className="font-semibold">Phone:</span> {clientInfo.phone}</p>
                  <p><span className="font-semibold">Address:</span> {clientInfo.address}</p>
                  <p><span className="font-semibold">Emergency Contact:</span> {clientInfo.emergencyContactName} - {clientInfo.emergencyContactPhone}</p>
                </div>
              </div>

              {/* Dog Info Summary */}
              <div className="space-y-3">
                <h4 className="font-bold text-gray-900 flex items-center justify-between">
                  Dog Information
                  <button
                    onClick={() => setCurrentStep('dog')}
                    className="text-sm text-[#C0362C] hover:text-[#A02E24] font-semibold transition-colors"
                  >
                    Edit
                  </button>
                </h4>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-5 rounded-xl space-y-2 text-sm text-gray-900 border border-orange-100">
                  <p><span className="font-semibold">Name:</span> {dogInfo.name}</p>
                  <p><span className="font-semibold">Breed:</span> {dogInfo.breed}</p>
                  <p><span className="font-semibold">Age:</span> {dogInfo.age} years</p>
                  <p><span className="font-semibold">Weight:</span> {dogInfo.weight} lbs</p>
                  <p><span className="font-semibold">Sex:</span> {dogInfo.sex} {dogInfo.neutered && '(Neutered/Spayed)'}</p>
                  {dogInfo.behavioralIssues && (
                    <p><span className="font-semibold">Behavioral Notes:</span> {dogInfo.behavioralIssues}</p>
                  )}
                  {dogInfo.specialNeeds && (
                    <p><span className="font-semibold">Special Needs:</span> {dogInfo.specialNeeds}</p>
                  )}
                </div>
              </div>

              {/* Important Notice */}
              <div className="bg-white border-2 border-[#C0362C] rounded-xl p-5">
                <h4 className="font-bold text-[#C0362C] mb-3 flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  What Happens Next?
                </h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C0362C] mt-0.5">•</span>
                    <span>Your registration will be submitted for approval</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C0362C] mt-0.5">•</span>
                    <span>Our walker will review {dogInfo.name}'s information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C0362C] mt-0.5">•</span>
                    <span>We'll reach out within 48 hours to schedule a meet & greet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C0362C] mt-0.5">•</span>
                    <span>Once approved, you can schedule walks through your calendar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C0362C] mt-0.5">•</span>
                    <span>We require 48 hours notice for new bookings</span>
                  </li>
                </ul>
              </div>

              <div className="flex justify-between pt-6">
                <button
                  type="button"
                  onClick={() => setCurrentStep('dog')}
                  className="px-6 py-3 border-2 border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 font-semibold transition-all"
                  disabled={loading}
                >
                  Back
                </button>
                <button
                  onClick={handleFinalSubmit}
                  disabled={loading}
                  className="px-8 py-3 bg-gradient-to-r from-[#C0362C] to-[#D4453C] text-white rounded-xl hover:from-[#A02E24] hover:to-[#C0362C] font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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

