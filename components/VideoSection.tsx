import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";
import { VIDEOS } from "../constants";

const VideoSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const [mutedVideos, setMutedVideos] = useState<{ [key: string]: boolean }>(
    {}
  );
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const iframeRefs = useRef<{ [key: string]: HTMLIFrameElement | null }>({});

  // Extract YouTube video ID from URL
  const getYouTubeId = (url: string): string => {
    const match = url.match(/(?:shorts\/|v=|embed\/|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : "";
  };

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
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Initialize muted state for all videos
  useEffect(() => {
    const initialMutedState: { [key: string]: boolean } = {};
    VIDEOS.forEach((video) => {
      const videoId = getYouTubeId(video.url);
      initialMutedState[videoId] = true; // Start muted
    });
    setMutedVideos(initialMutedState);
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

    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
    }

    if (!isPaused && VIDEOS.length > itemsPerView) {
      autoPlayIntervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev >= maxIndex) {
            return 0;
          }
          return prev + 1;
        });
      }, 5000);
    }

    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
      }
    };
  }, [isPaused, itemsPerView]);

  const toggleMute = (videoId: string) => {
    setMutedVideos((prev) => ({
      ...prev,
      [videoId]: !prev[videoId],
    }));

    // Send message to iframe to toggle mute
    const iframe = iframeRefs.current[videoId];
    if (iframe && iframe.contentWindow) {
      const command = mutedVideos[videoId] ? "unMute" : "mute";
      iframe.contentWindow.postMessage(
        `{"event":"command","func":"${command}","args":""}`,
        "*"
      );
    }
  };

  const nextSlide = () => {
    const maxIndex = Math.max(0, VIDEOS.length - itemsPerView);
    setIsPaused(true);
    setCurrentIndex((prev) => {
      if (prev >= maxIndex) {
        return 0;
      }
      return prev + 1;
    });
    setTimeout(() => setIsPaused(false), 5000);
  };

  const prevSlide = () => {
    setIsPaused(true);
    setCurrentIndex((prev) => {
      if (prev === 0) {
        const maxIndex = Math.max(0, VIDEOS.length - itemsPerView);
        return maxIndex;
      }
      return prev - 1;
    });
    setTimeout(() => setIsPaused(false), 5000);
  };

  const handleDotClick = (idx: number) => {
    setIsPaused(true);
    setCurrentIndex(idx);
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
            Listen to distinguished speakers share their insights and
            perspectives on strategic matters.
          </p>
        </div>

        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          {VIDEOS.length > itemsPerView && (
            <>
              <button
                type="button"
                onClick={prevSlide}
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 p-3 rounded-full border border-gray-300 bg-white text-gray-700 transition-all shadow-lg items-center justify-center hover:bg-red-800 hover:border-red-800 hover:text-white"
                aria-label="Previous video"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 p-3 rounded-full border border-gray-300 bg-white text-gray-700 transition-all shadow-lg items-center justify-center hover:bg-red-800 hover:border-red-800 hover:text-white"
                aria-label="Next video"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Carousel Track */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(-${currentIndex} * ((100% - ${
                  (itemsPerView - 1) * 1.5
                }rem) / ${itemsPerView} + 1.5rem)))`,
              }}
            >
              {VIDEOS.map((video, index) => {
                const videoId = getYouTubeId(video.url);
                const itemWidth = `calc((100% - ${
                  (itemsPerView - 1) * 1.5
                }rem) / ${itemsPerView})`;
                const isMuted = mutedVideos[videoId] ?? true;

                return (
                  <div
                    key={videoId}
                    className="group flex-shrink-0 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl hover:border-red-800/40 transition-all duration-300"
                    style={{
                      width: itemWidth,
                      marginRight: index < VIDEOS.length - 1 ? "1.5rem" : "0",
                    }}
                  >
                    {/* YouTube Embed Container */}
                    <div className="relative bg-gray-100 overflow-hidden h-[32rem]">
                      <iframe
                        ref={(el) => {
                          iframeRefs.current[videoId] = el;
                        }}
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&enablejsapi=1&iv_load_policy=3&cc_load_policy=0&fs=0&disablekb=1&start=0&end=0&origin=${window.location.origin}`}
                        title={video.title}
                        className="w-full h-full object-cover"
                        style={{ minWidth: '100%', minHeight: '100%' }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />

                      {/* Mute/Unmute Button */}
                      <button
                        type="button"
                        onClick={() => toggleMute(videoId)}
                        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all duration-200"
                        aria-label={isMuted ? "Unmute video" : "Mute video"}
                      >
                        {isMuted ? (
                          <VolumeX className="w-5 h-5" />
                        ) : (
                          <Volume2 className="w-5 h-5" />
                        )}
                      </button>
                    </div>


                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          {VIDEOS.length > itemsPerView && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleDotClick(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-8 bg-red-800"
                      : "w-2 bg-gray-400 hover:bg-gray-600"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
