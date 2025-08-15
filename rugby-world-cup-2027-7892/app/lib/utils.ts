import { type ClassValue, clsx } from 'clsx';
import { format, parseISO } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';
import { TIMEZONE, TIME_FORMAT, DATE_FORMAT, DATETIME_FORMAT } from './constants';

/**
 * Utility function to merge Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Format date to display format
 */
export function formatDate(date: string | Date, formatStr = DATE_FORMAT): string {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, formatStr);
}

/**
 * Format time to display format in Australian timezone
 */
export function formatTime(time: string, timeFormat = TIME_FORMAT): string {
  // Assume time is in HH:mm format
  const [hours, minutes] = time.split(':');
  const today = new Date();
  const timeDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), parseInt(hours), parseInt(minutes));
  return format(timeDate, timeFormat);
}

/**
 * Format match datetime for display
 */
export function formatMatchDateTime(date: string, time: string): string {
  const [hours, minutes] = time.split(':');
  const matchDate = parseISO(date);
  matchDate.setHours(parseInt(hours), parseInt(minutes));
  
  return formatInTimeZone(matchDate, TIMEZONE, DATETIME_FORMAT);
}

/**
 * Check if a match is live (within 2 hours of kickoff)
 */
export function isMatchLive(date: string, time: string): boolean {
  const [hours, minutes] = time.split(':');
  const matchDate = parseISO(date);
  matchDate.setHours(parseInt(hours), parseInt(minutes));
  
  const now = new Date();
  const timeDiff = matchDate.getTime() - now.getTime();
  const hoursDiff = timeDiff / (1000 * 60 * 60);
  
  // Consider live if match is within 2 hours (1 hour before to 1 hour after)
  return hoursDiff >= -1 && hoursDiff <= 1;
}

/**
 * Check if a match is upcoming
 */
export function isMatchUpcoming(date: string, time: string): boolean {
  const [hours, minutes] = time.split(':');
  const matchDate = parseISO(date);
  matchDate.setHours(parseInt(hours), parseInt(minutes));
  
  return matchDate.getTime() > new Date().getTime();
}

/**
 * Generate slug from string
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Capitalize first letter of each word
 */
export function titleCase(text: string): string {
  return text.replace(/\w\S*/g, (txt) => 
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

/**
 * Get time until match starts
 */
export function getTimeUntilMatch(date: string, time: string): string {
  const [hours, minutes] = time.split(':');
  const matchDate = parseISO(date);
  matchDate.setHours(parseInt(hours), parseInt(minutes));
  
  const now = new Date();
  const timeDiff = matchDate.getTime() - now.getTime();
  
  if (timeDiff <= 0) {
    return 'Match has started';
  }
  
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hoursRemaining = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesRemaining = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  
  if (days > 0) {
    return `${days}d ${hoursRemaining}h`;
  } else if (hoursRemaining > 0) {
    return `${hoursRemaining}h ${minutesRemaining}m`;
  } else {
    return `${minutesRemaining}m`;
  }
}

/**
 * Sort teams by ranking
 */
export function sortTeamsByRanking<T extends { ranking: number }>(teams: T[]): T[] {
  return [...teams].sort((a, b) => a.ranking - b.ranking);
}

/**
 * Get ordinal suffix for numbers (1st, 2nd, 3rd, etc.)
 */
export function getOrdinalSuffix(num: number): string {
  const j = num % 10;
  const k = num % 100;
  
  if (j === 1 && k !== 11) {
    return `${num}st`;
  }
  if (j === 2 && k !== 12) {
    return `${num}nd`;
  }
  if (j === 3 && k !== 13) {
    return `${num}rd`;
  }
  return `${num}th`;
}

/**
 * Truncate text to specified length
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength).trim() + '...';
}

/**
 * Generate SEO-friendly meta title
 */
export function generateMetaTitle(parts: string[], siteName: string): string {
  return parts.length > 0 ? `${parts.join(' | ')} | ${siteName}` : siteName;
}

/**
 * Generate ticket purchase URL with affiliate tracking
 */
export function generateTicketUrl(matchId: string, affiliateUrl: string): string {
  // Since we're using the direct collection URL, we don't need to add query parameters
  // The collection already shows Rugby World Cup 2027 tickets
  return affiliateUrl;
}

/**
 * Format capacity number with comma separators
 */
export function formatCapacity(capacity: number): string {
  return capacity.toLocaleString();
}

/**
 * Get country code from team ID for flag display
 */
export function getCountryCode(teamId: string): string {
  const countryMap: Record<string, string> = {
    'nz': 'NZ',
    'sa': 'ZA', 
    'fr': 'FR',
    'ie': 'IE',
    'en': 'GB-ENG',
    'au': 'AU',
    'ar': 'AR',
    'wa': 'GB-WLS',
    'sc': 'GB-SCT',
    'jp': 'JP',
    'it': 'IT',
    'fj': 'FJ',
    'ge': 'GE',
    'ws': 'WS',
    'to': 'TO',
    'uy': 'UY',
    'pt': 'PT',
    'us': 'US',
    'ca': 'CA',
    'na': 'NA'
  };
  
  return countryMap[teamId] || teamId.toUpperCase();
}