import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Info, Calendar, MapPin, Music } from "lucide-react";
import Link from "next/link";

// FAQ data for Eurovision 2025
const faqItems = [
  {
    id: 1,
    question: "What is Eurovision?",
    answer: "Eurovision is an international song competition organized by the European Broadcasting Union (EBU). Countries from Europe and beyond send artists to perform original songs, competing for votes from juries and the public.",
  },
  {
    id: 2,
    question: "When is Eurovision 2025 happening?",
    answer: "Eurovision 2025 will take place on May 13 (Semi-Final 1), May 15 (Semi-Final 2), and May 17 (Grand Final) in Basel, Switzerland.",
  },
  {
    id: 3,
    question: "Where is Eurovision 2025 being held?",
    answer: "The contest will be hosted in Basel, Switzerland, at the St. Jakobshalle, following Switzerland’s win in 2024 with Nemo’s 'The Code.'",
  },
  {
    id: 4,
    question: "How many countries are participating?",
    answer: "37 countries are confirmed to participate in Eurovision 2025, including returning Montenegro and excluding Moldova from 2024.",
  },
  {
    id: 5,
    question: "Who can vote in Eurovision?",
    answer: "Viewers from participating countries can vote during the live shows via phone, SMS, or the Eurovision app. Juries from each country also award points.",
  },
  {
    id: 6,
    question: "What’s the Big 5?",
    answer: "The Big 5 refers to France, Germany, Italy, Spain, and the United Kingdom. These countries automatically qualify for the Grand Final due to their financial contributions to the EBU.",
  },
  {
    id: 7,
    question: "How is the winner decided?",
    answer: "The winner is determined by a combination of jury votes (50%) and public televotes (50%). The country with the most points wins.",
  },
  {
    id: 8,
    question: "Can I watch Eurovision online?",
    answer: "Yes! Eurovision is streamed live on the official Eurovision YouTube channel and through broadcasters like BBC, RAI, or France TV, depending on your country.",
  },
];

export default function FAQPage() {
  return (
    <div className="py-16 container mx-auto px-4 mt-14">
      {/* Back Button */}
      <div className="mb-8">
        <Button variant="ghost" asChild className="flex items-center gap-2">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </Button>
      </div>

      {/* FAQ Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-muted-foreground text-lg">
          Everything you need to know about Eurovision 2025 in Basel!
        </p>
      </div>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqItems.map((faq) => (
          <Card
            key={faq.id}
            className="border-none shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <CardContent className="p-6">
              {/* FAQ Header */}
              <div className="flex items-center gap-3 mb-4">
                <Info className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">{faq.question}</h2>
              </div>

              {/* FAQ Answer */}
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>

              {/* Additional Info (if relevant) */}
              {faq.id === 2 && (
                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>May 13, 15, & 17, 2025</span>
                </div>
              )}
              {faq.id === 3 && (
                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>St. Jakobshalle, Basel</span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Info Section */}
      <div className="mt-12">
        <Card className="border-none shadow-xl bg-muted/30">
          <CardContent className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-4">More About Eurovision 2025</h2>
            <div className="prose prose-sm dark:prose-invert max-w-none mb-6">
              <p className="text-muted-foreground">
                Want to dive deeper? Check out the full schedule or explore the artists competing in Basel!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" asChild className="flex items-center gap-2">
                <Link href="/schedule">
                  <Calendar className="h-4 w-4" /> View Full Schedule
                </Link>
              </Button>
              <Button variant="outline" asChild className="flex items-center gap-2">
                <Link href="/artists">
                  <Music className="h-4 w-4" /> Meet the Artists
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}