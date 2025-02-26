"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function CountdownTimer() {
  const targetDate = new Date("2025-05-13T21:00:00+02:00");
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = targetDate.getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      <Card className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-red-500/10 border-none shadow-xl">
        <CardContent className="p-6">
          <h3 className="text-center text-xl font-semibold mb-6">Countdown to First Semi-Final</h3>
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <div className="relative w-full aspect-square">
                  <div className="absolute inset-0 bg-background rounded-lg border flex items-center justify-center">
                    <span className="text-2xl sm:text-4xl font-bold">{item.value}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-red-500/20 rounded-lg animate-pulse opacity-50"></div>
                </div>
                <span className="text-xs sm:text-sm mt-2 text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-6 text-sm text-muted-foreground">
            May 13, 2025 • 21:00 CET • Basel, Switzerland
          </div>
        </CardContent>
      </Card>
    </div>
  );
}