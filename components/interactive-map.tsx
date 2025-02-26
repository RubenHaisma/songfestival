"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pause, Play, RotateCcw } from "lucide-react";

// Participating countries data with coordinates for 3D globe
const countries = [
  { id: "al", name: "Albania", lat: 41.1533, lng: 20.1683, qualified: null },
  { id: "am", name: "Armenia", lat: 40.0691, lng: 45.0382, qualified: null },
  { id: "au", name: "Australia", lat: -25.2744, lng: 133.7751, qualified: null },
  { id: "at", name: "Austria", lat: 47.5162, lng: 14.5501, qualified: null },
  { id: "az", name: "Azerbaijan", lat: 40.1431, lng: 47.5769, qualified: null },
  { id: "be", name: "Belgium", lat: 50.5039, lng: 4.4699, qualified: null },
  { id: "bg", name: "Bulgaria", lat: 42.7339, lng: 25.4858, qualified: null },
  { id: "hr", name: "Croatia", lat: 45.1, lng: 15.2, qualified: null },
  { id: "cy", name: "Cyprus", lat: 35.1264, lng: 33.4299, qualified: null },
  { id: "cz", name: "Czech Republic", lat: 49.8175, lng: 15.473, qualified: null },
  { id: "dk", name: "Denmark", lat: 56.2639, lng: 9.5018, qualified: null },
  { id: "ee", name: "Estonia", lat: 58.5953, lng: 25.0136, qualified: null },
  { id: "fi", name: "Finland", lat: 61.9241, lng: 25.7482, qualified: null },
  { id: "fr", name: "France", lat: 46.2276, lng: 2.2137, qualified: true },
  { id: "ge", name: "Georgia", lat: 42.3154, lng: 43.3569, qualified: null },
  { id: "de", name: "Germany", lat: 51.1657, lng: 10.4515, qualified: true },
  { id: "gr", name: "Greece", lat: 39.0742, lng: 21.8243, qualified: null },
  { id: "is", name: "Iceland", lat: 64.9631, lng: -19.0208, qualified: null },
  { id: "ie", name: "Ireland", lat: 53.1424, lng: -7.6921, qualified: null },
  { id: "il", name: "Israel", lat: 31.0461, lng: 34.8516, qualified: null },
  { id: "it", name: "Italy", lat: 41.8719, lng: 12.5674, qualified: true },
  { id: "lv", name: "Latvia", lat: 56.8796, lng: 24.6032, qualified: null },
  { id: "lt", name: "Lithuania", lat: 55.1694, lng: 23.8813, qualified: null },
  { id: "mt", name: "Malta", lat: 35.9375, lng: 14.3754, qualified: null },
  { id: "md", name: "Moldova", lat: 47.4116, lng: 28.3699, qualified: null },
  { id: "me", name: "Montenegro", lat: 42.7087, lng: 19.3744, qualified: null },
  { id: "nl", name: "Netherlands", lat: 52.1326, lng: 5.2913, qualified: null },
  { id: "mk", name: "North Macedonia", lat: 41.6086, lng: 21.7453, qualified: null },
  { id: "no", name: "Norway", lat: 60.472, lng: 8.4689, qualified: null },
  { id: "pl", name: "Poland", lat: 51.9194, lng: 19.1451, qualified: null },
  { id: "pt", name: "Portugal", lat: 39.3999, lng: -8.2245, qualified: null },
  { id: "ro", name: "Romania", lat: 45.9432, lng: 24.9668, qualified: null },
  { id: "sm", name: "San Marino", lat: 43.9424, lng: 12.4578, qualified: null },
  { id: "rs", name: "Serbia", lat: 44.0165, lng: 21.0059, qualified: null },
  { id: "si", name: "Slovenia", lat: 46.1512, lng: 14.9955, qualified: null },
  { id: "es", name: "Spain", lat: 40.4637, lng: -3.7492, qualified: true },
  { id: "se", name: "Sweden", lat: 60.1282, lng: 18.6435, qualified: null },
  { id: "ch", name: "Switzerland", lat: 46.8182, lng: 8.2275, qualified: true, host: true },
  { id: "ua", name: "Ukraine", lat: 48.3794, lng: 31.1656, qualified: null },
  { id: "uk", name: "United Kingdom", lat: 55.3781, lng: -3.4360, qualified: true },
];

