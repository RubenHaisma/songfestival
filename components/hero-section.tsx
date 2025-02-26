"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    setIsLoaded(true);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculateTransform = (depth: number) => {
    const x = (mousePosition.x - 0.5) * depth * -20;
    const y = (mousePosition.y - 0.5) * depth * -20;
    return `translate(${x}px, ${y}px)`;
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 z-0"></div>
      
      {/* Animated lights */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl animate-pulse"
          style={{ 
            transform: isLoaded ? calculateTransform(0.5) : "none",
            transition: "transform 0.2s ease-out"
          }}
        ></div>
        <div 
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-red-500/20 blur-3xl animate-pulse"
          style={{ 
            animationDelay: "0.5s",
            transform: isLoaded ? calculateTransform(0.7) : "none",
            transition: "transform 0.2s ease-out"
          }}
        ></div>
        <div 
          className="absolute top-1/2 right-1/3 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl animate-pulse"
          style={{ 
            animationDelay: "1s",
            transform: isLoaded ? calculateTransform(0.3) : "none",
            transition: "transform 0.2s ease-out"
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-32 sm:py-48 lg:py-56 text-center">
        <div 
          className={cn(
            "max-w-3xl mx-auto transition-opacity duration-1000",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            <span className="block">Eurovision Song Contest</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 animate-gradient">
              Basel 2025
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Experience the magic of Europe's biggest music competition in the heart of Switzerland. 
            37 countries, 3 spectacular shows, 1 unforgettable celebration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Link href="/artists">
                Meet the Artists
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2">
              <Link href="/tickets">
                Get Tickets
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Swiss Alps silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 z-10">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-auto">
          <path 
            fill="currentColor" 
            fillOpacity="0.1" 
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}