import Link from 'next/link'
import Image from 'next/image'
import { FileText, Calendar, MessageCircle, CheckCircle, Heart, Shield, DollarSign } from 'lucide-react'

export default function TourPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-amber-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src="/logo.jpg" 
              alt="Golden Gate Pawz" 
              width={48} 
              height={48}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">Golden Gate Pawz</span>
              <span className="text-xs text-gray-600 uppercase tracking-wide">San Francisco</span>
            </div>
          </Link>
          <Link
            href="/register"
            className="px-6 py-3 bg-gradient-to-r from-[#C0362C] to-[#D4453C] text-white rounded-xl hover:from-[#A02E24] hover:to-[#C0362C] font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="bg-gradient-to-r from-[#C0362C] to-[#D4453C] bg-clip-text text-transparent">Golden Gate Pawz</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Professional dog walking service with easy online booking in San Francisco
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">
        {/* Feature 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#C0362C] to-[#D4453C] rounded-2xl flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Simple Registration
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Create your account and tell us about your dog in just a few minutes. We collect all the important information about your pup's health, behavior, and preferences to ensure the best care possible.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="w-6 h-6 text-[#C0362C] flex-shrink-0 mt-0.5" />
                <span>Detailed health and behavior profile</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="w-6 h-6 text-[#C0362C] flex-shrink-0 mt-0.5" />
                <span>Emergency contact information</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="w-6 h-6 text-[#C0362C] flex-shrink-0 mt-0.5" />
                <span>Veterinary information on file</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-2xl">
            <div className="relative bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border-2 border-[#C0362C]/20 flex items-center justify-center min-h-[300px] overflow-hidden">
              <div className="absolute inset-0 opacity-50">
                <Image 
                  src="/tour1.jpg" 
                  alt="Happy dogs" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 to-red-50/80"></div>
              <div className="relative z-10 text-center space-y-4">
                <FileText className="w-16 h-16 text-[#C0362C] mx-auto drop-shadow-lg" />
                <p className="text-gray-900 font-semibold drop-shadow">Multi-step registration form</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-white p-8 rounded-3xl shadow-2xl">
            <div className="relative bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border-2 border-[#C0362C]/20 flex items-center justify-center min-h-[300px] overflow-hidden">
              <div className="absolute inset-0 opacity-50">
                <Image 
                  src="/tour2.jpg" 
                  alt="Happy dogs" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 to-red-50/80"></div>
              <div className="relative z-10 text-center space-y-4">
                <Calendar className="w-16 h-16 text-[#C0362C] mx-auto drop-shadow-lg" />
                <p className="text-gray-900 font-semibold drop-shadow">Simple calendar interface</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#C0362C] to-[#D4453C] rounded-2xl flex items-center justify-center">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Easy Booking
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Once approved, book walks through our simple calendar interface. See available time slots and schedule walks at your convenience.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="w-6 h-6 text-[#C0362C] flex-shrink-0 mt-0.5" />
                <span>View real-time availability</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="w-6 h-6 text-[#C0362C] flex-shrink-0 mt-0.5" />
                <span>Schedule recurring walks</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="w-6 h-6 text-[#C0362C] flex-shrink-0 mt-0.5" />
                <span>48-hour advance notice required</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#C0362C] to-[#D4453C] rounded-2xl flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Direct Communication
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Message your walker directly through the app. Ask questions, provide updates, or share special instructions for your pup's walk.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="w-6 h-6 text-[#C0362C] flex-shrink-0 mt-0.5" />
                <span>Email messaging built-in</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="w-6 h-6 text-[#C0362C] flex-shrink-0 mt-0.5" />
                <span>Quick response times</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="w-6 h-6 text-[#C0362C] flex-shrink-0 mt-0.5" />
                <span>Direct phone contact for approved clients</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-2xl">
            <div className="relative bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border-2 border-[#C0362C]/20 flex items-center justify-center min-h-[300px] overflow-hidden">
              <div className="absolute inset-0 opacity-50">
                <Image 
                  src="/tour3.jpg" 
                  alt="Happy dogs" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 to-red-50/80"></div>
              <div className="relative z-10 text-center space-y-4">
                <MessageCircle className="w-16 h-16 text-[#C0362C] mx-auto drop-shadow-lg" />
                <p className="text-gray-900 font-semibold drop-shadow">Built-in messaging system</p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#C0362C] to-[#D4453C] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Register</h3>
              <p className="text-gray-600">
                Create your account and tell us about your dog
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#C0362C] to-[#D4453C] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Meet & Greet</h3>
              <p className="text-gray-600">
                We'll schedule a meet & greet to ensure a good fit
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#C0362C] to-[#D4453C] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Get Approved</h3>
              <p className="text-gray-600">
                Once approved, you can start booking walks
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#C0362C] to-[#D4453C] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-white">4</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Book Walks</h3>
              <p className="text-gray-600">
                Schedule walks through our online calendar
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Info */}
        <div className="bg-white border-2 border-[#C0362C] rounded-3xl p-8 md:p-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-[#C0362C] to-[#D4453C] rounded-xl flex items-center justify-center">
              <DollarSign className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Transparent Pricing
            </h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              All walks are 30 minutes and priced based on your dog's size, breed, and individual needs.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#C0362C] font-bold mt-1">•</span>
                <span>Base rate starts at $25 for 30 minutes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C0362C] font-bold mt-1">•</span>
                <span>Larger dogs (70+ lbs) may have additional surcharges</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C0362C] font-bold mt-1">•</span>
                <span>Special handling needs assessed individually</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C0362C] font-bold mt-1">•</span>
                <span>Price quote provided after registration review</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join the Golden Gate Pawz family today and give your pup the exercise they deserve!
          </p>
          <Link
            href="/register"
            className="inline-block px-10 py-5 bg-gradient-to-r from-[#C0362C] to-[#D4453C] text-white rounded-2xl hover:from-[#A02E24] hover:to-[#C0362C] transition-all text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105"
          >
            Register Now
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image 
                src="/logo.jpg" 
                alt="Golden Gate Pawz" 
                width={40} 
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-bold">Golden Gate Pawz</p>
                <p className="text-sm text-gray-400">Professional Dog Walking Service</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">
                Questions? Email{' '}
                <a href="mailto:walker@goldengaterawz.com" className="text-[#C0362C] hover:text-[#D4453C] transition-colors font-semibold">
                  walker@goldengaterawz.com
                </a>
              </p>
              <p className="text-sm text-gray-500 mt-2">© 2026 Golden Gate Pawz. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
      