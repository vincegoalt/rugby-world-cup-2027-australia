/**
 * IndexNow submission utility
 * Instantly notifies search engines about new or updated content
 */

const INDEXNOW_KEY = '8a2fdb7ab29b4e7aa686c9ee0fc4652b';
const SITE_HOST = 'rugbyaustralia2027.com';
const SITE_URL = `https://${SITE_HOST}`;

interface IndexNowResponse {
  endpoint: string;
  status: number;
  success: boolean;
  error?: string;
}

/**
 * Submit URLs to IndexNow-enabled search engines
 * @param urls - Array of absolute URLs to submit
 * @returns Promise with submission results
 */
export async function submitToIndexNow(urls: string[]): Promise<{
  success: boolean;
  results: IndexNowResponse[];
  urlsSubmitted: number;
}> {
  // Ensure all URLs are absolute
  const absoluteUrls = urls.map(url => 
    url.startsWith('http') ? url : `${SITE_URL}${url.startsWith('/') ? url : `/${url}`}`
  );

  // IndexNow endpoints for major search engines
  const endpoints = [
    'https://www.bing.com/indexnow',
    'https://api.indexnow.org/indexnow', // Generic endpoint that forwards to all
    'https://yandex.com/indexnow',
    'https://search.seznam.cz/indexnow'
  ];

  const payload = {
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: absoluteUrls
  };

  const submissions = await Promise.all(
    endpoints.map(async (endpoint): Promise<IndexNowResponse> => {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify(payload),
        });

        return {
          endpoint,
          status: response.status,
          success: response.ok || response.status === 200 || response.status === 202
        };
      } catch (error) {
        return {
          endpoint,
          status: 0,
          success: false,
          error: error instanceof Error ? error.message : 'Network error'
        };
      }
    })
  );

  const allSuccessful = submissions.every(s => s.success);

  return {
    success: allSuccessful,
    results: submissions,
    urlsSubmitted: absoluteUrls.length
  };
}

/**
 * Submit a single URL to IndexNow
 * @param url - URL to submit (can be relative or absolute)
 * @returns Promise with submission results
 */
export async function submitSingleUrl(url: string) {
  return submitToIndexNow([url]);
}

/**
 * Submit all site pages to IndexNow (for initial indexing)
 * @returns Promise with submission results
 */
export async function submitAllPages() {
  // Import your routes data
  const { teams } = await import('../data/teams');
  const { venues } = await import('../data/venues');
  const { cities } = await import('../data/cities');
  const { matches } = await import('../data/matches');

  const staticPages = [
    '/',
    '/teams',
    '/venues',
    '/guide',
    '/schedule',
    '/tickets',
    '/history',
    '/travel',
    '/travel/accommodation',
    '/travel/getting-around',
    '/travel/visa',
    '/travel/essentials',
    '/travel/from/uk',
    '/tickets/prices',
    '/tickets/final',
    '/tickets/semi-finals'
  ];

  const dynamicPages = [
    ...teams.map(team => `/teams/${team.slug}`),
    ...teams.map(team => `/schedule/${team.slug}`),
    ...venues.map(venue => `/venues/${venue.slug}`),
    ...cities.map(city => `/guide/${city.slug}`),
    ...matches.map(match => `/tickets/${match.id}`)
  ];

  const allUrls = [...staticPages, ...dynamicPages];
  
  // IndexNow recommends submitting in batches of 10,000 URLs max
  // But for better performance, we'll use smaller batches
  const batchSize = 100;
  const batches = [];
  
  for (let i = 0; i < allUrls.length; i += batchSize) {
    batches.push(allUrls.slice(i, i + batchSize));
  }

  const results = [];
  for (const batch of batches) {
    const batchResult = await submitToIndexNow(batch);
    results.push(batchResult);
    // Small delay between batches to be respectful
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  return {
    totalUrls: allUrls.length,
    batches: results,
    success: results.every(r => r.success)
  };
}

/**
 * Submit recently updated pages (useful for periodic updates)
 * @param lastUpdateTime - ISO string or Date object for the last update check
 * @returns Promise with submission results
 */
export async function submitRecentlyUpdated(lastUpdateTime: string | Date) {
  // This is a placeholder - in a real implementation, you'd track
  // which pages have been updated since lastUpdateTime
  // For now, we'll submit key pages that change frequently
  
  const frequentlyUpdatedPages = [
    '/',
    '/schedule',
    '/tickets',
    '/tickets/prices'
  ];

  return submitToIndexNow(frequentlyUpdatedPages);
}

/**
 * Verify IndexNow key file is accessible
 * @returns Promise<boolean> indicating if key file is properly configured
 */
export async function verifyIndexNowSetup(): Promise<boolean> {
  try {
    const response = await fetch(`${SITE_URL}/${INDEXNOW_KEY}.txt`);
    const text = await response.text();
    return text.trim() === INDEXNOW_KEY;
  } catch (error) {
    console.error('Failed to verify IndexNow setup:', error);
    return false;
  }
}