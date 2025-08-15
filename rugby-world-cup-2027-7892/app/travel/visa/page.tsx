import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema } from '../../lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Australia Visa Requirements - Rugby World Cup 2027 Complete Guide',
  description: 'Complete visa guide for Rugby World Cup 2027 in Australia. ETA eligibility, visitor visa requirements, working holiday visas, application process, timelines, and required documents by country.',
  keywords: [
    'australia visa requirements',
    'rugby world cup 2027 visa',
    'australia ETA application',
    'australia visitor visa',
    'australia working holiday visa',
    'rugby world cup travel visa',
    'australia visa application process',
    'australia visa by country'
  ],
  canonical: '/travel/visa'
});

interface CountryVisaInfo {
  country: string;
  visaType: 'ETA' | 'Visitor Visa' | 'Visa Free' | 'Special Category';
  processingTime: string;
  cost: string;
  maxStay: string;
  notes?: string;
}

const visaByCountry: CountryVisaInfo[] = [
  // ETA Eligible Countries
  { country: 'United States', visaType: 'ETA', processingTime: 'Usually instant', cost: 'AUD $20', maxStay: '3 months' },
  { country: 'Canada', visaType: 'ETA', processingTime: 'Usually instant', cost: 'AUD $20', maxStay: '3 months' },
  { country: 'United Kingdom', visaType: 'ETA', processingTime: 'Usually instant', cost: 'AUD $20', maxStay: '3 months' },
  { country: 'Ireland', visaType: 'ETA', processingTime: 'Usually instant', cost: 'AUD $20', maxStay: '3 months' },
  { country: 'Germany', visaType: 'ETA', processingTime: 'Usually instant', cost: 'AUD $20', maxStay: '3 months' },
  { country: 'France', visaType: 'ETA', processingTime: 'Usually instant', cost: 'AUD $20', maxStay: '3 months' },
  { country: 'Italy', visaType: 'ETA', processingTime: 'Usually instant', cost: 'AUD $20', maxStay: '3 months' },
  { country: 'Spain', visaType: 'ETA', processingTime: 'Usually instant', cost: 'AUD $20', maxStay: '3 months' },
  { country: 'Netherlands', visaType: 'ETA', processingTime: 'Usually instant', cost: 'AUD $20', maxStay: '3 months' },
  { country: 'Switzerland', visaType: 'ETA', processingTime: 'Usually instant', cost: 'AUD $20', maxStay: '3 months' },
  { country: 'Norway', visaType: 'ETA', processingTime: 'Usually instant', cost: 'AUD $20', maxStay: '3 months' },
  { country: 'Sweden', visaType: 'ETA', processingTime: 'Usually instant', cost: 'AUD $20', maxStay: '3 months' },
  { country: 'Denmark', visaType: 'ETA', processingTime: 'Usually instant', cost: 'AUD $20', maxStay: '3 months' },
  { country: 'Japan', visaType: 'ETA', processingTime: 'Usually instant', cost: 'AUD $20', maxStay: '3 months' },
  { country: 'South Korea', visaType: 'ETA', processingTime: 'Usually instant', cost: 'AUD $20', maxStay: '3 months' },
  { country: 'Singapore', visaType: 'ETA', processingTime: 'Usually instant', cost: 'AUD $20', maxStay: '3 months' },
  { country: 'Malaysia', visaType: 'ETA', processingTime: 'Usually instant', cost: 'AUD $20', maxStay: '3 months' },
  { country: 'Hong Kong', visaType: 'ETA', processingTime: 'Usually instant', cost: 'AUD $20', maxStay: '3 months' },
  { country: 'Taiwan', visaType: 'ETA', processingTime: 'Usually instant', cost: 'AUD $20', maxStay: '3 months' },
  { country: 'Brunei', visaType: 'ETA', processingTime: 'Usually instant', cost: 'AUD $20', maxStay: '3 months' },
  { country: 'Chile', visaType: 'ETA', processingTime: 'Usually instant', cost: 'AUD $20', maxStay: '3 months' },
  
  // Visitor Visa Required
  { country: 'India', visaType: 'Visitor Visa', processingTime: '15-30 days', cost: 'From AUD $150', maxStay: '3-12 months', notes: 'High demand during RWC' },
  { country: 'China', visaType: 'Visitor Visa', processingTime: '15-30 days', cost: 'From AUD $150', maxStay: '3-12 months', notes: 'Apply early' },
  { country: 'Russia', visaType: 'Visitor Visa', processingTime: '15-30 days', cost: 'From AUD $150', maxStay: '3-12 months' },
  { country: 'Brazil', visaType: 'Visitor Visa', processingTime: '15-30 days', cost: 'From AUD $150', maxStay: '3-12 months' },
  { country: 'Argentina', visaType: 'Visitor Visa', processingTime: '15-30 days', cost: 'From AUD $150', maxStay: '3-12 months' },
  { country: 'South Africa', visaType: 'Visitor Visa', processingTime: '20-35 days', cost: 'From AUD $150', maxStay: '3-12 months' },
  { country: 'Thailand', visaType: 'Visitor Visa', processingTime: '15-30 days', cost: 'From AUD $150', maxStay: '3-12 months' },
  { country: 'Philippines', visaType: 'Visitor Visa', processingTime: '15-30 days', cost: 'From AUD $150', maxStay: '3-12 months' },
  
  // Special Cases
  { country: 'New Zealand', visaType: 'Special Category', processingTime: 'On arrival', cost: 'Free', maxStay: 'Indefinite', notes: 'Automatic visa on arrival' },
];

