import Link from 'next/link'

export default function TourPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            🐕 Dogs
          </Link>
          <Link
            href="/register"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to Dogs
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional dog walking service with easy online booking
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        {/* Feature 1 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-4xl mb-4">📝</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Simple Registration
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Create your account and tell us about your dog in just a few minutes. We collect all the important information about your pup's health, behavior, and preferences to ensure the best care possible.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Detailed health and behavior profile
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Emergency contact information
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Veterinary information on file
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="bg-blue-50 p-6 rounded-md">
              <p className="text-center text-gray-600">Registration form preview</p>
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 bg-white p-8 rounded-lg shadow-lg">
            <div className="bg-blue-50 p-6 rounded-md">
              <p className="text-center text-gray-600">Calendar interface preview</p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="text-4xl mb-4">📅</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Easy Booking
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Once approved, book walks through our simple calendar interface. See available time slots and schedule walks at your convenience.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                View real-time availability
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Schedule recurring walks
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                48-hour advance notice required
              </li>
            </ul>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-4xl mb-4">💬</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Direct Communication
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Message your walker directly through the app. Ask questions, provide updates, or share special instructions for your pup's walk.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Email messaging built-in
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Quick response times
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Direct phone contact for approved clients
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="bg-blue-50 p-6 rounded-md">
              <p className="text-center text-gray-600">Messaging interface preview</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Register</h3>
              <p className="text-gray-600 text-sm">
                Create your account and tell us about your dog
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Meet & Greet</h3>
              <p className="text-gray-600 text-sm">
                We'll schedule a meet & greet to ensure a good fit
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Get Approved</h3>
              <p className="text-gray-600 text-sm">
                Once approved, you can start booking walks
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Book Walks</h3>
              <p className="text-gray-600 text-sm">
                Schedule walks through your online calendar
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Transparent Pricing
          </h2>
          <div className="max-w-2xl mx-auto space-y-4 text-gray-700">
            <p className="text-lg">
              All walks are 30 minutes and priced based on your dog's size, breed, and individual needs.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Base rate starts at $25 for 30 minutes
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Larger dogs (70+ lbs) may have additional surcharges
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Special handling needs assessed individually
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Price quote provided after registration review
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join the Dogs family today and give your pup the exercise they deserve!
          </p>
          <Link
            href="/register"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold shadow-lg"
          >
            Register Now
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-2">© 2024 Dogs. Professional Dog Walking Service.</p>
          <p className="text-gray-400">
            Questions? Email{' '}
            <a href="mailto:walker@dogs.com" className="text-blue-400 hover:underline">
              walker@dogs.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
