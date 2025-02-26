"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

// Participating countries data
const countries = [
  { id: "al", name: "Albania", x: 55, y: 60, qualified: null },
  { id: "am", name: "Armenia", x: 75, y: 45, qualified: null },
  { id: "au", name: "Australia", x: 90, y: 85, qualified: null },
  { id: "at", name: "Austria", x: 52, y: 45, qualified: null },
  { id: "az", name: "Azerbaijan", x: 70, y: 48, qualified: null },
  { id: "be", name: "Belgium", x: 47, y: 42, qualified: null },
  { id: "bg", name: "Bulgaria", x: 58, y: 50, qualified: null },
  { id: "hr", name: "Croatia", x: 53, y: 50, qualified: null },
  { id: "cy", name: "Cyprus", x: 65, y: 58, qualified: null },
  { id: "cz", name: "Czech Republic", x: 52, y: 43, qualified: null },
  { id: "dk", name: "Denmark", x: 48, y: 35, qualified: null },
  { id: "ee", name: "Estonia", x: 55, y: 32, qualified: null },
  { id: "fi", name: "Finland", x: 55, y: 28, qualified: null },
  { id: "fr", name: "France", x: 45, y: 48, qualified: true },
  { id: "ge", name: "Georgia", x: 68, y: 48, qualified: null },
  { id: "de", name: "Germany", x: 50, y: 40, qualified: true },
  { id: "gr", name: "Greece", x: 58, y: 55, qualified: null },
  { id: "is", name: "Iceland", x: 35, y: 25, qualified: null },
  { id: "ie", name: "Ireland", x: 38, y: 38, qualified: null },
  { id: "il", name: "Israel", x: 65, y: 60, qualified: null },
  { id: "it", name: "Italy", x: 50, y: 50, qualified: true },
  { id: "lv", name: "Latvia", x: 55, y: 35, qualified: null },
  { id: "lt", name: "Lithuania", x: 55, y: 37, qualified: null },
  { id: "mt", name: "Malta", x: 52, y: 60, qualified: null },
  { id: "md", name: "Moldova", x: 60, y: 45, qualified: null },
  { id: "me", name: "Montenegro", x: 55, y: 52, qualified: null },
  { id: "nl", name: "Netherlands", x: 47, y: 40, qualified: null },
  { id: "mk", name: "North Macedonia", x: 57, y: 52, qualified: null },
  { id: "no", name: "Norway", x: 50, y: 28, qualified: null },
  { id: "pl", name: "Poland", x: 55, y: 40, qualified: null },
  { id: "pt", name: "Portugal", x: 38, y: 55, qualified: null },
  { id: "ro", name: "Romania", x: 58, y: 47, qualified: null },
  { id: "sm", name: "San Marino", x: 50, y: 49, qualified: null },
  { id: "rs", name: "Serbia", x: 56, y: 50, qualified: null },
  { id: "si", name: "Slovenia", x: 52, y: 47, qualified: null },
  { id: "es", name: "Spain", x: 40, y: 55, qualified: true },
  { id: "se", name: "Sweden", x: 52, y: 30, qualified: null },
  { id: "ch", name: "Switzerland", x: 48, y: 45, qualified: true, host: true },
  { id: "ua", name: "Ukraine", x: 60, y: 42, qualified: null },
  { id: "uk", name: "United Kingdom", x: 42, y: 38, qualified: true },
];

export default function InteractiveMap() {
  const [activeCountry, setActiveCountry] = useState<string | null>(null);
  const [rotation, setRotation] = useState({ x: 20, y: 0 });
  const [autoRotate, setAutoRotate] = useState(true);
  const mapRef = useRef<HTMLDivElement>(null);

  // Handle mouse movement for 3D effect
  useEffect(() => {
    if (!mapRef.current || !autoRotate) return;
    
    const interval = setInterval(() => {
      const time = Date.now() / 4000;
      setRotation({
        x: 20 + Math.sin(time) * 5,
        y: Math.cos(time) * 10,
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, [autoRotate]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!mapRef.current || autoRotate) return;
    
    const rect = mapRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    setRotation({
      x: 20 + (y - 0.5) * 10,
      y: (x - 0.5) * 20,
    });
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">37 Countries, One Stage</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the participating nations in the 69th Eurovision Song Contest. Hover over each country to learn more.
          </p>
        </div>

        <Card className="border-none shadow-xl bg-gradient-to-b from-background to-background/80">
          <CardContent className="p-6 sm:p-8">
            <div 
              ref={mapRef}
              className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-muted/20"
              style={{
                perspective: "1000px",
              }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setAutoRotate(false)}
              onMouseLeave={() => setAutoRotate(true)}
            >
              {/* Map background */}
              <div 
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"
                style={{
                  transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                  transformStyle: "preserve-3d",
                  transition: autoRotate ? "transform 0.5s ease-out" : "none",
                }}
              ></div>

              {/* 3D Map with country dots */}
              <div 
                className="absolute inset-0"
                style={{
                  transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                  transformStyle: "preserve-3d",
                  transition: autoRotate ? "transform 0.5s ease-out" : "none",
                }}
              >
                <TooltipProvider>
                  {countries.map((country) => (
                    <Tooltip key={country.id}>
                      <TooltipTrigger asChild>
                        <button
                          className={cn(
                            "absolute w-3 h-3 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300",
                            country.host ? "bg-red-500 w-4 h-4 animate-pulse z-20" : 
                            country.qualified === true ? "bg-blue-500" : 
                            activeCountry === country.id ? "bg-purple-500 scale-150" : "bg-primary/70",
                          )}
                          style={{
                            left: `${country.x}%`,
                            top: `${country.y}%`,
                            transform: `translate(-50%, -50%) translateZ(${activeCountry === country.id ? 20 : 5}px)`,
                          }}
                          onMouseEnter={() => setActiveCountry(country.id)}
                          onMouseLeave={() => setActiveCountry(null)}
                        ></button>
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <div className="text-center">
                          <p className="font-bold">{country.name}</p>
                          {country.host && <p className="text-xs text-red-500">Host Country</p>}
                          {country.qualified === true && !country.host && <p className="text-xs text-blue-500">Big 5</p>}
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </TooltipProvider>

                {/* Basel, Switzerland marker */}
                <div 
                  className="absolute w-6 h-6 left-[48%] top-[45%] transform -translate-x-1/2 -translate-y-1/2"
                  style={{ transform: "translate(-50%, -50%) translateZ(30px)" }}
                >
                  <div className="w-full h-full rounded-full bg-red-500/20 animate-ping"></div>
                  <div className="absolute inset-[25%] rounded-full bg-red-500"></div>
                </div>
              </div>

              {/* Map overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>

              {/* Basel label */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                Basel, Switzerland
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block mr-2"></span>
                <span className="text-sm">Host Country</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-blue-500 inline-block mr-2"></span>
                <span className="text-sm">Big 5 Countries</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-primary/70 inline-block mr-2"></span>
                <span className="text-sm">Participating Countries</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}