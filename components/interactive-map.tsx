"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Country data
const countries = [
  { id: "al", name: "Albania", qualified: null },
  { id: "am", name: "Armenia", qualified: null },
  { id: "au", name: "Australia", qualified: null },
  { id: "at", name: "Austria", qualified: null },
  { id: "az", name: "Azerbaijan", qualified: null },
  { id: "be", name: "Belgium", qualified: null },
  { id: "bg", name: "Bulgaria", qualified: null },
  { id: "hr", name: "Croatia", qualified: null },
  { id: "cy", name: "Cyprus", qualified: null },
  { id: "cz", name: "Czech Republic", qualified: null },
  { id: "dk", name: "Denmark", qualified: null },
  { id: "ee", name: "Estonia", qualified: null },
  { id: "fi", name: "Finland", qualified: null },
  { id: "fr", name: "France", qualified: true },
  { id: "ge", name: "Georgia", qualified: null },
  { id: "de", name: "Germany", qualified: true },
  { id: "gr", name: "Greece", qualified: null },
  { id: "is", name: "Iceland", qualified: null },
  { id: "ie", name: "Ireland", qualified: null },
  { id: "il", name: "Israel", qualified: null },
  { id: "it", name: "Italy", qualified: true },
  { id: "lv", name: "Latvia", qualified: null },
  { id: "lt", name: "Lithuania", qualified: null },
  { id: "mt", name: "Malta", qualified: null },
  { id: "md", name: "Moldova", qualified: null },
  { id: "me", name: "Montenegro", qualified: null },
  { id: "nl", name: "Netherlands", qualified: null },
  { id: "mk", name: "North Macedonia", qualified: null },
  { id: "no", name: "Norway", qualified: null },
  { id: "pl", name: "Poland", qualified: null },
  { id: "pt", name: "Portugal", qualified: null },
  { id: "ro", name: "Romania", qualified: null },
  { id: "sm", name: "San Marino", qualified: null },
  { id: "rs", name: "Serbia", qualified: null },
  { id: "si", name: "Slovenia", qualified: null },
  { id: "es", name: "Spain", qualified: true },
  { id: "se", name: "Sweden", qualified: null },
  { id: "ch", name: "Switzerland", qualified: true, host: true },
  { id: "ua", name: "Ukraine", qualified: null },
  { id: "uk", name: "United Kingdom", qualified: true },
];

