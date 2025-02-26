import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Star } from "lucide-react";
import Link from "next/link";

// Extended artist data
const artists = [
  {
    id: 1,
    name: "Mamagama",
    country: "Azerbaijan",
    song: "Yet to be revealed",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    color: "from-blue-500/20 to-purple-500/20",
    bio: "Rising from the vibrant music scene of Baku, Mamagama blends traditional Azerbaijani sounds with modern electronic beats. Their mysterious approach to music has created significant buzz ahead of their Eurovision debut.",
    semifinal: 1,
    performanceOrder: 7,
  },
  {
    id: 2,
    name: "Go-Jo",
    country: "Australia",
    song: "Milkshake Man",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2luZ2VyfGVufDB8fDB8fHww",
    color: "from-red-500/20 to-orange-500/20",
    bio: "Go-Jo has taken Australia by storm with their unique blend of indie pop and electronic music. 'Milkshake Man' has already topped charts across the Pacific and is set to be a fan favorite at Eurovision.",
    semifinal: 2,
    performanceOrder: 12,
  },
  {
    id: 3,
    name: "Væb",
    country: "Iceland",
    song: "RÓA",
    image: "https://images.unsplash.com/photo-1605722243979-fe0be8cbb4b9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    color: "from-green-500/20 to-blue-500/20",
    bio: "Væb represents the cutting edge of Iceland's experimental music scene. Their haunting track 'RÓA' combines ethereal vocals with minimalist electronic production, creating a mesmerizing sonic landscape.",
    semifinal: 1,
    performanceOrder: 3,
  },
  {
    id: 4,
    name: "Lucio Corsi",
    country: "Italy",
    song: "Volevo essere un duro",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2luZ2VyfGVufDB8fDB8fHww",
    color: "from-purple-500/20 to-pink-500/20",
    bio: "Lucio Corsi brings Italian flair to Eurovision with his retro-inspired sound. 'Volevo essere un duro' combines vintage Italian pop with modern production, creating a nostalgic yet fresh sound.",
    semifinal: null,
    performanceOrder: 16,
    qualified: true,
  },
  {
    id: 5,
    name: "Eleni Foureira",
    country: "Cyprus",
    song: "Lava",
    image: "https://images.unsplash.com/photo-1529518969858-8baa65152fc8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    color: "from-yellow-500/20 to-red-500/20",
    bio: "After her iconic 'Fuego' performance, Eleni Foureira returns to Eurovision with 'Lava' - an explosive dance track that promises to set the stage on fire once again. Cyprus has high hopes for a victory this time.",
    semifinal: 2,
    performanceOrder: 9,
  },
  {
    id: 6,
    name: "Nemo",
    country: "Switzerland",
    song: "The Code",
    image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    color: "from-red-500/20 to-blue-500/20",
    bio: "Representing the host country, Nemo brings a powerful message with 'The Code' - a genre-bending track that combines classical elements with electronic beats and rap verses. Switzerland hopes to win on home soil.",
    semifinal: null,
    performanceOrder: 25,
    qualified: true,
    host: true,
  },
  {
    id: 7,
    name: "Bambie Thug",
    country: "Ireland",
    song: "Doomsday Blue",
    image: "https://images.unsplash.com/photo-1593697972672-b1c1362d7432?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFsdGVybmF0aXZlJTIwc2luZ2VyfGVufDB8fDB8fHww",
    color: "from-blue-500/20 to-green-500/20",
    bio: "Bambie Thug brings alternative edge to Eurovision with their haunting track 'Doomsday Blue'. Combining gothic aesthetics with Celtic influences, they represent Ireland's evolving music scene.",
    semifinal: 1,
    performanceOrder: 15,
  },
  {
    id: 8,
    name: "Kaleen",
    country: "Austria",
    song: "We Will Rave",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGZlbWFsZSUyMHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    color: "from-red-500/20 to-white-500/20",
    bio: "Kaleen brings high-energy dance music to Eurovision with 'We Will Rave'. The track has already become a club hit across Europe and is expected to get the audience on their feet in Basel.",
    semifinal: 2,
    performanceOrder: 4,
  },
  {
    id: 9,
    name: "Joost Klein",
    country: "Netherlands",
    song: "Europapa",
    image: "https://images.unsplash.com/photo-1509973385458-f9609c21b528?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG1hbGUlMjBzaW5nZXJ8ZW58MHx8MHx8fDA%3D",
    color: "from-orange-500/20 to-blue-500/20",
    bio: "Joost Klein brings his unique brand of Dutch humor and catchy beats to Eurovision. 'Europapa' is a quirky celebration of European unity with memorable hooks and playful lyrics.",
    semifinal: 1,
    performanceOrder: 9,
  },
  {
    id: 10,
    name: "Olly Alexander",
    country: "United Kingdom",
    song: "Dizzy",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG1hbGUlMjBzaW5nZXJ8ZW58MHx8MHx8fDA%3D",
    color: "from-blue-500/20 to-red-500/20",
    bio: "After a successful career with Years & Years, Olly Alexander represents the UK with 'Dizzy' - a pulsating pop track with infectious hooks and dazzling production. The UK hopes to continue its recent Eurovision resurgence.",
    semifinal: null,
    performanceOrder: 9,
    qualified: true,
  },
  {
    id: 11,
    name: "Slimane",
    country: "France",
    song: "Mon Amour",
    image: "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fG1hbGUlMjBzaW5nZXJ8ZW58MHx8MHx8fDA%3D",
    color: "from-blue-500/20 to-white-500/20 to-red-500/20",
    bio: "Slimane brings French elegance to Eurovision with the emotional ballad 'Mon Amour'. His powerful vocals and the song's heartfelt lyrics make it a potential favorite for viewers across Europe.",
    semifinal: null,
    performanceOrder: 19,
    qualified: true,
  },
  {
    id: 12,
    name: "Electric Fields",
    country: "Australia",
    song: "One Milkali (One Blood)",
    image: "https://images.unsplash.com/photo-1525101238777-8878781c2952?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGR1byUyMG11c2ljaWFuc3xlbnwwfHwwfHx8MA%3D%3D",
    color: "from-yellow-500/20 to-red-500/20",
    bio: "Electric Fields combines electronic music with traditional Aboriginal culture. Their powerful entry 'One Milkali (One Blood)' features lyrics in Yankunytjatjara language and English, celebrating unity and heritage.",
    semifinal: 2,
    performanceOrder: 14,
  },
];

