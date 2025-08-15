import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema } from '../../lib/seo';
import { AFFILIATE_URL, TICKET_AFFILIATE_ID } from '../../lib/constants';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Travel Essentials - Rugby World Cup 2027 Australia Complete Guide',
  description: 'Essential travel information for Rugby World Cup 2027 in Australia. What to pack, power outlets, tipping culture, emergency numbers, medical services, travel insurance, and Australian slang guide.',
  keywords: [
    'australia travel essentials',
    'rugby world cup 2027 packing',
    'australia power outlets adapters',
    'australia emergency numbers',
    'australia travel insurance',
    'australian slang language guide',
    'australia tipping culture',
    'australia medical services'
  ],
  canonical: '/travel/essentials'
});

const packingGuide = {
  clothing: {
    october: [
      'Light layers - t-shirts, long sleeves, light sweater',
      'Light jacket or windbreaker for evenings',
      'Long pants/trousers (jeans, chinos)',
      'Shorts for warmer days',
      'Light dress/business casual for dining',
      'Comfortable walking shoes',
      'Sandals or flip-flops',
      'Light scarf (optional)',
      'Rain jacket or compact umbrella'
    ],
    november: [
      'Summer clothing - t-shirts, tank tops, shorts',
      'Light long sleeves for air conditioning',
      'Light pants for cooler evenings',
      'Sundress or light casual wear',
      'Swimwear (for beaches/pools)',
      'Comfortable walking shoes',
      'Sandals or thongs (flip-flops)',
      'Sun hat or cap',
      'Light cardigan for indoor spaces'
    ]
  },
  essentials: [
    'Passport and visa documents (keep copies separate)',
    'Travel insurance documents',
    'International driving permit (if driving)',
    'Credit cards and some cash (AUD)',
    'Phone and charger with Australian adapter',
    'Camera and extra batteries/memory cards',
    'Personal medications with prescriptions',
    'Sunscreen (SPF 30+ minimum)',
    'Sunglasses (UV protection essential)',
    'First aid kit basics',
    'Hand sanitizer',
    'Reusable water bottle'
  ],
  electronics: [
    'Universal power adapter (Type I for Australia)',
    'Portable phone charger/power bank',
    'Travel-sized extension cord',
    'Headphones/earbuds',
    'E-reader or tablet',
    'Voltage converter (if needed for appliances)',
    'Camera charger and cables',
    'Bluetooth speaker (for accommodation)'
  ],
  rugbySpecific: [
    'Team jersey or rugby clothing',
    'Comfortable stadium seating cushion',
    'Small backpack for match days',
    'Binoculars for stadium upper tiers',
    'Noise-making items (within stadium rules)',
    'Cash for stadium food/merchandise',
    'Portable phone charger for long match days',
    'Weather protection gear'
  ]
};

const powerAndElectronics = {
  plugType: 'Type I (Australia/New Zealand standard)',
  voltage: '230V',
  frequency: '50Hz',
  plugDescription: 'Three flat pins in triangular pattern (two angled flat pins + earth pin)',
  adapters: [
    'Universal adapters work but buy quality brands',
    'Available at airports, electronics stores, pharmacies',
    'Many hotels have universal outlets in bathrooms',
    'USB charging widely available in accommodations'
  ],
  voltageInfo: [
    'Most modern devices (phones, laptops) handle 110-240V automatically',
    'Check device label for "100-240V" compatibility',
    'Hair dryers, curling irons often need voltage converters',
    'Bring travel-sized dual voltage appliances'
  ],
  chargingTips: [
    'Carry portable power banks for long sightseeing days',
    'Hotels usually have bedside USB ports',
    'Cafes and restaurants commonly have charging outlets',
    'Download offline maps before exploring',
    'Screenshot important information as backup'
  ]
};

