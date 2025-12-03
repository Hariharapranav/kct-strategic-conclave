import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { VIDEOS } from '../constants';

const VideoSection: React.FC = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Ensure index remains valid on resize
  useEffect(() => {
    const maxIndex = Math.max(0, VIDEOS.length - itemsPerView);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerView, currentIndex]);

  // Auto-play carousel
  useEffect(() => {
    const maxIndex = Math.max(0, VIDEOS.length - itemsPerView);
    
    // Clear existing interval
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
    }

    // Only auto-play if not paused and no video is playing
    if (!isPaused && playingId === null) {
      autoPlayIntervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev >= maxIndex) {
            return 0; // Loop back to start
          }
          return prev + 1;
        });
      }, 4000); // Change slide every 4 seconds
    }

    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
      }
    };
  }, [isPaused, playingId, itemsPerView]);

  // Pause auto-play when video is playing
  useEffect(() => {
    if (playingId !== null) {
      setIsPaused(true);
    } else {
      // Resume after a short delay when video stops
      const timer = setTimeout(() => {
        setIsPaused(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [playingId]);

  const handleVideoClick = async (id: number, videoElement: HTMLVideoElement | null) => {
    if (!videoElement) return;

    if (playingId === id) {
      // If already playing, pause it
      videoElement.pause();
      setPlayingId(null);
    } else {
      // Pause any currently playing video
      if (playingId !== null && videoRefs.current[playingId]) {
        videoRefs.current[playingId]?.pause();
      }
      
      // Play the clicked video
      setPlayingId(id);
      try {
        await videoElement.play();
      } catch (error) {
        console.error('Error playing video:', error);
      }
    }
  };

  const nextSlide = () => {
    const maxIndex = Math.max(0, VIDEOS.length - itemsPerView);
    setIsPaused(true); // Pause auto-play on manual navigation
    setCurrentIndex((prev) => {
      if (prev >= maxIndex) {
        return 0; // Loop back to start
      }
      return prev + 1;
    });
    // Resume auto-play after 5 seconds of no interaction
    setTimeout(() => setIsPaused(false), 5000);
  };

  const prevSlide = () => {
    setIsPaused(true); // Pause auto-play on manual navigation
    setCurrentIndex((prev) => {
      if (prev === 0) {
        const maxIndex = Math.max(0, VIDEOS.length - itemsPerView);
        return maxIndex; // Loop to end
      }
      return prev - 1;
    });
    // Resume auto-play after 5 seconds of no interaction
    setTimeout(() => setIsPaused(false), 5000);
  };

  const handleDotClick = (idx: number) => {
    setIsPaused(true); // Pause auto-play on manual navigation
    setCurrentIndex(idx);
    // Resume auto-play after 5 seconds of no interaction
    setTimeout(() => setIsPaused(false), 5000);
  };

  const maxIndex = Math.max(0, VIDEOS.length - itemsPerView);

  return (
    <section
      id="videos"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-blue-700 font-semibold tracking-wide uppercase text-sm mb-3">
            Expert Insights
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Watch Our Expert Videos
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Listen to distinguished speakers share their insights and perspectives on strategic matters.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            if (playingId === null) {
              setIsPaused(false);
            }
          }}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 p-3 rounded-full border border-gray-300 bg-white text-gray-700 transition-all shadow-lg items-center justify-center ${
              currentIndex === 0
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-red-800 hover:border-red-800 hover:text-white'
            }`}
            aria-label="Previous video"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 p-3 rounded-full border border-gray-300 bg-white text-gray-700 transition-all shadow-lg items-center justify-center ${
              currentIndex === maxIndex
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-red-800 hover:border-red-800 hover:text-white'
            }`}
            aria-label="Next video"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(-${currentIndex} * ((100% - ${(itemsPerView - 1) * 1.5}rem) / ${itemsPerView} + 1.5rem)))`,
              }}
            >
              {VIDEOS.map((video, index) => {
                const itemWidth = `calc((100% - ${(itemsPerView - 1) * 1.5}rem) / ${itemsPerView})`;
                return (
                <div
                  key={video.id}
                  className="group flex-shrink-0 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl hover:border-red-800/40 transition-all duration-300"
                  style={{ 
                    width: itemWidth,
                    marginRight: index < VIDEOS.length - 1 ? '1.5rem' : '0',
                  }}
                >
                  {/* Video Container - Display original video size */}
                  <div className="relative bg-transparent overflow-hidden">
                    <video
                      ref={(el) => {
                        videoRefs.current[video.id] = el;
                      }}
                      src={video.path}
                      controls={playingId === video.id}
                      controlsList="nodownload nofullscreen noremoteplayback"
                      className="w-full h-auto"
                      playsInline
                      preload="metadata"
                    />
                    {playingId !== video.id && (
                      <div
                        className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/70 via-black/30 to-black/70 cursor-pointer z-10"
                        onClick={() => handleVideoClick(video.id, videoRefs.current[video.id])}
                      >
                        <div className="text-center px-2">
                          <div className="w-16 h-16 md:w-20 md:h-20 bg-red-800/90 rounded-full flex items-center justify-center mb-2 mx-auto shadow-[0_0_30px_rgba(153,27,27,0.6)] group-hover:scale-110 transition-transform duration-300">
                            <svg
                              className="w-8 h-8 md:w-10 md:h-10 text-white fill-current ml-1"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                          <p className="text-white text-sm font-medium">Click to play</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'w-8 bg-red-800'
                    : 'w-2 bg-gray-400 hover:bg-gray-600'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;