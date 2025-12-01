import React from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <div className="relative h-[300px] md:h-[500px] w-full bg-gray-100 overflow-hidden group cursor-pointer">
      <img
        src="https://picsum.photos/seed/meeting/1920/600"
        alt="Conference Highlights"
        className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-gray-100/70 to-white/90"></div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-6 md:mb-8 max-w-4xl leading-tight">
          Watch Our Previous Conclave Highlights
        </h2>
        <div className="w-16 h-16 md:w-20 md:h-20 bg-red-800 rounded-full flex items-center justify-center pl-1 md:pl-2 shadow-[0_0_30px_rgba(153,27,27,0.4)] group-hover:scale-110 transition-transform duration-300">
            <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-current" />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;