import { Match } from '../types';

// Rugby World Cup 2027 - 24 teams, 6 pools, 52 matches total
// Pool draw to be held December 2025
// Tournament: October 1 - November 13, 2027

// Match distribution across cities:
// Sydney: 5 pool, 2 round-of-16, 2 quarter-finals, 2 semi-finals, bronze final, final (13 matches)
// Brisbane: 6 pool, 2 round-of-16, 2 quarter-finals (10 matches)
// Melbourne: 7 pool, 2 round-of-16 (9 matches)
// Perth: Opening ceremony, 5 pool, 2 round-of-16 (8 matches)
// Adelaide: 5 pool (5 matches)
// Newcastle: 4 pool (4 matches)
// Townsville: 4 pool (4 matches)

// Note: Actual match schedule and team assignments will be determined after pool draw in December 2025
export const matches: Match[] = [
  // POOL STAGE - 36 matches (6 pools × 6 matches per pool)
  // Each pool has 4 teams playing 6 matches total
  
  // Sydney Pool Matches (5)
  {
    id: 'pool-syd-001',
    date: '2027-10-02',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'stadium-australia',
    stage: 'pool',
    kickoffTime: '19:00',
    pool: 'TBD'
  },
  {
    id: 'pool-syd-002',
    date: '2027-10-03',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'stadium-australia',
    stage: 'pool',
    kickoffTime: '14:00',
  },
  {
    id: 'pool-syd-003',
    date: '2027-10-07',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'stadium-australia',
    stage: 'pool',
    kickoffTime: '19:00',
  },
  {
    id: 'pool-syd-004',
    date: '2027-10-10',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'stadium-australia',
    stage: 'pool',
    kickoffTime: '16:00',
  },
  {
    id: 'pool-syd-005',
    date: '2027-10-14',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'stadium-australia',
    stage: 'pool',
    kickoffTime: '19:00',
  },

  // Brisbane Pool Matches (6)
  {
    id: 'pool-bri-001',
    date: '2027-10-02',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'lang-park',
    stage: 'pool',
    kickoffTime: '16:00',
  },
  {
    id: 'pool-bri-002',
    date: '2027-10-04',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'lang-park',
    stage: 'pool',
    kickoffTime: '19:00',
  },
  {
    id: 'pool-bri-003',
    date: '2027-10-06',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'lang-park',
    stage: 'pool',
    kickoffTime: '14:00',
  },
  {
    id: 'pool-bri-004',
    date: '2027-10-09',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'lang-park',
    stage: 'pool',
    kickoffTime: '19:00',
  },
  {
    id: 'pool-bri-005',
    date: '2027-10-12',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'lang-park',
    stage: 'pool',
    kickoffTime: '16:00',
  },
  {
    id: 'pool-bri-006',
    date: '2027-10-15',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'lang-park',
    stage: 'pool',
    kickoffTime: '19:00',
  },

  // Melbourne Pool Matches (7)
  {
    id: 'pool-mel-001',
    date: '2027-10-02',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'melbourne-rectangular',
    stage: 'pool',
    kickoffTime: '14:00',
  },
  {
    id: 'pool-mel-002',
    date: '2027-10-03',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'melbourne-rectangular',
    stage: 'pool',
    kickoffTime: '19:00',
  },
  {
    id: 'pool-mel-003',
    date: '2027-10-05',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'melbourne-rectangular',
    stage: 'pool',
    kickoffTime: '16:00',
  },
  {
    id: 'pool-mel-004',
    date: '2027-10-08',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'melbourne-rectangular',
    stage: 'pool',
    kickoffTime: '19:00',
  },
  {
    id: 'pool-mel-005',
    date: '2027-10-11',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'melbourne-rectangular',
    stage: 'pool',
    kickoffTime: '14:00',
  },
  {
    id: 'pool-mel-006',
    date: '2027-10-13',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'melbourne-rectangular',
    stage: 'pool',
    kickoffTime: '19:00',
  },
  {
    id: 'pool-mel-007',
    date: '2027-10-16',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'melbourne-rectangular',
    stage: 'pool',
    kickoffTime: '16:00',
  },

  // Perth Pool Matches (5) + Opening Ceremony
  {
    id: 'opening-ceremony',
    date: '2027-10-01',
    team1: 'australia', // Host nation in opening match
    team2: 'TBD',
    venue: 'perth-stadium',
    stage: 'pool',
    kickoffTime: '20:00',
    note: 'Opening Ceremony and Match'
  },
  {
    id: 'pool-per-002',
    date: '2027-10-03',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'perth-stadium',
    stage: 'pool',
    kickoffTime: '16:00',
  },
  {
    id: 'pool-per-003',
    date: '2027-10-06',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'perth-stadium',
    stage: 'pool',
    kickoffTime: '19:00',
  },
  {
    id: 'pool-per-004',
    date: '2027-10-10',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'perth-stadium',
    stage: 'pool',
    kickoffTime: '14:00',
  },
  {
    id: 'pool-per-005',
    date: '2027-10-14',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'perth-stadium',
    stage: 'pool',
    kickoffTime: '16:00',
  },

  // Adelaide Pool Matches (5)
  {
    id: 'pool-adl-001',
    date: '2027-10-04',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'adelaide-oval',
    stage: 'pool',
    kickoffTime: '14:00',
  },
  {
    id: 'pool-adl-002',
    date: '2027-10-07',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'adelaide-oval',
    stage: 'pool',
    kickoffTime: '16:00',
  },
  {
    id: 'pool-adl-003',
    date: '2027-10-09',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'adelaide-oval',
    stage: 'pool',
    kickoffTime: '14:00',
  },
  {
    id: 'pool-adl-004',
    date: '2027-10-12',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'adelaide-oval',
    stage: 'pool',
    kickoffTime: '19:00',
  },
  {
    id: 'pool-adl-005',
    date: '2027-10-15',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'adelaide-oval',
    stage: 'pool',
    kickoffTime: '16:00',
  },

  // Newcastle Pool Matches (4)
  {
    id: 'pool-new-001',
    date: '2027-10-05',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'newcastle-stadium',
    stage: 'pool',
    kickoffTime: '14:00',
  },
  {
    id: 'pool-new-002',
    date: '2027-10-08',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'newcastle-stadium',
    stage: 'pool',
    kickoffTime: '16:00',
  },
  {
    id: 'pool-new-003',
    date: '2027-10-11',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'newcastle-stadium',
    stage: 'pool',
    kickoffTime: '19:00',
  },
  {
    id: 'pool-new-004',
    date: '2027-10-13',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'newcastle-stadium',
    stage: 'pool',
    kickoffTime: '14:00',
  },

  // Townsville Pool Matches (4)
  {
    id: 'pool-twv-001',
    date: '2027-10-04',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'north-queensland-stadium',
    stage: 'pool',
    kickoffTime: '16:00',
  },
  {
    id: 'pool-twv-002',
    date: '2027-10-07',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'north-queensland-stadium',
    stage: 'pool',
    kickoffTime: '14:00',
  },
  {
    id: 'pool-twv-003',
    date: '2027-10-11',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'north-queensland-stadium',
    stage: 'pool',
    kickoffTime: '16:00',
  },
  {
    id: 'pool-twv-004',
    date: '2027-10-14',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'north-queensland-stadium',
    stage: 'pool',
    kickoffTime: '14:00',
  },

  // ROUND OF 16 - 8 matches (New format for 24 teams)
  // Sydney (2), Brisbane (2), Melbourne (2), Perth (2)
  
  // Sydney Round of 16
  {
    id: 'r16-syd-001',
    date: '2027-10-23',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'stadium-australia',
    stage: 'round-16',
    kickoffTime: '16:00',
  },
  {
    id: 'r16-syd-002',
    date: '2027-10-24',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'stadium-australia',
    stage: 'round-16',
    kickoffTime: '19:00',
  },

  // Brisbane Round of 16
  {
    id: 'r16-bri-001',
    date: '2027-10-23',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'lang-park',
    stage: 'round-16',
    kickoffTime: '19:00',
  },
  {
    id: 'r16-bri-002',
    date: '2027-10-24',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'lang-park',
    stage: 'round-16',
    kickoffTime: '16:00',
  },

  // Melbourne Round of 16
  {
    id: 'r16-mel-001',
    date: '2027-10-22',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'melbourne-rectangular',
    stage: 'round-16',
    kickoffTime: '16:00',
  },
  {
    id: 'r16-mel-002',
    date: '2027-10-22',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'melbourne-rectangular',
    stage: 'round-16',
    kickoffTime: '19:00',
  },

  // Perth Round of 16
  {
    id: 'r16-per-001',
    date: '2027-10-21',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'perth-stadium',
    stage: 'round-16',
    kickoffTime: '14:00',
  },
  {
    id: 'r16-per-002',
    date: '2027-10-21',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'perth-stadium',
    stage: 'round-16',
    kickoffTime: '17:00',
  },

  // QUARTER-FINALS - 4 matches
  // Sydney (2), Brisbane (2)
  
  {
    id: 'qf-001',
    date: '2027-10-30',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'stadium-australia',
    stage: 'quarter-final',
    kickoffTime: '16:00',
  },
  {
    id: 'qf-002',
    date: '2027-10-30',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'lang-park',
    stage: 'quarter-final',
    kickoffTime: '19:00',
  },
  {
    id: 'qf-003',
    date: '2027-10-31',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'stadium-australia',
    stage: 'quarter-final',
    kickoffTime: '16:00',
  },
  {
    id: 'qf-004',
    date: '2027-10-31',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'lang-park',
    stage: 'quarter-final',
    kickoffTime: '19:00',
  },

  // SEMI-FINALS - 2 matches
  // Sydney (2)
  
  {
    id: 'sf-001',
    date: '2027-11-06',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'stadium-australia',
    stage: 'semi-final',
    kickoffTime: '19:00',
  },
  {
    id: 'sf-002',
    date: '2027-11-07',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'stadium-australia',
    stage: 'semi-final',
    kickoffTime: '19:00',
  },

  // BRONZE FINAL
  // Sydney
  
  {
    id: 'bronze',
    date: '2027-11-12',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'stadium-australia',
    stage: 'bronze-final',
    kickoffTime: '17:00',
  },

  // FINAL
  // Sydney
  
  {
    id: 'final',
    date: '2027-11-13',
    team1: 'TBD',
    team2: 'TBD',
    venue: 'stadium-australia',
    stage: 'final',
    kickoffTime: '20:00',
    note: 'Rugby World Cup 2027 Final'
  }
];

