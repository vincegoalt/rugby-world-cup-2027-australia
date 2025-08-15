#!/usr/bin/env node

/**
 * Script to submit URLs to IndexNow
 * Usage: 
 *   npm run indexnow                    # Submit all pages
 *   npm run indexnow -- --url /tickets  # Submit specific URL
 *   npm run indexnow -- --recent        # Submit recently updated pages
 */

const INDEXNOW_KEY = '8a2fdb7ab29b4e7aa686c9ee0fc4652b';
const SITE_HOST = 'rugbyaustralia2027.com';
const SITE_URL = `https://${SITE_HOST}`;

// Parse command line arguments
const args = process.argv.slice(2);
const urlFlag = args.indexOf('--url');
const recentFlag = args.includes('--recent');
const verifyFlag = args.includes('--verify');

async function submitToIndexNow(urls) {
  const endpoints = [
    'https://www.bing.com/indexnow',
    'https://api.indexnow.org/indexnow',
    'https://yandex.com/indexnow',
    'https://search.seznam.cz/indexnow'
  ];

  const absoluteUrls = urls.map(url => 
    url.startsWith('http') ? url : `${SITE_URL}${url.startsWith('/') ? url : `/${url}`}`
  );

  const payload = {
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: absoluteUrls
  };

  console.log(`📤 Submitting ${absoluteUrls.length} URLs to IndexNow...`);
  
  const results = await Promise.all(
    endpoints.map(async (endpoint) => {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify(payload),
        });

        const success = response.ok || response.status === 200 || response.status === 202;
        console.log(`${success ? '✅' : '❌'} ${endpoint.replace('https://', '').split('/')[0]}: ${response.status}`);
        
        return { endpoint, status: response.status, success };
      } catch (error) {
        console.log(`❌ ${endpoint.replace('https://', '').split('/')[0]}: ${error.message}`);
        return { endpoint, status: 0, success: false, error: error.message };
      }
    })
  );

  return results;
}

async function getAllUrls() {
  // Static pages
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

  // Dynamic pages - simplified data for the script
  const teams = [
    'south-africa', 'new-zealand', 'ireland', 'france', 'england', 'australia',
    'wales', 'scotland', 'argentina', 'japan', 'italy', 'fiji', 'samoa', 'tonga',
    'georgia', 'portugal', 'romania', 'spain', 'uruguay', 'namibia', 'canada',
    'usa', 'chile', 'hong-kong'
  ];

  const venues = [
    'stadium-australia', 'lang-park', 'perth-stadium', 'adelaide-oval',
    'mcg', 'mcdonald-jones-stadium', 'queensland-country-bank-stadium'
  ];

  const cities = [
    'sydney', 'melbourne', 'brisbane', 'perth', 'adelaide', 'newcastle', 'townsville'
  ];

  const dynamicPages = [
    ...teams.map(team => `/teams/${team}`),
    ...teams.map(team => `/schedule/${team}`),
    ...venues.map(venue => `/venues/${venue}`),
    ...cities.map(city => `/guide/${city}`)
  ];

  // Add match ticket pages (simplified)
  const matchPages = [];
  for (let i = 1; i <= 52; i++) {
    matchPages.push(`/tickets/match-${i}`);
  }

  return [...staticPages, ...dynamicPages, ...matchPages];
}

async function verifySetup() {
  console.log('🔍 Verifying IndexNow setup...\n');
  
  try {
    // Check if key file is accessible
    const keyUrl = `${SITE_URL}/${INDEXNOW_KEY}.txt`;
    console.log(`Checking key file at: ${keyUrl}`);
    
    const response = await fetch(keyUrl);
    const text = await response.text();
    
    if (text.trim() === INDEXNOW_KEY) {
      console.log('✅ Key file is properly configured and accessible\n');
    } else {
      console.log('❌ Key file content does not match the API key\n');
      return false;
    }

    // Test submission with home page
    console.log('Testing submission with home page...');
    const testResults = await submitToIndexNow(['/']);
    
    const successCount = testResults.filter(r => r.success).length;
    console.log(`\n✅ Setup verified! ${successCount}/${testResults.length} endpoints accepted the submission.`);
    
    return true;
  } catch (error) {
    console.error('❌ Setup verification failed:', error.message);
    return false;
  }
}

async function main() {
  console.log('🚀 IndexNow Submission Tool\n');

  if (verifyFlag) {
    await verifySetup();
    return;
  }

  let urls = [];

  if (urlFlag !== -1 && urlFlag + 1 < args.length) {
    // Submit specific URL
    urls = [args[urlFlag + 1]];
    console.log(`Submitting specific URL: ${urls[0]}`);
  } else if (recentFlag) {
    // Submit recently updated pages (placeholder - customize as needed)
    urls = ['/', '/schedule', '/tickets', '/tickets/prices'];
    console.log('Submitting recently updated pages...');
  } else {
    // Submit all pages
    urls = await getAllUrls();
    console.log(`Submitting all ${urls.length} pages...`);
  }

  // Submit in batches of 100
  const batchSize = 100;
  let totalSubmitted = 0;

  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    console.log(`\n📦 Batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(urls.length / batchSize)}`);
    
    await submitToIndexNow(batch);
    totalSubmitted += batch.length;
    
    if (i + batchSize < urls.length) {
      console.log('⏳ Waiting 2 seconds before next batch...');
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }

  console.log(`\n✨ Submission complete! ${totalSubmitted} URLs submitted to IndexNow.`);
  console.log('Search engines will be notified about your content immediately.');
}

// Run the script
main().catch(error => {
  console.error('❌ Error:', error);
  process.exit(1);
});