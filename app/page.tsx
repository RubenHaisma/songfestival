import HeroSection from "@/components/hero-section";
import CountdownTimer from "@/components/countdown-timer";
import FeaturedArtists from "@/components/featured-artists";
import InteractiveMap from "@/components/interactive-map";
import NewsSection from "@/components/news-section";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section with animated background */}
      <HeroSection />
      
      {/* Countdown Timer Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <CountdownTimer />
          </div>
        </div>
      </section>
      
      {/* Featured Artists Carousel */}
      <FeaturedArtists />
      
      {/* Interactive Map */}
      <InteractiveMap />
      
      {/* Latest News Section */}
      <NewsSection />
      
      {/* Fan Voting Teaser */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-red-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Your Vote Matters</h2>
            <p className="text-xl text-muted-foreground mb-8">
              The official fan voting opens on May 1st, 2025. Get ready to support your favorite artists and songs!
            </p>
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-lg blur-lg opacity-70 animate-pulse"></div>
              <a 
                href="/vote" 
                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-background border border-transparent rounded-lg hover:bg-secondary/80 transition-all duration-300"
              >
                Remind Me When Voting Opens
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}