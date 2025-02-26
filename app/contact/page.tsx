"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // This would normally connect to a server endpoint that uses nodemailer with Google SMTP
      // For demonstration purposes, we're simulating a successful submission
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real implementation, you would send the form data to your server:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ name, email, subject, message }),
      // });
      
      // if (!response.ok) throw new Error('Failed to send message');
      
      // Success
      setSubmitStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "An unknown error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16 container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        
        <Card className="mb-8 border-none shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-center text-red-500">Disclaimer</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p className="font-semibold">
              This is an unofficial fan website dedicated to the Eurovision Song Contest. This website has no affiliation with, and is not endorsed by, the European Broadcasting Union (EBU), the official Eurovision Song Contest, or any participating broadcasters. I have nothing to do with the original event.
            </p>
            <p>
              All Eurovision-related logos, trademarks, and copyrighted materials belong to their respective owners. This website is created for informational and entertainment purposes only.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-none shadow-lg">
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>
              Have questions, feedback, or just want to chat about Eurovision? Fill out the form below to get in touch with us.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {submitStatus === "success" && (
              <Alert className="mb-6 bg-green-500/10 text-green-500 border-green-500/20">
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle>Message sent successfully!</AlertTitle>
                <AlertDescription>
                  Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                </AlertDescription>
              </Alert>
            )}
            
            {submitStatus === "error" && (
              <Alert className="mb-6 bg-red-500/10 text-red-500 border-red-500/20">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Failed to send message</AlertTitle>
                <AlertDescription>
                  {errorMessage || "There was an error sending your message. Please try again later."}
                </AlertDescription>
              </Alert>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input 
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john.doe@example.com" 
                    required 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject" 
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="What is your message about?" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message here..." 
                  rows={6} 
                  required 
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full md:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : "Send Message"}
              </Button>
            </form>
            
            <Separator className="my-8" />
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Other Ways to Connect</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-medium mb-2">Email</h4>
                  <p className="text-sm text-muted-foreground">eurovisionfan2025@example.com</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-medium mb-2">Social Media</h4>
                  <p className="text-sm text-muted-foreground">Follow us on Twitter, Instagram, and TikTok @EurovisionFan2025</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-sm text-muted-foreground">
              <p>
                By submitting this form, you agree to our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> and <a href="/terms" className="text-primary hover:underline">Terms of Service</a>.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}