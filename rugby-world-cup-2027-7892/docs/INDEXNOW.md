# IndexNow Implementation Guide

## Overview
IndexNow is implemented on rugbyaustralia2027.com to instantly notify search engines (Bing, Yandex, Seznam) about new or updated content. This ensures faster indexing and better search visibility.

## API Key
- **Key**: `8a2fdb7ab29b4e7aa686c9ee0fc4652b`
- **Key File Location**: `https://rugbyaustralia2027.com/8a2fdb7ab29b4e7aa686c9ee0fc4652b.txt`

## Features Implemented

### 1. Automatic Key Verification
The API key file is served from `/public/8a2fdb7ab29b4e7aa686c9ee0fc4652b.txt` and is publicly accessible for search engine verification.

### 2. API Endpoints
- **POST** `/api/indexnow` - Submit URLs programmatically
- **GET** `/api/indexnow` - Verify IndexNow configuration

### 3. Command Line Tools
```bash
# Submit all pages to IndexNow
npm run indexnow

# Verify IndexNow setup
npm run indexnow:verify

# Submit recently updated pages
npm run indexnow:recent

# Submit specific URL
node scripts/submit-indexnow.mjs --url /tickets
```

### 4. Automatic Submission
- URLs are automatically submitted after build completion (`postbuild` script)
- Recent changes are submitted to ensure fresh content is indexed

## Usage

### Manual Submission via API
```javascript
// Submit URLs using the API endpoint
fetch('/api/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    urls: [
      'https://rugbyaustralia2027.com/tickets',
      'https://rugbyaustralia2027.com/schedule'
    ]
  })
});
```

### Using the Library Functions
```javascript
import { submitToIndexNow, submitSingleUrl } from '@/app/lib/indexnow';

// Submit multiple URLs
await submitToIndexNow(['/tickets', '/schedule']);

// Submit single URL
await submitSingleUrl('/teams/new-zealand');

// Submit all pages (initial setup)
import { submitAllPages } from '@/app/lib/indexnow';
await submitAllPages();
```

## Search Engines Supported
IndexNow submissions are sent to:
- **Bing** (Microsoft)
- **Yandex** (Russia)
- **Seznam** (Czech Republic)
- **IndexNow.org** (Generic endpoint that forwards to all participating engines)

Note: Google does not currently support IndexNow but relies on sitemap.xml and organic crawling.

## Best Practices

1. **Batch Submissions**: Submit URLs in batches of 100 for optimal performance
2. **Rate Limiting**: Wait 1-2 seconds between batches to be respectful
3. **Verify Setup**: Run `npm run indexnow:verify` after deployment
4. **Monitor Results**: Check search console for indexing status

## Monitoring

### Bing Webmaster Tools
1. Sign in to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add and verify rugbyaustralia2027.com
3. Check IndexNow submission status under "Configure > IndexNow"

### Response Codes
- **200/202**: Success - URL accepted for processing
- **400**: Bad request - Check URL format
- **403**: Forbidden - Key file not accessible or incorrect
- **422**: Unprocessable - URL doesn't belong to the host
- **429**: Too many requests - Implement rate limiting

## Troubleshooting

### Key File Not Accessible
```bash
# Test key file accessibility
curl https://rugbyaustralia2027.com/8a2fdb7ab29b4e7aa686c9ee0fc4652b.txt
```

### Verify Submission
```bash
# Run verification script
npm run indexnow:verify
```

### Check Logs
Monitor Next.js logs for IndexNow submission results when using the API endpoint.

## Deployment Checklist
- [ ] Key file uploaded to `/public` directory
- [ ] API endpoint deployed at `/api/indexnow`
- [ ] Run `npm run indexnow:verify` after deployment
- [ ] Submit all pages initially: `npm run indexnow`
- [ ] Configure CI/CD to run `npm run indexnow:recent` after deployments

## Security
- The API key is public by design (required by IndexNow protocol)
- No sensitive data is exposed
- Rate limiting prevents abuse
- Only your verified domain can submit URLs