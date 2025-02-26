import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarClock, MapPin, Ticket, Info, Calendar } from "lucide-react";
import Link from "next/link";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from "react";

// Event schedule data
const scheduleData = {
  semifinal1: {
    date: "May 13, 2025",
    time: "21:00 CET",
    venue: "St. Jakobshalle, Basel",
    description: "The first Semi-Final features performances from 15 countries, with 10 qualifying for the Grand Final.",
    events: [
      { time: "15:00", title: "Doors Open", description: "Early access for ticket holders" },
      { time: "16:30", title: "Pre-Show Activities", description: "Fan interactions and special performances" },
      { time: "20:30", title: "Audience Seated", description: "All attendees must be in their seats" },
      { time: "21:00", title: "Live Broadcast Begins", description: "Welcome and opening ceremony" },
      { time: "21:15", title: "Performances Begin", description: "15 countries perform their entries" },
      { time: "22:45", title: "Voting Window", description: "Audience and viewers at home can cast their votes" },
      { time: "23:15", title: "Results Announcement", description: "The 10 qualifying countries are revealed" },
      { time: "23:30", title: "Broadcast Ends", description: "End of official program" },
    ],
    countries: [
      "Albania", "Armenia", "Azerbaijan", "Croatia", "Cyprus", 
      "Denmark", "Estonia", "Finland", "Iceland", "Ireland", 
      "Latvia", "Malta", "Moldova", "Netherlands", "Slovenia"
    ]
  },
  semifinal2: {
    date: "May 15, 2025",
    time: "21:00 CET",
    venue: "St. Jakobshalle, Basel",
    description: "The second Semi-Final features performances from 16 countries, with 10 qualifying for the Grand Final.",
    events: [
      { time: "15:00", title: "Doors Open", description: "Early access for ticket holders" },
      { time: "16:30", title: "Pre-Show Activities", description: "Fan interactions and special performances" },
      { time: "20:30", title: "Audience Seated", description: "All attendees must be in their seats" },
      { time: "21:00", title: "Live Broadcast Begins", description: "Welcome and recap of first semi-final" },
      { time: "21:15", title: "Performances Begin", description: "16 countries perform their entries" },
      { time: "22:50", title: "Voting Window", description: "Audience and viewers at home can cast their votes" },
      { time: "23:20", title: "Results Announcement", description: "The 10 qualifying countries are revealed" },
      { time: "23:35", title: "Broadcast Ends", description: "End of official program" },
    ],
    countries: [
      "Australia", "Austria", "Belgium", "Bulgaria", "Czech Republic", 
      "Georgia", "Greece", "Lithuania", "Montenegro", "North Macedonia", 
      "Norway", "Poland", "Portugal", "Romania", "San Marino", "Serbia"
    ]
  },
  final: {
    date: "May 17, 2025",
    time: "21:00 CET",
    venue: "St. Jakobshalle, Basel",
    description: "The Grand Final features 26 countries: 20 qualifiers from the Semi-Finals, the 'Big Five' (France, Germany, Italy, Spain, United Kingdom), and host country Switzerland.",
    events: [
      { time: "14:00", title: "Doors Open", description: "Early access for ticket holders" },
      { time: "15:30", title: "Pre-Show Activities", description: "Fan zone activities and special performances" },
      { time: "20:00", title: "Audience Seated", description: "All attendees must be in their seats" },
      { time: "20:30", title: "Opening Ceremony", description: "Flag parade of all participating countries" },
      { time: "21:00", title: "Live Broadcast Begins", description: "Welcome and opening performance" },
      { time: "21:15", title: "Performances Begin", description: "All 26 finalists perform their entries" },
      { time: "23:15", title: "Interval Acts", description: "Special performances during voting window" },
      { time: "23:45", title: "Voting Results", description: "Announcement of jury and televote results" },
      { time: "00:30", title: "Winner Announcement", description: "Revelation of the Eurovision 2025 winner" },
      { time: "00:45", title: "Winner's Performance", description: "Reprise of the winning song" },
      { time: "01:00", title: "Broadcast Ends", description: "End of official program" },
    ],
    countries: [
      "20 Qualifiers from Semi-Finals", 
      "France", "Germany", "Italy", "Spain", "United Kingdom", "Switzerland"
    ]
  },
  sideEvents: {
    date: "May 5-17, 2025",
    time: "Various times",
    venue: "Various locations in Basel",
    description: "Numerous side events take place throughout Eurovision week, offering fans multiple ways to engage with the contest.",
    events: [
      { 
        time: "May 5-17", 
        title: "Eurovision Village", 
        description: "Public viewing area with live performances, food stalls, and activities",
        location: "Barfüsserplatz, Basel City Center"
      },
      { 
        time: "May 11", 
        title: "Opening Ceremony", 
        description: "Official welcome of all participating artists with Turquoise Carpet",
        location: "Basel City Hall"
      },
      { 
        time: "May 12-16", 
        title: "EuroClub", 
        description: "Official nightclub for Eurovision fans and delegations",
        location: "Volkshaus Basel"
      },
      { 
        time: "May 12-16", 
        title: "Press Center", 
        description: "Media hub for accredited journalists",
        location: "Congress Center Basel"
      },
      { 
        time: "May 14", 
        title: "Eurovision Conference", 
        description: "Academic symposium on the cultural impact of Eurovision",
        location: "University of Basel"
      },
      { 
        time: "May 16", 
        title: "Family Show", 
        description: "Afternoon dress rehearsal of the Grand Final",
        location: "St. Jakobshalle, Basel"
      },
      { 
        time: "May 16", 
        title: "Jury Show", 
        description: "Evening dress rehearsal where professional juries cast their votes",
        location: "St. Jakobshalle, Basel"
      }
    ]
  }
};