export default function ArtistsPage() {
  return (
    <div className="py-16 container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Artists & Songs</h1>
        <p className="text-xl text-muted-foreground">
          Meet the talented performers representing 37 countries at Eurovision Song Contest 2025 in Basel, Switzerland.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artists.map((artist) => (
          <Card key={artist.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative aspect-[4/3] overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${artist.image})` }}
              ></div>
              <div className={`absolute inset-0 bg-gradient-to-r ${artist.color} mix-blend-overlay`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              
              {artist.host && (
                <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Host Country
                </div>
              )}
              
              {artist.qualified && !artist.host && (
                <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Big 5
                </div>
              )}
              
              {artist.semifinal && (
                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm text-foreground text-xs font-medium px-2 py-1 rounded-full">
                  Semi-Final {artist.semifinal}
                </div>
              )}
            </div>
            
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <Badge variant="outline" className={`${artist.color} font-normal`}>
                  {artist.country}
                </Badge>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Star className="h-4 w-4" />
                </Button>
              </div>
              
              <h3 className="text-xl font-bold mb-1">{artist.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">&quot;{artist.song}&quot;</p>
              
              <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                {artist.bio}
              </p>
              
              <div className="flex justify-between items-center">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/artists/${artist.id}`}>
                    View Profile
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <Play className="h-3 w-3" /> Listen
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}