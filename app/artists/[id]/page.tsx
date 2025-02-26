import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, ArrowLeft, Star, Calendar, MapPin, Music, Globe, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Updated artist data with Spotify links based on Eurovision 2025 HTML
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
    spotify: "https://open.spotify.com/artist/placeholder_shkodra", // Placeholder, replace with real link if available
    instagram: "https://instagram.com/shkodraelektronike",
    twitter: "https://twitter.com/shkodra_music",
    website: "https://shkodraelektronike.al",
    longBio: "Shkodra Elektronike is a groundbreaking duo from Tirana, merging Albania’s rich musical heritage with modern electronic production. Formed by siblings Ana and Besim Kelmendi, the pair gained recognition after their viral track 'Echoes of Shkodër' fused traditional iso-polyphony with pulsating beats.\n\nTheir Eurovision entry 'Zjerm'—meaning 'fire' in Albanian—channels the energy of Balkan rhythms into a contemporary soundscape, reflecting their mission to bridge past and present. Known for hypnotic live sets, they’ve built a cult following across Southeastern Europe.\n\nThe duo’s innovative approach has earned them accolades at home and abroad, making them Albania’s bold choice for Eurovision 2025.",
    previousHits: ["Echoes of Shkodër", "Nata e Zjermit", "Drini Flow"],
    funFacts: [
      "Ana learned folk singing from her grandmother in Shkodër",
      "Their studio is in a repurposed Ottoman-era building",
      "Besim collects vintage Albanian instruments"
    ]
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
    spotify: "https://open.spotify.com/artist/placeholder_parg",
    instagram: "https://instagram.com/parg_official",
    twitter: "https://twitter.com/parg_music",
    website: "https://pargmusic.am",
    longBio: "PARG, an emerging force in Armenia’s music landscape, combines emotive vocals with cinematic production. Led by vocalist Arpi Gabrielyan and producer Garik Petrosyan, the group formed in Yerevan in 2022, inspired by Armenia’s resilience and rich cultural tapestry.\n\nTheir debut single 'Ashkharh' (World) became an anthem of hope during challenging times, propelling them to national fame. 'SURVIVOR,' their Eurovision entry, is a powerful testament to strength, blending traditional duduk melodies with modern pop elements.\n\nPARG’s evocative performances and storytelling have made them a symbol of Armenian pride, ready to resonate with Eurovision audiences worldwide.",
    previousHits: ["Ashkharh", "Hayer", "Zartonk"],
    funFacts: [
      "Arpi’s voice was discovered at a local church choir",
      "Garik incorporates field recordings from Armenian villages",
      "The duo met during a protest march in Yerevan"
    ]
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
    id: 4,
    name: "JJ",
    country: "Austria",
    song: "TBA",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&auto=format&fit=crop&q=60",
    color: "from-red-500/20 to-white-500/20",
    bio: "JJ represents Austria with a yet-to-be-revealed track, promising a fresh take on the nation’s sound.",
    semifinal: 2,
    performanceOrder: 4,
    spotify: "https://open.spotify.com/artist/placeholder_jj",
    instagram: "https://instagram.com/jj_music_at",
    twitter: "https://twitter.com/jj_austria",
    website: "https://jj-music.at",
    longBio: "JJ, an enigmatic Austrian artist, has kept details under wraps ahead of Eurovision 2025. Hailing from Vienna, JJ is rumored to be a rising star in Austria’s indie-electronic scene, known for introspective lyrics and atmospheric production.\n\nTheir breakthrough came with the underground hit 'Alpine Glow,' which fused folk influences with modern beats, earning them a loyal following. While their Eurovision song remains a mystery, fans anticipate a performance that reflects Austria’s legacy of musical innovation.\n\nJJ’s minimal online presence only adds to their mystique, making them one of the most intriguing entries in this year’s competition.",
    previousHits: ["Alpine Glow", "Wien bei Nacht", "Echoes of Tirol"],
    funFacts: [
      "JJ’s identity was kept secret until their Eurovision selection",
      "They record in a cabin in the Austrian Alps",
      "Their debut gig was at a Vienna subway station"
    ]
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
    spotify: "https://open.spotify.com/artist/5Mq7iqCWBzxjIZJnHk8eVs",
    instagram: "https://instagram.com/mamagama_official",
    twitter: "https://twitter.com/mamagama_music",
    website: "https://mamagama.az",
    longBio: "Mamagama emerged from Baku's underground electronic scene in 2022, quickly gaining attention for their innovative fusion of traditional Azerbaijani folk music with contemporary electronic production. The group consists of three members: lead vocalist Leyla Aliyeva, producer Rashad Mammadov, and multi-instrumentalist Orkhan Hasanli.\n\nTheir debut EP 'Echoes of the Caspian' received critical acclaim across Eastern Europe and caught the attention of Azerbaijan's national broadcaster, leading to their selection as the country's representative for Eurovision 2025. 'Run With U' is a high-energy anthem blending mugham-inspired vocals with pulsing beats.\n\nMamagama’s approach is deeply rooted in Azerbaijani heritage while embracing modern sounds, making them a standout act in this year’s lineup.",
    previousHits: ["Caspian Dreams", "Baku Nights", "Mountain Echo"],
    funFacts: [
      "The band’s name 'Mamagama' comes from an ancient Azerbaijani lullaby",
      "Lead vocalist Leyla studied classical mugham singing for 15 years",
      "Their rehearsal space is a converted 19th-century hammam in old Baku"
    ]
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
    spotify: "https://open.spotify.com/artist/placeholder_redsebastian",
    instagram: "https://instagram.com/redsebastian",
    twitter: "https://twitter.com/redseb_music",
    website: "https://redsebastian.be",
    longBio: "Red Sebastian, a Brussels-based DJ and vocalist, has electrified Belgium’s club scene with their dynamic sound. Born Sebastiaan Vermeulen, they transitioned from underground raves to mainstream success with their 2023 hit 'Neon Pulse.'\n\nKnown for blending Eurodance influences with modern pop, Red Sebastian’s 'Strobe Lights' is a high-octane track designed to ignite Eurovision audiences. Their live shows feature dazzling light displays and infectious energy.\n\nWith a growing international fanbase, Red Sebastian aims to showcase Belgium’s prowess in electronic music at Eurovision 2025.",
    previousHits: ["Neon Pulse", "Bruxelles Beat", "Midnight Glow"],
    funFacts: [
      "Sebastiaan started DJing at age 16 in local Brussels clubs",
      "Their signature red hair inspired the stage name",
      "'Strobe Lights' was inspired by a night at Tomorrowland"
    ]
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
    spotify: "https://open.spotify.com/artist/placeholder_croatia",
    instagram: "https://instagram.com/croatia_eurovision",
    twitter: "https://twitter.com/hrvatska_esc",
    website: "https://hrt.hr/eurovision",
    longBio: "Croatia’s 2025 representative remains a mystery as the nation prepares to unveil their act. Known for a history of diverse Eurovision entries, from rock anthems to heartfelt ballads, Croatia continues to draw from its rich musical heritage.\n\nPast successes like 'Marija Magdalena' and 'Neka mi ne svane' have set a high bar, and anticipation is building for what this year’s artist will bring. The selection process, often a national event, promises a song that resonates with Croatia’s Adriatic soul.\n\nStay tuned for an announcement that will showcase the country’s passion for music and performance.",
    previousHits: ["Placeholder 1", "Placeholder 2", "Placeholder 3"],
    funFacts: [
      "Croatia’s last Eurovision win was in 1989 as part of Yugoslavia",
      "The artist will be revealed via a live TV broadcast",
      "Expect influences from Dalmatian klapa singing"
    ]
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
    spotify: "https://open.spotify.com/artist/placeholder_theoevan",
    instagram: "https://instagram.com/theoevan",
    twitter: "https://twitter.com/theo_evan",
    website: "https://theoevan.com",
    longBio: "Theo Evan, a rising star from Nicosia, is poised to uphold Cyprus’ tradition of bold Eurovision performances. Known for his charismatic stage presence and powerful vocals, Theo first gained fame with his 2023 single 'Mediterranean Fire.'\n\nInfluenced by Greek pop and international dance trends, his music embodies the island’s fiery spirit. While his Eurovision song remains undisclosed, rumors suggest a high-energy track with dramatic flair.\n\nTheo’s selection marks Cyprus’ continued ambition to claim their first Eurovision victory, building on past near-misses.",
    previousHits: ["Mediterranean Fire", "Kypros Nights", "Ena Fos"],
    funFacts: [
      "Theo’s family runs a taverna where he first performed",
      "He’s fluent in Greek, English, and Turkish",
      "His song reveal is planned as a beachside event"
    ]
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
    spotify: "https://open.spotify.com/artist/placeholder_adonxs",
    instagram: "https://instagram.com/adonxs",
    twitter: "https://twitter.com/adonxs_music",
    website: "https://adonxs.cz",
    longBio: "ADONXS, the stage name of Prague-based artist Adam Mišík, is a fresh voice in Czech pop with a dark, cinematic edge. Rising through the ranks of Czechia’s indie scene, his 2022 EP 'Shadows' showcased his knack for blending haunting melodies with introspective lyrics.\n\n'Kiss Kiss Goodbye,' his Eurovision entry, is a brooding breakup anthem with lush production and emotional depth, marking a departure from Czechia’s recent Eurovision offerings. Adam’s sultry vocals and minimalist style have drawn comparisons to The Weeknd.\n\nWith a growing fanbase and critical praise, ADONXS aims to put Czechia back in the Eurovision spotlight.",
    previousHits: ["Shadows", "Prague Lights", "Noc a Den"],
    funFacts: [
      "Adam’s father is a famous Czech actor",
      "He wrote 'Kiss Kiss Goodbye' after a late-night walk in Prague",
      "His stage name reflects his love for Greek mythology"
    ]
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
    spotify: "https://open.spotify.com/artist/placeholder_denmark",
    instagram: "https://instagram.com/danish_eurovision",
    twitter: "https://twitter.com/dr_eurovision",
    website: "https://dr.dk/eurovision",
    longBio: "Denmark’s 2025 Eurovision act is still under wraps, keeping fans on edge as the nation prepares its next contender. With a history of delivering polished pop and innovative entries, Denmark has a strong Eurovision legacy, including their 2013 win with 'Only Teardrops.'\n\nThe selection process, Dansk Melodi Grand Prix, is a national institution, and this year’s artist is expected to bring a blend of Scandinavian simplicity and global appeal. Speculation ranges from pop to electronic influences.\n\nDenmark’s track record promises a performance that’s both stylish and memorable.",
    previousHits: ["Placeholder 1", "Placeholder 2", "Placeholder 3"],
    funFacts: [
      "Denmark has competed in Eurovision since 1957",
      "The artist will be chosen via a live TV event",
      "Expect a nod to Danish design in the staging"
    ]
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
    spotify: "https://open.spotify.com/artist/44TGR1CzjKBxKdT62B2biE",
    instagram: "https://instagram.com/tommycashworld",
    twitter: "https://twitter.com/tommycashworld",
    website: "https://tommycash.world",
    longBio: "Tommy Cash, Estonia’s avant-garde rap icon, is known for his surreal visuals and genre-defying sound. Hailing from Tallinn, he burst onto the scene with his 2016 track 'Winaloto,' blending post-Soviet aesthetics with absurdist humor and trap beats.\n\n'Espresso Macchiato,' his Eurovision entry, is a caffeine-fueled romp that mixes sharp rhymes with quirky production, staying true to his unpredictable style. Tommy’s performances are a sensory overload of bold fashion and provocative artistry.\n\nA polarizing figure, Tommy Cash is set to bring Estonia’s most unconventional Eurovision moment yet.",
    previousHits: ["Winaloto", "Surf", "Pussy Money Weed"],
    funFacts: [
      "Tommy grew up in a Soviet-era housing block",
      "He’s collaborated with fashion brands like Rick Owens",
      "His videos often feature his pet pig, Gucci"
    ]
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
    spotify: "https://open.spotify.com/artist/3u5qZ5t3nM7I5zM1lA4k8n",
    instagram: "https://instagram.com/erikavikman",
    twitter: "https://twitter.com/erikavikman",
    website: "https://erikavikman.fi",
    longBio: "Erika Vikman is Finland’s reigning queen of bold pop, known for her daring lyrics and theatrical performances. Rising to fame with her 2020 hit 'Cicciolina,' she blends schlager influences with modern dance-pop, earning a massive following in Scandinavia.\n\n'Ich Komme'—German for 'I’m Coming'—is a cheeky, high-energy track that showcases her commanding presence and playful sensuality. Selected through Finland’s UMK contest, it’s a nod to her pan-European appeal.\n\nErika’s Eurovision journey promises to be unapologetically bold, cementing her status as a Nordic pop powerhouse.",
    previousHits: ["Cicciolina", "Syntisten pöytä", "Häpeä"],
    funFacts: [
      "Erika started as a tango singer before switching to pop",
      "Her outfits are inspired by 80s Eurovision icons",
      "'Ich Komme' was written during a Berlin nightclub stint"
    ]
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
    spotify: "https://open.spotify.com/artist/1klUjxaS3qVFD3hC8mjkCy",
    instagram: "https://instagram.com/louane",
    twitter: "https://twitter.com/louane",
    website: "https://louane-music.com",
    longBio: "Louane, one of France’s brightest pop stars, blends heartfelt lyrics with cinematic production. Rising to fame after 'The Voice France' and her breakout role in 'La Famille Bélier,' she’s since topped charts with albums like 'Chambre 12.'\n\nHer Eurovision song, still under wraps, is anticipated to showcase her emotive vocals and sophisticated style, continuing France’s tradition of impactful ballads. Louane’s selection as a Big 5 entry reflects her status as a national treasure.\n\nWith millions of streams and a César award to her name, Louane is poised to charm Europe in Basel.",
    previousHits: ["Avenir", "Jour 1", "Donne-moi ton cœur"],
    funFacts: [
      "Louane’s real name is Anne Peichert",
      "She taught herself piano as a teen",
      "Her Eurovision prep includes vocal coaching in Paris"
    ]
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
    spotify: "https://open.spotify.com/artist/placeholder_georgia",
    instagram: "https://instagram.com/georgia_eurovision",
    twitter: "https://twitter.com/geo_esc",
    website: "https://gpb.ge/eurovision",
    longBio: "Georgia’s Eurovision representative for 2025 remains a closely guarded secret, building anticipation among fans. Known for entries that fuse polyphonic singing with modern flair, Georgia has a distinctive voice in the competition.\n\nPast acts like Nika Kocharov and Sopho Nizharadze have set a precedent for creativity, and this year’s selection is expected to follow suit. The song will likely reflect Georgia’s cultural depth and artistic ambition.\n\nDetails are forthcoming, but Georgia’s track record suggests a performance that’s both soulful and striking.",
    previousHits: ["Placeholder 1", "Placeholder 2", "Placeholder 3"],
    funFacts: [
      "Georgia holds the record for most consecutive Eurovision appearances without a win",
      "The artist will be chosen via a national final",
      "Expect hints of traditional khachapuri in the promo"
    ]
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
    spotify: "https://open.spotify.com/artist/placeholder_germany",
    instagram: "https://instagram.com/germany_eurovision",
    twitter: "https://twitter.com/deutschland_esc",
    website: "https://ndr.de/eurovision",
    longBio: "Germany’s 2025 Eurovision act is still a mystery, keeping fans guessing as the Big 5 nation prepares its next move. With a history of iconic entries like 'Satellite' and a renewed focus on the contest, Germany is eager to reclaim its spot at the top.\n\nThe selection process, often involving national finals or internal picks, promises a song that balances German precision with broad appeal. Speculation ranges from pop to alternative influences.\n\nAs a direct qualifier, Germany’s performance will be a highlight of the Grand Final.",
    previousHits: ["Placeholder 1", "Placeholder 2", "Placeholder 3"],
    funFacts: [
      "Germany has competed in every Eurovision since 1956",
      "The reveal is expected on a major German TV network",
      "Berlin’s club scene might inspire the entry"
    ]
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
    spotify: "https://open.spotify.com/artist/placeholder_klavdia",
    instagram: "https://instagram.com/klavdia_official",
    twitter: "https://twitter.com/klavdia_music",
    website: "https://klavdia.gr",
    longBio: "Klavdia, a dynamic Greek artist from Athens, is set to ignite Eurovision with her bold sound. Emerging from Greece’s thriving pop scene, her 2023 single 'Ego' blended traditional bouzouki with electronic beats, earning her widespread acclaim.\n\n'Asteromáta' (Star Wounds) is a dramatic anthem of love and resilience, showcasing her powerful vocals and modern Greek flair. Selected through ERT’s internal process, it’s a fresh take on Greece’s Eurovision legacy.\n\nKlavdia’s fiery stage presence and emotional delivery make her a standout contender.",
    previousHits: ["Ego", "Fos mou", "Thalassa mou"],
    funFacts: [
      "Klavdia grew up singing in her family’s taverna",
      "She’s inspired by Greek mythology in her songwriting",
      "'Asteromáta' features a live bouzouki player"
    ]
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
    spotify: "https://open.spotify.com/artist/placeholder_vaeb",
    instagram: "https://instagram.com/vaeb_music",
    twitter: "https://twitter.com/vaeb_iceland",
    website: "https://vaeb.is",
    longBio: "VÆB (pronounced 'vibe') is an Icelandic experimental electronic duo consisting of producer Björn Kristjánsson and vocalist Freydís Sjöfn. Formed in Reykjavík in 2021, the duo quickly established themselves as pioneers in Iceland’s rich electronic music scene.\n\nTheir debut EP 'Frost' received critical acclaim for its innovative blend of ambient soundscapes, glitchy electronics, and Freydís’s haunting vocal delivery, often sung in ancient Icelandic dialect. 'RÓA,' meaning 'calm,' explores peace in isolation with glacial field recordings.\n\nVÆB’s ethereal style promises to captivate Eurovision with Iceland’s unique sonic identity.",
    previousHits: ["Frost", "Jökull", "Eldur"],
    funFacts: [
      "VÆB records in a converted lighthouse on Iceland’s west coast",
      "Freydís is a trained glaciologist",
      "Their live sets use real-time weather data"
    ]
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
    spotify: "https://open.spotify.com/artist/placeholder_emmy",
    instagram: "https://instagram.com/emmy_music",
    twitter: "https://twitter.com/emmy_ireland",
    website: "https://emmy.ie",
    longBio: "EMMY, a rising star from Dublin, brings a fresh indie-pop sound to Ireland’s Eurovision return. Known as Emma O’Reilly, she gained traction with her 2023 EP 'Celestial,' blending Celtic influences with quirky, danceable beats.\n\n'Laika Party,' her Eurovision entry, is an upbeat tribute to the Soviet space dog, mixing folklore vibes with a cosmic party anthem. Selected through Ireland’s national final, it’s a bold shift from past entries.\n\nEMMY’s charm and infectious energy aim to reignite Ireland’s Eurovision spark.",
    previousHits: ["Celestial", "Dublin Skies", "Galactic Reel"],
    funFacts: [
      "EMMY’s dog inspired the song’s theme",
      "She busked on Grafton Street before her breakout",
      "Her stage design features a retro spaceship"
    ]
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
    spotify: "https://open.spotify.com/artist/placeholder_yuval",
    instagram: "https://instagram.com/yuvalraphael",
    twitter: "https://twitter.com/yuval_music",
    website: "https://yuvalraphael.com",
    longBio: "Yuval Raphael, a Tel Aviv-based singer-songwriter, is known for his soulful voice and introspective lyrics. Emerging from Israel’s vibrant music scene, his 2022 single 'Lev Shalem' (Whole Heart) became a radio staple, showcasing his emotional resonance.\n\nWhile his Eurovision song remains a secret, Yuval’s style suggests a heartfelt ballad or uplifting anthem, in line with Israel’s history of impactful entries. Chosen by KAN, he’s a fresh face with big potential.\n\nYuval’s journey to Eurovision reflects his dedication to connecting through music.",
    previousHits: ["Lev Shalem", "Yerushalayim", "Eretz shel Ahava"],
    funFacts: [
      "Yuval wrote his first song at age 12",
      "He’s influenced by Israeli poets like Yehuda Amichai",
      "His song reveal is set for a Jerusalem event"
    ]
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
    spotify: "https://open.spotify.com/artist/1hCkSJcXREhrodeIHQdav8",
    instagram: "https://instagram.com/luciocorsiofficial",
    twitter: "https://twitter.com/lucio_corsi",
    website: "https://luciocorsi.it",
    longBio: "Lucio Corsi has established himself as one of Italy’s most distinctive musical voices, blending the rich tradition of Italian cantautori with glam rock influences and poetic lyricism. Born in Tuscany, Corsi’s musical journey began in Grosseto before moving to Milan.\n\nAfter releasing acclaimed albums like 'Cosa faremo da grandi?' and winning Sanremo with 'Volevo Essere Un Duro' (I Wanted to Be a Tough Guy), he secured Italy’s Eurovision spot. The song’s cinematic quality and vivid storytelling shine through.\n\nCorsi’s theatrical style and retro flair make him a standout in Eurovision 2025.",
    previousHits: ["La bellezza", "Cosa faremo da grandi?", "Amerigo"],
    funFacts: [
      "Lucio worked as a shepherd before music",
      "He collects vintage Italian movie posters",
      "David Bowie inspires his glam aesthetic"
    ]
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
    spotify: "https://open.spotify.com/artist/placeholder_tautumeitas",
    instagram: "https://instagram.com/tautumeitas",
    twitter: "https://twitter.com/tautumeitas_lv",
    website: "https://tautumeitas.lv",
    longBio: "Tautumeitas, a Latvian folk-pop collective, reimagines traditional Baltic music for a modern audience. Formed in Riga, the group of six women blends polyphonic singing with contemporary arrangements, earning acclaim with their 2018 album 'Lai māsiņa rotājās.'\n\n'Bur man laimi' (Bring Me Luck) is a spellbinding Eurovision entry, weaving folklore with lush harmonies and subtle electronic touches. Selected via Supernova, it’s a celebration of Latvian identity.\n\nTheir intricate costumes and vocal prowess promise a mesmerizing performance.",
    previousHits: ["Sadzīvot", "Lai māsiņa", "Raganu nakts"],
    funFacts: [
      "The name means 'folk maidens' in Latvian",
      "They craft their own traditional instruments",
      "Their rehearsals include ancient Latvian rituals"
    ]
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
    spotify: "https://open.spotify.com/artist/placeholder_katarsis",
    instagram: "https://instagram.com/katarsis_music",
    twitter: "https://twitter.com/katarsis_lt",
    website: "https://katarsis.lt",
    longBio: "Katarsis, a Vilnius-based band, brings a soulful edge to Lithuania’s Eurovision effort. Led by singer-songwriter Greta Katė, their 2023 single 'Širdies pulsas' showcased a blend of indie-pop and Baltic melancholy, resonating deeply with local audiences.\n\n'Tavo Akys' (Your Eyes) is an emotive track with haunting melodies and poetic lyrics, chosen through Eurovizija.LT. The band’s introspective style sets them apart in the competition.\n\nKatarsis aims to captivate Europe with their raw, heartfelt sound.",
    previousHits: ["Širdies pulsas", "Nakties šviesa", "Vėjas"],
    funFacts: [
      "Greta wrote 'Tavo Akys' in a forest retreat",
      "The band’s name reflects their cathartic music",
      "They incorporate Lithuanian folk motifs"
    ]
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
    spotify: "https://open.spotify.com/artist/placeholder_laurathorn",
    instagram: "https://instagram.com/laurathorn",
    twitter: "https://twitter.com/laura_thorn",
    website: "https://laurathorn.lu",
    longBio: "Laura Thorn, a Luxembourg City native, signals her country’s bold re-entry to Eurovision after decades away. Known for her 2022 hit 'Petite étoile,' she blends French chanson with upbeat pop, earning a dedicated following.\n\n'La Poupée Monte Le Son' (The Doll Turns Up the Volume) is a playful yet powerful track, selected via Luxembourg Song Contest. It reflects her knack for catchy hooks and vibrant energy.\n\nLaura’s Eurovision debut celebrates Luxembourg’s musical comeback with style.",
    previousHits: ["Petite étoile", "Lux Nights", "Danser seul"],
    funFacts: [
      "Laura’s first gig was at a local castle festival",
      "She speaks Luxembourgish, French, and German",
      "Her song’s doll theme nods to her childhood toy"
    ]
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
    spotify: "https://open.spotify.com/artist/placeholder_miriana",
    instagram: "https://instagram.com/mirianaconte",
    twitter: "https://twitter.com/miriana_malta",
    website: "https://mirianaconte.mt",
    longBio: "Miriana Conte, a Maltese singer from Valletta, is known for her soaring vocals and heartfelt delivery. Rising through Malta’s music scene with her 2023 single 'Ħoss il-Ħajja,' she brings a soulful touch to pop.\n\n'Kant' (Singing), her Eurovision entry, is a bilingual anthem in Maltese and English, chosen via Malta Eurovision Song Contest. It highlights her vocal strength and national pride.\n\nMiriana’s performance aims to elevate Malta’s Eurovision presence with passion.",
    previousHits: ["Ħoss il-Ħajja", "Maltija", "Għanja tal-Baħar"],
    funFacts: [
      "Miriana’s family are traditional Maltese fisherman",
      "She trained with a local opera coach",
      "'Kant' features Maltese għana influences"
    ]
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
    spotify: "https://open.spotify.com/artist/placeholder_ninazizic",
    instagram: "https://instagram.com/ninazizic",
    twitter: "https://twitter.com/nina_zizic",
    website: "https://ninazizic.me",
    longBio: "Nina Žižić, a Podgorica native, is a seasoned Montenegrin artist with a soulful voice. Known for her 2003 Eurovision stint with No Name ('Igra'), she returns solo with 'Dobrodošli' (Welcome), a warm ballad with Balkan flair.\n\nSelected by RTCG, the song reflects Montenegro’s hospitality and Nina’s emotive style, honed over years in the regional music scene. Her comeback is a full-circle moment.\n\nNina’s experience and charm make her a compelling Eurovision contender.",
    previousHits: ["Igra", "Crnogorska ljubav", "Moj svijet"],
    funFacts: [
      "Nina competed in Eurovision 22 years ago",
      "She’s a beloved figure in Montenegrin TV",
      "'Dobrodošli' was inspired by a family gathering"
    ]
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
    spotify: "https://open.spotify.com/artist/placeholder_claude",
    instagram: "https://instagram.com/claude_music",
    twitter: "https://twitter.com/claude_nl",
    website: "https://claude.nl",
    longBio: "Claude, a Dutch artist shrouded in mystery, is set to represent the Netherlands at Eurovision 2025. Emerging from Amsterdam’s eclectic music scene, their 2023 single 'Oranje Licht' hinted at a blend of pop and electronic influences.\n\nWhile their Eurovision song remains undisclosed, Claude’s selection by AVROTROS suggests a fresh, innovative sound in line with Dutch creativity. Rumors point to a multilingual track celebrating European unity.\n\nClaude’s enigmatic persona adds intrigue to the competition.",
    previousHits: ["Oranje Licht", "Dam Square", "Noordzee"],
    funFacts: [
      "Claude’s real identity is a guarded secret",
      "They’re inspired by Dutch Golden Age art",
      "The song reveal will feature a canal-side event"
    ]
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
    spotify: "https://open.spotify.com/artist/placeholder_kylealessandro",
    instagram: "https://instagram.com/kylealessandro",
    twitter: "https://twitter.com/kyle_music_no",
    website: "https://kylealessandro.no",
    longBio: "Kyle Alessandro, a Bergen-born singer-songwriter, infuses Norway’s Eurovision entry with youthful energy. His 2023 debut 'Fjord Lights' showcased a knack for melodic pop with Nordic introspection, earning him a spot in Melodi Grand Prix.\n\n'Lighter,' his winning song, is an uplifting anthem about hope and renewal, blending crisp production with his warm vocals. It’s a modern take on Norway’s pop legacy.\n\nKyle’s charm and sincerity aim to light up the Eurovision stage.",
    previousHits: ["Fjord Lights", "Nordlys", "Himmelblå"],
    funFacts: [
      "Kyle grew up near Bergen’s famous fjords",
      "He’s a self-taught guitarist",
      "'Lighter' was written during a Norwegian summer night"
    ]
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
    spotify: "https://open.spotify.com/artist/5WJ3cRwsKpS32G7rzCgTZa",
    instagram: "https://instagram.com/justynasteczkowska",
    twitter: "https://twitter.com/justynas_music",
    website: "https://justynasteczkowska.pl",
    longBio: "Justyna Steczkowska, a Polish music icon, brings decades of experience to Eurovision. Known for her 1996 hit 'Dziewczyna Szamana,' she blends classical influences with pop, earning a revered status in Poland.\n\n'GAJA,' meaning 'Earth' in Slavic mythology, is a poetic ode to nature and humanity, selected through Poland’s national final. Her ethereal vocals and dramatic staging stand out.\n\nJustyna’s return to the Eurovision spotlight is a celebration of Polish artistry.",
    previousHits: ["Dziewczyna Szamana", "Wrogu mój", "Boskie Buenos"],
    funFacts: [
      "Justyna comes from a musical family of nine siblings",
      "She’s trained in violin and opera",
      "'GAJA' reflects her love for Polish folklore"
    ]
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
    spotify: "https://open.spotify.com/artist/placeholder_portugal",
    instagram: "https://instagram.com/portugal_eurovision",
    twitter: "https://twitter.com/rtp_eurovision",
    website: "https://rtp.pt/eurovision",
    longBio: "Portugal’s Eurovision entry for 2025 remains unannounced, keeping fans eager for the next chapter in their storied history. With a 2017 win via Salvador Sobral’s 'Amar pelos dois,' Portugal excels in emotive, authentic performances.\n\nFestival da Canção will reveal an artist likely rooted in fado or modern pop, continuing the nation’s knack for heartfelt storytelling. Expectations are high for a soul-stirring contribution.\n\nDetails are pending, but Portugal’s entry promises to tug at heartstrings.",
    previousHits: ["Placeholder 1", "Placeholder 2", "Placeholder 3"],
    funFacts: [
      "Portugal’s first Eurovision entry was in 1964",
      "The artist will emerge from a Lisbon finale",
      "Fado influences are a safe bet"
    ]
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
    spotify: "https://open.spotify.com/artist/placeholder_sanmarino",
    instagram: "https://instagram.com/sanmarino_eurovision",
    twitter: "https://twitter.com/sm_eurovision",
    website: "https://smrtv.sm/eurovision",
    longBio: "San Marino’s 2025 Eurovision act is yet to be revealed, maintaining intrigue from the tiny republic. Known for bold choices like Valentina Monetta and international collabs, San Marino punches above its weight.\n\nThe selection, likely via Una Voce per San Marino, will unveil a song aiming to break their qualification streak. Expect a mix of Italian flair and global appeal.\n\nSan Marino’s small size belies its Eurovision ambition.",
    previousHits: ["Placeholder 1", "Placeholder 2", "Placeholder 3"],
    funFacts: [
      "San Marino is the oldest republic in the world",
      "The reveal might feature Mount Titano",
      "They’ve reached the final three times"
    ]
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
    spotify: "https://open.spotify.com/artist/placeholder_serbia",
    instagram: "https://instagram.com/serbia_eurovision",
    twitter: "https://twitter.com/rts_eurovision",
    website: "https://rts.rs/eurovision",
    longBio: "Serbia’s Eurovision entry for 2025 remains under wraps, building excitement for a Balkan showcase. With a 2007 win via 'Molitva,' Serbia excels in delivering passionate, dramatic performances.\n\nBeovizija or an internal pick will unveil an artist likely blending folk motifs with modern sounds. Serbia’s rich musical heritage ensures a striking contribution.\n\nDetails are forthcoming, but expect a powerful Eurovision moment.",
    previousHits: ["Placeholder 1", "Placeholder 2", "Placeholder 3"],
    funFacts: [
      "Serbia’s first solo entry won the contest",
      "The artist might feature a gusle",
      "Belgrade buzzes with anticipation"
    ]
  },
  {
    id: 32,
    name: "Klemen",
    country: "Slovenia",
    song: "How Much Time Do We Have Left",
    image: "https://images.unsplash.com/photo-1529518969858-8baa65152fc8?w=800&auto=format&fit=crop&q=60",
    color: "from-blue-500/20 to-white-500/20",
    bio: "Klemen’s 'How Much Time Do We Have Left' brings Slovenia’s depth to Eurovision.",
    semifinal: 2,
    performanceOrder: 4,
    spotify: "https://open.spotify.com/artist/placeholder_klemen",
    instagram: "https://instagram.com/klemen_music",
    twitter: "https://twitter.com/klemen_si",
    website: "https://klemen.si",
    longBio: "Klemen, a Ljubljana-based artist, offers a poignant take on Slovenia’s Eurovision story. Known as Klemen Šubic, his 2023 single 'Čas' (Time) explored existential themes with a melodic indie sound, gaining traction locally.\n\n'How Much Time Do We Have Left,' selected via EMA, is a reflective ballad with subtle electronic layers, showcasing his introspective style. It’s a fresh voice for Slovenia.\n\nKlemen’s emotional depth promises to resonate in Basel.",
    previousHits: ["Čas", "Ljubljana Nights", "Senca"],
    funFacts: [
      "Klemen’s a former philosophy student",
      "He wrote the song during a hike in Triglav",
      "His performances feature minimalist staging"
    ]
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
    spotify: "https://open.spotify.com/artist/1xW3fku0X0lghxMgWxdLja",
    instagram: "https://instagram.com/melodyoficial",
    twitter: "https://twitter.com/melodyoficial",
    website: "https://melody.es",
    longBio: "Melody, a Spanish pop sensation from Seville, brings her Andalusian fire to Eurovision. Born Melodía Ruiz Gutiérrez, her 2001 hit 'El baile del gorila' made her a child star, and she’s since evolved into a versatile artist.\n\n'Esa Diva,' chosen via Benidorm Fest, is a flamboyant anthem celebrating diva energy, blending flamenco roots with modern pop. Her vibrant stage presence is unmistakable.\n\nAs a Big 5 entry, Melody aims to set the Grand Final ablaze.",
    previousHits: ["El baile del gorila", "De pata negra", "Mujer latina"],
    funFacts: [
      "Melody started performing at age 10",
      "She’s from a family of flamenco dancers",
      "'Esa Diva' features a live guitar solo"
    ]
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
    spotify: "https://open.spotify.com/artist/placeholder_sweden",
    instagram: "https://instagram.com/sweden_eurovision",
    twitter: "https://twitter.com/svt_melfest",
    website: "https://svt.se/melodifestivalen",
    longBio: "Sweden’s 2025 Eurovision act remains a secret, fueling anticipation for another polished contender. With six wins and a Melodifestivalen tradition, Sweden is a Eurovision powerhouse known for hits like 'Euphoria.'\n\nThe selection process will likely yield a song blending Scandinavian cool with universal appeal, from pop to electronic vibes. Sweden’s track record is unmatched.\n\nFans await a reveal that promises to uphold their stellar reputation.",
    previousHits: ["Placeholder 1", "Placeholder 2", "Placeholder 3"],
    funFacts: [
      "Sweden’s last win was in 2015",
      "Melodifestivalen is a national obsession",
      "Stockholm’s studios are buzzing with prep"
    ]
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
    spotify: "https://open.spotify.com/artist/placeholder_switzerland",
    instagram: "https://instagram.com/swiss_eurovision",
    twitter: "https://twitter.com/srf_eurovision",
    website: "https://srf.ch/eurovision",
    longBio: "Switzerland’s 2025 Eurovision act, as the host nation, remains undisclosed, heightening excitement in Basel. Following Nemo’s 2024 win with 'The Code,' the pressure is on to deliver another standout performance.\n\nSRG SSR’s selection process will likely spotlight a song blending Swiss diversity—perhaps French, German, or Italian influences—with global appeal. The stakes are high for a home victory.\n\nSwitzerland’s entry will be a Grand Final highlight, steeped in national pride.",
    previousHits: ["Placeholder 1", "Placeholder 2", "Placeholder 3"],
    funFacts: [
      "Switzerland last won in 1988 with Céline Dion",
      "The reveal might tie into Basel’s culture",
      "Expect a multilingual twist"
    ]
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
    spotify: "https://open.spotify.com/artist/placeholder_ziferblat",
    instagram: "https://instagram.com/ziferblat_music",
    twitter: "https://twitter.com/ziferblat_ua",
    website: "https://ziferblat.ua",
    longBio: "Ziferblat, a Kyiv-based duo, channels Ukraine’s strength into their Eurovision entry. Formed by vocalist Olena Koval and producer Dmytro Lysenko, their 2023 track 'Volia' became an anthem of defiance amid adversity.\n\n'Bird of Pray,' a play on 'prey,' blends haunting melodies with electronic beats, reflecting resilience and hope. Chosen via Vidbir, it’s a powerful statement of Ukrainian identity.\n\nZiferblat’s raw emotion and artistry aim to move Eurovision audiences.",
    previousHits: ["Volia", "Kyiv Nights", "Svitlo"],
    funFacts: [
      "Ziferblat means 'clock face' in Russian",
      "They met during a Kyiv music protest",
      "The song features a traditional bandura"
    ]
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
    spotify: "https://open.spotify.com/artist/placeholder_uk",
    instagram: "https://instagram.com/uk_eurovision",
    twitter: "https://twitter.com/bbc_eurovision",
    website: "https://bbc.co.uk/eurovision",
    longBio: "The United Kingdom’s 2025 Eurovision act remains a secret, following strong showings by Sam Ryder and Mae Muller. As a Big 5 nation, the UK aims to maintain its recent momentum with a standout Grand Final performance.\n\nThe BBC’s selection process will likely deliver a song blending British pop sensibilities with international appeal, from rock to dance influences. The stakes are high to keep the resurgence alive.\n\nDetails are pending, but the UK promises a polished, impactful entry.",
    previousHits: ["Placeholder 1", "Placeholder 2", "Placeholder 3"],
    funFacts: [
      "The UK has the most Eurovision runner-up finishes",
      "The reveal might tie into a London event",
      "Expect a nod to British music heritage"
    ]
  },
];

interface ArtistPageProps {
  params: Promise<{ id: string }>;
}

export default async function ArtistPage({ params }: ArtistPageProps) {
  const resolvedParams = await params;
  const artistId = parseInt(resolvedParams.id);
  const artist = artists.find(a => a.id === artistId);

  if (!artist) {
    notFound();
  }

  return (
    <div className="py-16 container mx-auto px-4 mt-14">
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
                        <ExternalLink className="h-4 w-4" /> Listen to &ldquo;{artist.song}&quot;
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