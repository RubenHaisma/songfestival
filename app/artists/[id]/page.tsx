import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, ArrowLeft, Star, Calendar, MapPin, Music, Globe, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Extended artist data with Spotify links
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
    spotify: "https://open.spotify.com/artist/5Mq7iqCWBzxjIZJnHk8eVs",
    instagram: "https://instagram.com/mamagama_official",
    twitter: "https://twitter.com/mamagama_music",
    website: "https://mamagama.az",
    longBio: "Mamagama emerged from Baku's underground electronic scene in 2022, quickly gaining attention for their innovative fusion of traditional Azerbaijani folk music with contemporary electronic production. The group consists of three members: lead vocalist Leyla Aliyeva, producer Rashad Mammadov, and multi-instrumentalist Orkhan Hasanli.\n\nTheir debut EP 'Echoes of the Caspian' received critical acclaim across Eastern Europe and caught the attention of Azerbaijan's national broadcaster, leading to their selection as the country's representative for Eurovision 2025.\n\nMamagama's approach to music is deeply rooted in Azerbaijani cultural heritage while embracing modern sonic landscapes. Their Eurovision entry, yet to be revealed, is rumored to feature traditional mugham vocal techniques over cutting-edge electronic beats.",
    previousHits: ["Caspian Dreams", "Baku Nights", "Mountain Echo"],
    funFacts: [
      "The band's name 'Mamagama' comes from an ancient Azerbaijani lullaby",
      "Lead vocalist Leyla studied classical mugham singing for 15 years",
      "Their rehearsal space is a converted 19th-century hammam in old Baku"
    ]
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
    spotify: "https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb",
    instagram: "https://instagram.com/gojo_official",
    twitter: "https://twitter.com/gojo_music",
    website: "https://gojo-music.com.au",
    longBio: "Go-Jo, the musical project of Sydney-based producer and vocalist Jordan Reeves, has rapidly become one of Australia's most exciting musical exports. After gaining attention through viral TikTok clips in 2023, Go-Jo's debut single 'Digital Sunset' reached the top 10 in Australia and New Zealand.\n\nWith a sound that blends nostalgic 80s synth-pop with contemporary electronic production and infectious hooks, Go-Jo has built a dedicated following across the Asia-Pacific region. The Eurovision entry 'Milkshake Man' continues this winning formula with its quirky lyrics and irresistible chorus.\n\nJordan Reeves, the creative force behind Go-Jo, is known for elaborate visual aesthetics and high-energy performances that combine music, dance, and visual storytelling.",
    previousHits: ["Digital Sunset", "Neon Youth", "Pacific Waves"],
    funFacts: [
      "Jordan created the first Go-Jo track using only an iPad while backpacking through Southeast Asia",
      "The name 'Go-Jo' comes from Jordan's childhood nickname",
      "'Milkshake Man' was written in just 45 minutes during a power outage"
    ]
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
    spotify: "https://open.spotify.com/artist/7uIbLdzzSEqnX0Pkrb56cR",
    instagram: "https://instagram.com/vaeb_music",
    twitter: "https://twitter.com/vaeb_iceland",
    website: "https://vaeb.is",
    longBio: "Væb (pronounced 'vibe') is an Icelandic experimental electronic duo consisting of producer Björn Kristjánsson and vocalist Freydís Sjöfn. Formed in Reykjavík in 2021, the duo quickly established themselves as pioneers in Iceland's rich electronic music scene.\n\nTheir debut EP 'Frost' received critical acclaim for its innovative blend of ambient soundscapes, glitchy electronics, and Freydís's haunting vocal delivery, often sung in ancient Icelandic dialect. Their approach to music is deeply influenced by Iceland's dramatic landscapes and folklore.\n\n'RÓA', their Eurovision entry, translates to 'calm' in Icelandic and explores themes of finding peace in isolation. The track features field recordings from Iceland's glaciers and volcanic regions, creating a sonic experience that transports listeners to the island's otherworldly terrain.",
    previousHits: ["Frost", "Jökull", "Eldur"],
    funFacts: [
      "Væb records most of their music in a converted lighthouse on Iceland's western coast",
      "Freydís is a trained glaciologist and incorporates ice recordings into their music",
      "Their live performances often include real-time weather data that affects the sound"
    ]
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
    spotify: "https://open.spotify.com/artist/1hCkSJcXREhrodeIHQdav8",
    instagram: "https://instagram.com/luciocorsiofficial",
    twitter: "https://twitter.com/lucio_corsi",
    website: "https://luciocorsi.it",
    longBio: "Lucio Corsi has established himself as one of Italy's most distinctive musical voices, blending the rich tradition of Italian cantautori with glam rock influences and poetic lyricism. Born in Tuscany, Corsi's musical journey began in the picturesque landscapes of Grosseto before moving to Milan to pursue his musical career.\n\nAfter releasing several acclaimed albums including 'Cosa faremo da grandi?' and 'Cori da sdraio', Corsi won the prestigious Sanremo Music Festival with 'Volevo essere un duro' (I Wanted to Be a Tough Guy), earning him the right to represent Italy at Eurovision 2025.\n\nCorsi's music is characterized by its cinematic quality, vivid storytelling, and arrangements that evoke the golden age of Italian pop while remaining distinctly contemporary. His theatrical performance style and distinctive fashion sense have made him a standout figure in Italy's music scene.",
    previousHits: ["La bellezza", "Cosa faremo da grandi?", "Amerigo"],
    funFacts: [
      "Lucio worked as a shepherd in Tuscany before pursuing music full-time",
      "He collects vintage Italian movie posters which inspire his songwriting",
      "David Bowie is his biggest musical influence, evident in his glam-inspired style"
    ]
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
    spotify: "https://open.spotify.com/artist/7jLSEPYCYQ5ssWU3BICqrW",
    instagram: "https://instagram.com/elenifoureira",
    twitter: "https://twitter.com/foureira_eleni",
    website: "https://elenifoureira.com",
    longBio: "Eleni Foureira is no stranger to the Eurovision stage. After her show-stopping performance of 'Fuego' earned Cyprus its best-ever result with a second-place finish in 2018, Foureira has become one of the most successful Eurovision alumni of recent years.\n\nBorn in Albania and based in Greece, Foureira has dominated the Mediterranean pop scene for over a decade with her energetic performances and dance-pop hits. Her return to Eurovision with 'Lava' marks a full-circle moment in her career and Cyprus's strongest bid yet for their first Eurovision victory.\n\n'Lava', composed by the same team behind 'Fuego', builds on Foureira's signature sound with explosive choruses, fiery choreography, and a powerful vocal performance. The track blends contemporary dance-pop with Mediterranean rhythms and promises to be one of the most memorable performances of Eurovision 2025.",
    previousHits: ["Fuego", "El Telefono", "Temperatura"],
    funFacts: [
      "Eleni has performed in over 30 countries since her Eurovision 2018 appearance",
      "She speaks five languages: Greek, Albanian, English, Spanish and French",
      "The choreography for 'Lava' took three months to perfect"
    ]
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
    spotify: "https://open.spotify.com/artist/5fMUXHkw8R8eOP2RNVYEZX",
    instagram: "https://instagram.com/nemo_music_official",
    twitter: "https://twitter.com/nemo_music",
    website: "https://nemo-music.ch",
    longBio: "Nemo represents the new generation of Swiss musical talent - versatile, boundary-pushing, and unafraid to tackle important social themes. Born in Biel/Bienne, Switzerland's bilingual city, Nemo grew up with a rich multicultural background that influences their eclectic musical style.\n\nAfter studying classical music and opera, Nemo ventured into electronic production and rap, creating a unique sound that defies easy categorization. Their breakthrough came with the album 'Metamorphosis' which topped the Swiss charts and earned critical acclaim across Europe.\n\n'The Code', Switzerland's Eurovision entry, showcases Nemo's versatility with operatic vocals, rap verses, and electronic production. The song explores themes of identity, self-discovery, and breaking free from societal expectations. As the representative of the host country, Nemo carries the hopes of Switzerland for a victory on home soil.",
    previousHits: ["Metamorphosis", "Quantum Leap", "Echo Chamber"],
    funFacts: [
      "Nemo is classically trained in piano, violin, and opera",
      "They produce all their music in a self-built studio in the Swiss Alps",
      "Before music, Nemo worked as a software developer, which inspired 'The Code'"
    ]
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
    spotify: "https://open.spotify.com/artist/6qqNVTkY8uBg9cP3Jd7DAH",
    instagram: "https://instagram.com/bambiethug",
    twitter: "https://twitter.com/bambie_thug",
    website: "https://bambiethug.com",
    longBio: "Bambie Thug has emerged as one of the most distinctive voices in Ireland's alternative music scene. Blending elements of industrial, gothic rock, and traditional Celtic music with a confrontational performance style, they have created a unique artistic identity that challenges conventions and pushes boundaries.\n\nAfter building a dedicated following through independent releases and electrifying live performances across Europe's underground scene, Bambie Thug surprised many by entering Ireland's Eurovision selection process. Their victory with 'Doomsday Blue' marks a bold new direction for Ireland's Eurovision strategy.\n\n'Doomsday Blue' combines haunting Celtic vocal techniques with industrial production, creating a dark, atmospheric sound unlike anything in recent Eurovision history. The performance promises to be equally striking, with elements of horror aesthetics and contemporary dance.",
    previousHits: ["Hollow", "Darklands", "Celtic Blood"],
    funFacts: [
      "Bambie studied traditional Irish sean-nós singing alongside industrial music production",
      "Their stage outfits are self-designed and hand-crafted",
      "They perform rituals before going on stage to channel creative energy"
    ]
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
    spotify: "https://open.spotify.com/artist/5WUlDfRSoLAfcVSX1WnrxN",
    instagram: "https://instagram.com/kaleen_official",
    twitter: "https://twitter.com/kaleen_music",
    website: "https://kaleen-music.at",
    longBio: "Kaleen has established herself as one of Austria's most exciting electronic music artists, bridging the gap between mainstream pop and underground club culture. After making her name as a DJ in Vienna's vibrant club scene, Kaleen transitioned to producing and performing her own music, quickly gaining attention for her energetic performances and infectious productions.\n\nHer breakthrough came with the single 'Midnight Rush', which topped dance charts across Central Europe and established her signature sound: driving beats, catchy hooks, and powerful vocals. This success led to performances at major European festivals and collaborations with renowned producers.\n\n'We Will Rave', Austria's Eurovision entry, is a celebration of dance music culture and collective joy. The track combines nostalgic 90s rave elements with contemporary production and Kaleen's commanding vocal performance, creating an anthem designed to unite the Eurovision audience.",
    previousHits: ["Midnight Rush", "Euphoria", "Vienna Calling"],
    funFacts: [
      "Kaleen started her career as a classical pianist before discovering electronic music",
      "She produces all her tracks in a converted wine cellar in Vienna",
      "The idea for 'We Will Rave' came during a 72-hour festival in Berlin"
    ]
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
    spotify: "https://open.spotify.com/artist/0GzQR5uDZ3ZXZ9RYVvxuYU",
    instagram: "https://instagram.com/joostklein",
    twitter: "https://twitter.com/joost_klein",
    website: "https://joostklein.nl",
    longBio: "Joost Klein has carved out a unique space in Dutch music with his distinctive blend of hip-hop, electronic music, and absurdist humor. Rising to prominence through viral videos and irreverent tracks that captured the zeitgeist of Dutch youth culture, Klein has developed a devoted following across the Benelux region.\n\nHis music defies easy categorization, jumping between rap, electronic beats, and pop melodies, all delivered with Klein's characteristic playful energy and distinctive Frisian accent. This unpredictable approach has made him one of the Netherlands' most original musical voices.\n\n'Europapa', the Dutch Eurovision entry, continues Klein's tradition of unexpected musical choices. The track celebrates European diversity through a collage of musical styles and multilingual lyrics, delivered with Klein's trademark enthusiasm and humor. The song's title is a playful reference to both Europe and 'papa' (father), creating a warm, inclusive message about European unity.",
    previousHits: ["Scandinavian Boy", "Friesenjung", "Bitches"],
    funFacts: [
      "Joost grew up in Friesland and often incorporates the Frisian language into his music",
      "Before music, he gained attention for his surreal comedy videos",
      "He designed the colorful costume for his Eurovision performance himself"
    ]
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
    spotify: "https://open.spotify.com/artist/5zctI4wO9XSKS8XwcnqEHk",
    instagram: "https://instagram.com/ollyalexander",
    twitter: "https://twitter.com/alexander_olly",
    website: "https://ollyalexander.com",
    longBio: "Olly Alexander is one of the UK's most versatile talents - a chart-topping musician, acclaimed actor, and outspoken advocate. As the frontman of Years & Years and later as a solo artist, Alexander has created some of British pop's most distinctive and successful music of the past decade.\n\nHis musical output is characterized by emotional honesty, infectious melodies, and production that draws from classic dance music while remaining thoroughly contemporary. Alongside his musical career, Alexander has received acclaim for his acting work, most notably in the award-winning series 'It's A Sin'.\n\nWith 'Dizzy', the UK's Eurovision entry, Alexander brings his signature sound to the competition - a euphoric dance-pop track that showcases his distinctive vocals and talent for crafting irresistible hooks. The song continues the UK's recent Eurovision renaissance, building on the success of Sam Ryder and Mae Muller with one of the country's biggest pop stars.",
    previousHits: ["King", "Desire", "Starstruck"],
    funFacts: [
      "Olly began his career as a child actor before focusing on music",
      "He's an outspoken advocate for LGBTQ+ rights and mental health awareness",
      "The choreography for 'Dizzy' was inspired by iconic 90s music videos"
    ]
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
    spotify: "https://open.spotify.com/artist/3QSQFmccmX81S3jD4H6ZTl",
    instagram: "https://instagram.com/slimane",
    twitter: "https://twitter.com/slimaneoff",
    website: "https://slimane-music.com",
    longBio: "Slimane has established himself as one of France's most beloved male vocalists, known for his soulful voice, emotional delivery, and songs that blend contemporary pop with traditional French chanson. After winning 'The Voice France' in 2016, Slimane quickly rose to prominence with a series of successful albums and singles.\n\nHis music is characterized by its emotional depth, sophisticated arrangements, and Slimane's distinctive vocal style, which effortlessly moves between powerful belting and delicate, intimate moments. This versatility has made him one of the most respected vocalists in the French-speaking world.\n\n'Mon Amour', France's Eurovision entry, is a classic French ballad with contemporary production that showcases Slimane's exceptional vocal range and emotional delivery. The song builds from an intimate piano introduction to a soaring, orchestral climax, creating one of the most vocally impressive entries in the competition.",
    previousHits: ["Paname", "Avant toi", "Des milliers de je t'aime"],
    funFacts: [
      "Slimane worked as a wedding singer before his breakthrough on The Voice",
      "He writes songs in both French and Arabic, reflecting his Franco-Algerian heritage",
      "The lyrics of 'Mon Amour' were inspired by French poetry from the 19th century"
    ]
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
    spotify: "https://open.spotify.com/artist/7gIuGlzlUEGRlKUCRuKA7c",
    instagram: "https://instagram.com/electricfields",
    twitter: "https://twitter.com/electricfields",
    website: "https://electricfields.com.au",
    longBio: "Electric Fields is an electronic music duo consisting of vocalist Zaachariaha Fielding and producer Michael Ross. Their unique sound combines the ancient traditions of Australia's First Nations people with contemporary electronic production, creating a powerful musical experience that bridges cultures and generations.\n\nZaachariaha, who is of Anangu heritage from the APY Lands in South Australia, often sings in his traditional language of Yankunytjatjara, bringing these ancient sounds to new audiences. Michael's sophisticated electronic production provides the perfect backdrop for these powerful vocals, creating a sound that is both deeply rooted in tradition and thoroughly contemporary.\n\n'One Milkali (One Blood)', Australia's Eurovision entry, celebrates unity and shared humanity through a powerful blend of electronic beats, soaring vocals, and lyrics in both Yankunytjatjara and English. The performance incorporates elements of traditional dance and contemporary choreography, creating a visually and sonically stunning representation of Australia's diverse cultural landscape.",
    previousHits: ["2000 And Whatever", "Pukulpa", "Gold Energy"],
    funFacts: [
      "Zaachariaha grew up in a remote community where he learned traditional songs from his elders",
      "The duo first met at an Indigenous music workshop in Adelaide",
      "Their Eurovision performance includes traditional body paint designs from Zaachariaha's community"
    ]
  },
];

