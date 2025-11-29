import { Event } from './types'

export const mockEvents: Event[] = [
  {
    _id: '1',
    title: 'Elite Football Championship 2024',
    description: 'Premier football tournament featuring top teams from across Asia. Compete for the championship title and showcase your talent.',
    sport: 'Football',
    tier: 'Lions',
    startDate: '2024-03-15',
    endDate: '2024-03-17',
    location: 'Singapore Sports Hub',
    maxTeams: 32,
    registrationDeadline: '2024-02-28',
    image: '/window.svg',
    slug: { current: 'elite-football-championship-2024' },
    features: [
      'Professional referees',
      'Live streaming',
      'Trophy ceremony',
      'Player awards',
      'Medical support'
    ],
    matchFormats: [
      { name: 'Group Stage', description: 'Round-robin format with 8 groups of 4 teams' },
      { name: 'Knockout Stage', description: 'Single elimination from quarterfinals to final' }
    ],
    price: 1500,
    currency: 'SGD'
  },
  {
    _id: '2',
    title: 'Basketball Premier League',
    description: 'High-intensity basketball tournament for elite teams. Experience professional-level competition and facilities.',
    sport: 'Basketball',
    tier: 'Tigers',
    startDate: '2024-04-20',
    endDate: '2024-04-22',
    location: 'Kuala Lumpur Convention Centre',
    maxTeams: 24,
    registrationDeadline: '2024-04-05',
    image: '/globe.svg',
    slug: { current: 'basketball-premier-league' },
    features: [
      'Professional courts',
      'Electronic scoring',
      'Video analysis',
      'Coaching clinics',
      'Player statistics'
    ],
    matchFormats: [
      { name: 'Preliminary Round', description: 'Pool play with 6 groups of 4 teams' },
      { name: 'Championship Bracket', description: 'Single elimination tournament' }
    ],
    price: 1200,
    currency: 'MYR'
  },
  {
    _id: '3',
    title: 'Youth Tennis Open',
    description: 'Developmental tennis tournament for young athletes. Perfect platform to gain competitive experience.',
    sport: 'Tennis',
    tier: 'Panthers',
    startDate: '2024-05-10',
    endDate: '2024-05-12',
    location: 'Bangkok Tennis Academy',
    maxTeams: 16,
    registrationDeadline: '2024-04-25',
    image: '/next.svg',
    slug: { current: 'youth-tennis-open' },
    features: [
      'Professional coaching',
      'Skill development',
      'Parent workshops',
      'Equipment support',
      'Progress tracking'
    ],
    matchFormats: [
      { name: 'Round Robin', description: 'Guaranteed matches for all participants' },
      { name: 'Consolation Draw', description: 'Additional matches for eliminated players' }
    ],
    price: 800,
    currency: 'THB'
  },
  {
    _id: '4',
    title: 'Volleyball Beach Championship',
    description: 'Exciting beach volleyball tournament on pristine sands. Team up and compete in a tropical paradise.',
    sport: 'Volleyball',
    tier: 'Tigers',
    startDate: '2024-06-15',
    endDate: '2024-06-17',
    location: 'Phuket Beach Sports Complex',
    maxTeams: 20,
    registrationDeadline: '2024-05-31',
    image: '/vercel.svg',
    slug: { current: 'volleyball-beach-championship' },
    features: [
      'Beach facilities',
      'Professional setup',
      'Beach activities',
      'Team bonding',
      'Sunset events'
    ],
    matchFormats: [
      { name: 'Pool Play', description: 'Round-robin within pools' },
      { name: 'Knockout', description: 'Single elimination finals' }
    ],
    price: 1000,
    currency: 'THB'
  },
  {
    _id: '5',
    title: 'Badminton Masters Cup',
    description: 'Prestigious badminton tournament for competitive players. Showcase your skills on the international stage.',
    sport: 'Badminton',
    tier: 'Lions',
    startDate: '2024-07-08',
    endDate: '2024-07-10',
    location: 'Jakarta Convention Center',
    maxTeams: 28,
    registrationDeadline: '2024-06-23',
    image: '/globe.svg',
    slug: { current: 'badminton-masters-cup' },
    features: [
      'Olympic-standard courts',
      'Professional umpires',
      'Live streaming',
      'Player lounge',
      'Equipment testing'
    ],
    matchFormats: [
      { name: 'Qualifying Rounds', description: 'Preliminary elimination matches' },
      { name: 'Main Draw', description: 'Single elimination tournament' }
    ],
    price: 1300,
    currency: 'IDR'
  },
  {
    _id: '6',
    title: 'Swimming Elite Meet',
    description: 'Competitive swimming meet for elite athletes. Set personal bests and compete for medals.',
    sport: 'Swimming',
    tier: 'Tigers',
    startDate: '2024-08-12',
    endDate: '2024-08-14',
    location: 'Manila Aquatic Center',
    maxTeams: 15,
    registrationDeadline: '2024-07-28',
    image: '/next.svg',
    slug: { current: 'swimming-elite-meet' },
    features: [
      'Olympic pool',
      'Electronic timing',
      'Medal ceremony',
      'Coaching analysis',
      'Recovery facilities'
    ],
    matchFormats: [
      { name: 'Heats', description: 'Qualifying races by event' },
      { name: 'Finals', description: 'Championship races for qualifiers' }
    ],
    price: 900,
    currency: 'PHP'
  }
]