const emergencyServices = {
  primaryNumber: '000',
  description: 'Free from any phone (landline or mobile) anywhere in Australia',
  covers: 'Police, Fire Brigade, Ambulance',
  alternatives: [
    'Police non-emergency: Contact local police station',
    'Health Direct: 1800 022 222 (24-hour health advice)',
    'Poisons Information: 13 11 26',
    'Lifeline Crisis Support: 13 11 14',
    'Mental Health Crisis: Local hospital emergency'
  ],
  importantNumbers: [
    '132 500 - SES (State Emergency Service) for storm damage',
    '112 - Alternative emergency number from mobile phones',
    '106 - Text emergency service for hearing/speech impaired',
    '000 on WhatsApp, Skype, and other services now supported'
  ],
  embassyInfo: 'Save your embassy contact details in case of passport loss or legal issues'
};

const medicalServices = {
  system: 'Australia has excellent healthcare but can be expensive for visitors',
  emergencies: [
    'Call 000 for life-threatening emergencies',
    'Emergency departments at public hospitals',
    'No payment required for immediate life-threatening care',
    'Present travel insurance details when possible'
  ],
  nonEmergency: [
    'GP (General Practitioner) clinics - $80-150 consultation',
    'Walk-in clinics and medical centers',
    '24-hour medical helpline: Health Direct 1800 022 222',
    'Pharmacy chains: Chemist Warehouse, Priceline, Terry White'
  ],
  prescriptions: [
    'Bring sufficient personal medications for entire trip',
    'Carry prescriptions in original packaging with labels',
    'Bring doctor\'s letter for controlled substances',
    'Australian pharmacies can help with minor ailments',
    'Travel insurance may cover prescription costs'
  ],
  insurance: [
    'Travel insurance strongly recommended - medical costs are high',
    'Ensure coverage includes sports/adventure activities',
    'Cover emergency medical evacuation if needed',
    'Keep insurance documents easily accessible',
    'Some credit cards include travel insurance'
  ]
};

const tippingCulture = {
  general: 'Tipping not mandatory but appreciated for good service',
  guidelines: [
    'Restaurants: 10% for good service, not expected for casual dining',
    'Taxis/Uber: Round up fare or small tip for good service',
    'Hotels: $2-5 per day for housekeeping, $5-10 for concierge help',
    'Tours: $10-20 per day for tour guides',
    'Hair salons/spas: 10% for exceptional service',
    'Food delivery: $2-5 depending on order size and weather'
  ],
  noTipping: [
    'Fast food restaurants and cafes (counter service)',
    'Retail stores and shopping',
    'Public transport',
    'Movie theaters',
    'Self-service venues',
    'Government services'
  ],
  rugbyTipping: [
    'Stadium concessions: No tipping expected',
    'Restaurant reservations through concierge: Small tip appreciated',
    'Private tour guides to rugby venues: 10-15% of tour cost',
    'Hotel staff helping with match tickets/transport: $5-10'
  ]
};

const australianSlang = [
  { term: 'G\'day', meaning: 'Good day - common greeting' },
  { term: 'How ya going?', meaning: 'How are you? (not asking for directions)' },
  { term: 'No worries', meaning: 'No problem/You\'re welcome' },
  { term: 'Cheers', meaning: 'Thank you/goodbye' },
  { term: 'Arvo', meaning: 'Afternoon' },
  { term: 'Brekkie', meaning: 'Breakfast' },
  { term: 'Cuppa', meaning: 'Cup of tea/coffee' },
  { term: 'Servo', meaning: 'Gas/petrol station' },
  { term: 'Bottle-o', meaning: 'Liquor store' },
  { term: 'Thongs', meaning: 'Flip-flops (not underwear!)' },
  { term: 'Togs/Bathers', meaning: 'Swimming costume/bathing suit' },
  { term: 'Ute', meaning: 'Pickup truck/utility vehicle' },
  { term: 'Mozzie', meaning: 'Mosquito' },
  { term: 'Sunnies', meaning: 'Sunglasses' },
  { term: 'Footy', meaning: 'Football (AFL/Rugby League/Rugby Union)' },
  { term: 'Barbie', meaning: 'Barbecue' },
  { term: 'Fair dinkum', meaning: 'Genuine/real/true' },
  { term: 'She\'ll be right', meaning: 'Everything will be okay' },
  { term: 'Bloody oath', meaning: 'Absolutely/definitely' },
  { term: 'Reckon', meaning: 'Think/believe' },
  { term: 'Heaps', meaning: 'Lots/many' },
  { term: 'Chuck a U-ey', meaning: 'Make a U-turn' },
  { term: 'Arvo tea', meaning: 'Afternoon tea/snack' },
  { term: 'Too right', meaning: 'Absolutely correct' }
];