export default function SchedulePage() {
  return (
    <div className="py-16 container mx-auto px-4 mt-14">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Event Schedule</h1>
        <p className="text-xl text-muted-foreground">
          Plan your Eurovision Songfestival experience with our comprehensive schedule of all events taking place in Basel, Switzerland.
        </p>
      </div>

      <Tabs defaultValue="semifinal1" className="max-w-5xl mx-auto">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="semifinal1">Semi-Final 1</TabsTrigger>
          <TabsTrigger value="semifinal2">Semi-Final 2</TabsTrigger>
          <TabsTrigger value="final">Grand Final</TabsTrigger>
          <TabsTrigger value="sideEvents">Side Events</TabsTrigger>
        </TabsList>
        
        {Object.entries(scheduleData).map(([key, data]) => (
          <TabsContent key={key} value={key} className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div>
                    <CardTitle className="text-2xl">{key === "semifinal1" ? "First Semi-Final" : key === "semifinal2" ? "Second Semi-Final" : key === "final" ? "Grand Final" : "Side Events"}</CardTitle>
                    <CardDescription className="text-base mt-2">{data.description}</CardDescription>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge variant="outline" className="flex items-center gap-2 px-3 py-1.5">
                      <Calendar className="h-4 w-4" /> {data.date}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-2 px-3 py-1.5">
                      <CalendarClock className="h-4 w-4" /> {data.time}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-2 px-3 py-1.5">
                      <MapPin className="h-4 w-4" /> {data.venue}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Timeline</h3>
                  <div className="space-y-4">
                    {data.events.map((event, index) => (
                      <div key={index} className="flex">
                        <div className="mr-4 w-16 text-right font-mono text-muted-foreground">
                          {event.time}
                        </div>
                        <div className="relative pl-6 border-l border-border">
                          <div className="absolute w-3 h-3 rounded-full bg-primary left-[-6.5px] top-1.5"></div>
                          <h4 className="font-medium">{event.title}</h4>
                          <p className="text-sm text-muted-foreground">{event.description}</p>
                          {"location" in event && (
                            <div className="flex items-center mt-1 text-xs text-muted-foreground">
                              <MapPin className="h-3 w-3 mr-1" /> {event.location}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {"countries" in data && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Participating Countries</h3>
                    <div className="flex flex-wrap gap-2">
                      {data.countries.map((country: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined, index: Key | null | undefined) => (
                        <Badge key={index} variant="secondary">
                          {country}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="flex items-center gap-2">
                <Link href="/tickets">
                  <Ticket className="h-4 w-4" /> Get Tickets
                </Link>
              </Button>
              <Button variant="outline" asChild className="flex items-center gap-2">
                <Link href="https://maps.app.goo.gl/1wdQxnZyw2WGB7St7" target="_blank">
                  <MapPin className="h-4 w-4" /> Venue Information
                </Link>
              </Button>
              <Button variant="ghost" asChild className="flex items-center gap-2">
                <Link href="/faq">
                  <Info className="h-4 w-4" /> FAQ
                </Link>
              </Button>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}