const etaEligibleCountries = [
  'Andorra', 'Austria', 'Belgium', 'Brunei', 'Canada', 'Chile', 'Czech Republic',
  'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hong Kong',
  'Hungary', 'Iceland', 'Ireland', 'Italy', 'Japan', 'Latvia', 'Liechtenstein',
  'Lithuania', 'Luxembourg', 'Malaysia', 'Malta', 'Monaco', 'Netherlands',
  'Norway', 'Poland', 'Portugal', 'San Marino', 'Singapore', 'Slovakia',
  'Slovenia', 'South Korea', 'Spain', 'Sweden', 'Switzerland', 'Taiwan',
  'United Kingdom', 'United States', 'Vatican City'
];

const visaTypes = [
  {
    type: 'Electronic Travel Authority (ETA)',
    subclass: 'Subclass 601',
    description: 'Quick online visa for eligible passport holders',
    eligibility: 'Citizens of eligible countries with eligible passports',
    duration: 'Multiple entries over 12 months',
    maxStay: 'Up to 3 months per visit',
    cost: 'AUD $20 application fee',
    processing: 'Usually instant (can take up to 72 hours)',
    applicationMethod: 'Online only via Australian ETA app or website',
    requirements: [
      'Valid passport from eligible country',
      'Genuine visitor intentions',
      'Sufficient funds for stay',
      'No criminal convictions',
      'Good health (health examination may be required)'
    ],
    restrictions: [
      'Cannot work (except for some business activities)',
      'Cannot stay longer than 3 months',
      'Cannot extend visa while in Australia',
      'Must hold return or onward ticket'
    ]
  },
  {
    type: 'Visitor Visa (Tourist Stream)',
    subclass: 'Subclass 600',
    description: 'Standard tourist visa for countries not eligible for ETA',
    eligibility: 'All nationalities not eligible for ETA or visa-free entry',
    duration: '3, 6, or 12 months (multiple or single entry)',
    maxStay: 'Up to duration granted (usually 3 months per visit)',
    cost: 'From AUD $150 (varies by passport country)',
    processing: '15-30 days (longer during peak periods)',
    applicationMethod: 'Online via ImmiAccount or paper application',
    requirements: [
      'Valid passport (6+ months validity)',
      'Genuine visitor intentions',
      'Sufficient funds (bank statements)',
      'Travel itinerary and accommodation details',
      'Return/onward travel arrangements',
      'Health insurance (recommended)',
      'Character requirements (police checks may be required)',
      'Health examinations (if required)'
    ],
    restrictions: [
      'Cannot work',
      'Cannot study for more than 3 months',
      'Must maintain adequate health insurance',
      'May have "No Further Stay" condition'
    ]
  },
  {
    type: 'Working Holiday Visa',
    subclass: 'Subclass 417 or 462',
    description: 'For young people (18-30/35) from eligible countries to holiday and work',
    eligibility: 'Citizens of eligible countries aged 18-30 (or 35 for some countries)',
    duration: '12 months (extendable in some cases)',
    maxStay: '12 months initially',
    cost: 'AUD $635',
    processing: '15-45 days',
    applicationMethod: 'Online via ImmiAccount',
    requirements: [
      'Age 18-30 (or 35 for some countries)',
      'Hold eligible passport',
      'Have sufficient funds (AUD $5,000+)',
      'Return ticket or funds for ticket',
      'Health and character requirements',
      'Health insurance',
      'Not accompanied by dependent children'
    ],
    restrictions: [
      'Cannot work more than 6 months with one employer',
      'Cannot study more than 4 months',
      'Must have genuine holiday intentions',
      'Limited to specific countries'
    ]
  }
];

