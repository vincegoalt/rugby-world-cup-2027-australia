'use client';

import { useState } from 'react';

interface NewsletterSignupProps {
  className?: string;
  variant?: 'default' | 'compact';
}

export default function NewsletterSignup({ 
  className = '', 
  variant = 'default' 
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you'd send this to your newsletter service
      console.log('Newsletter signup:', email);
      
      setIsSuccess(true);
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-lg p-4 text-center ${className}`}>
        <div className="text-green-600 font-medium mb-2">🎉 Success!</div>
        <p className="text-green-700 text-sm">
          Thanks for subscribing! You'll receive the latest Rugby World Cup 2027 updates.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="text-green-600 text-sm underline mt-2 hover:text-green-700"
        >
          Subscribe another email
        </button>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`${className}`}>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-rugby-green focus:border-transparent"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-rugby-green text-rugby-gold px-6 py-2 rounded-md font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
      </div>
    );
  }

  return (
    <div className={`bg-gray-50 rounded-lg p-6 ${className}`}>
      <div className="text-center mb-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          Stay Updated
        </h3>
        <p className="text-gray-600 text-sm">
          Get the latest Rugby World Cup 2027 news, match updates, and exclusive content delivered to your inbox.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-rugby-green focus:border-transparent"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-rugby-green text-rugby-gold py-3 px-4 rounded-md font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Subscribing...' : 'Subscribe to Updates'}
        </button>

        {error && (
          <p className="text-red-600 text-sm text-center">{error}</p>
        )}

        <p className="text-xs text-gray-500 text-center">
          By subscribing, you agree to receive Rugby World Cup 2027 updates. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}