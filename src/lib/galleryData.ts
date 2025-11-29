import { Gallery } from './types'

export const mockGalleries: Gallery[] = [
  {
    _id: '1',
    title: 'Elite Football Championship 2024',
    description: 'Action shots from the premier football tournament featuring top teams from across Asia.',
    event: 'Elite Football Championship 2024',
    date: '2024-03-15',
    location: 'Singapore Sports Hub',
    thumbnail: '/window.svg',
    slug: { current: 'elite-football-championship-2024' },
    categories: ['Football', 'Action', 'Teams'],
    images: [
      {
        url: '/window.svg',
        caption: 'Intense match action during the championship',
        photographer: 'John Smith'
      },
      {
        url: '/globe.svg',
        caption: 'Team celebration after scoring',
        photographer: 'Sarah Johnson'
      },
      {
        url: '/next.svg',
        caption: 'Goalkeeper making a crucial save',
        photographer: 'Mike Chen'
      },
      {
        url: '/vercel.svg',
        caption: 'Fans cheering in the stadium',
        photographer: 'Lisa Wong'
      },
      {
        url: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&h=800&fit=crop',
        caption: 'Trophy presentation ceremony',
        photographer: 'David Brown'
      }
    ]
  },
  {
    _id: '2',
    title: 'Basketball Premier League',
    description: 'High-energy moments from the basketball premier league tournament.',
    event: 'Basketball Premier League',
    date: '2024-04-20',
    location: 'Kuala Lumpur Convention Centre',
    thumbnail: '/globe.svg',
    slug: { current: 'basketball-premier-league' },
    categories: ['Basketball', 'Action', 'Indoor'],
    images: [
      {
        url: '/globe.svg',
        caption: 'Player going for a slam dunk',
        photographer: 'Alex Rodriguez'
      },
      {
        url: '/next.svg',
        caption: 'Team huddle during timeout',
        photographer: 'Maria Garcia'
      },
      {
        url: '/vercel.svg',
        caption: 'Three-point shot attempt',
        photographer: 'Kevin Lee'
      },
      {
        url: '/window.svg',
        caption: 'Defensive play at the net',
        photographer: 'Anna Kim'
      }
    ]
  },
  {
    _id: '3',
    title: 'Youth Tennis Open',
    description: 'Young athletes showcasing their talent at the youth tennis development tournament.',
    event: 'Youth Tennis Open',
    date: '2024-05-10',
    location: 'Bangkok Tennis Academy',
    thumbnail: '/next.svg',
    slug: { current: 'youth-tennis-open' },
    categories: ['Tennis', 'Youth', 'Development'],
    images: [
      {
        url: '/next.svg',
        caption: 'Young player serving',
        photographer: 'Tom Wilson'
      },
      {
        url: '/globe.svg',
        caption: 'Coach giving instructions',
        photographer: 'Emma Davis'
      },
      {
        url: '/vercel.svg',
        caption: 'Youth players group photo',
        photographer: 'James Park'
      }
    ]
  },
  {
    _id: '4',
    title: 'Beach Volleyball Championship',
    description: 'Stunning beach volleyball action shots from the tropical championship.',
    event: 'Volleyball Beach Championship',
    date: '2024-06-15',
    location: 'Phuket Beach Sports Complex',
    thumbnail: '/vercel.svg',
    slug: { current: 'volleyball-beach-championship' },
    categories: ['Volleyball', 'Beach', 'Outdoor'],
    images: [
      {
        url: '/vercel.svg',
        caption: 'Beach volleyball spike',
        photographer: 'Carlos Mendez'
      },
      {
        url: '/globe.svg',
        caption: 'Sunset beach volleyball match',
        photographer: 'Sophie Turner'
      },
      {
        url: '/window.svg',
        caption: 'Team celebration on the beach',
        photographer: 'Ryan Johnson'
      }
    ]
  },
  {
    _id: '5',
    title: 'Badminton Masters Cup',
    description: 'Elite badminton players competing at the masters cup championship.',
    event: 'Badminton Masters Cup',
    date: '2024-07-08',
    location: 'Jakarta Convention Center',
    thumbnail: '/globe.svg',
    slug: { current: 'badminton-masters-cup' },
    categories: ['Badminton', 'Indoor', 'Elite'],
    images: [
      {
        url: '/globe.svg',
        caption: 'Smash shot during finals',
        photographer: 'Zhang Wei'
      },
      {
        url: '/window.svg',
        caption: 'Players shaking hands',
        photographer: 'Linda Chang'
      },
      {
        url: '/next.svg',
        caption: 'Trophy presentation',
        photographer: 'Robert Lim'
      }
    ]
  },
  {
    _id: '6',
    title: 'Swimming Elite Meet',
    description: 'Elite swimmers competing in various strokes at the aquatic championship.',
    event: 'Swimming Elite Meet',
    date: '2024-08-12',
    location: 'Manila Aquatic Center',
    thumbnail: '/next.svg',
    slug: { current: 'swimming-elite-meet' },
    categories: ['Swimming', 'Aquatic', 'Elite'],
    images: [
      {
        url: '/next.svg',
        caption: 'Freestyle sprint finish',
        photographer: 'Michael Torres'
      },
      {
        url: '/globe.svg',
        caption: 'Medal ceremony',
        photographer: 'Jessica Chen'
      },
      {
        url: '/vercel.svg',
        caption: 'Diving start sequence',
        photographer: 'David Kim'
      }
    ]
  }
]