const culturalTips = [
  'Australians are generally laid-back and informal - first names are common',
  'Punctuality is respected - arrive on time for appointments and tours',
  'Queue etiquette is important - always wait your turn',
  'Australians appreciate direct communication and honesty',
  'Small talk about weather, sports, and travel is common',
  'Avoid discussing politics unless asked - Australians are politically diverse',
  'Environmental consciousness is high - use recycling bins',
  'Drink responsibly - public intoxication is frowned upon',
  'Respect Indigenous culture and sacred sites',
  'Sun safety is taken seriously - don\'t skip sunscreen'
];

const budgetTips = [
  {
    category: 'Food & Drink',
    tips: [
      'Buy groceries from Woolworths, Coles, IGA for self-catering',
      'Happy hour specials typically 5-7pm at bars and restaurants',
      'Food courts in shopping centers offer budget meals',
      'BYO (Bring Your Own) wine restaurants save on alcohol costs',
      'Pub meals often good value with large portions'
    ]
  },
  {
    category: 'Transport',
    tips: [
      'Buy weekly transport passes instead of daily tickets',
      'Walk in city centers - many attractions are close together',
      'Use ride-sharing apps during off-peak times',
      'Book flights and accommodation together for package deals',
      'Consider longer stays to reduce per-night accommodation costs'
    ]
  },
  {
    category: 'Attractions',
    tips: [
      'Many museums and galleries have free admission days',
      'City councils often run free walking tours',
      'Beaches and parks are free and beautiful',
      'Look for discount attraction passes for multiple venues',
      'Student/senior discounts widely available with ID'
    ]
  },
  {
    category: 'Shopping',
    tips: [
      'Duty-free shopping at airports for last-minute purchases',
      'Generic/house brand products in supermarkets are good quality',
      'Markets often have better prices than retail stores',
      'End-of-season sales (especially after Christmas)',
      'GST tax refund available at airports for purchases over $300'
    ]
  }
];

const safetyTips = [
  'Australia is one of the world\'s safest countries for tourists',
  'Standard travel safety precautions apply in cities',
  'Sun exposure is the biggest health risk - use SPF 30+ sunscreen',
  'Swim only at patrolled beaches between the flags',
  'Be aware of rip currents at beaches - ask lifeguards for advice',
  'Don\'t touch or feed wildlife - even "harmless" animals can bite',
  'Carry water when hiking or walking long distances',
  'Tell someone your plans when going to remote areas',
  'Keep valuables secure and don\'t leave items visible in cars',
  'Trust your instincts and remove yourself from uncomfortable situations'
];

const faqs = [
  {
    question: 'What power adapter do I need for Australia?',
    answer: 'Australia uses Type I power outlets with three flat pins in a triangular pattern. The voltage is 230V at 50Hz. You\'ll need a power adapter for most international devices, available at airports and electronics stores.'
  },
  {
    question: 'Is tipping expected in Australia?',
    answer: 'Tipping is not mandatory in Australia but is appreciated for good service. 10% at restaurants for good service is common, but not expected. Round up taxi fares or leave small tips for hotel staff if you received excellent service.'
  },
  {
    question: 'What should I pack for October/November weather?',
    answer: 'Pack layers for spring weather. October: light jacket, long sleeves, and pants for cooler evenings. November: summer clothes but bring light layers for air-conditioned spaces. Always pack sunscreen, sunglasses, and a hat.'
  },
  {
    question: 'Do I need travel insurance for Australia?',
    answer: 'While not mandatory, travel insurance is highly recommended. Australian healthcare is excellent but expensive for visitors. Ensure coverage includes medical expenses, trip cancellation, and any adventure activities you plan to do.'
  },
  {
    question: 'What are the emergency numbers in Australia?',
    answer: '000 is the primary emergency number for Police, Fire, and Ambulance. It\'s free from any phone and works nationwide. For non-emergency health advice, call Health Direct on 1800 022 222.'
  },
  {
    question: 'Can I use my medications in Australia?',
    answer: 'Bring sufficient personal medications in original packaging with prescriptions. For controlled substances, carry a doctor\'s letter. Australian pharmacies can help with minor issues, but bringing your own medicines is safest.'
  },
  {
    question: 'How much cash should I carry in Australia?',
    answer: 'Australia is largely cashless - cards are accepted everywhere. Carry $50-100 in cash for small vendors, tips, or emergencies. ATMs are widely available, and most venues accept contactless payments.'
  },
  {
    question: 'Is Australia dangerous for tourists?',
    answer: 'Australia is very safe for tourists. Standard travel precautions apply. The biggest health risk is sun exposure - use sunscreen. At beaches, swim between the flags and follow lifeguard instructions. Wildlife in cities poses minimal risk.'
  }
];

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Travel Guide', url: '/travel' },
  { name: 'Travel Essentials', url: '/travel/essentials' }
];

