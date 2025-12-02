import React, { useState, useEffect } from 'react';
import { ABOUT_TEXT } from '../constants';
import { Building2, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Target date: December 18, 2025 09:00:00 IST (UTC+05:30)
    const targetDate = new Date('2025-12-18T09:00:00+05:30').getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        // Event has started or passed
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Initial calculation
    calculateTimeLeft();

    // Update every second
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Decorative Blob */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-olive-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Section */}
        <div className="text-center mb-20">
            <h2 className="text-blue-700 font-semibold tracking-wide uppercase text-sm mb-3">About The Initiative</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              Welcome to the South India's <br/> Largest Conclave
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
              The <strong className="text-red-800">Kumaraguru–RISET Strategic Conclave and Workshop 2025</strong> brings together India's foremost diplomats, military strategists, economists, and policy thinkers to explore how India can transform global dynamics into strategic opportunities.
            </p>
        </div>

        {/* Organizers Grid */}
        {/* <div className="grid lg:grid-cols-2 gap-12 mb-20"> */}
             {/* KI Section */}
             {/* <div className="bg-[#1f1f3a] rounded-2xl p-8 border border-white/5 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-600/20 rounded-lg text-blue-400">
                        <Building2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-white">Kumaraguru Institutions</h4>
                </div>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {ABOUT_TEXT.ki}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#252542] text-xs font-medium text-blue-300 rounded-full border border-blue-500/20">NAAC A++ Grade</span>
                    <span className="px-3 py-1 bg-[#252542] text-xs font-medium text-blue-300 rounded-full border border-blue-500/20">292 Acres</span>
                    <span className="px-3 py-1 bg-[#252542] text-xs font-medium text-blue-300 rounded-full border border-blue-500/20">4 Decades Legacy</span>
                </div>
             </div> */}

             {/* RISET Section */}
             {/* <div className="bg-[#1f1f3a] rounded-2xl p-8 border border-white/5 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-600/20 rounded-lg text-blue-400">
                        <Lightbulb className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-white">RISET Foundation</h4>
                </div>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {ABOUT_TEXT.riset}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#252542] text-xs font-medium text-blue-300 rounded-full border border-blue-500/20">Security</span>
                    <span className="px-3 py-1 bg-[#252542] text-xs font-medium text-blue-300 rounded-full border border-blue-500/20">Economy</span>
                    <span className="px-3 py-1 bg-[#252542] text-xs font-medium text-blue-300 rounded-full border border-blue-500/20">Technology</span>
                </div>
             </div>
        </div> */}

        {/* Countdown */}
        <div className="bg-white p-8 rounded-2xl border border-gray-200 max-w-4xl mx-auto shadow-2xl shadow-gray-300/20">
            <p className="text-center text-gray-600 mb-8 uppercase tracking-widest text-sm font-semibold">Event Starts In</p>
            <div className="flex justify-center gap-4 md:gap-12">
                {[
                    { val: timeLeft.days, label: 'Days' },
                    { val: timeLeft.hours, label: 'Hours' },
                    { val: timeLeft.minutes, label: 'Minutes' },
                    { val: timeLeft.seconds, label: 'Seconds' }
                ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-red-800 to-red-900 border border-red-700/30 flex items-center justify-center text-xl md:text-4xl font-bold text-white mb-3 shadow-lg shadow-red-800/30 tabular-nums">
                            {String(item.val).padStart(2, '0')}
                        </div>
                        <span className="text-xs md:text-sm text-gray-600 uppercase tracking-wider">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default About;