import { Language } from '../types'

export interface TranslationKeys {
  // Navigation
  nav: {
    home: string
    teams: string
    venues: string
    guide: string
    schedule: string
    tickets: string
    matches: string
    hostCities: string
  }

  // Common
  common: {
    loading: string
    error: string
    notFound: string
    backToHome: string
    learnMore: string
    viewAll: string
    search: string
    filter: string
    sort: string
    date: string
    time: string
    venue: string
    tickets: string
    buyTickets: string
    soldOut: string
    available: string
    capacity: string
    kickoff: string
    versus: string
    group: string
    stage: string
    ranking: string
    city: string
    country: string
    showMore: string
    showLess: string
  }

  // Home page
  home: {
    hero: {
      title: string
      subtitle: string
      description: string
      countdownLabel: string
      getTicketsButton: string
      viewScheduleButton: string
    }
    sections: {
      upcomingMatches: string
      participatingTeams: string
      hostVenues: string
      newsletter: string
    }
    newsletter: {
      title: string
      description: string
      placeholder: string
      subscribe: string
      success: string
      error: string
    }
  }

  // Teams
  teams: {
    title: string
    description: string
    groupLabel: string
    viewTeam: string
    teamProfile: string
    teamSchedule: string
    worldRanking: string
    poolMatches: string
    knockoutMatches: string
    previousMatches: string
    upcomingMatches: string
    teamStats: string
  }

  // Venues
  venues: {
    title: string
    description: string
    viewVenue: string
    venueDetails: string
    upcomingMatches: string
    capacity: string
    location: string
    facilities: string
    gettingThere: string
    nearbyAttractions: string
  }

  // Schedule
  schedule: {
    title: string
    description: string
    allMatches: string
    byTeam: string
    byStage: string
    today: string
    tomorrow: string
    thisWeek: string
    poolStage: string
    knockoutStage: string
    roundOf16: string
    quarterFinals: string
    semiFinals: string
    bronzeFinal: string
    final: string
    matchDetails: string
    getTickets: string
  }

  // Tickets
  tickets: {
    title: string
    description: string
    buyNow: string
    selectMatch: string
    priceFrom: string
    availability: string
    matchTickets: string
    premiumExperience: string
    hospitalityPackages: string
    groupBookings: string
    terms: string
    refundPolicy: string
    deliveryInfo: string
    finalTickets: {
      title: string
      description: string
      features: string[]
    }
    semiFinalTickets: {
      title: string
      description: string
      features: string[]
    }
  }

  // Guide (Host Cities)
  guide: {
    title: string
    description: string
    exploreCity: string
    attractions: string
    gettingAround: string
    accommodation: string
    dining: string
    weather: string
    localTips: string
    venues: string
    nearbyVenues: string
    topAttractions: string
    mustSee: string
    localCulture: string
  }

  // Match stages
  stages: {
    pool: string
    'round-16': string
    'quarter-final': string
    'semi-final': string
    'bronze-final': string
    final: string
  }

  // Time and dates
  time: {
    days: string
    hours: string
    minutes: string
    seconds: string
    matchTime: string
    localTime: string
  }

  // Footer
  footer: {
    tournament: string
    practical: string
    legal: string
    social: string
    about: string
    news: string
    legacy: string
    travel: string
    accommodation: string
    transport: string
    privacy: string
    terms: string
    cookies: string
    followUs: string
    copyright: string
  }

  // Errors
  errors: {
    pageNotFound: string
    teamNotFound: string
    venueNotFound: string
    matchNotFound: string
    cityNotFound: string
    generalError: string
  }

  // Language selector
  language: {
    select: string
    current: string
  }
}

