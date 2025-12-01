import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative bg-gradient-to-br from-white via-blue-50 to-gray-100 overflow-hidden pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-50"
          src="/hero.jpg"
          alt="Conference Hall"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/50 to-blue-50/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-40">
        <div className="lg:w-2/3">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-600/30 bg-blue-600/10 backdrop-blur-sm mb-6">
                <span className="text-blue-700 font-semibold tracking-wide text-sm uppercase">18–20 December 2025</span>
            </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 tracking-tight leading-tight mb-6">
            Strategic Conclave & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-blue-700">
              Workshop 2025
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-700 max-w-3xl leading-relaxed border-l-4 border-red-800 pl-6">
            Reconciling Evolving Global Dynamics into Strategic Opportunities for India.
            Join India's top diplomats, defence leaders, economists, and policy thinkers.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <div className="flex items-center text-gray-700 bg-white/80 px-6 py-4 rounded-lg backdrop-blur-sm border border-gray-200 shadow-md">
                <MapPin className="h-6 w-6 text-red-800 mr-3" />
                <div>
                    <p className="text-sm text-gray-600">Venue</p>
                    <p className="font-semibold text-gray-800">Sarabhai Kalam Theater</p>
                    <p className="text-xs text-gray-500">Kumaraguru Campus, Coimbatore</p>
                </div>
            </div>
             <div className="flex items-center text-gray-700 bg-white/80 px-6 py-4 rounded-lg backdrop-blur-sm border border-gray-200 shadow-md">
                <Calendar className="h-6 w-6 text-red-800 mr-3" />
                 <div>
                    <p className="text-sm text-gray-600">Date</p>
                    <p className="font-semibold text-gray-800">18-20 Dec 2025</p>
                </div>
            </div>
          </div>

          <div className="mt-10 flex gap-4">
            <a 
              href="https://axisbpayments.razorpay.com/pl_RYqYguNQQPm9cQ/view" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-lg shadow-red-800/30 hover:scale-105 inline-block"
            >
              Get Your Ticket
            </a>
            <a 
              href="#schedule"
              className="border border-gray-600 hover:border-red-800 text-gray-700 hover:text-red-800 px-8 py-4 rounded-lg text-lg font-medium transition-all inline-block text-center hover:scale-105"
            >
              View Agenda
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;