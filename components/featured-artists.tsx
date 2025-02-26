"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const featuredArtists = [
  {
    id: 1,
    name: "Mamagama",
    country: "Azerbaijan",
    song: "Yet to be revealed",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: 2,
    name: "Go-Jo",
    country: "Australia",
    song: "Milkshake Man",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2luZ2VyfGVufDB8fDB8fHww",
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    id: 3,
    name: "Væb",
    country: "Iceland",
    song: "RÓA",
    image: "https://images.unsplash.com/photo-1605722243979-fe0be8cbb4b9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    color: "from-green-500/20 to-blue-500/20",
  },
  {
    id: 4,
    name: "Lucio Corsi",
    country: "Italy",
    song: "Volevo essere un duro",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2luZ2VyfGVufDB8fDB8fHww",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 5,
    name: "Eleni Foureira",
    country: "Cyprus",
    song: "Lava",
    image: "https://images.unsplash.com/photo-1529518969858-8baa65152fc8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    color: "from-yellow-500/20 to-red-500/20",
  },
];

export default function FeaturedArtists() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % featuredArtists.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + featuredArtists.length) % featuredArtists.length);
  };

  return (
    <div className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Featured Artists</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" onClick={prevSlide}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextSlide}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {featuredArtists.map((artist) => (
              <div key={artist.id} className="w-full flex-shrink-0 px-4">
                <Card className="overflow-hidden border-none shadow-xl">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                        <div 
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${artist.image})` }}
                        ></div>
                        <div className={`absolute inset-0 bg-gradient-to-r ${artist.color} mix-blend-overlay`}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent md:bg-gradient-to-l"></div>
                        <Button 
                          variant="secondary" 
                          size="icon" 
                          className="absolute bottom-4 left-4 md:hidden rounded-full w-12 h-12"
                        >
                          <Play className="h-5 w-5" />
                        </Button>
                      </div>
                      <div className="p-6 md:p-8 flex flex-col justify-center">
                        <div className="mb-2">
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground mb-2">
                            {artist.country}
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">{artist.name}</h3>
                        <p className="text-muted-foreground mb-6">"{artist.song}"</p>
                        <div className="flex space-x-4">
                          <Button 
                            variant="secondary" 
                            className="hidden md:flex items-center"
                          >
                            <Play className="h-4 w-4 mr-2" />
                            Listen Preview
                          </Button>
                          <Button variant="outline" asChild>
                            <Link href={`/artists/${artist.id}`}>
                              Artist Profile
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6">
          {featuredArtists.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full mx-1 transition-all",
                index === activeIndex ? "bg-primary w-4" : "bg-muted"
              )}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}