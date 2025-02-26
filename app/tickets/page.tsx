import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarClock, MapPin, CreditCard, AlertTriangle, Check, Info } from "lucide-react";
import Link from "next/link";

const ticketTypes = [
  {
    id: "semifinal1",
    name: "First Semi-Final",
    date: "May 13, 2025",
    time: "21:00 CET",
    venue: "St. Jakobshalle, Basel",
    prices: [
      { category: "Premium Floor", price: 350, available: true },
      { category: "Floor Standing", price: 250, available: true },
      { category: "Lower Tier Seated", price: 200, available: true },
      { category: "Upper Tier Seated", price: 150, available: false },
    ],
    description: "Watch 15 countries compete for a place in the Grand Final. Experience the first live performances of the 2025 contest.",
  },
  {
    id: "semifinal2",
    name: "Second Semi-Final",
    date: "May 15, 2025",
    time: "21:00 CET",
    venue: "St. Jakobshalle, Basel",
    prices: [
      { category: "Premium Floor", price: 350, available: true },
      { category: "Floor Standing", price: 250, available: true },
      { category: "Lower Tier Seated", price: 200, available: false },
      { category: "Upper Tier Seated", price: 150, available: true },
    ],
    description: "Watch 16 countries compete for a place in the Grand Final. Experience the second batch of live performances.",
  },
  {
    id: "final",
    name: "Grand Final",
    date: "May 17, 2025",
    time: "21:00 CET",
    venue: "St. Jakobshalle, Basel",
    prices: [
      { category: "Premium Floor", price: 550, available: false },
      { category: "Floor Standing", price: 450, available: false },
      { category: "Lower Tier Seated", price: 350, available: false },
      { category: "Upper Tier Seated", price: 250, available: false },
    ],
    description: "The main event! Watch 26 countries compete for the Eurovision trophy. Experience the spectacular Grand Final live.",
    soldOut: true,
  },
  {
    id: "family",
    name: "Family Show (Grand Final Dress Rehearsal)",
    date: "May 17, 2025",
    time: "13:00 CET",
    venue: "St. Jakobshalle, Basel",
    prices: [
      { category: "Premium Floor", price: 250, available: true },
      { category: "Floor Standing", price: 180, available: true },
      { category: "Lower Tier Seated", price: 150, available: true },
      { category: "Upper Tier Seated", price: 100, available: true },
    ],
    description: "Perfect for families! Watch the full Grand Final dress rehearsal at a more convenient time and at a lower price.",
  },
  {
    id: "jury",
    name: "Jury Show (Grand Final Jury Voting)",
    date: "May 16, 2025",
    time: "21:00 CET",
    venue: "St. Jakobshalle, Basel",
    prices: [
      { category: "Premium Floor", price: 300, available: true },
      { category: "Floor Standing", price: 220, available: true },
      { category: "Lower Tier Seated", price: 180, available: true },
      { category: "Upper Tier Seated", price: 120, available: true },
    ],
    description: "Watch the full Grand Final dress rehearsal where the professional juries cast their votes. Experience the show before the live broadcast!",
  },
];

const packages = [
  {
    id: "all-shows",
    name: "Complete Eurovision Experience",
    includes: ["First Semi-Final", "Second Semi-Final", "Grand Final"],
    price: 850,
    discount: "Save €100",
    available: false,
    description: "Experience all three main shows of Eurovision 2025. This package includes tickets to both Semi-Finals and the Grand Final.",
  },
  {
    id: "semifinals",
    name: "Semi-Finals Package",
    includes: ["First Semi-Final", "Second Semi-Final"],
    price: 450,
    discount: "Save €50",
    available: true,
    description: "Watch all competing countries perform in the two Semi-Finals. Perfect for true Eurovision fans who want to see all the performances.",
  },
  {
    id: "rehearsals",
    name: "Behind The Scenes Package",
    includes: ["Family Show", "Jury Show"],
    price: 350,
    discount: "Save €30",
    available: true,
    description: "Experience the Grand Final twice through its dress rehearsals. See how the show comes together before the live broadcast.",
  },
];

