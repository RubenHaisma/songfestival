import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, ChevronRight, Calendar } from "lucide-react";
import Link from "next/link";

// News data
const newsItems = [
  {
    id: 1,
    title: "Will Lucio Corsi's 'Volevo essere un duro' steal the show for Italy?",
    excerpt: "Italy's entry is generating buzz with its unique blend of retro sounds and modern production. Music critics are predicting a potential winner.",
    date: "April 15, 2025",
    category: "Predictions",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2luZ2VyfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    title: "Eurovision 2025 stage design revealed: A tribute to Swiss innovation",
    excerpt: "The stage combines cutting-edge technology with elements inspired by Swiss watchmaking and Alpine landscapes. Designers promise a visual spectacle.",
    date: "April 10, 2025",
    category: "Official News",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbmNlcnQlMjBzdGFnZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    title: "Iceland's Væb brings experimental electronic sound with 'RÓA'",
    excerpt: "The Icelandic entry pushes boundaries with its innovative production and haunting vocals. Could this be the most avant-garde entry in Eurovision history?",
    date: "April 5, 2025",
    category: "Artist Spotlight",
    image: "https://images.unsplash.com/photo-1605722243979-fe0be8cbb4b9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    title: "Ticket sales break records for Eurovision 2025 in Basel",
    excerpt: "All three shows sold out within minutes, setting a new record for the competition. Additional tickets may be released closer to the event.",
    date: "March 28, 2025",
    category: "Event News",
    image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29uY2VydCUyMGNyb3dkfGVufDB8fDB8fHww",
  },
  {
    id: 5,
    title: "Eleni Foureira returns to Eurovision with 'Lava' for Cyprus",
    excerpt: "After her iconic 'Fuego' performance, Eleni Foureira returns with another fiery dance track. Can she secure Cyprus' first victory?",
    date: "March 25, 2025",
    category: "Artist Spotlight",
    image: "https://images.unsplash.com/photo-1529518969858-8baa65152fc8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 6,
    title: "Eurovision Village to feature over 100 performances during contest week",
    excerpt: "The Eurovision Village in Basel will host performances from past contestants, local artists, and this year's participants throughout the event week.",
    date: "March 20, 2025",
    category: "Event News",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZlc3RpdmFsfGVufDB8fDB8fHww",
  },
  {
    id: 7,
    title: "Nemo to perform special medley as host country representative",
    excerpt: "Switzerland's Nemo will perform a special medley of Swiss Eurovision classics alongside their competition entry 'The Code'.",
    date: "March 15, 2025",
    category: "Official News",
    image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 8,
    title: "Bambie Thug's 'Doomsday Blue' sparks controversy and excitement",
    excerpt: "Ireland's gothic entry has divided opinion but created significant buzz. Could this be Ireland's return to Eurovision glory?",
    date: "March 10, 2025",
    category: "Predictions",
    image: "https://images.unsplash.com/photo-1593697972672-b1c1362d7432?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFsdGVybmF0aXZlJTIwc2luZ2VyfGVufDB8fDB8fHww",
  },
  {
    id: 9,
    title: "Eurovision 2025 to feature groundbreaking augmented reality elements",
    excerpt: "The production team has announced innovative AR features that will enhance the viewing experience both in the arena and for television audiences.",
    date: "March 5, 2025",
    category: "Official News",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXVnbWVudGVkJTIwcmVhbGl0eXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 10,
    title: "Olly Alexander reveals inspiration behind UK's 'Dizzy'",
    excerpt: "The UK's representative discusses the creative process and personal experiences that shaped his Eurovision entry.",
    date: "February 28, 2025",
    category: "Artist Spotlight",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG1hbGUlMjBzaW5nZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 11,
    title: "Eurovision 2025 interval acts announced: Global superstars to perform",
    excerpt: "The EBU has revealed an impressive lineup of international stars who will perform during the interval acts of the three shows.",
    date: "February 20, 2025",
    category: "Official News",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 12,
    title: "Basel prepares for influx of Eurovision fans with city-wide celebrations",
    excerpt: "The host city is planning numerous events, special exhibitions, and transportation arrangements to welcome the thousands of expected visitors.",
    date: "February 15, 2025",
    category: "Event News",
    image: "https://images.unsplash.com/photo-1527866512907-a35a62a0f6c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFzZWwlMjBzd2l0emVybGFuZHxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const categoryColors: Record<string, string> = {
  "Predictions": "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20",
  "Official News": "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20",
  "Artist Spotlight": "bg-pink-500/10 text-pink-500 hover:bg-pink-500/20",
  "Event News": "bg-green-500/10 text-green-500 hover:bg-green-500/20",
};

export default function NewsPage() {
  return (
    <div className="py-16 container mx-auto px-4 mt-14">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Latest News</h1>
        <p className="text-xl text-muted-foreground">
          Stay updated with the latest Eurovision 2025 news, artist spotlights, and event information.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input 
            placeholder="Search news articles..." 
            className="pl-10"
          />
        </div>
      </div>

      <Tabs defaultValue="all" className="max-w-5xl mx-auto">
        <TabsList className="grid grid-cols-5 mb-8">
          <TabsTrigger value="all">All News</TabsTrigger>
          <TabsTrigger value="official">Official</TabsTrigger>
          <TabsTrigger value="artists">Artists</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="predictions">Predictions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <Card key={item.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                </div>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center mb-3">
                    <Badge 
                      variant="outline" 
                      className={categoryColors[item.category]}
                    >
                      {item.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">{item.excerpt}</p>
                </CardContent>
                <CardFooter className="pt-0 pb-6">
                  <Button variant="ghost" size="sm" asChild className="ml-auto">
                    <Link href={`/news/${item.id}`}>
                      Read More <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="official" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems
              .filter(item => item.category === "Official News")
              .map((item) => (
                <Card key={item.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  </div>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center mb-3">
                      <Badge 
                        variant="outline" 
                        className={categoryColors[item.category]}
                      >
                        {item.category}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {item.date}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-3">{item.excerpt}</p>
                  </CardContent>
                  <CardFooter className="pt-0 pb-6">
                    <Button variant="ghost" size="sm" asChild className="ml-auto">
                      <Link href={`/news/${item.id}`}>
                        Read More <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="artists" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems
              .filter(item => item.category === "Artist Spotlight")
              .map((item) => (
                <Card key={item.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  </div>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center mb-3">
                      <Badge 
                        variant="outline" 
                        className={categoryColors[item.category]}
                      >
                        {item.category}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {item.date}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-3">{item.excerpt}</p>
                  </CardContent>
                  <CardFooter className="pt-0 pb-6">
                    <Button variant="ghost" size="sm" asChild className="ml-auto">
                      <Link href={`/news/${item.id}`}>
                        Read More <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="events" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems
              .filter(item => item.category === "Event News")
              .map((item) => (
                <Card key={item.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  </div>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center mb-3">
                      <Badge 
                        variant="outline" 
                        className={categoryColors[item.category]}
                      >
                        {item.category}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {item.date}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-3">{item.excerpt}</p>
                  </CardContent>
                  <CardFooter className="pt-0 pb-6">
                    <Button variant="ghost" size="sm" asChild className="ml-auto">
                      <Link href={`/news/${item.id}`}>
                        Read More <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="predictions" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems
              .filter(item => item.category === "Predictions")
              .map((item) => (
                <Card key={item.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  </div>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center mb-3">
                      <Badge 
                        variant="outline" 
                        className={categoryColors[item.category]}
                      >
                        {item.category}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {item.date}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-3">{item.excerpt}</p>
                  </CardContent>
                  <CardFooter className="pt-0 pb-6">
                    <Button variant="ghost" size="sm" asChild className="ml-auto">
                      <Link href={`/news/${item.id}`}>
                        Read More <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}