export default function SoundwaveOrganism() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [time, setTime] = useState(0);
  const organismRef = useRef<HTMLDivElement>(null);

  // Animation loop
  useEffect(() => {
    const animate = () => {
      setTime((prev) => prev + 0.05);
      requestAnimationFrame(animate);
    };
    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Dynamic positioning
  const getPosition = (index: number, containerWidth: number) => {
    const baseRadius = Math.min(containerWidth * 0.35, 300); // Responsive radius
    const angle = (index / countries.length) * Math.PI * 2;
    const radius = baseRadius + Math.sin(time + index) * (baseRadius * 0.2);
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  // Resize handler to keep it square
  useEffect(() => {
    const updateSize = () => {
      if (organismRef.current) {
        const width = organismRef.current.offsetWidth;
        organismRef.current.style.height = `${width}px`;
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="min-h-screen bg-black py-8 flex flex-col items-center justify-center">
      <div className="text-center mb-8 text-white px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wider uppercase">
          37 Voices, One Living Song
        </h2>
        <p className="text-lg md:text-xl opacity-60 max-w-2xl mx-auto">
          Feel the pulse of the 69th Eurovision Song Contest. Hover to amplify a nation’s rhythm.
        </p>
      </div>

      <Card className="border-none bg-transparent shadow-none w-full max-w-6xl mx-4 overflow-hidden">
        <CardContent className="p-0 relative">
          <div
            ref={organismRef}
            className="relative w-full"
            style={{ minHeight: "400px" }}
          >
            {/* SVG Connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {countries.map((countryA, i) =>
                countries.slice(i + 1).map((countryB, j) => {
                  const containerWidth = organismRef.current?.offsetWidth || 800;
                  const posA = getPosition(i, containerWidth);
                  const posB = getPosition(i + j + 1, containerWidth);
                  const isActive =
                    hoveredCountry === countryA.id || hoveredCountry === countryB.id;

                  return (
                    <line
                      key={`${countryA.id}-${countryB.id}`}
                      x1={`calc(50% + ${posA.x}px)`}
                      y1={`calc(50% + ${posA.y}px)`}
                      x2={`calc(50% + ${posB.x}px)`}
                      y2={`calc(50% + ${posB.y}px)`}
                      stroke={isActive ? "rgba(168, 85, 247, 0.8)" : "rgba(255, 255, 255, 0.15)"}
                      strokeWidth={isActive ? 2 : 1}
                      className="transition-all duration-300"
                      style={{
                        strokeDasharray: "5,5",
                        animation: isActive ? "vibrate 0.5s infinite" : "none",
                      }}
                    />
                  );
                })
              )}
            </svg>

            {/* Country Nodes */}
            {countries.map((country, index) => {
              const containerWidth = organismRef.current?.offsetWidth || 800;
              const { x, y } = getPosition(index, containerWidth);
              const isHovered = hoveredCountry === country.id;
              const pulseSpeed = 1 + index * 0.05;

              return (
                <button
                  key={country.id}
                  className={cn(
                    "absolute transform -translate-x-1/2 -translate-y-1/2",
                    "transition-all duration-300 ease-in-out animate-pulse",
                    country.host
                      ? "w-8 h-8 md:w-10 md:h-10 bg-red-600 rounded-full shadow-[0_0_20px_8px_rgba(239,68,68,0.6)]"
                      : country.qualified
                      ? "w-6 h-6 md:w-8 md:h-8 bg-blue-500 rounded-full shadow-[0_0_15px_5px_rgba(96,165,250,0.5)]"
                      : "w-5 h-5 md:w-7 md:h-7 bg-white/80 rounded-full shadow-[0_0_10px_3px_rgba(255,255,255,0.4)]",
                    isHovered &&
                      "scale-150 bg-purple-500 shadow-[0_0_25px_10px_rgba(168,85,247,0.7)]"
                  )}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    animationDuration: `${pulseSpeed}s`,
                    zIndex: isHovered ? 10 : 1,
                  }}
                  onMouseEnter={() => setHoveredCountry(country.id)}
                  onMouseLeave={() => setHoveredCountry(null)}
                >
                  <span className="sr-only">{country.name}</span>
                  {isHovered && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 bg-black/90 text-white px-4 py-2 rounded-lg text-sm md:text-base font-bold shadow-lg whitespace-nowrap">
                      {country.name}
                      {country.host && (
                        <span className="block text-xs text-red-400">Host</span>
                      )}
                      {country.qualified && !country.host && (
                        <span className="block text-xs text-blue-400">Big 5</span>
                      )}
                    </div>
                  )}
                </button>
              );
            })}

            {/* Core Pulse */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 bg-purple-500/20 rounded-full animate-ping pointer-events-none"
            />
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center px-4">
            <Badge className="bg-transparent text-white border-white/20 text-sm md:text-base">
              Host:{" "}
              <span className="w-3 h-3 md:w-4 md:h-4 bg-red-600 rounded-full inline-block ml-1" />
            </Badge>
            <Badge className="bg-transparent text-white border-white/20 text-sm md:text-base">
              Big 5:{" "}
              <span className="w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full inline-block ml-1" />
            </Badge>
            <Badge className="bg-transparent text-white border-white/20 text-sm md:text-base">
              Participants:{" "}
              <span className="w-3 h-3 md:w-4 md:h-4 bg-white/80 rounded-full inline-block ml-1" />
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes vibrate {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(2px);
          }
          75% {
            transform: translateX(-2px);
          }
        }
        @keyframes ping {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          75% {
            transform: scale(1.3);
            opacity: 0;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 2s infinite ease-out;
        }
      `}</style>
    </div>
  );
}