export default function TicketsPage() {
  return (
    <div className="py-16 container mx-auto px-4 mt-14">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Tickets</h1>
        <p className="text-xl text-muted-foreground">
          Secure your place at the Eurovision Songfestival 2025 in Basel, Switzerland.
        </p>
      </div>

      <div className="mb-8 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
          <div>
            <h3 className="font-medium text-foreground">Important Ticket Information</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Official tickets are sold exclusively through the Eurovision.tv website and authorized partners. 
              Beware of unauthorized resellers and scams. Grand Final tickets are currently sold out, but additional 
              tickets may be released closer to the event.
            </p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="individual" className="max-w-5xl mx-auto">
        <TabsList className="grid grid-cols-2 mb-8">
          <TabsTrigger value="individual">Individual Shows</TabsTrigger>
          <TabsTrigger value="packages">Ticket Packages</TabsTrigger>
        </TabsList>
        
        <TabsContent value="individual" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ticketTypes.map((ticket) => (
              <Card key={ticket.id} className={ticket.soldOut ? "opacity-80" : ""}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{ticket.name}</CardTitle>
                      <CardDescription className="mt-2">{ticket.description}</CardDescription>
                    </div>
                    {ticket.soldOut && (
                      <Badge variant="destructive">Sold Out</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm">
                      <CalendarClock className="h-4 w-4 text-muted-foreground" />
                      <span>{ticket.date} • {ticket.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{ticket.venue}</span>
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-2">Available Tickets:</h4>
                      <div className="space-y-2">
                        {ticket.prices.map((price) => (
                          <div key={price.category} className="flex justify-between items-center text-sm">
                            <div className="flex items-center gap-2">
                              {price.available ? (
                                <Check className="h-4 w-4 text-green-500" />
                              ) : (
                                <AlertTriangle className="h-4 w-4 text-yellow-500" />
                              )}
                              <span>{price.category}</span>
                            </div>
                            <span className="font-medium">€{price.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" disabled={ticket.soldOut}>
                    {ticket.soldOut ? "Sold Out" : "Buy Tickets"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="packages" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <Card key={pkg.id} className={!pkg.available ? "opacity-80" : ""}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{pkg.name}</CardTitle>
                    {pkg.discount && (
                      <Badge variant="secondary" className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
                        {pkg.discount}
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="mt-2">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Includes:</h4>
                      <ul className="space-y-1">
                        {pkg.includes.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-green-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Package Price:</span>
                        <span className="text-2xl font-bold">€{pkg.price}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" disabled={!pkg.available}>
                    {pkg.available ? "Buy Package" : "Sold Out"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="max-w-3xl mx-auto mt-16 space-y-8">
        <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          <div className="bg-card rounded-lg p-4 border">
            <h3 className="font-medium flex items-center gap-2">
              <Info className="h-4 w-4" />
              When do tickets go on sale?
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              The main ticket sale for Eurovision 2025 started on November 15, 2024. Additional tickets may be released in batches closer to the event.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-4 border">
            <h3 className="font-medium flex items-center gap-2">
              <Info className="h-4 w-4" />
              Is there an age restriction?
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Children under 16 must be accompanied by an adult. The Family Show is recommended for families with younger children.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-4 border">
            <h3 className="font-medium flex items-center gap-2">
              <Info className="h-4 w-4" />
              Can I resell my tickets?
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Tickets can only be resold through the official Eurovision ticket exchange platform. Tickets found on unauthorized resale platforms may be invalidated.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-4 border">
            <h3 className="font-medium flex items-center gap-2">
              <Info className="h-4 w-4" />
              What&apos;s the difference between the shows?
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              The Semi-Finals and Grand Final are live broadcast shows. The Family Show is a full dress rehearsal of the Grand Final held in the afternoon. The Jury Show is where professional juries cast their votes, held the night before the Grand Final.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <Button variant="outline" asChild>
            <Link href="/contact">
              <CreditCard className="mr-2 h-4 w-4" />
              Contact Ticket Support
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}