const applicationProcess = [
  {
    step: 1,
    title: 'Determine Visa Type',
    description: 'Check if you\'re eligible for ETA or need a Visitor Visa',
    timeline: '5 minutes',
    actions: [
      'Check your passport country against eligible lists',
      'Consider purpose and length of stay',
      'Review any criminal or health history',
      'Choose appropriate visa subclass'
    ]
  },
  {
    step: 2,
    title: 'Gather Required Documents',
    description: 'Collect all necessary documents before starting application',
    timeline: '1-2 days',
    actions: [
      'Valid passport (6+ months validity)',
      'Recent passport photos (for some visas)',
      'Bank statements showing sufficient funds',
      'Travel itinerary and accommodation bookings',
      'Return/onward ticket bookings',
      'Travel insurance (recommended)',
      'Police clearances (if required)',
      'Health examinations (if required)'
    ]
  },
  {
    step: 3,
    title: 'Submit Application',
    description: 'Complete and submit your visa application online',
    timeline: '30-60 minutes',
    actions: [
      'Create ImmiAccount (for Visitor Visa) or use ETA app',
      'Complete application form accurately',
      'Upload all required documents',
      'Pay application fee',
      'Submit application and save reference number'
    ]
  },
  {
    step: 4,
    title: 'Wait for Processing',
    description: 'Monitor application status and respond to any requests',
    timeline: 'Instant to 30+ days',
    actions: [
      'Check application status regularly',
      'Respond promptly to any requests for additional information',
      'Attend health examinations if required',
      'Provide additional documents if requested',
      'Do not book non-refundable travel until visa granted'
    ]
  },
  {
    step: 5,
    title: 'Receive Visa Decision',
    description: 'Receive notification and check visa conditions',
    timeline: 'Immediate',
    actions: [
      'Check email for decision notification',
      'Review visa grant letter carefully',
      'Note visa conditions and restrictions',
      'Save electronic visa details',
      'Book travel within visa validity period'
    ]
  }
];

const rugbyWorldCupTips = [
  {
    tip: 'Apply Early',
    description: 'Processing times may be longer during Rugby World Cup period',
    detail: 'Submit applications at least 2-3 months before travel. Immigration services may experience higher volumes.'
  },
  {
    tip: 'Show Rugby World Cup Purpose',
    description: 'Include match tickets or tournament information in application',
    detail: 'Demonstrate genuine tourist intentions by showing Rugby World Cup tickets, accommodation bookings, and planned activities.'
  },
  {
    tip: 'Sufficient Funds',
    description: 'Show extra funds as costs are higher during major events',
    detail: 'Budget AUD $150-300 per day during Rugby World Cup. Show bank statements reflecting adequate funds for entire stay.'
  },
  {
    tip: 'Travel Insurance',
    description: 'Obtain comprehensive travel insurance before applying',
    detail: 'Include copy of travel insurance policy. Medical coverage especially important as Australian healthcare is expensive for visitors.'
  },
  {
    tip: 'Return Tickets',
    description: 'Book flexible return tickets before visa application',
    detail: 'Immigration wants to see you will leave Australia. Book refundable/changeable tickets in case of visa delays.'
  },
  {
    tip: 'Accommodation Evidence',
    description: 'Book refundable accommodation to show genuine intentions',
    detail: 'Having accommodation bookings strengthens your application. Use booking.com or hotels.com with free cancellation options.'
  }
];

