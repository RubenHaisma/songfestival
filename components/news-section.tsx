"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const newsItems = [
  {
    id: 1,
    title: "Will Lucio Corsi's 'Volevo essere un duro' steal the show for Italy?",
    excerpt: "Italy's entry is generating buzz with its unique blend of retro sounds and modern production.",
    date: "April 15, 2025",
    category: "Predictions",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2luZ2VyfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    title: "Eurovision 2025 stage design revealed: A tribute to Swiss innovation",
    excerpt: "The stage combines cutting-edge technology with elements inspired by Swiss watchmaking and Alpine landscapes.",
    date: "April 10, 2025",
    category: "Official News",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbmNlcnQlMjBzdGFnZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    title: "Iceland's Væb brings experimental electronic sound with 'RÓA'",
    excerpt: "The Icelandic entry pushes boundaries with its innovative production and haunting vocals.",
    date: "April 5, 2025",
    category: "Artist Spotlight",
    image: "https://images.unsplash.com/photo-1605722243979-fe0be8cbb4b9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    title: "Ticket sales break records for Eurovision 2025 in Basel",
    excerpt: "All three shows sold out within minutes, setting a new record for the competition.",
    date: "March 28, 2025",
    category: "Event News",
    image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29uY2VydCUyMGNyb3dkfGVufDB8fDB8fHww",
  },
];

const categoryColors: Record<string, string> = {
  "Predictions": "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20",
  "Official News": "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20",
  "Artist Spotlight": "bg-pink-500/10 text-pink-500 hover:bg-pink-500/20",
  "Event News": "bg-green-500/10 text-green-500 hover:bg-green-500/20",
};

export default function NewsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Latest News</h2>
          <Button variant="outline" asChild>
            <Link href="/news">
              View All News <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item) => (
            <Card 
              key={item.id}
              className={cn(
                "overflow-hidden transition-all duration-300 border-none shadow-lg",
                hoveredCard === item.id ? "transform -translate-y-2" : ""
              )}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    transform: hoveredCard === item.id ? "scale(1.05)" : "scale(1)",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              </div>
              <CardContent className="pt-6">
                <Badge 
                  variant="outline" 
                  className={cn(
                    "mb-3 font-normal",
                    categoryColors[item.category]
                  )}
                >
                  {item.category}
                </Badge>
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-3">{item.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-0 pb-6">
                <span className="text-xs text-muted-foreground">{item.date}</span>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={`/news/${item.id}`}>
                    Read More
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}