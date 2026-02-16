import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Thank You!
        </h1>

        {/* Message */}
        <p className="text-lg text-gray-600 mb-6">
          Your quote request has been successfully submitted.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <p className="text-gray-700">
            Our team at Assignova will review your request and contact you{" "}
            <span className="font-semibold">within 24 hours</span> to discuss
            your project in detail.
          </p>
        </div>

        {/* Next Steps */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            What's Next?
          </h2>
          <div className="space-y-3 text-left max-w-md mx-auto">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
                  1
                </div>
              </div>
              <div className="ml-3">
                <p className="text-gray-700">
                  Check your email for our initial response
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
                  2
                </div>
              </div>
              <div className="ml-3">
                <p className="text-gray-700">
                  Schedule a consultation with our team
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
                  3
                </div>
              </div>
              <div className="ml-3">
                <p className="text-gray-700">
                  Receive a customized proposal for your project
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#02205c] to-[#9cb1d7] text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all"
          >
            Back to Home
          </Link>
          <Link
            href="/#services"
            className="inline-block px-8 py-3 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition-all"
          >
            Explore Services
          </Link>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">
            Have questions in the meantime? Feel free to reach out:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-gray-700">
            <a
              href="mailto:info@assignova.com"
              className="hover:text-blue-600 transition-colors"
            >
              📧 info@assignova.com
            </a>
            <a
              href="tel:+1234567890"
              className="hover:text-blue-600 transition-colors"
            >
              📞 +1 (234) 567-890
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
