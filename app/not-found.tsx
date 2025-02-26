import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-16 px-4">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 z-0"></div>
      
      {/* Animated lights */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-red-500/20 blur-3xl animate-pulse" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="mb-8 relative">
          <div className="text-[12rem] font-extrabold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 animate-pulse">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="text-[15rem] font-extrabold leading-none tracking-tighter">
              404
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Oops! This performance isn&apos;t on our schedule
        </h1>
        
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          The page you&apos;re looking for seems to have missed its cue. 
          Don&apos;t worry, there are plenty of other Eurovision highlights to explore!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
          
          <Button asChild size="lg" variant="outline" className="border-2">
            <Link href="/artists">
              <Search className="mr-2 h-5 w-5" />
              Explore Artists
            </Link>
          </Button>
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