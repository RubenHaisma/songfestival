import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Star } from "lucide-react";
import Link from "next/link";

// Updated artist data based on the provided HTML for Eurovision 2025
const artists = [
  {
    id: 1,
    name: "Shkodra Elektronike",
    country: "Albania",
    song: "Zjerm",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=60",
    color: "from-red-500/20 to-black-500/20",
    bio: "Shkodra Elektronike blends Albanian folk influences with electronic beats, bringing a unique sound to Eurovision.",
    semifinal: 1,
    performanceOrder: 7,
  },
  {
    id: 2,
    name: "PARG",
    country: "Armenia",
    song: "SURVIVOR",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60",
    color: "from-red-500/20 to-blue-500/20",
    bio: "PARG delivers a powerful and resilient anthem with 'SURVIVOR,' showcasing Armenia’s vibrant music scene.",
    semifinal: 2,
    performanceOrder: 12,
  },
  {
    id: 3,
    name: "Go-Jo",
    country: "Australia",
    song: "Milkshake Man",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60",
    color: "from-yellow-500/20 to-red-500/20",
    bio: "Go-Jo brings Aussie indie pop to Basel with the catchy and quirky 'Milkshake Man.'",
    semifinal: 2,
    performanceOrder: 14,
  },
  {
    id: 4,
    name: "JJ",
    country: "Austria",
    song: "TBA",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&auto=format&fit=crop&q=60",
    color: "from-red-500/20 to-white-500/20",
    bio: "JJ represents Austria with a yet-to-be-revealed track, promising a fresh take on the nation’s sound.",
    semifinal: 2,
    performanceOrder: 4,
  },
  {
    id: 5,
    name: "Mamagama",
    country: "Azerbaijan",
    song: "Run With U",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=60",
    color: "from-blue-500/20 to-green-500/20",
    bio: "Mamagama fuses Azerbaijani rhythms with modern flair in their energetic entry 'Run With U.'",
    semifinal: 1,
    performanceOrder: 7,
  },
  {
    id: 6,
    name: "Red Sebastian",
    country: "Belgium",
    song: "Strobe Lights",
    image: "https://images.unsplash.com/photo-1529518969858-8baa65152fc8?w=800&auto=format&fit=crop&q=60",
    color: "from-yellow-500/20 to-black-500/20",
    bio: "Red Sebastian lights up the stage with 'Strobe Lights,' a pulsating dance track from Belgium.",
    semifinal: 1,
    performanceOrder: 9,
  },
  {
    id: 7,
    name: "TBA",
    country: "Croatia",
    song: "TBA",
    image: "https://images.unsplash.com/photo-1564959130747-897fb406b9af",
    color: "from-blue-500/20 to-red-500/20",
    bio: "Croatia’s entry is still under wraps, but expect a performance rich with Adriatic spirit.",
    semifinal: 2,
    performanceOrder: 9,
  },
  {
    id: 8,
    name: "Theo Evan",
    country: "Cyprus",
    song: "TBA",
    image: "https://images.unsplash.com/photo-1529518969858-8baa65152fc8?w=800&auto=format&fit=crop&q=60",
    color: "from-blue-500/20 to-white-500/20",
    bio: "Theo Evan promises to bring Cyprus’ signature intensity to Basel with a yet-to-be-announced song.",
    semifinal: 2,
    performanceOrder: 9,
  },
  {
    id: 9,
    name: "ADONXS",
    country: "Czechia",
    song: "Kiss Kiss Goodbye",
    image: "https://images.unsplash.com/photo-1509973385458-f9609c21b528?w=800&auto=format&fit=crop&q=60",
    color: "from-red-500/20 to-white-500/20",
    bio: "ADONXS delivers a moody and memorable 'Kiss Kiss Goodbye' for Czechia’s Eurovision bid.",
    semifinal: 1,
    performanceOrder: 3,
  },
  {
    id: 10,
    name: "TBA",
    country: "Denmark",
    song: "TBA",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&auto=format&fit=crop&q=60",
    color: "from-red-500/20 to-white-500/20",
    bio: "Denmark’s entry remains a mystery, but their Nordic cool will surely shine through.",
    semifinal: 2,
    performanceOrder: 12,
  },
  {
    id: 11,
    name: "Tommy Cash",
    country: "Estonia",
    song: "Espresso Macchiato",
    image: "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?w=800&auto=format&fit=crop&q=60",
    color: "from-blue-500/20 to-black-500/20",
    bio: "Tommy Cash brings his eccentric style to Eurovision with the bold 'Espresso Macchiato.'",
    semifinal: 1,
    performanceOrder: 15,
  },
  {
    id: 12,
    name: "Erika Vikman",
    country: "Finland",
    song: "Ich Komme",
    image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=800&auto=format&fit=crop&q=60",
    color: "from-blue-500/20 to-white-500/20",
    bio: "Erika Vikman’s 'Ich Komme' mixes Finnish flair with a provocative edge for Eurovision 2025.",
    semifinal: 2,
    performanceOrder: 14,
  },
  {
    id: 13,
    name: "Louane",
    country: "France",
    song: "TBA",
    image: "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?w=800&auto=format&fit=crop&q=60",
    color: "from-blue-500/20 to-white-500/20 to-red-500/20",
    bio: "Louane brings French elegance to the Grand Final with a song yet to be revealed.",
    semifinal: null,
    performanceOrder: 19,
    qualified: true,
  },
  {
    id: 14,
    name: "TBA",
    country: "Georgia",
    song: "TBA",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=60",
    color: "from-red-500/20 to-white-500/20",
    bio: "Georgia’s 2025 entry is still undisclosed, promising a blend of tradition and innovation.",
    semifinal: 1,
    performanceOrder: 7,
  },
  {
    id: 15,
    name: "TBA",
    country: "Germany",
    song: "TBA",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&auto=format&fit=crop&q=60",
    color: "from-black-500/20 to-red-500/20 to-yellow-500/20",
    bio: "Germany’s Big 5 entry is yet to be announced, but they’ll aim to impress in Basel.",
    semifinal: null,
    performanceOrder: 9,
    qualified: true,
  },
  {
    id: 16,
    name: "Klavdia",
    country: "Greece",
    song: "Asteromáta",
    image: "https://images.unsplash.com/photo-1529518969858-8baa65152fc8?w=800&auto=format&fit=crop&q=60",
    color: "from-blue-500/20 to-white-500/20",
    bio: "Klavdia’s 'Asteromáta' brings Greek passion and modern vibes to the Eurovision stage.",
    semifinal: 2,
    performanceOrder: 9,
  },
  {
    id: 17,
    name: "VÆB",
    country: "Iceland",
    song: "RÓA",
    image: "https://images.unsplash.com/photo-1531019136844-d1bdacc942b0",
    color: "from-green-500/20 to-blue-500/20",
    bio: "VÆB delivers Iceland’s signature experimental sound with the haunting 'RÓA.'",
    semifinal: 1,
    performanceOrder: 3,
  },
  {
    id: 18,
    name: "EMMY",
    country: "Ireland",
    song: "Laika Party",
    image: "https://images.unsplash.com/photo-1564959130747-897fb406b9af",
    color: "from-green-500/20 to-orange-500/20",
    bio: "EMMY’s 'Laika Party' infuses Irish energy with a playful, cosmic twist.",
    semifinal: 1,
    performanceOrder: 15,
  },
  {
    id: 19,
    name: "Yuval Raphael",
    country: "Israel",
    song: "TBA",
    image: "https://images.unsplash.com/photo-1509973385458-f9609c21b528?w=800&auto=format&fit=crop&q=60",
    color: "from-blue-500/20 to-white-500/20",
    bio: "Yuval Raphael represents Israel with a song yet to be unveiled, promising emotional depth.",
    semifinal: 2,
    performanceOrder: 4,
  },
  {
    id: 20,
    name: "Lucio Corsi",
    country: "Italy",
    song: "Volevo Essere Un Duro",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60",
    color: "from-green-500/20 to-white-500/20 to-red-500/20",
    bio: "Lucio Corsi’s 'Volevo Essere Un Duro' blends retro Italian pop with a modern twist.",
    semifinal: null,
    performanceOrder: 16,
    qualified: true,
  },
  {
    id: 21,
    name: "Tautumeitas",
    country: "Latvia",
    song: "Bur man laimi",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&auto=format&fit=crop&q=60",
    color: "from-red-500/20 to-white-500/20",
    bio: "Tautumeitas bring Latvian folk roots to life with the enchanting 'Bur man laimi.'",
    semifinal: 2,
    performanceOrder: 12,
  },
  {
    id: 22,
    name: "Katarsis",
    country: "Lithuania",
    song: "Tavo Akys",
    image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=800&auto=format&fit=crop&q=60",
    color: "from-yellow-500/20 to-green-500/20",
    bio: "Katarsis’ 'Tavo Akys' offers a soulful and captivating entry from Lithuania.",
    semifinal: 1,
    performanceOrder: 9,
  },
  {
    id: 23,
    name: "Laura Thorn",
    country: "Luxembourg",
    song: "La Poupée Monte Le Son",
    image: "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?w=800&auto=format&fit=crop&q=60",
    color: "from-red-500/20 to-blue-500/20",
    bio: "Laura Thorn’s 'La Poupée Monte Le Son' marks Luxembourg’s triumphant return to Eurovision.",
    semifinal: 2,
    performanceOrder: 14,
  },
  {
    id: 24,
    name: "Miriana Conte",
    country: "Malta",
    song: "Kant ('Singing')",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=60",
    color: "from-red-500/20 to-white-500/20",
    bio: "Miriana Conte’s 'Kant' celebrates Maltese identity with a powerful vocal performance.",
    semifinal: 1,
    performanceOrder: 7,
  },
  {
    id: 25,
    name: "Nina Žižić",
    country: "Montenegro",
    song: "Dobrodošli",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&auto=format&fit=crop&q=60",
    color: "from-red-500/20 to-blue-500/20",
    bio: "Nina Žižić welcomes Europe to Montenegro’s sound with the warm 'Dobrodošli.'",
    semifinal: 1,
    performanceOrder: 3,
  },
  {
    id: 26,
    name: "Claude",
    country: "Netherlands",
    song: "TBA",
    image: "https://images.unsplash.com/photo-1509973385458-f9609c21b528?w=800&auto=format&fit=crop&q=60",
    color: "from-orange-500/20 to-blue-500/20",
    bio: "Claude keeps the Netherlands’ entry a surprise, building anticipation for Basel.",
    semifinal: 1,
    performanceOrder: 9,
  },
  {
    id: 27,
    name: "Kyle Alessandro",
    country: "Norway",
    song: "Lighter",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&auto=format&fit=crop&q=60",
    color: "from-red-500/20 to-blue-500/20",
    bio: "Kyle Alessandro’s 'Lighter' brings a fresh, uplifting vibe to Norway’s Eurovision journey.",
    semifinal: 2,
    performanceOrder: 12,
  },
  {
    id: 28,
    name: "Justyna Steczkowska",
    country: "Poland",
    song: "GAJA",
    image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=800&auto=format&fit=crop&q=60",
    color: "from-red-500/20 to-white-500/20",
    bio: "Justyna Steczkowska’s 'GAJA' is a poetic and powerful entry from Poland.",
    semifinal: 1,
    performanceOrder: 15,
  },
  {
    id: 29,
    name: "TBA",
    country: "Portugal",
    song: "TBA",
    image: "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?w=800&auto=format&fit=crop&q=60",
    color: "from-red-500/20 to-green-500/20",
    bio: "Portugal’s 2025 act is still a secret, but their soulful tradition will shine.",
    semifinal: 2,
    performanceOrder: 14,
  },
  {
    id: 30,
    name: "TBA",
    country: "San Marino",
    song: "TBA",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=60",
    color: "from-white-500/20 to-green-500/20",
    bio: "San Marino’s entry remains unannounced, ready to make a big impact from a small nation.",
    semifinal: 1,
    performanceOrder: 7,
  },
  {
    id: 31,
    name: "TBA",
    country: "Serbia",
    song: "TBA",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&auto=format&fit=crop&q=60",
    color: "from-red-500/20 to-blue-500/20",
    bio: "Serbia’s 2025 performance is yet to be revealed, promising Balkan flair.",
    semifinal: 2,
    performanceOrder: 9,
  },
  {
    id: 32,
    name: "Klemen",
    country: "Slovenia",
    song: "How Much Time Do We Have Left",
    image: "https://images.unsplash.com/photo-1529518969858-8baa65152fc8?w=800&auto=format&fit=crop&q=60",
    color: "from-blue-500/20 to-white-500/20",
    bio: "Klemen’s introspective 'How Much Time Do We Have Left' brings Slovenia’s depth to Eurovision.",
    semifinal: 2,
    performanceOrder: 4,
  },
  {
    id: 33,
    name: "Melody",
    country: "Spain",
    song: "Esa Diva",
    image: "https://images.unsplash.com/photo-1529518969858-8baa65152fc8?w=800&auto=format&fit=crop&q=60",
    color: "from-red-500/20 to-yellow-500/20",
    bio: "Melody’s 'Esa Diva' promises a fiery, diva-driven performance for Spain’s Big 5 slot.",
    semifinal: null,
    performanceOrder: 16,
    qualified: true,
  },
  {
    id: 34,
    name: "TBA",
    country: "Sweden",
    song: "TBA",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&auto=format&fit=crop&q=60",
    color: "from-blue-500/20 to-yellow-500/20",
    bio: "Sweden’s entry is still under wraps, but their Eurovision legacy sets high expectations.",
    semifinal: 1,
    performanceOrder: 9,
  },
  {
    id: 35,
    name: "TBA",
    country: "Switzerland",
    song: "TBA",
    image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=800&auto=format&fit=crop&q=60",
    color: "from-red-500/20 to-white-500/20",
    bio: "Switzerland, as host, keeps their entry a surprise, aiming to shine on home soil.",
    semifinal: null,
    performanceOrder: 25,
    qualified: true,
    host: true,
  },
  {
    id: 36,
    name: "Ziferblat",
    country: "Ukraine",
    song: "Bird of Pray",
    image: "https://images.unsplash.com/photo-1509973385458-f9609c21b528?w=800&auto=format&fit=crop&q=60",
    color: "from-blue-500/20 to-yellow-500/20",
    bio: "Ziferblat’s 'Bird of Pray' carries Ukraine’s resilient spirit to Eurovision 2025.",
    semifinal: 1,
    performanceOrder: 9,
  },
  {
    id: 37,
    name: "TBA",
    country: "United Kingdom",
    song: "TBA",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&auto=format&fit=crop&q=60",
    color: "from-blue-500/20 to-red-500/20",
    bio: "The UK’s Big 5 entry is yet to be unveiled, building on their recent Eurovision resurgence.",
    semifinal: null,
    performanceOrder: 9,
    qualified: true,
  },
];

export default function ArtistsPage() {
  return (
    <div className="py-16 container mx-auto px-4 mt-14">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Artists & Songs</h1>
        <p className="text-xl text-muted-foreground">
          Meet the talented performers representing 37 countries at Eurovision Songfestival 2025 in Basel, Switzerland.
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