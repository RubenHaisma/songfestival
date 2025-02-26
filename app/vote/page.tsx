import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, Calendar, ChevronDown, ChevronUp, Heart, Info, Lock, Star, Trophy } from "lucide-react";
import Link from "next/link";

export default function VotePage() {
  return (
    <div className="py-16 container mx-auto px-4 mt-14">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Fan Voting</h1>
        <p className="text-xl text-muted-foreground">
          Cast your vote for your favorite Eurovision 2025 entries and see how they compare with other fans&apos; choices.
        </p>
      </div>

      <div className="mb-8 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
        <div className="flex items-start gap-3">
          <Lock className="h-5 w-5 text-yellow-500 mt-0.5" />
          <div>
            <h3 className="font-medium text-foreground">Voting Opens May 1, 2025</h3>
            <p className="text-sm text-muted-foreground mt-1">
              The official fan voting for Eurovision 2025 will open on May 1st. Sign up for a reminder to be notified when voting begins.
            </p>
            <Button className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Remind Me When Voting Opens
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="preview" className="max-w-5xl mx-auto">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="preview">Preview Voting</TabsTrigger>
          <TabsTrigger value="results">Current Predictions</TabsTrigger>
          <TabsTrigger value="system">How Voting Works</TabsTrigger>
        </TabsList>
        
        <TabsContent value="preview" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Eurovision 2025 Fan Vote Preview</CardTitle>
              <CardDescription>
                Try out our voting simulator to see how the voting experience will work. Your votes won&apos;t be counted until the official voting period begins.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Voting Card 1 */}
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2luZ2VyfGVufDB8fDB8fHww)` }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                      <Badge className="absolute top-2 right-2 bg-blue-500">Italy</Badge>
                    </div>
                    <CardContent className="pt-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-semibold">Lucio Corsi</h3>
                          <p className="text-sm text-muted-foreground">&quot;Volevo essere un duro&quot;</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                          <span className="font-mono font-bold w-6 text-center">0</span>
                          <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                            <ChevronUp className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <Button variant="ghost" size="sm" className="flex items-center gap-1">
                          <Heart className="h-4 w-4" /> Favorite
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/artists/4">
                            View Profile
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Voting Card 2 */}
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1529518969858-8baa65152fc8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D)` }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                      <Badge className="absolute top-2 right-2 bg-blue-500">Cyprus</Badge>
                    </div>
                    <CardContent className="pt-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-semibold">Eleni Foureira</h3>
                          <p className="text-sm text-muted-foreground">&quot;Lava&quot;</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                          <span className="font-mono font-bold w-6 text-center">0</span>
                          <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                            <ChevronUp className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <Button variant="ghost" size="sm" className="flex items-center gap-1">
                          <Heart className="h-4 w-4" /> Favorite
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/artists/5">
                            View Profile
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center">
                  <Button variant="outline" className="mt-4">
                    Load More Artists
                  </Button>
                </div>

                <div className="bg-muted/30 rounded-lg p-6 mt-6">
                  <h3 className="text-lg font-semibold mb-4">Your Top 3</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500 text-background font-bold">1</div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <span className="font-medium">Select your #1</span>
                          </div>
                          <span className="text-muted-foreground">0 points</span>
                        </div>
                        <Progress value={0} className="h-2 mt-1" />
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-400 text-background font-bold">2</div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <span className="font-medium">Select your #2</span>
                          </div>
                          <span className="text-muted-foreground">0 points</span>
                        </div>
                        <Progress value={0} className="h-2 mt-1" />
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-700 text-background font-bold">3</div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <span className="font-medium">Select your #3</span>
                          </div>
                          <span className="text-muted-foreground">0 points</span>
                        </div>
                        <Progress value={0} className="h-2 mt-1" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" disabled>
                      Submit Your Votes
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2 text-center">
                      Voting opens on May 1, 2025
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="results" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Current Fan Predictions</CardTitle>
              <CardDescription>
                Based on social media trends, music charts, and expert analysis, here are the current predictions for Eurovision 2025.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-yellow-500" /> Predicted Top 10
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500 text-background font-bold">1</div>
                      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-2">
                        <div 
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1529518969858-8baa65152fc8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D)` }}
                        ></div>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <span className="font-medium">Eleni Foureira</span>
                            <span className="text-sm text-muted-foreground ml-2">Cyprus</span>
                          </div>
                          <span className="text-muted-foreground">Prediction: 12.4%</span>
                        </div>
                        <Progress value={100} className="h-2 mt-1 bg-yellow-500/20" />
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-400 text-background font-bold">2</div>
                      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-2">
                        <div 
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2luZ2VyfGVufDB8fDB8fHww)` }}
                        ></div>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <span className="font-medium">Lucio Corsi</span>
                            <span className="text-sm text-muted-foreground ml-2">Italy</span>
                          </div>
                          <span className="text-muted-foreground">Prediction: 11.8%</span>
                        </div>
                        <Progress value={95} className="h-2 mt-1" />
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-700 text-background font-bold">3</div>
                      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-2">
                        <div 
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG1hbGUlMjBzaW5nZXJ8ZW58MHx8MHx8fDA%3D)` }}
                        ></div>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <span className="font-medium">Olly Alexander</span>
                            <span className="text-sm text-muted-foreground ml-2">United Kingdom</span>
                          </div>
                          <span className="text-muted-foreground">Prediction: 10.5%</span>
                        </div>
                        <Progress value={85} className="h-2 mt-1" />
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-background border border-muted-foreground text-foreground font-bold">4</div>
                      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-2">
                        <div 
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D)` }}
                        ></div>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <span className="font-medium">Nemo</span>
                            <span className="text-sm text-muted-foreground ml-2">Switzerland</span>
                          </div>
                          <span className="text-muted-foreground">Prediction: 9.7%</span>
                        </div>
                        <Progress value={78} className="h-2 mt-1" />
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-background border border-muted-foreground text-foreground font-bold">5</div>
                      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-2">
                        <div 
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1605722243979-fe0be8cbb4b9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D)` }}
                        ></div>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <span className="font-medium">Væb</span>
                            <span className="text-sm text-muted-foreground ml-2">Iceland</span>
                          </div>
                          <span className="text-muted-foreground">Prediction: 8.9%</span>
                        </div>
                        <Progress value={72} className="h-2 mt-1" />
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <div className="space-y-2">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-background border border-muted-foreground text-foreground font-bold">6</div>
                        <span className="font-medium">Slimane</span>
                        <span className="text-sm text-muted-foreground">France</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-background border border-muted-foreground text-foreground font-bold">7</div>
                        <span className="font-medium">Bambie Thug</span>
                        <span className="text-sm text-muted-foreground">Ireland</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-background border border-muted-foreground text-foreground font-bold">8</div>
                        <span className="font-medium">Joost Klein</span>
                        <span className="text-sm text-muted-foreground">Netherlands</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-background border border-muted-foreground text-foreground font-bold">9</div>
                        <span className="font-medium">Kaleen</span>
                        <span className="text-sm text-muted-foreground">Austria</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-background border border-muted-foreground text-foreground font-bold">10</div>
                        <span className="font-medium">Electric Fields</span>
                        <span className="text-sm text-muted-foreground">Australia</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Most Improved</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <div className="relative w-10 h-10 rounded-full overflow-hidden">
                            <div 
                              className="absolute inset-0 bg-cover bg-center"
                              style={{ backgroundImage: `url(https://images.unsplash.com/photo-1593697972672-b1c1362d7432?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFsdGVybmF0aXZlJTIwc2luZ2VyfGVufDB8fDB8fHww)` }}
                            ></div>
                          </div>
                          <div>
                            <div className="font-medium">Bambie Thug</div>
                            <div className="text-sm text-muted-foreground">Ireland</div>
                          </div>
                          <div className="ml-auto flex items-center text-green-500">
                            <ChevronUp className="h-4 w-4 mr-1" />
                            <span className="font-medium">+7</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="relative w-10 h-10 rounded-full overflow-hidden">
                            <div 
                              className="absolute inset-0 bg-cover bg-center"
                              style={{ backgroundImage: `url(https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D)` }}
                            ></div>
                          </div>
                          <div>
                            <div className="font-medium">Mamagama</div>
                            <div className="text-sm text-muted-foreground">Azerbaijan</div>
                          </div>
                          <div className="ml-auto flex items-center text-green-500">
                            <ChevronUp className="h-4 w-4 mr-1" />
                            <span className="font-medium">+5</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Fan Favorites</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <div className="relative w-10 h-10 rounded-full overflow-hidden">
                            <div 
                              className="absolute inset-0 bg-cover bg-center"
                              style={{ backgroundImage: `url(https://images.unsplash.com/photo-1529518969858-8baa65152fc8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D)` }}
                            ></div>
                          </div>
                          <div>
                            <div className="font-medium">Eleni Foureira</div>
                            <div className="text-sm text-muted-foreground">Cyprus</div>
                          </div>
                          <div className="ml-auto flex items-center text-pink-500">
                            <Heart className="h-4 w-4 fill-pink-500 mr-1" />
                            <span className="font-medium">24.5k</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="relative w-10 h-10 rounded-full overflow-hidden">
                            <div 
                              className="absolute inset-0 bg-cover bg-center"
                              style={{ backgroundImage: `url(https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2luZ2VyfGVufDB8fDB8fHww)` }}
                            ></div>
                          </div>
                          <div>
                            <div className="font-medium">Lucio Corsi</div>
                            <div className="text-sm text-muted-foreground">Italy</div>
                          </div>
                          <div className="ml-auto flex items-center text-pink-500">
                            <Heart className="h-4 w-4 fill-pink-500 mr-1" />
                            <span className="font-medium">22.8k</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center mt-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    Predictions are updated daily based on social media trends, music charts, and expert analysis.
                  </p>
                  <Button variant="outline" className="mt-2">
                    View Full Predictions
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="system" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>How Eurovision Voting Works</CardTitle>
              <CardDescription>
                Learn about the official Eurovision voting system and how our fan vote will work.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Info className="h-5 w-5 text-blue-500" /> Official Eurovision Voting System
                  </h3>
                  <div className="space-y-4">
                    <p>
                      The Eurovision Song Contest uses a combined voting system where both professional juries and viewers from participating countries award points to their favorite performances.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Jury Vote (50%)</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Each country has a professional jury of 5 music industry experts</li>
                          <li>Juries rank all performances except their own country</li>
                          <li>Points are awarded: 12, 10, 8, 7, 6, 5, 4, 3, 2, 1</li>
                          <li>Jury votes are announced by country spokespersons</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Public Vote (50%)</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Viewers vote via phone, SMS, or the Eurovision app</li>
                          <li>Viewers cannot vote for their own country</li>
                          <li>Points are awarded: 12, 10, 8, 7, 6, 5, 4, 3, 2, 1</li>
                          <li>Public votes are announced in ascending order of points</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" /> Our Fan Voting System
                  </h3>
                  <div className="space-y-4">
                    <p>
                      Our Eurovision 2025 fan voting system allows you to participate in the excitement of Eurovision voting before and during the contest.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Pre-Contest Voting</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Opens May 1, 2025</li>
                          <li>Vote for your top 10 favorite entries</li>
                          <li>Points awarded: 12, 10, 8, 7, 6, 5, 4, 3, 2, 1</li>
                          <li>Results updated in real-time</li>
                          <li>Predictions based on fan votes and expert analysis</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Live Voting</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Opens during each live show</li>
                          <li>Vote after all performances</li>
                          <li>Results compared with official outcomes</li>
                          <li>Special badges for accurate predictions</li>
                          <li>Share your votes on social media</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Important Note</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Our fan voting system is unofficial and separate from the official Eurovision voting. To participate in the official Eurovision voting during the live shows, you must use the official Eurovision app or voting methods announced by your country&apos;s broadcaster.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <span className="text-muted-foreground">Fan voting opens May 1, 2025</span>
                  </div>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Remind Me When Voting Opens
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="max-w-3xl mx-auto mt-16 space-y-8">
        <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          <div className="bg-card rounded-lg p-4 border">
            <h3 className="font-medium flex items-center gap-2">
              <Info className="h-4 w-4" />
              When does fan voting open?
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              The fan voting for Eurovision 2025 will open on May 1, 2025, and will remain open until the start of the Grand Final on May 17, 2025.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-4 border">
            <h3 className="font-medium flex items-center gap-2">
              <Info className="h-4 w-4" />
              How many artists can I vote for?
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              You can vote for up to 10 artists, awarding points in Eurovision style: 12, 10, 8, 7, 6, 5, 4, 3, 2, and 1 points.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-4 border">
            <h3 className="font-medium flex items-center gap-2">
              <Info className="h-4 w-4" />
              Can I change my votes?
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Yes, you can change your votes at any time until voting closes at the start of the Grand Final on May 17, 2025.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-4 border">
            <h3 className="font-medium flex items-center gap-2">
              <Info className="h-4 w-4" />
              Is this the official Eurovision voting?
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              No, this is a fan voting system separate from the official Eurovision voting. To participate in the official voting during the live shows, you must use the official Eurovision app or voting methods announced by your country&apos;s broadcaster.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}