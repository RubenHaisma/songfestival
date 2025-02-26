import Link from "next/link";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Eurovision 2025</h3>
            <p className="text-sm text-muted-foreground">
              The 69th Eurovision Song Contest will take place in Basel, Switzerland on May 13, 15, and 17, 2025.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/artists" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Artists & Songs
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Event Schedule
                </Link>
              </li>
              <li>
                <Link href="/vote" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Fan Voting
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Latest News
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Technology Spotlight</h3>
            <p className="text-sm text-muted-foreground">
              This website features cutting-edge interactive experiences powered by innovative technology from our partner.
            </p>
            <a 
              href="https://incubit.io" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              Powered by incubit.io <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Eurovision Song Contest 2025. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}