const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
const faqSchema = generateFAQSchema(faqs);

const essentialsGuideSchema = {
  "@context": "https://schema.org",
  "@type": "TravelGuide",
  "name": "Travel Essentials for Rugby World Cup 2027 Australia",
  "description": "Essential travel information for visitors to Australia during Rugby World Cup 2027",
  "about": {
    "@type": "Event",
    "name": "Rugby World Cup 2027",
    "location": {
      "@type": "Country",
      "name": "Australia"
    }
  }
};

export default function EssentialsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([essentialsGuideSchema, breadcrumbSchema, faqSchema])
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-700 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="mb-8">
            <ol className="flex flex-wrap text-sm text-blue-200">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.name} className="flex items-center">
                  {index > 0 && <span className="mx-2">/</span>}
                  {index < breadcrumbs.length - 1 ? (
                    <Link href={crumb.url} className="hover:text-white">
                      {crumb.name}
                    </Link>
                  ) : (
                    <span className="text-white">{crumb.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Travel Essentials
              <span className="block text-yellow-400 text-2xl md:text-3xl mt-2">
                Rugby World Cup 2027 Australia
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Everything you need to know before traveling to Australia. Packing guide, power outlets, 
              emergency numbers, cultural tips, and essential information for a smooth Rugby World Cup experience.
            </p>
          </div>
        </div>
      </section>

      {/* Packing Guide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              What to Pack for Rugby World Cup 2027
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-800 flex items-center">
                  <span className="text-3xl mr-3">🌸</span>
                  October Weather Clothing
                </h3>
                <p className="text-blue-700 mb-4">Spring weather: 15-25°C (59-77°F) - Pack layers!</p>
                <ul className="space-y-2">
                  {packingGuide.clothing.october.map((item, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-green-800 flex items-center">
                  <span className="text-3xl mr-3">☀️</span>
                  November Weather Clothing
                </h3>
                <p className="text-green-700 mb-4">Early summer: 18-28°C (64-82°F) - Warmer weather!</p>
                <ul className="space-y-2">
                  {packingGuide.clothing.november.map((item, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-purple-800">Travel Essentials</h3>
                <ul className="space-y-2">
                  {packingGuide.essentials.map((item, index) => (
                    <li key={index} className="flex items-start text-gray-600 text-sm">
                      <span className="text-purple-500 mr-2 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-orange-800">Electronics & Tech</h3>
                <ul className="space-y-2">
                  {packingGuide.electronics.map((item, index) => (
                    <li key={index} className="flex items-start text-gray-600 text-sm">
                      <span className="text-orange-500 mr-2 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-red-800">Rugby World Cup Specific</h3>
                <ul className="space-y-2">
                  {packingGuide.rugbySpecific.map((item, index) => (
                    <li key={index} className="flex items-start text-gray-600 text-sm">
                      <span className="text-red-500 mr-2 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Power and Electronics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Power Outlets and Electronics
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-800">Australian Power System</h3>
                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-bold text-blue-800">Plug Type: {powerAndElectronics.plugType}</h4>
                    <p className="text-blue-700 text-sm mt-1">{powerAndElectronics.plugDescription}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="font-bold text-gray-900">Voltage</div>
                      <div className="text-blue-600 text-lg">{powerAndElectronics.voltage}</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="font-bold text-gray-900">Frequency</div>
                      <div className="text-blue-600 text-lg">{powerAndElectronics.frequency}</div>
                    </div>
                  </div>
                </div>
                
                <h4 className="font-bold text-gray-900 mb-3">Power Adapter Tips:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {powerAndElectronics.adapters.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-green-800">Voltage Compatibility</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {powerAndElectronics.voltageInfo.map((info, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        {info}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-800">Charging Tips</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {powerAndElectronics.chargingTips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-purple-500 mr-2 mt-1">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services and Medical */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Emergency Services and Medical Information
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-red-800 flex items-center">
                  <span className="text-3xl mr-3">🚨</span>
                  Emergency Services
                </h3>
                
                <div className="p-6 bg-red-100 rounded-lg mb-6">
                  <h4 className="text-3xl font-bold text-red-800 text-center">{emergencyServices.primaryNumber}</h4>
                  <p className="text-red-700 text-center font-semibold">{emergencyServices.description}</p>
                  <p className="text-red-600 text-center text-sm mt-2">Covers: {emergencyServices.covers}</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Other Important Numbers:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {emergencyServices.alternatives.map((number, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-red-500 mr-2 mt-1">•</span>
                          {number}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Additional Services:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {emergencyServices.importantNumbers.map((number, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          {number}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-yellow-800"><strong>Embassy Tip:</strong> {emergencyServices.embassyInfo}</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-800 flex items-center">
                  <span className="text-3xl mr-3">🏥</span>
                  Medical Services
                </h3>
                <p className="text-gray-600 mb-6">{medicalServices.system}</p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-red-800 mb-2">Emergencies:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {medicalServices.emergencies.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-red-500 mr-2 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-blue-800 mb-2">Non-Emergency Care:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {medicalServices.nonEmergency.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-green-800 mb-2">Prescription Medicines:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {medicalServices.prescriptions.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-2">Travel Insurance:</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      {medicalServices.insurance.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tipping Culture */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Tipping Culture in Australia
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-green-50 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-green-800">When to Tip</h3>
                <p className="text-green-700 mb-4">{tippingCulture.general}</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  {tippingCulture.guidelines.map((guideline, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      {guideline}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-red-50 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-red-800">No Tipping Expected</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  {tippingCulture.noTipping.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-blue-800">Rugby World Cup Tipping</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  {tippingCulture.rugbyTipping.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">🏉</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Australian Slang */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Essential Australian Slang Guide
            </h2>
            <p className="text-lg text-center text-gray-600 mb-12">
              Learn some Aussie slang to help you communicate and connect with locals!
            </p>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {australianSlang.map((slang, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow border-l-4 border-yellow-500">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg text-yellow-800">"{slang.term}"</h3>
                    <span className="text-2xl">🇦🇺</span>
                  </div>
                  <p className="text-gray-600 mt-2">{slang.meaning}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Tips */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Cultural Tips for Australia
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                {culturalTips.slice(0, 5).map((tip, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-yellow-400 mr-3 mt-1 text-lg">🇦🇺</span>
                    <p className="text-blue-100">{tip}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {culturalTips.slice(5).map((tip, index) => (
                  <div key={index + 5} className="flex items-start">
                    <span className="text-yellow-400 mr-3 mt-1 text-lg">🇦🇺</span>
                    <p className="text-blue-100">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Tips */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Money-Saving Tips
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {budgetTips.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-green-800">{category.category}</h3>
                  <ul className="space-y-3">
                    {category.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">💰</span>
                        <p className="text-gray-600">{tip}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Safety Tips for Australia
            </h2>
            
            <div className="space-y-4">
              {safetyTips.map((tip, index) => (
                <div key={index} className="flex items-start p-4 bg-blue-50 rounded-lg">
                  <span className="text-blue-500 mr-3 mt-1 text-lg">🛡️</span>
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Travel Essentials FAQs
            </h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-3 text-blue-800">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            You're Ready for Your Australian Adventure!
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            With this essential information, you're well-prepared for an amazing Rugby World Cup 2027 experience. 
            Pack smart, stay safe, and enjoy the best of Australian hospitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tickets"
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
            >
              Get Rugby Tickets
            </Link>
            <Link
              href="/guide"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-800 transition-colors"
            >
              Explore City Guides
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}