import React, { useState } from "react";
import { SCHEDULE_CONCLAVE, SCHEDULE_WORKSHOP } from "../constants";
import { Clock, Coffee, Mic2, Calendar, ArrowRight } from "lucide-react";

const Schedule: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"conclave" | "workshop">(
    "workshop"
  );

  const activeSchedule =
    activeTab === "conclave" ? SCHEDULE_CONCLAVE : SCHEDULE_WORKSHOP;

  return (
    <section id="schedule" className="py-20 relative overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-green-600/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-800/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 mb-6">
            <Calendar className="w-4 h-4 text-blue-700" />
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
              Event Timeline
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Program Schedule
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Three days of high-impact sessions connecting national policy
            leadership with wider citizen and professional participation.
          </p>
        </div>

        {/* Modern Tabs */}
        <div className="flex justify-center mb-16">
          <div className="relative bg-gradient-to-r from-gray-100 to-gray-200 p-2 rounded-2xl shadow-2xl border border-gray-300">
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => setActiveTab("conclave")}
                className={`relative px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-300 group ${
                  activeTab === "conclave"
                    ? "bg-gradient-to-r from-red-800 to-red-900 text-white shadow-lg shadow-red-800/25"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-current opacity-60"></div>
                  <span>18-19 Dec (Conclave)</span>
                  {activeTab === "conclave" && (
                    <ArrowRight className="w-4 h-4 ml-2" />
                  )}
                </div>
              </button>
              <button
                onClick={() => setActiveTab("workshop")}
                className={`relative px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-300 group ${
                  activeTab === "workshop"
                    ? "bg-gradient-to-r from-red-800 to-red-900 text-white shadow-lg shadow-red-800/25"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-current opacity-60"></div>
                  <span>20 Dec (Public Workshop)</span>
                  {activeTab === "workshop" && (
                    <ArrowRight className="w-4 h-4 ml-2" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Modern Schedule Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-20 top-0 bottom-0 w-px bg-gradient-to-b from-red-800 via-blue-600 to-green-700 opacity-40"></div>

          <div className="space-y-6">
            {activeSchedule.map((item, index) => {
              const isBreak = item.isBreak;

              return (
                <div
                  key={index}
                  className={`relative group ${isBreak ? "opacity-75" : ""}`}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-2 md:left-16 w-6 h-6 rounded-full border-4 z-10 ${
                      isBreak
                        ? "bg-green-600 border-green-500 shadow-lg shadow-green-600/30"
                        : "bg-red-800 border-red-700 shadow-lg shadow-red-800/40"
                    }`}
                  >
                    <div
                      className={`absolute inset-1 rounded-full ${
                        isBreak ? "bg-green-400" : "bg-red-600"
                      }`}
                    ></div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-12 md:ml-32 rounded-2xl p-6 md:p-8 transition-all duration-300 border backdrop-blur-sm ${
                      isBreak
                        ? "bg-gradient-to-r from-green-50 to-green-100 border-green-300/40 hover:border-green-400/60"
                        : "bg-gradient-to-r from-white to-gray-50 border-gray-200 hover:border-red-800/30 hover:shadow-xl hover:shadow-red-800/10"
                    }`}
                  >
                    {/* Time Badge */}
                    <div
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-4 ${
                        isBreak
                          ? "bg-green-600/20 text-green-800 border border-green-600/30"
                          : "bg-red-800/20 text-red-800 border border-red-800/30"
                      }`}
                    >
                      <Clock className="w-3 h-3" />
                      {item.time}
                    </div>

                    {/* Content */}
                    {isBreak ? (
                      <div className="flex items-center gap-3 text-green-800">
                        <Coffee className="w-6 h-6 text-green-700" />
                        <span className="text-lg font-semibold">
                          {item.title}
                        </span>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs uppercase tracking-widest text-blue-700 font-bold bg-blue-600/10 px-3 py-1 rounded-full">
                            {item.description}
                          </span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight group-hover:text-red-800 transition-colors">
                          {item.title}
                        </h3>

                        {item.speaker && (
                          <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-xl border border-gray-200 backdrop-blur-sm">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-800 to-blue-600 flex items-center justify-center">
                              <Mic2 className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <p className="text-xs text-gray-600 uppercase tracking-wide">
                                Speaker
                              </p>
                              <p className="text-sm font-semibold text-gray-800">
                                {item.speaker}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
