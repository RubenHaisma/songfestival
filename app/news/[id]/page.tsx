import { notFound } from 'next/navigation';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import Link from "next/link";

const newsItems = [
  {
    id: 1,
    title: "Will Lucio Corsi's 'Volevo essere un duro' steal the show for Italy?",
    excerpt: "Italy's entry is generating buzz with its unique blend of retro sounds and modern production. Music critics are predicting a potential winner.",
    date: "April 15, 2025",
    category: "Predictions",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2luZ2VyfGVufDB8fDB8fHww",
    content: "Italy's Eurovision 2025 entry by Lucio Corsi, 'Volevo essere un duro', has taken the music world by storm. The song combines nostalgic 80s synth sounds with contemporary production techniques, creating a fresh yet familiar sound that has critics buzzing. Industry experts suggest this could be Italy's strongest entry since Måneskin's victory in 2021. The track's bold lyrics about wanting to be tough while embracing vulnerability have resonated with fans, and its infectious melody has already topped streaming charts across Europe. Corsi's charismatic stage presence and the song's elaborate choreography are expected to make this a standout performance in Basel."
  },
  {
    id: 2,
    title: "Eurovision 2025 stage design revealed: A tribute to Swiss innovation",
    excerpt: "The stage combines cutting-edge technology with elements inspired by Swiss watchmaking and Alpine landscapes. Designers promise a visual spectacle.",
    date: "April 10, 2025",
    category: "Official News",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbmNlcnQlMjBzdGFnZXxlbnwwfHwwfHx8MA%3D%3D",
    content: "The European Broadcasting Union has unveiled the breathtaking stage design for Eurovision 2025 in Basel, Switzerland. The concept pays homage to Swiss innovation with a sleek, precision-engineered structure reminiscent of watchmaking craftsmanship. The stage features dynamic LED panels shaped like Alpine peaks, creating an immersive environment that shifts with each performance. Advanced lighting systems and holographic elements promise to elevate the visual experience, while sustainable materials reflect Switzerland's commitment to environmental consciousness. The design team, led by renowned Swiss architect Florian Meier, says this stage will set a new standard for Eurovision productions."
  },
  {
    id: 3,
    title: "Iceland's Væb brings experimental electronic sound with 'RÓA'",
    excerpt: "The Icelandic entry pushes boundaries with its innovative production and haunting vocals. Could this be the most avant-garde entry in Eurovision history?",
    date: "April 5, 2025",
    category: "Artist Spotlight",
    image: "https://images.unsplash.com/photo-1605722243979-fe0be8cbb4b9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    content: "Iceland's Væb is set to challenge Eurovision conventions with their entry 'RÓA'. The experimental electronic track features glitchy beats, ethereal synths, and haunting vocals that draw from Iceland's stark natural beauty. Væb, a Reykjavik-based duo, has gained attention for their boundary-pushing soundscapes and minimalist aesthetic. 'RÓA', which translates to 'calm' in Icelandic, contrasts its serene title with intense, unpredictable rhythms. Music critics are hailing it as potentially the most avant-garde entry in the contest's history, while fans speculate whether its bold approach will captivate or divide the Eurovision audience."
  },
  {
    id: 4,
    title: "Ticket sales break records for Eurovision 2025 in Basel",
    excerpt: "All three shows sold out within minutes, setting a new record for the competition. Additional tickets may be released closer to the event.",
    date: "March 28, 2025",
    category: "Event News",
    image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29uY2VydCUyMGNyb3dkfGVufDB8fDB8fHww",
    content: "Eurovision fever has reached new heights as ticket sales for the 2025 contest in Basel shattered previous records. All three live shows—the two semi-finals and the grand final—sold out in under 15 minutes, with over 2 million fans attempting to secure seats. The rapid sell-out marks the fastest in Eurovision history, surpassing even the 2019 Tel Aviv record. Organizers attribute the unprecedented demand to Switzerland's central location and the excitement surrounding this year's lineup. A limited number of additional tickets may be released closer to May, with officials urging fans to beware of scalpers and unofficial resellers."
  },
  {
    id: 5,
    title: "Eleni Foureira returns to Eurovision with 'Lava' for Cyprus",
    excerpt: "After her iconic 'Fuego' performance, Eleni Foureira returns with another fiery dance track. Can she secure Cyprus' first victory?",
    date: "March 25, 2025",
    category: "Artist Spotlight",
    image: "https://images.unsplash.com/photo-1529518969858-8baa65152fc8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    content: "Eleni Foureira, the Greek-Cypriot sensation who set Eurovision ablaze with 'Fuego' in 2018, is back to represent Cyprus with 'Lava'. The new track promises to deliver the same explosive energy, blending Latin rhythms with Middle Eastern influences and a pulsating dance beat. Foureira, who came second in 2018, says 'Lava' is her most personal song yet, reflecting her journey of resilience and passion. With a planned performance featuring fiery visuals and intricate choreography, fans and bookmakers alike are betting on her to potentially clinch Cyprus' first Eurovision win."
  },
  {
    id: 6,
    title: "Eurovision Village to feature over 100 performances during contest week",
    excerpt: "The Eurovision Village in Basel will host performances from past contestants, local artists, and this year's participants throughout the event week.",
    date: "March 20, 2025",
    category: "Event News",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZlc3RpdmFsfGVufDB8fDB8fHww",
    content: "The Eurovision Village in Basel is gearing up to be the heart of the 2025 festivities, with a lineup of over 100 performances scheduled during contest week. Located along the Rhine River, the village will feature a main stage hosting past Eurovision stars like Loreen and Duncan Laurence, alongside local Swiss talent and this year's contestants. Free to the public, the space will include food stalls showcasing Swiss cuisine, fan zones with big screens, and interactive exhibits about Eurovision history. Organizers expect over 200,000 visitors throughout the week, making it one of Basel's largest-ever public events."
  },
  {
    id: 7,
    title: "Nemo to perform special medley as host country representative",
    excerpt: "Switzerland's Nemo will perform a special medley of Swiss Eurovision classics alongside their competition entry 'The Code'.",
    date: "March 15, 2025",
    category: "Official News",
    image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    content: "Switzerland's Nemo, already a fan favorite, will take on double duty at Eurovision 2025. In addition to their competition entry 'The Code', Nemo will perform a special medley celebrating Swiss Eurovision history as part of the host country's showcase. The performance will include iconic songs like Lys Assia’s 'Refrain' (1956) and Celine Dion’s 'Ne partez pas sans moi' (1988), reimagined with Nemo’s unique blend of pop and experimental sounds. The medley aims to honor Switzerland’s legacy while showcasing Nemo’s versatility, setting the stage for what promises to be an unforgettable home performance."
  },
  {
    id: 8,
    title: "Bambie Thug's 'Doomsday Blue' sparks controversy and excitement",
    excerpt: "Ireland's gothic entry has divided opinion but created significant buzz. Could this be Ireland's return to Eurovision glory?",
    date: "March 10, 2025",
    category: "Predictions",
    image: "https://images.unsplash.com/photo-1593697972672-b1c1362d7432?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFsdGVybmF0aXZlJTIwc2luZ2VyfGVufDB8fDB8fHww",
    content: "Ireland’s Bambie Thug has ignited both controversy and excitement with their Eurovision entry 'Doomsday Blue'. The gothic-inspired track features dark, theatrical vocals and industrial beats, starkly contrasting with Ireland’s traditional Eurovision fare. Some critics argue its unconventional style might alienate voters, while fans praise its bold authenticity and emotional depth. Bambie Thug, a non-binary artist from Cork, says the song reflects personal struggles and societal anxieties. With Ireland holding a record seven wins, anticipation is high to see if 'Doomsday Blue' could mark a triumphant return to form."
  },
  {
    id: 9,
    title: "Eurovision 2025 to feature groundbreaking augmented reality elements",
    excerpt: "The production team has announced innovative AR features that will enhance the viewing experience both in the arena and for television audiences.",
    date: "March 5, 2025",
    category: "Official News",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXVnbWVudGVkJTIwcmVhbGl0eXxlbnwwfHwwfHx8MA%3D%3D",
    content: "Eurovision 2025 is set to break new ground with the introduction of augmented reality (AR) elements in its production. The Basel team has partnered with leading tech firms to create dynamic AR visuals that will enhance performances, appearing both on TV broadcasts and through special filters for in-arena audiences. From virtual landscapes complementing stage designs to interactive effects triggered by audience participation, the technology aims to create a more immersive experience. Producers promise that these innovations will maintain the contest’s focus on music while pushing the boundaries of live entertainment."
  },
  {
    id: 10,
    title: "Olly Alexander reveals inspiration behind UK's 'Dizzy'",
    excerpt: "The UK's representative discusses the creative process and personal experiences that shaped his Eurovision entry.",
    date: "February 28, 2025",
    category: "Artist Spotlight",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG1hbGUlMjBzaW5nZXJ8ZW58MHx8MHx8fDA%3D",
    content: "Olly Alexander, frontman of Years & Years, has opened up about the inspiration behind his Eurovision entry 'Dizzy'. Representing the UK, Alexander describes the song as a swirling, euphoric pop anthem inspired by a whirlwind romance and the disorienting rush of new love. Written during a rainy week in London, 'Dizzy' combines lush synths with Alexander’s signature emotive vocals. The artist, known for his flamboyant performances, promises a visually striking staging in Basel that will capture the song’s dizzying energy, aiming to improve the UK’s recent Eurovision track record."
  },
  {
    id: 11,
    title: "Eurovision 2025 interval acts announced: Global superstars to perform",
    excerpt: "The EBU has revealed an impressive lineup of international stars who will perform during the interval acts of the three shows.",
    date: "February 20, 2025",
    category: "Official News",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D",
    content: "The European Broadcasting Union has unveiled a star-studded lineup for Eurovision 2025’s interval acts in Basel. The semi-finals and grand final will feature performances from global icons, including a rumored appearance by Dua Lipa, a special collaboration between ABBA’s Agnetha Fältskog and Anni-Frid Lyngstad, and a high-energy set from Swiss DJ duo TR/ST. These acts are designed to bridge the voting periods with unforgettable entertainment, celebrating both Eurovision’s legacy and contemporary music trends. Exact details remain under wraps, but the EBU promises performances that will resonate with the contest’s diverse international audience."
  },
  {
    id: 12,
    title: "Basel prepares for influx of Eurovision fans with city-wide celebrations",
    excerpt: "The host city is planning numerous events, special exhibitions, and transportation arrangements to welcome the thousands of expected visitors.",
    date: "February 15, 2025",
    category: "Event News",
    image: "https://images.unsplash.com/photo-1527866512907-a35a62a0f6c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFzZWwlMjBzd2l0emVybGFuZHxlbnwwfHwwfHx8MA%3D%3D",
    content: "Basel, Switzerland’s cultural hub, is rolling out the red carpet for Eurovision 2025 with extensive preparations for an expected influx of over 100,000 visitors. The city has planned a week-long festival featuring street performances, Eurovision-themed art installations, and special exhibitions at the Kunstmuseum. Enhanced public transportation, including extended tram hours and shuttle services to the St. Jakobshalle arena, will ensure smooth access. Local businesses are joining the celebration with themed menus and merchandise, while the Basel Tourism Board has launched a campaign to highlight the city’s medieval charm alongside its modern vibrancy."
  },
];

