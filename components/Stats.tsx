import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-green-700 to-green-800 py-16 relative z-10 -mt-10 border-t border-green-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex flex-col items-center justify-center p-6 bg-white/90 rounded-2xl hover:bg-white transition-colors border border-gray-200 group shadow-lg">
                <div className="p-4 rounded-full bg-red-800/10 text-red-800 mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;