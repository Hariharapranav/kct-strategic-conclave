import React, { useState } from "react";
import { REGISTRATION_TIERS } from "../constants";
import { Check } from "lucide-react";

const Registration: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  return (
    <section id="register" className="py-20 md:py-24 relative bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-blue-50 to-green-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-blue-700 font-semibold tracking-wide uppercase text-sm mb-3">
            Join The Conclave
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Registration Details
          </h3>
          <p className="text-gray-600 text-sm md:text-base">
            Limited seats available. Hybrid participation mode is also
            available.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {REGISTRATION_TIERS.map((tier, index) => (
            <div
              key={index}
              onClick={() => setSelectedTier(index)}
              className={`rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 cursor-pointer ${
                selectedTier === index
                  ? "bg-gradient-to-b from-red-50 to-white border-2 border-red-800 shadow-xl shadow-red-800/20 md:scale-105 z-10"
                  : "bg-white border border-gray-300 hover:border-red-800/30 hover:shadow-lg shadow-md opacity-90 hover:opacity-100"
              }`}
            >
              {selectedTier === index && (
                <div className="bg-red-800 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                  SELECTED
                </div>
              )}
              {tier.highlight && selectedTier !== index && (
                <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                  MOST POPULAR
                </div>
              )}

              <h4 className={`text-2xl font-bold mb-2 ${
                selectedTier === index
                  ? "text-red-800"
                  : "text-gray-700"
              }`}>
                {tier.category}
              </h4>
              <div className="flex items-baseline gap-1 mb-6">
                <span className={`text-4xl font-extrabold ${
                  selectedTier === index
                    ? "text-gray-900"
                    : "text-gray-600"
                }`}>
                  {tier.price}
                </span>
                <span className="text-gray-600 text-sm">/{tier.per}</span>
              </div>

              <ul className="space-y-4 mb-8 w-full">
                {tier.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-left w-full max-w-xs mx-auto"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-600/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-700" />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://axisbpayments.razorpay.com/pl_RYqYguNQQPm9cQ/view"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-lg font-bold transition-all whitespace-nowrap text-center inline-block bg-red-800 hover:bg-red-900 text-white shadow-lg shadow-red-800/25"
              >
                Register Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Registration;
