'use client';

import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  className?: string;
}

export default function CountdownTimer({ className = '' }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const targetDate = new Date('2027-10-01T19:00:00+11:00'); // RWC 2027 opening match in Australian time

    const calculateTimeLeft = (): TimeLeft => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    // Calculate initial time
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className={`flex items-center justify-center space-x-4 ${className}`}>
        <div className="bg-rugby-green text-rugby-gold p-4 rounded-lg text-center min-w-[80px]">
          <div className="text-2xl font-bold">--</div>
          <div className="text-sm uppercase">Days</div>
        </div>
        <div className="bg-rugby-green text-rugby-gold p-4 rounded-lg text-center min-w-[80px]">
          <div className="text-2xl font-bold">--</div>
          <div className="text-sm uppercase">Hours</div>
        </div>
        <div className="bg-rugby-green text-rugby-gold p-4 rounded-lg text-center min-w-[80px]">
          <div className="text-2xl font-bold">--</div>
          <div className="text-sm uppercase">Minutes</div>
        </div>
        <div className="bg-rugby-green text-rugby-gold p-4 rounded-lg text-center min-w-[80px]">
          <div className="text-2xl font-bold">--</div>
          <div className="text-sm uppercase">Seconds</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center space-x-2 sm:space-x-4 ${className}`}>
      <div className="bg-rugby-green text-rugby-gold p-3 sm:p-4 rounded-lg text-center min-w-[70px] sm:min-w-[80px] shadow-lg">
        <div className="text-xl sm:text-2xl font-bold leading-none">{timeLeft.days}</div>
        <div className="text-xs sm:text-sm uppercase font-medium">Days</div>
      </div>
      <div className="bg-rugby-green text-rugby-gold p-3 sm:p-4 rounded-lg text-center min-w-[70px] sm:min-w-[80px] shadow-lg">
        <div className="text-xl sm:text-2xl font-bold leading-none">{timeLeft.hours.toString().padStart(2, '0')}</div>
        <div className="text-xs sm:text-sm uppercase font-medium">Hours</div>
      </div>
      <div className="bg-rugby-green text-rugby-gold p-3 sm:p-4 rounded-lg text-center min-w-[70px] sm:min-w-[80px] shadow-lg">
        <div className="text-xl sm:text-2xl font-bold leading-none">{timeLeft.minutes.toString().padStart(2, '0')}</div>
        <div className="text-xs sm:text-sm uppercase font-medium">Minutes</div>
      </div>
      <div className="bg-rugby-green text-rugby-gold p-3 sm:p-4 rounded-lg text-center min-w-[70px] sm:min-w-[80px] shadow-lg">
        <div className="text-xl sm:text-2xl font-bold leading-none">{timeLeft.seconds.toString().padStart(2, '0')}</div>
        <div className="text-xs sm:text-sm uppercase font-medium">Seconds</div>
      </div>
    </div>
  );
}