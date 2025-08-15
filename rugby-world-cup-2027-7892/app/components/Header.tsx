'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Schedule', href: '/schedule' },
    { name: 'Teams', href: '/teams' },
    { name: 'Venues', href: '/venues' },
    { name: 'Tickets', href: '/tickets' },
    { name: 'Travel', href: '/travel' },
    { name: 'City Guide', href: '/guide' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-blue-600 text-yellow-400 rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                🏉
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">Rugby World Cup</div>
                <div className="text-sm text-blue-600 font-semibold">Australia 2027</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              href="/tickets"
              className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Tickets
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/tickets"
                className="block bg-blue-600 text-white px-4 py-2 rounded-md font-semibold text-center mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Tickets
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}