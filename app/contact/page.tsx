"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });

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
    <div className="min-h-screen py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 max-w-3xl">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Contact Us
          </h1>
          <p className="mt-2 text-muted-foreground">
            We’d love to hear from you about all things Eurovision!
          </p>
        </header>

        {/* Disclaimer Section */}
        <Card className="mb-12 border-none shadow-xl bg-background/95 backdrop-blur-sm">
          <CardHeader className="bg-red-500/10 rounded-t-lg">
            <CardTitle className="text-xl font-semibold text-red-600 dark:text-red-400 text-center">
              Disclaimer
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 prose dark:prose-invert max-w-none text-foreground">
            <p className="font-semibold">
              This is an unofficial fan website dedicated to the Eurovision Song Contest. This website has no affiliation with, and is not endorsed by, the European Broadcasting Union (EBU), the official Eurovision Song Contest, or any participating broadcasters. I have nothing to do with the original event.
            </p>
            <p>
              All Eurovision-related logos, trademarks, and copyrighted materials belong to their respective owners. This website is created for informational and entertainment purposes only.
            </p>
          </CardContent>
        </Card>

        {/* Contact Form Section */}
        <Card className="border-none shadow-xl bg-background/95 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-primary">
              Send Us a Message
            </CardTitle>
            <CardDescription className="text-foreground/80">
              Have questions, feedback, or just want to chat about Eurovision? Fill out the form below to get in touch.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {submitStatus === "success" && (
              <Alert className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20">
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle>Message Sent Successfully!</AlertTitle>
                <AlertDescription>
                  Thank you for reaching out. We’ll get back to you as soon as possible.
                </AlertDescription>
              </Alert>
            )}

            {submitStatus === "error" && (
              <Alert className="bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Failed to Send Message</AlertTitle>
                <AlertDescription>
                  {errorMessage || "There was an error sending your message. Please try again later."}
                </AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    required
                    className="bg-background border-muted focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john.doe@example.com"
                    required
                    className="bg-background border-muted focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-foreground">
                  Subject
                </Label>
                <Input
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="What’s your message about?"
                  required
                  className="bg-background border-muted focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message here..."
                  rows={6}
                  required
                  className="bg-background border-muted focus:border-primary"
                />
              </div>

              <Button
                type="submit"
                className="w-full md:w-auto bg-primary hover:bg-primary/90 transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>

            <Separator className="my-8" />

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">
                Other Ways to Connect
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-medium mb-2 text-foreground">Email</h4>
                  <p className="text-sm text-muted-foreground">
                    info@songfestival2025.nl
                  </p>
                </div>
              </div>
            </div>

            <footer className="mt-8 text-sm text-muted-foreground text-center">
              <p>
                By submitting this form, you agree to our{" "}
                <Link href="/privacy" className="text-primary hover:underline font-medium">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/terms" className="text-primary hover:underline font-medium">
                  Terms of Service
                </Link>.
              </p>
            </footer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}