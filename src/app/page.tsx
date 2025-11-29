import HeroCarousel from '@/components/HeroCarousel'
import MissionSection from '@/components/MissionSection'
import EventsCarousel from '@/components/EventsCarousel'
import StatisticsSection from '@/components/StatisticsSection'

export default function Home() {
  // Mock data for demonstration
  const mockSlides = [
    {
      image: '/window.svg',
      title: 'Elite Sports Tournaments',
      subtitle: 'Experience the thrill of competitive sports at our world-class facilities',
      ctaText: 'Find Tournament',
      ctaLink: '/find-a-tournament'
    },
    {
      image: '/globe.svg',
      title: 'Professional Competition',
      subtitle: 'Join athletes from around the world in premier sporting events',
      ctaText: 'Learn More',
      ctaLink: '/about-us'
    }
  ]

  const mockMissionText = `We are dedicated to creating exceptional sports experiences that bring athletes, families, and communities together. Our mission is to organize world-class tournaments and events that inspire excellence, foster sportsmanship, and create lasting memories.

Through our tiered competition system (Lions, Tigers, Panthers), we ensure that athletes of all skill levels can find the perfect competitive environment to grow and excel.`

  const mockMissionImages = [
    '/window.svg',
    '/globe.svg',
    '/next.svg'
  ]

  const mockEvents = [
    {
      _id: '1',
      title: 'Summer Championship',
      slug: 'summer-championship',
      heroImage: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop',
      logo: '/vercel.svg',
      startDate: '2024-06-15',
      endDate: '2024-06-17',
      location: 'Miami, FL',
      tier: 'lions',
      tagline: 'Premier summer sports competition'
    },
    {
      _id: '2',
      title: 'Youth Invitational',
      slug: 'youth-invitational',
      heroImage: '/globe.svg',
      logo: '/vercel.svg',
      startDate: '2024-07-20',
      endDate: '2024-07-22',
      location: 'Austin, TX',
      tier: 'tigers',
      tagline: 'Young athletes showcase their talent'
    },
    {
      _id: '3',
      title: 'Regional Finals',
      slug: 'regional-finals',
      heroImage: '/next.svg',
      logo: '/vercel.svg',
      startDate: '2024-08-10',
      endDate: '2024-08-12',
      location: 'Denver, CO',
      tier: 'panthers',
      tagline: 'Elite competition for top athletes'
    }
  ]

  const mockStatistics = [
    { label: 'Events Organized', value: 150 },
    { label: 'Athletes Competed', value: 25000 },
    { label: 'Sports Categories', value: 15 },
    { label: 'Years Experience', value: 12 },
    { label: 'Countries Represented', value: 45 }
  ]

  return (
    <div className="min-h-screen">
      <HeroCarousel slides={mockSlides} />
      
      <MissionSection 
        missionText={mockMissionText}
        missionImages={mockMissionImages}
      />
      
      <EventsCarousel events={mockEvents} />
      
      <StatisticsSection statistics={mockStatistics} />
    </div>
  )
}