// Total: 52 matches (36 pool + 8 round-of-16 + 4 quarter-finals + 2 semi-finals + 1 bronze + 1 final)

// Helper functions
export const getMatchById = (id: string): Match | undefined => {
  return matches.find(match => match.id === id);
};

export const getMatchesByVenue = (venueId: string): Match[] => {
  return matches.filter(match => match.venue === venueId);
};

export const getMatchesByTeam = (teamId: string): Match[] => {
  // Since teams are TBD until draw, return empty array
  if (teamId === 'australia') {
    // Australia guaranteed to play opening match
    return matches.filter(match => match.id === 'opening-ceremony');
  }
  return [];
};

export const getMatchesByStage = (stage: Match['stage']): Match[] => {
  return matches.filter(match => match.stage === stage);
};

export const getMatchesByDate = (date: string): Match[] => {
  return matches.filter(match => match.date === date);
};

// Match count by city:
// Sydney: 13 matches (5 pool, 2 R16, 2 QF, 2 SF, Bronze, Final)
// Brisbane: 10 matches (6 pool, 2 R16, 2 QF)
// Melbourne: 9 matches (7 pool, 2 R16)
// Perth: 8 matches (Opening + 5 pool, 2 R16)
// Adelaide: 5 matches (5 pool)
// Newcastle: 4 matches (4 pool)
// Townsville: 4 matches (4 pool)
// Total: 52 matches