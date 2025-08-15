import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { newsArticles, getNewsArticleBySlug, getRelatedArticles } from '../../data/news';
import TicketCTA from '../../components/TicketCTA';
import ReactMarkdown from 'react-markdown';

interface NewsArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: NewsArticlePageProps): Promise<Metadata> {
  const article = getNewsArticleBySlug(params.slug);
  
  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${article.title} | Rugby World Cup 2027 News`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.featuredImage],
      type: 'article',
      publishedTime: article.publishDate,
      modifiedTime: article.updateDate,
      authors: [article.author],
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.featuredImage],
    },
  };
}

export default function NewsArticlePage({ params }: NewsArticlePageProps) {
  const article = getNewsArticleBySlug(params.slug);
  
  if (!article) {
    notFound();
  }
  
  const relatedArticles = getRelatedArticles(article.id, 3);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-AU', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };
  
  // Custom components for markdown rendering
  const markdownComponents = {
    a: ({ href, children }: any) => {
      // Internal links open in same tab, external in new tab
      const isExternal = href?.startsWith('http');
      return (
        <Link 
          href={href || '#'} 
          className="text-blue-600 hover:text-blue-800 underline font-medium"
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
        >
          {children}
        </Link>
      );
    },
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold text-gray-900 mb-6 mt-8">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-6">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4">{children}</h3>
    ),
    p: ({ children }: any) => (
      <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>
    ),
    ul: ({ children }: any) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">{children}</ul>
    ),
    ol: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">{children}</ol>
    ),
    li: ({ children }: any) => (
      <li className="ml-4">{children}</li>
    ),
    strong: ({ children }: any) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-green-900 text-white py-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={article.featuredImage}
            alt={article.title}
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/80 to-green-900/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <nav className="flex mb-6" aria-label="Breadcrumb">
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
                <Link href="/news" className="text-blue-200 hover:text-white text-sm font-medium">
                  News
                </Link>
              </li>
              <li className="inline-flex items-center">
                <svg className="w-6 h-6 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-yellow-400 text-sm font-medium capitalize">
                  {article.category}
                </span>
              </li>
            </ol>
          </nav>
          
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold capitalize">
                {article.category}
              </span>
              <span className="text-blue-200">{formatDate(article.publishDate)}</span>
              <span className="text-blue-200">{article.readTime} min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {article.title}
            </h1>
            <p className="text-xl text-blue-100 mb-6 leading-relaxed">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-4">
              <span className="text-white font-medium">By {article.author}</span>
              {article.updateDate && (
                <span className="text-blue-200 text-sm">
                  Updated: {formatDate(article.updateDate)}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <article className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              {/* Featured Image */}
              <div className="relative h-96 mb-8 -mx-8 -mt-8">
                <Image 
                  src={article.featuredImage}
                  alt={article.title}
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>
              
              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown components={markdownComponents}>
                  {article.content}
                </ReactMarkdown>
              </div>
              
              {/* Tags */}
              <div className="mt-8 pt-8 border-t">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Topics</h4>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map(tag => (
                    <Link 
                      key={tag}
                      href={`/news?tag=${tag}`}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Share Buttons */}
              <div className="mt-8 pt-8 border-t">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Share this article</h4>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Share on Facebook
                  </button>
                  <button className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
                    Share on Twitter
                  </button>
                  <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors">
                    Copy Link
                  </button>
                </div>
              </div>
            </div>
          </article>
          
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedArticles.map(related => (
                    <article key={related.id} className="pb-4 border-b last:border-0 last:pb-0">
                      <Link href={`/news/${related.slug}`} className="group">
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                          {related.title}
                        </h4>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <span className="capitalize">{related.category}</span>
                          <span>•</span>
                          <span>{related.readTime} min</span>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            )}
            
            {/* Quick Links */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/tickets" className="text-blue-600 hover:text-blue-800 font-medium">
                    🎫 Buy Tickets
                  </Link>
                </li>
                <li>
                  <Link href="/schedule" className="text-blue-600 hover:text-blue-800 font-medium">
                    📅 Match Schedule
                  </Link>
                </li>
                <li>
                  <Link href="/teams" className="text-blue-600 hover:text-blue-800 font-medium">
                    🏉 Team Profiles
                  </Link>
                </li>
                <li>
                  <Link href="/travel" className="text-blue-600 hover:text-blue-800 font-medium">
                    ✈️ Travel Guide
                  </Link>
                </li>
                <li>
                  <Link href="/venues" className="text-blue-600 hover:text-blue-800 font-medium">
                    🏟️ Venues
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Newsletter */}
            <div className="bg-gradient-to-r from-blue-800 to-green-800 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Get Updates</h3>
              <p className="text-blue-100 mb-4 text-sm">
                Subscribe for the latest Rugby World Cup 2027 news
              </p>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-lg text-gray-900 placeholder-gray-500 mb-3"
              />
              <button className="w-full px-4 py-2 bg-yellow-500 text-black rounded-lg font-bold hover:bg-yellow-400 transition-colors">
                Subscribe
              </button>
            </div>
          </aside>
        </div>
        
        {/* CTA Section */}
        <div className="mt-12">
          <TicketCTA />
        </div>
      </div>
    </div>
  );
}