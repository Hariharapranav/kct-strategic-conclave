import React from "react";
import { MapPin, Users } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-800 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-800/10 border border-red-800/20 mb-6">
            <Users className="w-4 h-4 text-red-700" />
            <span className="text-red-700 font-semibold text-sm uppercase tracking-wide">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Contact Information
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Have questions about the Strategic Conclave 2025? Reach out to our
            organizing team for assistance with registration, accommodation, or
            any other inquiries.
          </p>
        </div>

        {/* Contact Information */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Person 1 */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Ms. Binu Krishna M
              </h4>
              <p className="text-gray-600">
                Mobile:{" "}
                <a
                  href="tel:9873460798"
                  className="text-gray-800 hover:text-red-600 transition-colors"
                >
                  9873460798
                </a>
              </p>
            </div>

            {/* Contact Person 2 */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Ms. Anitha Kumari
              </h4>
              <p className="text-gray-600">
                Mobile:{" "}
                <a
                  href="tel:7065836110"
                  className="text-gray-800 hover:text-red-600 transition-colors"
                >
                  7065836110
                </a>
              </p>
            </div>

            {/* Contact Person 3 */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Dr. Animesh Shukla
              </h4>
              <p className="text-gray-600">
                Mobile:{" "}
                <a
                  href="tel:9910105794"
                  className="text-gray-800 hover:text-red-600 transition-colors"
                >
                  9910105794
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Event Venue</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Sarabhai Kalam Theater</p>
                    <p className="text-gray-300 text-sm">
                      Kumaraguru Campus, Coimbatore – 641049, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <h4 className="text-xl font-semibold mb-4">Ready to Join?</h4>
              <p className="text-gray-300 mb-6">
                Secure your spot at India's premier strategic dialogue platform.
              </p>
              <a
                href="https://axisbpayments.razorpay.com/pl_RYqYguNQQPm9cQ/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-800 hover:bg-red-900 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
