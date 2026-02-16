import Link from 'next/link'

export default function PendingApprovalPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center space-y-6">
        <div className="text-6xl">🐕</div>
        
        <h1 className="text-2xl font-bold text-gray-900">
          Registration Submitted!
        </h1>
        
        <div className="space-y-4 text-left">
          <p className="text-gray-600">
            Thank you for registering with Dogs! We're excited to meet your furry friend.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
            <h3 className="font-semibold text-blue-900 mb-2">What Happens Next:</h3>
            <ol className="text-sm text-blue-800 space-y-2 list-decimal list-inside">
              <li>We'll review your dog's information</li>
              <li>We'll contact you within 48 hours to schedule a meet & greet</li>
              <li>After the meet & greet, we'll approve your account</li>
              <li>You'll be able to book walks through your calendar</li>
            </ol>
          </div>
          
          <p className="text-gray-600">
            Check your email for a confirmation message. If you have any questions in the meantime, feel free to reach out!
          </p>
        </div>
        
        <div className="pt-4">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Return to Home
          </Link>
        </div>
        
        <p className="text-sm text-gray-500">
          Questions? Email us at{' '}
          <a href="mailto:walker@dogs.com" className="text-blue-600 hover:underline">
            walker@dogs.com
          </a>
        </p>
      </div>
    </div>
  )
}
