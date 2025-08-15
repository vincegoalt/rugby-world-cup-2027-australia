import { NextRequest, NextResponse } from 'next/server';

const INDEXNOW_KEY = '8a2fdb7ab29b4e7aa686c9ee0fc4652b';
const SITE_HOST = 'rugbyaustralia2027.com';

export async function POST(request: NextRequest) {
  try {
    const { urls } = await request.json();
    
    if (!urls || !Array.isArray(urls)) {
      return NextResponse.json(
        { error: 'URLs array is required' },
        { status: 400 }
      );
    }

    // Submit to multiple search engines that support IndexNow
    const endpoints = [
      'https://www.bing.com/indexnow',
      'https://api.indexnow.org/indexnow',
      'https://yandex.com/indexnow',
      'https://search.seznam.cz/indexnow'
    ];

    const submissions = endpoints.map(async (endpoint) => {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify({
            host: SITE_HOST,
            key: INDEXNOW_KEY,
            keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
            urlList: urls
          }),
        });

        return {
          endpoint,
          status: response.status,
          success: response.ok
        };
      } catch (error) {
        return {
          endpoint,
          status: 0,
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        };
      }
    });

    const results = await Promise.all(submissions);
    
    return NextResponse.json({
      message: 'IndexNow submission completed',
      results,
      urlsSubmitted: urls.length
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to submit to IndexNow', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// GET endpoint to verify the key file is accessible
export async function GET() {
  return NextResponse.json({
    status: 'IndexNow is configured',
    keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
    documentation: 'POST to this endpoint with { urls: ["url1", "url2"] } to submit URLs'
  });
}