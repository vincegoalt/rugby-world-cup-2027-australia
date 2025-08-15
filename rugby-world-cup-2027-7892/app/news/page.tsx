'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { newsArticles, getNewsArticlesByCategory, NewsArticle } from '../data/news';
import TicketCTA from '../components/TicketCTA';

const categories = [
  { value: 'all', label: 'All News' },
  { value: 'tournament', label: 'Tournament' },
  { value: 'teams', label: 'Teams' },
  { value: 'venues', label: 'Venues' },  
  { value: 'tickets', label: 'Tickets' },
  { value: 'travel', label: 'Travel' },
  { value: 'analysis', label: 'Analysis' }
];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [displayedArticles, setDisplayedArticles] = useState(6);
  
  const filteredArticles = selectedCategory === 'all' 
    ? newsArticles 
    : getNewsArticlesByCategory(selectedCategory as NewsArticle['category']);
  
  const visibleArticles = filteredArticles.slice(0, displayedArticles);
  const hasMore = filteredArticles.length > displayedArticles;
  
  const loadMore = () => {
    setDisplayedArticles(prev => prev + 6);
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-AU', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-green-900 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1920&h=600&fit=crop"
            alt="Rugby Stadium"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="text-blue-200 hover:text-white text-sm font-medium">
                  Home
                </Link>
              </li>
              <li className="inline-flex items-center">
                <svg className="w-6 h-6 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-yellow-400 text-sm font-medium">News & Updates</span>
              </li>
            </ol>
          </nav>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Rugby World Cup 2027
              <span className="block text-yellow-400 text-2xl md:text-3xl mt-2">News & Updates</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Stay informed with the latest tournament news, team updates, ticket information, and travel guides for Rugby World Cup 2027 in Australia.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Latest Featured Article */}
        {newsArticles[0] && (
          <div className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image 
                  src={newsArticles[0].featuredImage}
                  alt={newsArticles[0].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold uppercase">
                  Latest
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full capitalize">
                    {newsArticles[0].category}
                  </span>
                  <span>{formatDate(newsArticles[0].publishDate)}</span>
                  <span>{newsArticles[0].readTime} min read</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  <Link href={`/news/${newsArticles[0].slug}`} className="hover:text-blue-600 transition-colors">
                    {newsArticles[0].title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {newsArticles[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {newsArticles[0].author}</span>
                  <Link 
                    href={`/news/${newsArticles[0].slug}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Read Full Article
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {categories.map(category => (
            <button
              key={category.value}
              onClick={() => {
                setSelectedCategory(category.value);
                setDisplayedArticles(6);
              }}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category.value
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleArticles.map((article) => (
            <article 
              key={article.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="relative h-48">
                <Image 
                  src={article.featuredImage}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold px-2 py-1 rounded capitalize">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span>{formatDate(article.publishDate)}</span>
                  <span>•</span>
                  <span>{article.readTime} min</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  <Link href={`/news/${article.slug}`} className="hover:text-blue-600 transition-colors">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{article.author}</span>
                  <Link 
                    href={`/news/${article.slug}`}
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        {hasMore && (
          <div className="text-center mb-12">
            <button 
              onClick={loadMore}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Load More Articles
            </button>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-800 to-green-800 rounded-xl shadow-lg p-8 text-white mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Never Miss an Update</h2>
            <p className="text-blue-100 mb-6">
              Get the latest Rugby World Cup 2027 news, exclusive content, and ticket alerts delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-4 focus:ring-yellow-400 focus:outline-none"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-yellow-500 text-black rounded-lg font-bold hover:bg-yellow-400 transition-colors shadow-lg"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-blue-200 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Popular Tags */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Topics</h3>
          <div className="flex flex-wrap gap-3">
            {['all-blacks', 'springboks', 'wallabies', 'tickets', 'sydney', 'melbourne', 'final', 'pool-stage', 'accommodation', 'travel-tips'].map(tag => (
              <Link 
                key={tag}
                href={`/news?tag=${tag}`}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
              >
                #{tag.replace('-', ' ')}
              </Link>
            ))}
          </div>
        </div>

        <TicketCTA />
      </div>
    </div>
  );
}