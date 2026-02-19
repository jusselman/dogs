import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Heart, Calendar, Mail } from 'lucide-react'

export default function PendingApprovalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-amber-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-3xl p-8 md:p-10 text-center space-y-6">
        {/* Success Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#C0362C] to-[#D4453C] rounded-full mb-4">
          <CheckCircle className="w-12 h-12 text-white" />
        </div>
        
        {/* Logo */}
        <div className="flex justify-center">
          <Image 
            src="/logo.jpg" 
            alt="Golden Gate Pawz" 
            width={80} 
            height={80}
            className="rounded-full"
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Registration Submitted!
        </h1>
        
        <p className="text-lg text-gray-600">
          Thank you for registering with Golden Gate Pawz! We're excited to meet your furry friend.
        </p>

        {/* What Happens Next Box */}
        <div className="bg-white border-2 border-[#C0362C] rounded-2xl p-6 text-left space-y-4">
          <h3 className="font-bold text-[#C0362C] text-lg flex items-center gap-2">
            <Heart className="w-5 h-5" />
            What Happens Next
          </h3>
          <ol className="space-y-3">
            <li className="flex items-start gap-3 text-gray-700">
              <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#C0362C] to-[#D4453C] text-white rounded-full flex items-center justify-center text-sm font-semibold">1</span>
              <span>We'll review your dog's information</span>
            </li>
            <li className="flex items-start gap-3 text-gray-700">
              <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#C0362C] to-[#D4453C] text-white rounded-full flex items-center justify-center text-sm font-semibold">2</span>
              <span>We'll contact you within 48 hours to schedule a meet & greet</span>
            </li>
            <li className="flex items-start gap-3 text-gray-700">
              <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#C0362C] to-[#D4453C] text-white rounded-full flex items-center justify-center text-sm font-semibold">3</span>
              <span>After the meet & greet, we'll approve your account</span>
            </li>
            <li className="flex items-start gap-3 text-gray-700">
              <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#C0362C] to-[#D4453C] text-white rounded-full flex items-center justify-center text-sm font-semibold">4</span>
              <span>You'll be able to book walks through your calendar</span>
            </li>
          </ol>
        </div>

        {/* Email Notice */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl p-4 flex items-start gap-3">
          <Mail className="w-5 h-5 text-[#C0362C] flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-700 text-left">
            Check your email for a confirmation message. If you have any questions in the meantime, feel free to reach out!
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#C0362C] to-[#D4453C] text-white rounded-2xl hover:from-[#A02E24] hover:to-[#C0362C] transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Return to Home
          </Link>
        </div>

        {/* Contact Info */}
        <p className="text-sm text-gray-600 pt-4">
          Questions? Email us at{' '}
          <a href="mailto:walker@goldengaterawz.com" className="text-[#C0362C] hover:text-[#A02E24] font-semibold transition-colors">
            walker@goldengaterawz.com
          </a>
        </p>
      </div>
    </div>
  )
}