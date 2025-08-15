// Image URLs for the Rugby World Cup 2027 website
// Using placeholder images - replace with actual licensed images in production

export const images = {
  hero: 'https://images.unsplash.com/photo-1574629867924-91d4e6c36a9f?w=1920&h=1080&fit=crop',
  stadium: 'https://images.unsplash.com/photo-1574629867128-a3b8dc0db4f7?w=1920&h=1080&fit=crop',
  fans: 'https://images.unsplash.com/photo-1574629867924-91d4e6c36a9f?w=1920&h=1080&fit=crop',
  rugby: 'https://images.unsplash.com/photo-1480099225005-2513c8947aec?w=1920&h=1080&fit=crop',
  
  // Stadium images
  venues: {
    'accor-stadium': 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1920&h=1080&fit=crop',
    'marvel-stadium': 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1920&h=1080&fit=crop',
    'suncorp-stadium': 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1920&h=1080&fit=crop',
    'optus-stadium': 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1920&h=1080&fit=crop',
    'adelaide-oval': 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1920&h=1080&fit=crop',
    'cbus-super-stadium': 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&h=1080&fit=crop',
    'mcdonald-jones-stadium': 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1920&h=1080&fit=crop',
    'queensland-country-bank-stadium': 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1920&h=1080&fit=crop',
  },
  
  // City images
  cities: {
    sydney: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1920&h=1080&fit=crop',
    melbourne: 'https://images.unsplash.com/photo-1514395462725-fb4566210144?w=1920&h=1080&fit=crop',
    brisbane: 'https://images.unsplash.com/photo-1566219379102-4d0cd9f43e4f?w=1920&h=1080&fit=crop',
    perth: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=1920&h=1080&fit=crop',
    adelaide: 'https://images.unsplash.com/photo-1514395462725-fb4566210144?w=1920&h=1080&fit=crop',
    'gold-coast': 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1920&h=1080&fit=crop',
    newcastle: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1920&h=1080&fit=crop',
    townsville: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=1920&h=1080&fit=crop',
  },
  
  // Default/fallback images
  defaultTeam: 'https://images.unsplash.com/photo-1480099225005-2513c8947aec?w=800&h=600&fit=crop',
  defaultVenue: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=600&fit=crop',
  defaultCity: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&h=600&fit=crop',
}

export const getVenueImage = (slug: string): string => {
  return images.venues[slug as keyof typeof images.venues] || images.defaultVenue
}

export const getCityImage = (slug: string): string => {
  return images.cities[slug as keyof typeof images.cities] || images.defaultCity
}