export default function InteractiveMap() {
  const [activeCountry, setActiveCountry] = useState<string | null>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [autoRotate, setAutoRotate] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [globeRotation, setGlobeRotation] = useState({ x: 23.5, y: 0 }); // Earth's tilt is ~23.5 degrees
  const globeRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  // Convert lat/lng to 3D coordinates on a sphere
  const latLngTo3d = (lat: number, lng: number, radius: number = 50) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    
    return { x, y, z };
  };

  // Handle auto-rotation
  useEffect(() => {
    if (!autoRotate || isDragging) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      return;
    }
    
    const animate = () => {
      setGlobeRotation(prev => ({
        ...prev,
        y: (prev.y + 0.1) % 360
      }));
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [autoRotate, isDragging]);

  // Mouse/touch event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    setAutoRotate(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      setAutoRotate(false);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - dragStart.x;
    const deltaY = e.clientY - dragStart.y;
    
    setGlobeRotation(prev => ({
      x: Math.max(-45, Math.min(45, prev.x + deltaY * 0.5)),
      y: (prev.y + deltaX * 0.5) % 360
    }));
    
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    
    const deltaX = e.touches[0].clientX - dragStart.x;
    const deltaY = e.touches[0].clientY - dragStart.y;
    
    setGlobeRotation(prev => ({
      x: Math.max(-45, Math.min(45, prev.x + deltaY * 0.5)),
      y: (prev.y + deltaX * 0.5) % 360
    }));
    
    setDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const resetGlobe = () => {
    setGlobeRotation({ x: 23.5, y: 0 });
    setAutoRotate(true);
  };

  const toggleRotation = () => {
    setAutoRotate(prev => !prev);
  };

  return (
    <div className="py-16 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">37 Countries, One Stage</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the participating nations in the 69th Eurovision Song Contest. Interact with the globe to discover each country.
          </p>
        </div>

        <Card className="border-none shadow-xl bg-gradient-to-b from-background to-background/80 overflow-hidden">
          <CardContent className="p-6 sm:p-8">
            <div className="flex flex-col md:flex-row gap-4 mb-4 justify-center">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={toggleRotation}
                className="flex items-center gap-2"
              >
                {autoRotate ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                {autoRotate ? "Pause Rotation" : "Start Rotation"}
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={resetGlobe}
                className="flex items-center gap-2"
              >
                <RotateCcw className="h-4 w-4" />
                Reset View
              </Button>
            </div>
            
            <div 
              ref={globeRef}
              className="relative aspect-square max-w-2xl mx-auto overflow-hidden rounded-full bg-black/90 my-8"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Globe background with stars */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-50"></div>
              
              {/* 3D Globe */}
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  perspective: "1000px",
                  perspectiveOrigin: "center",
                }}
              >
                <div 
                  className="absolute inset-0 rounded-full bg-[url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"
                  style={{
                    transform: `rotateX(${globeRotation.x}deg) rotateY(${globeRotation.y}deg)`,
                    transformStyle: "preserve-3d",
                    transition: isDragging ? "none" : "transform 0.1s ease-out",
                    boxShadow: "inset 0 0 20px 5px rgba(0, 30, 60, 0.5)",
                  }}
                >
                  {/* Grid lines */}
                  <div 
                    className="absolute inset-0 rounded-full bg-[url('https://raw.githubusercontent.com/turban/webgl-earth/master/images/grid.png')] bg-cover bg-center opacity-20"
                    style={{
                      transform: "translateZ(1px)",
                    }}
                  ></div>
                  
                  <TooltipProvider>
                    {countries.map((country) => {
                      const coords = latLngTo3d(country.lat, country.lng);
                      const isVisible = coords.x > -50; // Simple visibility check based on x coordinate
                      
                      // Calculate position on the globe surface
                      const position = {
                        left: `calc(50% + ${coords.x}px)`,
                        top: `calc(50% + ${coords.y}px)`,
                        zIndex: Math.round(coords.z + 100),
                      };
                      
                      return (
                        <Tooltip key={country.id}>
                          <TooltipTrigger asChild>
                            <button
                              className={cn(
                                "absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300",
                                country.host ? "w-4 h-4 bg-red-500 rounded-full animate-pulse z-20" : 
                                country.qualified === true ? "w-3 h-3 bg-blue-500 rounded-full" : 
                                activeCountry === country.id ? "w-3 h-3 bg-purple-500 rounded-full scale-150" : 
                                "w-2 h-2 bg-primary/70 rounded-full",
                                isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                              )}
                              style={position}
                              onMouseEnter={() => setActiveCountry(country.id)}
                              onMouseLeave={() => setActiveCountry(null)}
                            >
                              <span className="sr-only">{country.name}</span>
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="z-50">
                            <div className="text-center">
                              <p className="font-bold">{country.name}</p>
                              {country.host && <p className="text-xs text-red-500">Host Country</p>}
                              {country.qualified === true && !country.host && <p className="text-xs text-blue-500">Big 5</p>}
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      );
                    })}
                  </TooltipProvider>
                  
                  {/* Basel, Switzerland marker with pulsing effect */}
                  {(() => {
                    const baselCoords = latLngTo3d(47.5596, 7.5886);
                    const isVisible = baselCoords.x > -50;
                    
                    const position = {
                      left: `calc(50% + ${baselCoords.x}px)`,
                      top: `calc(50% + ${baselCoords.y}px)`,
                      zIndex: Math.round(baselCoords.z + 100),
                    };
                    
                    return (
                      <div 
                        className={cn(
                          "absolute transform -translate-x-1/2 -translate-y-1/2",
                          isVisible ? "opacity-100" : "opacity-0"
                        )}
                        style={position}
                      >
                        <div className="w-8 h-8 rounded-full bg-red-500/20 animate-ping"></div>
                        <div className="absolute inset-[30%] rounded-full bg-red-500"></div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 whitespace-nowrap bg-background/80 backdrop-blur-sm px-2 py-0.5 rounded text-xs font-medium">
                          Basel, Switzerland
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
              
              {/* Atmosphere glow effect */}
              <div className="absolute inset-0 rounded-full bg-blue-500/5 pointer-events-none"></div>
              <div className="absolute inset-[-5px] rounded-full bg-blue-500/5 blur-md pointer-events-none"></div>
              <div className="absolute inset-[-10px] rounded-full bg-blue-500/5 blur-lg pointer-events-none"></div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <Badge variant="outline" className="flex items-center gap-2 px-3 py-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                <span>Host Country</span>
              </Badge>
              <Badge variant="outline" className="flex items-center gap-2 px-3 py-1.5">
                <span className="w-3 h-3 rounded-full bg-blue-500 inline-block"></span>
                <span>Big 5 Countries</span>
              </Badge>
              <Badge variant="outline" className="flex items-center gap-2 px-3 py-1.5">
                <span className="w-3 h-3 rounded-full bg-primary/70 inline-block"></span>
                <span>Participating Countries</span>
              </Badge>
            </div>
            
            <div className="mt-4 text-center text-sm text-muted-foreground">
              Drag to rotate the globe or use the controls above
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}