import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl w-full space-y-8 text-center">
        {/* Logo/Brand */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-blue-600">
            🐕 Dogs
          </h1>
          <p className="text-xl text-gray-600">
            Professional Dog Walking Service
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Trusted, caring walks for your furry family member. Book your first walk today!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link
            href="/login"
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold shadow-lg"
          >
            Login
          </Link>
          
          <Link
            href="/register"
            className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold shadow-lg"
          >
            Register
          </Link>
          
          <Link
            href="/tour"
            className="w-full sm:w-auto px-8 py-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-lg font-semibold shadow-lg"
          >
            Take a Tour
          </Link>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-3">🦴</div>
            <h3 className="text-lg font-semibold mb-2">Professional Care</h3>
            <p className="text-gray-600">Experienced walker who treats your dog like family</p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-3">📅</div>
            <h3 className="text-lg font-semibold mb-2">Easy Scheduling</h3>
            <p className="text-gray-600">Book walks at times that work for you</p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-3">💙</div>
            <h3 className="text-lg font-semibold mb-2">Peace of Mind</h3>
            <p className="text-gray-600">Reliable service with your dog's safety first</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="pt-8 text-gray-600">
          <p>Questions? Email us at <a href="mailto:walker@dogs.com" className="text-blue-600 hover:underline">walker@dogs.com</a></p>
        </div>
      </div>
    </main>
  )
}