export const translations: Record<Language, TranslationKeys> = {
  en: {
    nav: {
      home: 'Home',
      teams: 'Teams',
      venues: 'Venues',
      guide: 'Guide',
      schedule: 'Schedule',
      tickets: 'Tickets',
      matches: 'Matches',
      hostCities: 'Host Cities'
    },
    common: {
      loading: 'Loading...',
      error: 'Error',
      notFound: 'Not Found',
      backToHome: 'Back to Home',
      learnMore: 'Learn More',
      viewAll: 'View All',
      search: 'Search',
      filter: 'Filter',
      sort: 'Sort',
      date: 'Date',
      time: 'Time',
      venue: 'Venue',
      tickets: 'Tickets',
      buyTickets: 'Buy Tickets',
      soldOut: 'Sold Out',
      available: 'Available',
      capacity: 'Capacity',
      kickoff: 'Kickoff',
      versus: 'vs',
      group: 'Group',
      stage: 'Stage',
      ranking: 'World Ranking',
      city: 'City',
      country: 'Country',
      showMore: 'Show More',
      showLess: 'Show Less'
    },
    home: {
      hero: {
        title: 'Rugby World Cup 2027',
        subtitle: 'Australia',
        description: 'Experience the pinnacle of international rugby in Australia. Get your tickets now for the world\'s third-largest sporting event.',
        countdownLabel: 'Tournament begins in',
        getTicketsButton: 'Get Tickets',
        viewScheduleButton: 'View Schedule'
      },
      sections: {
        upcomingMatches: 'Upcoming Matches',
        participatingTeams: 'Participating Teams',
        hostVenues: 'Host Venues',
        newsletter: 'Stay Updated'
      },
      newsletter: {
        title: 'Get the latest updates',
        description: 'Subscribe to receive news, match updates, and exclusive offers.',
        placeholder: 'Enter your email address',
        subscribe: 'Subscribe',
        success: 'Successfully subscribed!',
        error: 'Failed to subscribe. Please try again.'
      }
    },
    teams: {
      title: 'Participating Teams',
      description: 'Meet the 24 teams competing for rugby\'s ultimate prize in Australia.',
      groupLabel: 'Pool Group',
      viewTeam: 'View Team',
      teamProfile: 'Team Profile',
      teamSchedule: 'Team Schedule',
      worldRanking: 'World Ranking',
      poolMatches: 'Pool Matches',
      knockoutMatches: 'Knockout Matches',
      previousMatches: 'Previous Matches',
      upcomingMatches: 'Upcoming Matches',
      teamStats: 'Team Statistics'
    },
    venues: {
      title: 'Host Venues',
      description: 'Discover the iconic stadiums hosting Rugby World Cup 2027 matches across Australia.',
      viewVenue: 'View Venue',
      venueDetails: 'Venue Details',
      upcomingMatches: 'Upcoming Matches',
      capacity: 'Capacity',
      location: 'Location',
      facilities: 'Facilities',
      gettingThere: 'Getting There',
      nearbyAttractions: 'Nearby Attractions'
    },
    schedule: {
      title: 'Match Schedule',
      description: 'View the complete fixture list for Rugby World Cup 2027.',
      allMatches: 'All Matches',
      byTeam: 'By Team',
      byStage: 'By Stage',
      today: 'Today',
      tomorrow: 'Tomorrow',
      thisWeek: 'This Week',
      poolStage: 'Pool Stage',
      knockoutStage: 'Knockout Stage',
      roundOf16: 'Round of 16',
      quarterFinals: 'Quarter Finals',
      semiFinals: 'Semi Finals',
      bronzeFinal: 'Bronze Final',
      final: 'Final',
      matchDetails: 'Match Details',
      getTickets: 'Get Tickets'
    },
    tickets: {
      title: 'Tickets',
      description: 'Secure your seats for Rugby World Cup 2027. Experience the world\'s best rugby teams compete in Australia.',
      buyNow: 'Buy Now',
      selectMatch: 'Select Match',
      priceFrom: 'From',
      availability: 'Availability',
      matchTickets: 'Match Tickets',
      premiumExperience: 'Premium Experience',
      hospitalityPackages: 'Hospitality Packages',
      groupBookings: 'Group Bookings',
      terms: 'Terms & Conditions',
      refundPolicy: 'Refund Policy',
      deliveryInfo: 'Ticket Delivery',
      finalTickets: {
        title: 'Final Tickets',
        description: 'Witness rugby history at the Rugby World Cup 2027 Final.',
        features: [
          'Premium seating options available',
          'Commemorative merchandise included',
          'Access to exclusive pre-match events',
          'Official match program'
        ]
      },
      semiFinalTickets: {
        title: 'Semi-Final Tickets',
        description: 'Experience the intensity of the Rugby World Cup Semi-Finals.',
        features: [
          'Choose from multiple venues',
          'Premium and standard seating',
          'Official merchandise available',
          'Food and beverage packages'
        ]
      }
    },
    guide: {
      title: 'Host Cities Guide',
      description: 'Explore Australia\'s vibrant host cities and plan your Rugby World Cup 2027 experience.',
      exploreCity: 'Explore City',
      attractions: 'Attractions',
      gettingAround: 'Getting Around',
      accommodation: 'Accommodation',
      dining: 'Dining',
      weather: 'Weather',
      localTips: 'Local Tips',
      venues: 'Venues',
      nearbyVenues: 'Nearby Venues',
      topAttractions: 'Top Attractions',
      mustSee: 'Must See',
      localCulture: 'Local Culture'
    },
    stages: {
      pool: 'Pool Stage',
      'round-16': 'Round of 16',
      'quarter-final': 'Quarter Final',
      'semi-final': 'Semi Final',
      'bronze-final': 'Bronze Final',
      final: 'Final'
    },
    time: {
      days: 'days',
      hours: 'hours',
      minutes: 'minutes',
      seconds: 'seconds',
      matchTime: 'Match Time',
      localTime: 'Local Time'
    },
    footer: {
      tournament: 'Tournament',
      practical: 'Practical Info',
      legal: 'Legal',
      social: 'Follow Us',
      about: 'About RWC 2027',
      news: 'News',
      legacy: 'Tournament Legacy',
      travel: 'Travel Info',
      accommodation: 'Accommodation',
      transport: 'Transport',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookies: 'Cookie Policy',
      followUs: 'Follow Us',
      copyright: '© 2024 Rugby World Cup 2027 Australia. All rights reserved.'
    },
    errors: {
      pageNotFound: 'Page not found',
      teamNotFound: 'Team not found',
      venueNotFound: 'Venue not found',
      matchNotFound: 'Match not found',
      cityNotFound: 'City not found',
      generalError: 'Something went wrong'
    },
    language: {
      select: 'Select Language',
      current: 'English'
    }
  },

  fr: {
    nav: {
      home: 'Accueil',
      teams: 'Équipes',
      venues: 'Stades',
      guide: 'Guide',
      schedule: 'Programme',
      tickets: 'Billets',
      matches: 'Matchs',
      hostCities: 'Villes Hôtes'
    },
    common: {
      loading: 'Chargement...',
      error: 'Erreur',
      notFound: 'Non trouvé',
      backToHome: 'Retour à l\'accueil',
      learnMore: 'En savoir plus',
      viewAll: 'Voir tout',
      search: 'Rechercher',
      filter: 'Filtrer',
      sort: 'Trier',
      date: 'Date',
      time: 'Heure',
      venue: 'Stade',
      tickets: 'Billets',
      buyTickets: 'Acheter des billets',
      soldOut: 'Complet',
      available: 'Disponible',
      capacity: 'Capacité',
      kickoff: 'Coup d\'envoi',
      versus: 'vs',
      group: 'Groupe',
      stage: 'Phase',
      ranking: 'Classement mondial',
      city: 'Ville',
      country: 'Pays',
      showMore: 'Afficher plus',
      showLess: 'Afficher moins'
    },
    home: {
      hero: {
        title: 'Coupe du Monde de Rugby 2027',
        subtitle: 'Australie',
        description: 'Vivez le summum du rugby international en Australie. Obtenez vos billets maintenant pour le troisième plus grand événement sportif au monde.',
        countdownLabel: 'Le tournoi commence dans',
        getTicketsButton: 'Obtenir des billets',
        viewScheduleButton: 'Voir le programme'
      },
      sections: {
        upcomingMatches: 'Prochains matchs',
        participatingTeams: 'Équipes participantes',
        hostVenues: 'Stades hôtes',
        newsletter: 'Restez informé'
      },
      newsletter: {
        title: 'Recevez les dernières mises à jour',
        description: 'Abonnez-vous pour recevoir les actualités, les mises à jour des matchs et les offres exclusives.',
        placeholder: 'Entrez votre adresse e-mail',
        subscribe: 'S\'abonner',
        success: 'Abonnement réussi !',
        error: 'Échec de l\'abonnement. Veuillez réessayer.'
      }
    },
    teams: {
      title: 'Équipes participantes',
      description: 'Rencontrez les 20 équipes qui se disputent le prix ultime du rugby en Australie.',
      groupLabel: 'Groupe de poule',
      viewTeam: 'Voir l\'équipe',
      teamProfile: 'Profil de l\'équipe',
      teamSchedule: 'Programme de l\'équipe',
      worldRanking: 'Classement mondial',
      poolMatches: 'Matchs de poule',
      knockoutMatches: 'Matchs à élimination',
      previousMatches: 'Matchs précédents',
      upcomingMatches: 'Prochains matchs',
      teamStats: 'Statistiques de l\'équipe'
    },
    venues: {
      title: 'Stades hôtes',
      description: 'Découvrez les stades emblématiques qui accueillent les matchs de la Coupe du Monde de Rugby 2027 à travers l\'Australie.',
      viewVenue: 'Voir le stade',
      venueDetails: 'Détails du stade',
      upcomingMatches: 'Prochains matchs',
      capacity: 'Capacité',
      location: 'Localisation',
      facilities: 'Installations',
      gettingThere: 'Comment s\'y rendre',
      nearbyAttractions: 'Attractions à proximité'
    },
    schedule: {
      title: 'Programme des matchs',
      description: 'Consultez la liste complète des fixtures pour la Coupe du Monde de Rugby 2027.',
      allMatches: 'Tous les matchs',
      byTeam: 'Par équipe',
      byStage: 'Par phase',
      today: 'Aujourd\'hui',
      tomorrow: 'Demain',
      thisWeek: 'Cette semaine',
      poolStage: 'Phase de poules',
      knockoutStage: 'Phase à élimination',
      roundOf16: 'Huitièmes de finale',
      quarterFinals: 'Quarts de finale',
      semiFinals: 'Demi-finales',
      bronzeFinal: 'Finale bronze',
      final: 'Finale',
      matchDetails: 'Détails du match',
      getTickets: 'Obtenir des billets'
    },
    tickets: {
      title: 'Billets',
      description: 'Réservez vos places pour la Coupe du Monde de Rugby 2027. Vivez l\'expérience des meilleures équipes de rugby du monde en compétition en Australie.',
      buyNow: 'Acheter maintenant',
      selectMatch: 'Sélectionner un match',
      priceFrom: 'À partir de',
      availability: 'Disponibilité',
      matchTickets: 'Billets de match',
      premiumExperience: 'Expérience premium',
      hospitalityPackages: 'Forfaits hospitalité',
      groupBookings: 'Réservations de groupe',
      terms: 'Conditions générales',
      refundPolicy: 'Politique de remboursement',
      deliveryInfo: 'Livraison des billets',
      finalTickets: {
        title: 'Billets de finale',
        description: 'Assistez à l\'histoire du rugby lors de la finale de la Coupe du Monde de Rugby 2027.',
        features: [
          'Options de sièges premium disponibles',
          'Produits commémoratifs inclus',
          'Accès aux événements exclusifs d\'avant-match',
          'Programme officiel du match'
        ]
      },
      semiFinalTickets: {
        title: 'Billets de demi-finale',
        description: 'Vivez l\'intensité des demi-finales de la Coupe du Monde de Rugby.',
        features: [
          'Choisissez parmi plusieurs stades',
          'Places premium et standard',
          'Produits officiels disponibles',
          'Forfaits nourriture et boissons'
        ]
      }
    },
    guide: {
      title: 'Guide des villes hôtes',
      description: 'Explorez les villes hôtes dynamiques de l\'Australie et planifiez votre expérience de la Coupe du Monde de Rugby 2027.',
      exploreCity: 'Explorer la ville',
      attractions: 'Attractions',
      gettingAround: 'Se déplacer',
      accommodation: 'Hébergement',
      dining: 'Restauration',
      weather: 'Météo',
      localTips: 'Conseils locaux',
      venues: 'Stades',
      nearbyVenues: 'Stades à proximité',
      topAttractions: 'Principales attractions',
      mustSee: 'À voir absolument',
      localCulture: 'Culture locale'
    },
    stages: {
      pool: 'Phase de poules',
      'round-16': 'Huitièmes de finale',
      'quarter-final': 'Quart de finale',
      'semi-final': 'Demi-finale',
      'bronze-final': 'Finale bronze',
      final: 'Finale'
    },
    time: {
      days: 'jours',
      hours: 'heures',
      minutes: 'minutes',
      seconds: 'secondes',
      matchTime: 'Heure du match',
      localTime: 'Heure locale'
    },
    footer: {
      tournament: 'Tournoi',
      practical: 'Infos pratiques',
      legal: 'Légal',
      social: 'Suivez-nous',
      about: 'À propos RWC 2027',
      news: 'Actualités',
      legacy: 'Héritage du tournoi',
      travel: 'Infos voyage',
      accommodation: 'Hébergement',
      transport: 'Transport',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions d\'utilisation',
      cookies: 'Politique de cookies',
      followUs: 'Suivez-nous',
      copyright: '© 2024 Coupe du Monde de Rugby 2027 Australie. Tous droits réservés.'
    },
    errors: {
      pageNotFound: 'Page non trouvée',
      teamNotFound: 'Équipe non trouvée',
      venueNotFound: 'Stade non trouvé',
      matchNotFound: 'Match non trouvé',
      cityNotFound: 'Ville non trouvée',
      generalError: 'Quelque chose a mal tourné'
    },
    language: {
      select: 'Sélectionner la langue',
      current: 'Français'
    }
  },

  es: {
    nav: {
      home: 'Inicio',
      teams: 'Equipos',
      venues: 'Estadios',
      guide: 'Guía',
      schedule: 'Calendario',
      tickets: 'Entradas',
      matches: 'Partidos',
      hostCities: 'Ciudades Sede'
    },
    common: {
      loading: 'Cargando...',
      error: 'Error',
      notFound: 'No encontrado',
      backToHome: 'Volver al inicio',
      learnMore: 'Saber más',
      viewAll: 'Ver todo',
      search: 'Buscar',
      filter: 'Filtrar',
      sort: 'Ordenar',
      date: 'Fecha',
      time: 'Hora',
      venue: 'Estadio',
      tickets: 'Entradas',
      buyTickets: 'Comprar entradas',
      soldOut: 'Agotado',
      available: 'Disponible',
      capacity: 'Capacidad',
      kickoff: 'Inicio',
      versus: 'vs',
      group: 'Grupo',
      stage: 'Fase',
      ranking: 'Ranking mundial',
      city: 'Ciudad',
      country: 'País',
      showMore: 'Mostrar más',
      showLess: 'Mostrar menos'
    },
    home: {
      hero: {
        title: 'Copa Mundial de Rugby 2027',
        subtitle: 'Australia',
        description: 'Experimenta la cúspide del rugby internacional en Australia. Consigue tus entradas ahora para el tercer evento deportivo más grande del mundo.',
        countdownLabel: 'El torneo comienza en',
        getTicketsButton: 'Conseguir entradas',
        viewScheduleButton: 'Ver calendario'
      },
      sections: {
        upcomingMatches: 'Próximos partidos',
        participatingTeams: 'Equipos participantes',
        hostVenues: 'Estadios sede',
        newsletter: 'Mantente actualizado'
      },
      newsletter: {
        title: 'Recibe las últimas actualizaciones',
        description: 'Suscríbete para recibir noticias, actualizaciones de partidos y ofertas exclusivas.',
        placeholder: 'Ingresa tu dirección de email',
        subscribe: 'Suscribirse',
        success: '¡Suscripción exitosa!',
        error: 'Error en la suscripción. Por favor intenta de nuevo.'
      }
    },
    teams: {
      title: 'Equipos participantes',
      description: 'Conoce los 20 equipos que compiten por el premio máximo del rugby en Australia.',
      groupLabel: 'Grupo de piscina',
      viewTeam: 'Ver equipo',
      teamProfile: 'Perfil del equipo',
      teamSchedule: 'Calendario del equipo',
      worldRanking: 'Ranking mundial',
      poolMatches: 'Partidos de grupo',
      knockoutMatches: 'Partidos eliminatorios',
      previousMatches: 'Partidos anteriores',
      upcomingMatches: 'Próximos partidos',
      teamStats: 'Estadísticas del equipo'
    },
    venues: {
      title: 'Estadios sede',
      description: 'Descubre los estadios icónicos que albergan los partidos de la Copa Mundial de Rugby 2027 en toda Australia.',
      viewVenue: 'Ver estadio',
      venueDetails: 'Detalles del estadio',
      upcomingMatches: 'Próximos partidos',
      capacity: 'Capacidad',
      location: 'Ubicación',
      facilities: 'Instalaciones',
      gettingThere: 'Cómo llegar',
      nearbyAttractions: 'Atracciones cercanas'
    },
    schedule: {
      title: 'Calendario de partidos',
      description: 'Ve la lista completa de partidos para la Copa Mundial de Rugby 2027.',
      allMatches: 'Todos los partidos',
      byTeam: 'Por equipo',
      byStage: 'Por fase',
      today: 'Hoy',
      tomorrow: 'Mañana',
      thisWeek: 'Esta semana',
      poolStage: 'Fase de grupos',
      knockoutStage: 'Fase eliminatoria',
      roundOf16: 'Octavos de final',
      quarterFinals: 'Cuartos de final',
      semiFinals: 'Semifinales',
      bronzeFinal: 'Final de bronce',
      final: 'Final',
      matchDetails: 'Detalles del partido',
      getTickets: 'Conseguir entradas'
    },
    tickets: {
      title: 'Entradas',
      description: 'Asegura tus asientos para la Copa Mundial de Rugby 2027. Experimenta los mejores equipos de rugby del mundo compitiendo en Australia.',
      buyNow: 'Comprar ahora',
      selectMatch: 'Seleccionar partido',
      priceFrom: 'Desde',
      availability: 'Disponibilidad',
      matchTickets: 'Entradas de partido',
      premiumExperience: 'Experiencia premium',
      hospitalityPackages: 'Paquetes de hospitalidad',
      groupBookings: 'Reservas grupales',
      terms: 'Términos y condiciones',
      refundPolicy: 'Política de reembolso',
      deliveryInfo: 'Entrega de entradas',
      finalTickets: {
        title: 'Entradas de la final',
        description: 'Presencia la historia del rugby en la Final de la Copa Mundial de Rugby 2027.',
        features: [
          'Opciones de asientos premium disponibles',
          'Mercancía conmemorativa incluida',
          'Acceso a eventos exclusivos pre-partido',
          'Programa oficial del partido'
        ]
      },
      semiFinalTickets: {
        title: 'Entradas de semifinal',
        description: 'Experimenta la intensidad de las semifinales de la Copa Mundial de Rugby.',
        features: [
          'Elige entre múltiples estadios',
          'Asientos premium y estándar',
          'Mercancía oficial disponible',
          'Paquetes de comida y bebida'
        ]
      }
    },
    guide: {
      title: 'Guía de ciudades sede',
      description: 'Explora las vibrantes ciudades sede de Australia y planifica tu experiencia de la Copa Mundial de Rugby 2027.',
      exploreCity: 'Explorar ciudad',
      attractions: 'Atracciones',
      gettingAround: 'Moverse por la ciudad',
      accommodation: 'Alojamiento',
      dining: 'Gastronomía',
      weather: 'Clima',
      localTips: 'Consejos locales',
      venues: 'Estadios',
      nearbyVenues: 'Estadios cercanos',
      topAttractions: 'Principales atracciones',
      mustSee: 'Imprescindibles',
      localCulture: 'Cultura local'
    },
    stages: {
      pool: 'Fase de grupos',
      'round-16': 'Octavos de final',
      'quarter-final': 'Cuarto de final',
      'semi-final': 'Semifinal',
      'bronze-final': 'Final de bronce',
      final: 'Final'
    },
    time: {
      days: 'días',
      hours: 'horas',
      minutes: 'minutos',
      seconds: 'segundos',
      matchTime: 'Hora del partido',
      localTime: 'Hora local'
    },
    footer: {
      tournament: 'Torneo',
      practical: 'Info práctica',
      legal: 'Legal',
      social: 'Síguenos',
      about: 'Acerca de RWC 2027',
      news: 'Noticias',
      legacy: 'Legado del torneo',
      travel: 'Info de viaje',
      accommodation: 'Alojamiento',
      transport: 'Transporte',
      privacy: 'Política de privacidad',
      terms: 'Términos de servicio',
      cookies: 'Política de cookies',
      followUs: 'Síguenos',
      copyright: '© 2024 Copa Mundial de Rugby 2027 Australia. Todos los derechos reservados.'
    },
    errors: {
      pageNotFound: 'Página no encontrada',
      teamNotFound: 'Equipo no encontrado',
      venueNotFound: 'Estadio no encontrado',
      matchNotFound: 'Partido no encontrado',
      cityNotFound: 'Ciudad no encontrada',
      generalError: 'Algo salió mal'
    },
    language: {
      select: 'Seleccionar idioma',
      current: 'Español'
    }
  },

  ja: {
    nav: {
      home: 'ホーム',
      teams: 'チーム',
      venues: '会場',
      guide: 'ガイド',
      schedule: 'スケジュール',
      tickets: 'チケット',
      matches: '試合',
      hostCities: '開催都市'
    },
    common: {
      loading: '読み込み中...',
      error: 'エラー',
      notFound: '見つかりません',
      backToHome: 'ホームに戻る',
      learnMore: '詳細を見る',
      viewAll: 'すべて見る',
      search: '検索',
      filter: 'フィルター',
      sort: '並び替え',
      date: '日付',
      time: '時間',
      venue: '会場',
      tickets: 'チケット',
      buyTickets: 'チケット購入',
      soldOut: '完売',
      available: '利用可能',
      capacity: '収容人数',
      kickoff: 'キックオフ',
      versus: 'vs',
      group: 'グループ',
      stage: 'ステージ',
      ranking: '世界ランキング',
      city: '都市',
      country: '国',
      showMore: '詳細表示',
      showLess: '簡略表示'
    },
    home: {
      hero: {
        title: 'ラグビーワールドカップ2027',
        subtitle: 'オーストラリア',
        description: 'オーストラリアで国際ラグビーの頂点を体験してください。世界で3番目に大きなスポーツイベントのチケットを今すぐ入手しましょう。',
        countdownLabel: 'トーナメント開始まで',
        getTicketsButton: 'チケット入手',
        viewScheduleButton: 'スケジュール確認'
      },
      sections: {
        upcomingMatches: '次の試合',
        participatingTeams: '参加チーム',
        hostVenues: '開催会場',
        newsletter: '最新情報'
      },
      newsletter: {
        title: '最新情報を受け取る',
        description: 'ニュース、試合の更新情報、限定オファーを受け取るために購読してください。',
        placeholder: 'メールアドレスを入力',
        subscribe: '購読',
        success: '購読が完了しました！',
        error: '購読に失敗しました。もう一度お試しください。'
      }
    },
    teams: {
      title: '参加チーム',
      description: 'オーストラリアでラグビーの究極の賞を競う20チームをご紹介します。',
      groupLabel: 'プールグループ',
      viewTeam: 'チームを見る',
      teamProfile: 'チームプロフィール',
      teamSchedule: 'チームスケジュール',
      worldRanking: '世界ランキング',
      poolMatches: 'プール戦',
      knockoutMatches: 'ノックアウト戦',
      previousMatches: '過去の試合',
      upcomingMatches: '今後の試合',
      teamStats: 'チーム統計'
    },
    venues: {
      title: '開催会場',
      description: 'オーストラリア全土でラグビーワールドカップ2027の試合を開催する象徴的なスタジアムをご紹介します。',
      viewVenue: '会場を見る',
      venueDetails: '会場詳細',
      upcomingMatches: '今後の試合',
      capacity: '収容人数',
      location: '場所',
      facilities: '施設',
      gettingThere: 'アクセス',
      nearbyAttractions: '周辺アトラクション'
    },
    schedule: {
      title: '試合スケジュール',
      description: 'ラグビーワールドカップ2027の完全な試合一覧をご確認ください。',
      allMatches: 'すべての試合',
      byTeam: 'チーム別',
      byStage: 'ステージ別',
      today: '今日',
      tomorrow: '明日',
      thisWeek: '今週',
      poolStage: 'プールステージ',
      knockoutStage: 'ノックアウトステージ',
      roundOf16: '16回戦',
      quarterFinals: '準々決勝',
      semiFinals: '準決勝',
      bronzeFinal: '3位決定戦',
      final: '決勝',
      matchDetails: '試合詳細',
      getTickets: 'チケット入手'
    },
    tickets: {
      title: 'チケット',
      description: 'ラグビーワールドカップ2027の座席を確保してください。オーストラリアで競う世界最高のラグビーチームを体験しましょう。',
      buyNow: '今すぐ購入',
      selectMatch: '試合を選択',
      priceFrom: 'から',
      availability: '空席状況',
      matchTickets: '試合チケット',
      premiumExperience: 'プレミアム体験',
      hospitalityPackages: 'ホスピタリティパッケージ',
      groupBookings: 'グループ予約',
      terms: '利用規約',
      refundPolicy: '返金ポリシー',
      deliveryInfo: 'チケット配送',
      finalTickets: {
        title: '決勝チケット',
        description: 'ラグビーワールドカップ2027決勝でラグビーの歴史を目撃してください。',
        features: [
          'プレミアムシートオプション利用可能',
          '記念品が含まれています',
          '限定試合前イベントへのアクセス',
          '公式試合プログラム'
        ]
      },
      semiFinalTickets: {
        title: '準決勝チケット',
        description: 'ラグビーワールドカップ準決勝の熱気を体験してください。',
        features: [
          '複数の会場から選択',
          'プレミアムおよびスタンダードシート',
          '公式グッズ利用可能',
          '飲食パッケージ'
        ]
      }
    },
    guide: {
      title: '開催都市ガイド',
      description: 'オーストラリアの活気ある開催都市を探索し、ラグビーワールドカップ2027の体験を計画してください。',
      exploreCity: '都市を探索',
      attractions: 'アトラクション',
      gettingAround: '市内移動',
      accommodation: '宿泊',
      dining: 'グルメ',
      weather: '天気',
      localTips: '地元のヒント',
      venues: '会場',
      nearbyVenues: '近隣会場',
      topAttractions: '主要アトラクション',
      mustSee: '必見',
      localCulture: '地元文化'
    },
    stages: {
      pool: 'プールステージ',
      'round-16': '16回戦',
      'quarter-final': '準々決勝',
      'semi-final': '準決勝',
      'bronze-final': '3位決定戦',
      final: '決勝'
    },
    time: {
      days: '日',
      hours: '時間',
      minutes: '分',
      seconds: '秒',
      matchTime: '試合時間',
      localTime: '現地時間'
    },
    footer: {
      tournament: 'トーナメント',
      practical: '実用情報',
      legal: '法的事項',
      social: 'フォローする',
      about: 'RWC 2027について',
      news: 'ニュース',
      legacy: 'トーナメントの遺産',
      travel: '旅行情報',
      accommodation: '宿泊',
      transport: '交通',
      privacy: 'プライバシーポリシー',
      terms: '利用規約',
      cookies: 'クッキーポリシー',
      followUs: 'フォローする',
      copyright: '© 2024 ラグビーワールドカップ2027オーストラリア。無断転載を禁じます。'
    },
    errors: {
      pageNotFound: 'ページが見つかりません',
      teamNotFound: 'チームが見つかりません',
      venueNotFound: '会場が見つかりません',
      matchNotFound: '試合が見つかりません',
      cityNotFound: '都市が見つかりません',
      generalError: 'エラーが発生しました'
    },
    language: {
      select: '言語を選択',
      current: '日本語'
    }
  }
}

export function getTranslation(language: Language): TranslationKeys {
  return translations[language] || translations.en
}

export function useTranslation(language: Language = 'en') {
  return getTranslation(language)
}