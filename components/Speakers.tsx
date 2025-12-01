import React from "react";
import { SPEAKERS } from "../constants";

const Speakers: React.FC = () => {
  return (
    <section
      id="experts"
      className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-700 font-semibold tracking-wide uppercase text-sm mb-3">
            Distinguished Panel
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            See Our Best Experts
          </h3>
          <p className="text-gray-600">
            Featuring Senior Diplomats, Retired Service Chiefs, and Policy
            Makers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPEAKERS.map((speaker) => (
            <div
              key={speaker.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-red-800/30"
            >
              {/* Image Section */}
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                {/* Image Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-lg font-bold text-white mb-1 leading-tight drop-shadow-lg">
                    {speaker.name}
                  </h4>
                  <p className="text-blue-300 text-sm font-medium drop-shadow-md">
                    {speaker.role}
                  </p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {speaker.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