export default function ArtistPage({ params }: { params: { id: string } }) {
  const artistId = parseInt(params.id);
  const artist = artists.find(a => a.id === artistId);
  
  if (!artist) {
    notFound();
  }

  return (
    <div className="py-16 container mx-auto px-4">
      <div className="mb-8">
        <Button variant="ghost" asChild className="flex items-center gap-2">
          <Link href="/artists">
            <ArrowLeft className="h-4 w-4" /> Back to Artists
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Artist Image and Basic Info */}
        <div className="lg:col-span-1">
          <Card className="overflow-hidden border-none shadow-xl">
            <div className="relative aspect-square overflow-hidden">
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
            </div>
            
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <Badge variant="outline" className={`${artist.color} font-normal`}>
                  {artist.country}
                </Badge>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Star className="h-4 w-4" />
                </Button>
              </div>
              
              <h1 className="text-3xl font-bold mb-2">{artist.name}</h1>
              <p className="text-muted-foreground text-lg mb-6">&quot;{artist.song}&quot;</p>
              
              <div className="space-y-4">
                {artist.semifinal ? (
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Semi-Final {artist.semifinal}, Performance #{artist.performanceOrder}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Grand Final, Performance #{artist.performanceOrder}</span>
                  </div>
                )}
                
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Representing {artist.country}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <Music className="h-4 w-4 text-muted-foreground" />
                  <span>Song: {artist.song}</span>
                </div>
              </div>
              
              <div className="mt-6 flex flex-col gap-3">
                <Button asChild className="w-full">
                  <a href={artist.spotify} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <Play className="h-4 w-4" /> Listen on Spotify
                  </a>
                </Button>
                
                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline" size="icon" asChild>
                    <a href={artist.instagram} target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href={artist.twitter} target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href={artist.website} target="_blank" rel="noopener noreferrer">
                      <Globe className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Artist Bio and Details */}
        <div className="lg:col-span-2">
          <Card className="border-none shadow-xl">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold mb-4">About {artist.name}</h2>
              
              <div className="prose prose-sm dark:prose-invert max-w-none mb-8">
                {artist.longBio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-muted-foreground">{paragraph}</p>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Previous Hits</h3>
                  <ul className="space-y-2">
                    {artist.previousHits.map((hit, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Music className="h-4 w-4 text-muted-foreground" />
                        <span>{hit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Fun Facts</h3>
                  <ul className="space-y-2">
                    {artist.funFacts.map((fact, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-muted-foreground mt-1">•</span>
                        <span className="text-sm">{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Eurovision Journey</h3>
                <div className="relative pl-6 border-l border-border">
                  <div className="absolute w-3 h-3 rounded-full bg-primary left-[-6.5px] top-1.5"></div>
                  <h4 className="font-medium">Eurovision 2025 in Basel</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {artist.semifinal 
                      ? `Performing in Semi-Final ${artist.semifinal}, position #${artist.performanceOrder}` 
                      : `Direct qualifier to the Grand Final, performing at position #${artist.performanceOrder}`}
                  </p>
                  
                  <div className="mt-4 flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" asChild className="flex items-center gap-2">
                      <a href={artist.spotify} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" /> Listen to &quot;{artist.song}&quot;
                      </a>
                    </Button>
                    <Button variant="ghost" asChild className="flex items-center gap-2">
                      <Link href="/schedule">
                        <Calendar className="h-4 w-4" /> View Schedule
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* More from this artist's country */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">More from {artist.country}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {artists
                .filter(a => a.country === artist.country && a.id !== artist.id)
                .slice(0, 2)
                .map(relatedArtist => (
                  <Card key={relatedArtist.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center p-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                        <div 
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${relatedArtist.image})` }}
                        ></div>
                      </div>
                      <div>
                        <h3 className="font-medium">{relatedArtist.name}</h3>
                        <p className="text-sm text-muted-foreground">&quot;{relatedArtist.song}&quot;</p>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}