const commonProblems = [
  {
    problem: 'Application Refused',
    causes: ['Insufficient funds shown', 'Weak ties to home country', 'Previous visa issues', 'Incomplete documentation'],
    solutions: ['Address refusal reasons specifically', 'Provide additional evidence', 'Consider professional migration advice', 'Wait appropriate time before reapplying']
  },
  {
    problem: 'Processing Delays',
    causes: ['Peak application periods', 'Additional security checks', 'Health examinations required', 'Incomplete applications'],
    solutions: ['Submit complete applications', 'Respond quickly to requests', 'Allow extra processing time', 'Check application status regularly']
  },
  {
    problem: 'Health Examinations Required',
    causes: ['Certain countries of origin', 'Extended stay applications', 'Previous medical issues', 'Random selection'],
    solutions: ['Book health examinations promptly', 'Use approved panel physicians only', 'Complete all required tests', 'Allow 2-3 weeks for results']
  },
  {
    problem: 'Character Requirements',
    causes: ['Criminal history', 'Immigration violations', 'Association concerns', 'Outstanding warrants'],
    solutions: ['Provide police clearances', 'Declare all issues honestly', 'Provide character references', 'Consider professional advice']
  }
];

const faqs = [
  {
    question: 'Do I need a visa to visit Australia for Rugby World Cup 2027?',
    answer: 'Most visitors need either an Electronic Travel Authority (ETA) or Visitor Visa. Only New Zealand citizens can enter visa-free. Check the eligibility lists to determine which visa you need based on your passport country.'
  },
  {
    question: 'How long does it take to get an Australian visa?',
    answer: 'ETA applications are usually approved instantly but can take up to 72 hours. Visitor visas typically take 15-30 days but may be longer during Rugby World Cup due to higher application volumes. Apply 2-3 months before travel.'
  },
  {
    question: 'Can I apply for an Australian visa if I have a criminal record?',
    answer: 'You must declare any criminal history honestly. Minor offenses may not prevent visa approval, but serious crimes or recent convictions may result in refusal. Consider seeking professional migration advice for complex cases.'
  },
  {
    question: 'How much money do I need to show for my Australian visa application?',
    answer: 'There\'s no fixed amount, but budget AUD $150-300 per day during Rugby World Cup. Show bank statements with sufficient funds for your entire stay plus return travel. More money may be needed for longer stays or multiple cities.'
  },
  {
    question: 'Can I extend my visa once I\'m in Australia?',
    answer: 'ETAs cannot be extended. Visitor visas may be extendable depending on conditions, but this isn\'t guaranteed. If you need longer stay, consider applying for appropriate visa from your home country.'
  },
  {
    question: 'Do I need travel insurance for my Australian visa application?',
    answer: 'Travel insurance isn\'t mandatory for most visa types but is highly recommended. Include it in your application to show preparation and financial responsibility. Australian medical costs are very expensive for visitors.'
  },
  {
    question: 'Can I work in Australia on a tourist visa during Rugby World Cup?',
    answer: 'No, neither ETA nor Tourist Stream Visitor visas allow work. Some limited business activities may be permitted. If you want to work, consider a Working Holiday visa (if eligible) or other appropriate work visas.'
  },
  {
    question: 'What happens if my visa application is refused?',
    answer: 'You\'ll receive a refusal letter explaining reasons. You may be able to reapply addressing the issues, or in some cases, request review. Consider professional migration advice. Wait times and additional costs apply for reapplications.'
  }
];

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Travel Guide', url: '/travel' },
  { name: 'Visa Requirements', url: '/travel/visa' }
];

