'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Heart, Calendar, Shield, CheckCircle, Users, Clock } from 'lucide-react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #C0362C 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Logo & Brand */}
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                  <Image 
                    src="/logo.jpg" 
                    alt="Golden Gate Pawz" 
                    width={48} 
                    height={48}
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-gray-900">
                      Golden Gate Pawz
                    </span>
                    <span className="text-xs text-gray-600 uppercase tracking-wide">San Francisco</span>
                  </div>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Your pup's
                  <span className="block bg-gradient-to-r from-[#C0362C] to-[#D4453C] bg-clip-text text-transparent">
                    favorite walk
                  </span>
                  of the day
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Professional, caring dog walking in San Francisco. Treat your furry friend to the adventure they deserve, with a walker who loves them like family.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/register"
                  className="group relative px-8 py-4 bg-gradient-to-r from-[#C0362C] to-[#D4453C] text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden text-center"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#A02E24] to-[#C0362C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                
                <Link
                  href="/tour"
                  className="px-8 py-4 bg-white text-gray-900 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-200 text-center"
                >
                  Take a Tour
                </Link>
                
                <Link
                  href="/login"
                  className="px-8 py-4 bg-white text-gray-900 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-200 text-center"
                >
                  Sign In
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C0362C] to-[#D4453C] border-2 border-white flex items-center justify-center shadow-md">
                        <Heart className="w-5 h-5 text-white fill-white" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-gray-900">200+ Happy Pups</p>
                    <p className="text-gray-600">Wagging tails daily</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Placeholder */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                {/* Main Image Card */}
                <div className="relative bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl p-8 shadow-2xl">
                  <div className="aspect-square rounded-2xl bg-white/50 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                    <Image 
                      src="/logo.jpg" 
                      alt="Golden Gate Pawz" 
                      width={400} 
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                
                {/* Floating Badge 1 */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="text-center">
                    <CheckCircle className="w-8 h-8 text-[#C0362C] mx-auto mb-1" />
                    <p className="text-sm font-bold text-gray-900">5.0</p>
                    <p className="text-xs text-gray-600">Rating</p>
                  </div>
                </div>
                
                {/* Floating Badge 2 */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-[#C0362C] mx-auto mb-1" />
                    <p className="text-sm font-bold text-gray-900">100%</p>
                    <p className="text-xs text-gray-600">Insured</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why dogs <span className="text-[#C0362C]">love us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              More than just a walk—it's an experience tailored to your pup's needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#C0362C] to-[#D4453C] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Personalized Care</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every pup is unique. We learn their personality, preferences, and pace to create the perfect walk experience.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#C0362C] to-[#D4453C] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Easy Booking</h3>
                <p className="text-gray-600 leading-relaxed">
                  Schedule walks in seconds through our simple interface. Change plans? No problem—flexibility built in.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#C0362C] to-[#D4453C] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Safe & Trusted</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fully insured, background-checked, and trained in pet first aid. Your pup's safety is our top priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Getting started is <span className="text-[#C0362C]">easy</span>
            </h2>
            <p className="text-xl text-gray-600">From sign-up to first walk in just 3 simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Lines (Desktop) */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-200 via-red-200 to-orange-200"></div>

            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#C0362C] to-[#D4453C] rounded-full text-white text-3xl font-bold mb-6 shadow-lg">
                  1
                </div>
                <Users className="w-12 h-12 text-[#C0362C] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Create Profile</h3>
                <p className="text-gray-600">
                  Tell us about your pup—their personality, preferences, and any special needs
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#C0362C] to-[#D4453C] rounded-full text-white text-3xl font-bold mb-6 shadow-lg">
                  2
                </div>
                <Heart className="w-12 h-12 text-[#C0362C] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Meet & Greet</h3>
                <p className="text-gray-600">
                  We'll meet you and your dog to ensure we're the perfect match
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#C0362C] to-[#D4453C] rounded-full text-white text-3xl font-bold mb-6 shadow-lg">
                  3
                </div>
                <Calendar className="w-12 h-12 text-[#C0362C] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Book Walks</h3>
                <p className="text-gray-600">
                  Schedule as needed or set up recurring walks—we handle the rest!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#C0362C] to-[#D4453C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to give your pup the walks they deserve?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join the Golden Gate Pawz family today. Your furry friend will thank you!
          </p>
          <Link
            href="/register"
            className="inline-block px-10 py-5 bg-white text-[#C0362C] rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
          >
            Start Your Journey
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image 
                  src="/logo.jpg" 
                  alt="Golden Gate Pawz" 
                  width={40} 
                  height={40}
                  className="rounded-full"
                />
                <span className="text-2xl font-bold">Golden Gate Pawz</span>
              </div>
              <p className="text-gray-400">
                Professional dog walking in San Francisco. Trusted, caring, and always wagging.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/tour" className="hover:text-[#C0362C] transition-colors">Take a Tour</Link></li>
                <li><Link href="/register" className="hover:text-[#C0362C] transition-colors">Register</Link></li>
                <li><Link href="/login" className="hover:text-[#C0362C] transition-colors">Login</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="mailto:walker@goldengaterawz.com" className="hover:text-[#C0362C] transition-colors">
                    walker@goldengaterawz.com
                  </a>
                </li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2026 Golden Gate Pawz. All rights reserved. Made with love for dogs and their humans.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}