const categoryColors: Record<string, string> = {
  "Predictions": "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20",
  "Official News": "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20",
  "Artist Spotlight": "bg-pink-500/10 text-pink-500 hover:bg-pink-500/20",
  "Event News": "bg-green-500/10 text-green-500 hover:bg-green-500/20",
};

interface NewsArticlePageProps {
  params: {
    id: string;
  };
}

export default function NewsArticlePage({ params }: NewsArticlePageProps) {
  const article = newsItems.find(item => item.id === Number(params.id));

  if (!article) {
    notFound();
  }

  return (
    <div className="py-16 container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <Card className="border-none shadow-lg">
          <div className="relative aspect-[16/9] overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${article.image})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
          </div>
          
          <CardContent className="pt-8">
            <div className="flex justify-between items-center mb-4">
              <Badge 
                variant="outline" 
                className={categoryColors[article.category]}
              >
                {article.category}
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                {article.date}
              </div>
            </div>
            
            <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
            
            <p className="text-muted-foreground text-lg mb-6">{article.excerpt}</p>
            
            <div className="prose max-w-none text-foreground">
              <p>{article.content}</p>
            </div>
          </CardContent>
          
          <CardFooter className="pt-6 pb-8">
            <Button variant="outline" asChild>
              <Link href="/news">
                Back to News
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return newsItems.map((item) => ({
    id: item.id.toString(),
  }));
}