const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
const faqSchema = generateFAQSchema(faqs);

const visaGuideSchema = {
  "@context": "https://schema.org",
  "@type": "TravelGuide",
  "name": "Australia Visa Requirements for Rugby World Cup 2027",
  "description": "Complete guide to Australian visa requirements for Rugby World Cup 2027 visitors",
  "about": {
    "@type": "Country",
    "name": "Australia"
  }
};

export default function VisaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([visaGuideSchema, breadcrumbSchema, faqSchema])
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
              Australia Visa Requirements
              <span className="block text-yellow-400 text-2xl md:text-3xl mt-2">
                Rugby World Cup 2027 Complete Guide
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Everything you need to know about getting a visa for Australia during Rugby World Cup 2027. 
              ETA applications, visitor visas, requirements by country, and step-by-step application process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-finder"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
              >
                Check Visa Requirements
              </a>
              <Link
                href="#visa-types"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-800 transition-colors"
              >
                Explore Visa Types
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Check Tool */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Quick Visa Check by Country
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold mb-4 text-green-800">ETA Eligible (Easy!)</h3>
                <p className="text-green-700 mb-4">Apply online, usually approved instantly, AUD $20</p>
                <div className="text-sm text-green-600 grid grid-cols-2 gap-1">
                  {etaEligibleCountries.slice(0, 10).map((country) => (
                    <div key={country}>• {country}</div>
                  ))}
                  <div className="col-span-2 text-blue-600 mt-2">
                    <Link href="#eta-countries">+ See all {etaEligibleCountries.length} countries →</Link>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-800">Visitor Visa Required</h3>
                <p className="text-blue-700 mb-4">Online application, 15-30 days, from AUD $150</p>
                <div className="text-sm text-blue-600">
                  <div>• India</div>
                  <div>• China</div>
                  <div>• Russia</div>
                  <div>• Brazil</div>
                  <div>• Most African countries</div>
                  <div>• Most Middle Eastern countries</div>
                  <div className="text-blue-600 mt-2">
                    <Link href="#visitor-visa">See full requirements →</Link>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 border-l-4 border-gray-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Special Categories</h3>
                <p className="text-gray-700 mb-4">Unique visa arrangements</p>
                <div className="text-sm text-gray-600">
                  <div>• <strong>New Zealand:</strong> Visa-free entry</div>
                  <div>• <strong>Working Holiday:</strong> Ages 18-30/35</div>
                  <div>• <strong>Transit:</strong> Under 72 hours</div>
                  <div className="text-blue-600 mt-2">
                    <Link href="#special-visas">Learn more →</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sample Countries Table */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <h3 className="text-xl font-bold p-6 bg-gray-50 text-gray-900">Sample Countries Quick Reference</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-blue-800 text-white">
                    <tr>
                      <th className="text-left p-4">Country</th>
                      <th className="text-left p-4">Visa Type</th>
                      <th className="text-left p-4">Processing</th>
                      <th className="text-left p-4">Cost</th>
                      <th className="text-left p-4">Max Stay</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {visaByCountry.slice(0, 12).map((country, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="p-4 font-medium">{country.country}</td>
                        <td className="p-4">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                            country.visaType === 'ETA' ? 'bg-green-100 text-green-800' :
                            country.visaType === 'Visitor Visa' ? 'bg-blue-100 text-blue-800' :
                            country.visaType === 'Special Category' ? 'bg-purple-100 text-purple-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {country.visaType}
                          </span>
                        </td>
                        <td className="p-4 text-sm">{country.processingTime}</td>
                        <td className="p-4 text-sm font-semibold">{country.cost}</td>
                        <td className="p-4 text-sm">{country.maxStay}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-gray-50 text-center">
                <p className="text-sm text-gray-600">
                  This is a sample. Requirements can change - always check official sources before applying.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Types Detailed */}
      <section id="visa-types" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Australian Visa Types Explained
            </h2>
            
            <div className="space-y-8">
              {visaTypes.map((visa, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-blue-800">{visa.type}</h3>
                      <p className="text-gray-500 mb-4">{visa.subclass}</p>
                      <p className="text-gray-600 mb-6">{visa.description}</p>
                      
                      <div className="space-y-3 text-sm">
                        <div>
                          <span className="font-semibold">Duration:</span> {visa.duration}
                        </div>
                        <div>
                          <span className="font-semibold">Max Stay:</span> {visa.maxStay}
                        </div>
                        <div>
                          <span className="font-semibold">Cost:</span> <span className="text-green-600 font-semibold">{visa.cost}</span>
                        </div>
                        <div>
                          <span className="font-semibold">Processing:</span> {visa.processing}
                        </div>
                        <div>
                          <span className="font-semibold">Application:</span> {visa.applicationMethod}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-green-800 mb-3">Requirements:</h4>
                      <ul className="text-sm text-gray-600 space-y-1 mb-6">
                        {visa.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-500 mr-2 mt-1">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-red-800 mb-3">Restrictions:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {visa.restrictions.map((restriction, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-red-500 mr-2 mt-1">•</span>
                            {restriction}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Step-by-Step Application Process
            </h2>
            
            <div className="space-y-8">
              {applicationProcess.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {step.timeline}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Action Items:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {step.actions.map((action, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">✓</span>
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rugby World Cup Specific Tips */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Rugby World Cup 2027 Visa Tips
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {rugbyWorldCupTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-800">{tip.tip}</h3>
                  <p className="text-gray-700 mb-4">{tip.description}</p>
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <p className="text-sm text-yellow-800">{tip.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems and Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Common Visa Problems and Solutions
            </h2>
            
            <div className="space-y-8">
              {commonProblems.map((problem, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-red-800">{problem.problem}</h3>
                  
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Common Causes:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {problem.causes.map((cause, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-red-500 mr-2 mt-1">•</span>
                            {cause}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-green-900 mb-3">Solutions:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {problem.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-500 mr-2 mt-1">•</span>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
              Visa FAQs
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

      {/* Official Resources */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Official Visa Resources
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-blue-700 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Australian Government</h3>
                <p className="text-blue-100 mb-4">Official visa information and applications</p>
                <a
                  href="https://immi.homeaffairs.gov.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-500 text-black px-6 py-2 rounded font-semibold hover:bg-yellow-400 transition-colors"
                >
                  Visit immi.homeaffairs.gov.au
                </a>
              </div>
              
              <div className="bg-blue-700 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">ETA Application</h3>
                <p className="text-blue-100 mb-4">Quick online ETA applications</p>
                <a
                  href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-500 text-black px-6 py-2 rounded font-semibold hover:bg-yellow-400 transition-colors"
                >
                  Apply for ETA
                </a>
              </div>
              
              <div className="bg-blue-700 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Visitor Visa</h3>
                <p className="text-blue-100 mb-4">Tourist visa applications and information</p>
                <a
                  href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/visitor-600"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-500 text-black px-6 py-2 rounded font-semibold hover:bg-yellow-400 transition-colors"
                >
                  Apply for Visitor Visa
                </a>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-yellow-500 text-black rounded-lg">
              <h3 className="text-xl font-bold mb-2">⚠️ Important Disclaimer</h3>
              <p className="text-sm">
                Visa requirements and processes can change without notice. Always check the official Australian Government immigration website 
                for the most current information before applying. This guide is for information purposes only and should not be considered as 
                official advice. Consider consulting registered migration agents for complex cases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-800 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Apply for Your Australian Visa?
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
            Don't wait - start your visa application early to ensure you're ready for Rugby World Cup 2027. 
            Processing times may be longer during the tournament period.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-finder"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
            >
              Start Visa Application
            </a>
            <Link
              href="/travel/essentials"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-800 transition-colors"
            >
              Travel Essentials Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}