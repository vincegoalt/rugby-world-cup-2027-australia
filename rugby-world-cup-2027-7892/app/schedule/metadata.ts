import { Metadata } from 'next';
import { generateMetadata } from '../lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Rugby World Cup 2027 Match Schedule & Fixtures',
  description: 'Complete match schedule for Rugby World Cup 2027 in Australia. Filter by date, team, venue, or stage. Get tickets and view all fixtures with kick-off times and venues.',
  keywords: [
    'rugby world cup 2027 schedule',
    'rwc 2027 fixtures',
    'rugby world cup matches',
    'australia rugby schedule',
    'rugby world cup timetable',
    'rwc match dates',
    'rugby fixtures 2027',
    'world cup rugby calendar',
    'rugby match tickets',
    'tournament schedule'
  ],
  canonical: '/schedule'
});