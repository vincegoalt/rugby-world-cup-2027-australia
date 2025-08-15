'use client';

import { useState } from 'react';

interface TicketCTAProps {
  className?: string;
}

export default function TicketCTA({ className = '' }: TicketCTAProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
      <div className="bg-rugby-green text-rugby-gold shadow-2xl rounded-lg p-4 max-w-sm animate-bounce-gentle">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-gray-700 transition-colors"
          aria-label="Close ticket prompt"
        >
          ×
        </button>
        
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-rugby-gold text-rugby-green rounded-full flex items-center justify-center font-bold text-xl">
              🏉
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium">
              Don't miss out!
            </p>
            <p className="text-xs opacity-90 mb-2">
              Rugby World Cup 2027 tickets selling fast
            </p>
            
            <a
              href="/tickets"
              className="inline-block bg-rugby-gold text-rugby-green px-4 py-2 rounded-md text-sm font-semibold hover:bg-yellow-400 transition-colors"
            >
              Get Tickets Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}