import React, { useState, useEffect, useRef } from "react";
import { SPONSORSHIPS, WHY_PARTNER, BRANDING_AVENUES } from "../constants";
import {
  CheckCircle2,
  Megaphone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Sponsorship: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ensure index remains valid on resize
  useEffect(() => {
    const maxIndex = Math.max(0, SPONSORSHIPS.length - itemsPerPage);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerPage, currentIndex]);

  const nextSlide = () => {
    const maxIndex = Math.max(0, SPONSORSHIPS.length - itemsPerPage);
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const maxIndex = Math.max(0, SPONSORSHIPS.length - itemsPerPage);

  return (
    <section
      id="sponsorship"
      className="py-20 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="text-center mb-16">
          <h2 className="text-blue-700 font-semibold tracking-wide uppercase text-sm mb-3">
            Partner With Us
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Sponsorship Opportunities
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Contribute to a thought leadership platform with tangible social
            impact.
          </p>
        </div>

        {/* Why Partner Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_PARTNER.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:bg-gray-50 transition-all group shadow-lg"
                >
                  <div className="w-12 h-12 bg-red-800/10 rounded-lg flex items-center justify-center mb-4 text-red-800 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-gray-800 font-bold text-lg mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative mb-20 px-4 md:px-12">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full border border-gray-300 bg-white text-gray-700 transition-all ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-red-800 hover:border-red-800 hover:text-white shadow-lg"
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full border border-gray-300 bg-white text-gray-700 transition-all ${
              currentIndex === maxIndex
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-red-800 hover:border-red-800 hover:text-white shadow-lg"
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider Track */}
          <div className="overflow-hidden py-10 -my-10" ref={containerRef}>
            <div
              className="flex transition-transform duration-500 ease-out will-change-transform"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerPage)
                }%)`,
              }}
            >
              {SPONSORSHIPS.map((tier, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-3 w-full md:w-1/2 lg:w-1/3"
                >
                  <div
                    onClick={() => setSelectedTier(index)}
                    className={`h-full flex flex-col p-8 rounded-2xl transition-all duration-300 relative cursor-pointer ${
                      selectedTier === index
                        ? "bg-gradient-to-b from-red-50 to-white border-2 border-red-800 shadow-[0_0_30px_rgba(153,27,27,0.2)] scale-100 md:scale-105"
                        : "bg-white border border-gray-300 hover:border-red-800/30 hover:shadow-lg shadow-md opacity-90 hover:opacity-100"
                    }`}
                  >
                    {selectedTier === index && (
                      <div className="absolute top-0 right-0 bg-red-800 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                        SELECTED
                      </div>
                    )}
                    {tier.highlight && selectedTier !== index && (
                      <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                        POPULAR
                      </div>
                    )}

                    <h4
                      className={`text-xl font-bold mb-2 ${
                        selectedTier === index
                          ? "text-red-800"
                          : "text-gray-700"
                      }`}
                    >
                      {tier.name}
                    </h4>
                    <div
                      className={`text-3xl font-extrabold mb-6 truncate ${
                        selectedTier === index
                          ? "text-gray-900"
                          : "text-gray-600"
                      }`}
                    >
                      {tier.amount}
                    </div>

                    <div className="flex-grow space-y-4 mb-8">
                      {tier.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2
                            className={`w-5 h-5 flex-shrink-0 ${
                              selectedTier === index
                                ? "text-green-600"
                                : "text-gray-500"
                            }`}
                          />
                          <span className="text-gray-700 text-sm">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="https://axisbpayments.razorpay.com/pl_RYqYguNQQPm9cQ/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-lg font-bold transition-colors mt-auto text-center inline-block bg-red-800 hover:bg-red-900 text-white shadow-lg shadow-red-800/25"
                    >
                      Become a Partner
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-8 bg-red-800"
                    : "bg-gray-400 hover:bg-gray-600"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Branding Avenues */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
            <div className="p-3 bg-green-600/10 rounded-lg text-green-700">
              <Megaphone className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">
              Promotional & Branding Avenues
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            {BRANDING_AVENUES.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="mt-1.5 w-2 h-2 rounded-full bg-red-800 flex-shrink-0" />
                <span className="text-gray-700 text-sm leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsorship;
