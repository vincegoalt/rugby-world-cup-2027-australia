import { Metadata } from 'next'
import TicketCTA from '../components/TicketCTA'
import { createFAQSchema, createBreadcrumbSchema } from '../lib/structured-data'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Rugby World Cup 2027 Australia',
  description: 'Find answers to common questions about Rugby World Cup 2027 in Australia. Tickets, venues, travel, accommodation and more.',
  openGraph: {
    title: 'Rugby World Cup 2027 FAQs',
    description: 'Everything you need to know about attending Rugby World Cup 2027 in Australia',
  }
}

const faqs = [
  {
    category: "Tickets",
    questions: [
      {
        q: "When do Rugby World Cup 2027 tickets go on sale?",
        a: "Official ticket sales are expected to begin in late 2026. Register your interest now to be notified when tickets become available through our partner GoalTickets."
      },
      {
        q: "How much will Rugby World Cup 2027 tickets cost?",
        a: "Ticket prices will vary based on the match and seating category. Pool matches typically start from $50-$150, knockout matches from $150-$500, and the final from $300-$1500."
      },
      {
        q: "Can I buy tickets for multiple matches?",
        a: "Yes, you can purchase tickets for multiple matches. Team follower packages and venue packages will also be available."
      },
      {
        q: "Are there family tickets available?",
        a: "Yes, family packages with discounted rates for children are expected to be available for most pool matches."
      }
    ]
  },
  {
    category: "Tournament",
    questions: [
      {
        q: "When is Rugby World Cup 2027?",
        a: "The tournament will run from October to November 2027, with exact dates to be confirmed."
      },
      {
        q: "How many teams will participate?",
        a: "20 teams will compete in Rugby World Cup 2027, divided into 4 pools of 5 teams each."
      },
      {
        q: "Which cities will host matches?",
        a: "Matches will be played in Sydney, Melbourne, Brisbane, Perth, Adelaide, Gold Coast, Newcastle, and Townsville."
      },
      {
        q: "How does the tournament format work?",
        a: "Teams play in pools of 5, with the top 2 from each pool advancing to the quarter-finals, followed by semi-finals, bronze final, and the final."
      }
    ]
  },
  {
    category: "Travel & Accommodation",
    questions: [
      {
        q: "Do I need a visa to visit Australia?",
        a: "Most visitors need a visa. Citizens of many countries can apply for an Electronic Travel Authority (ETA) or eVisitor visa online."
      },
      {
        q: "When should I book accommodation?",
        a: "Book as early as possible, ideally 6-12 months before the tournament. Accommodation in host cities will be in high demand."
      },
      {
        q: "What's the best way to travel between host cities?",
        a: "Domestic flights are the quickest option for long distances. Trains and buses are available for shorter journeys. Consider hiring a car for flexibility."
      },
      {
        q: "What's the weather like in October-November?",
        a: "Spring weather with temperatures ranging from 15-25°C (59-77°F) in most cities. Perth and northern cities will be warmer."
      }
    ]
  },
  {
    category: "At the Stadium",
    questions: [
      {
        q: "Can I bring food and drinks into stadiums?",
        a: "Stadium policies vary, but generally no alcohol or glass containers. Small snacks and sealed water bottles may be permitted."
      },
      {
        q: "What time should I arrive at the stadium?",
        a: "Gates typically open 2 hours before kick-off. Arrive at least 1 hour early to clear security and find your seat."
      },
      {
        q: "Is there parking at the stadiums?",
        a: "Limited parking is available at most venues. Public transport is strongly recommended for all matches."
      },
      {
        q: "Are stadiums wheelchair accessible?",
        a: "Yes, all venues have wheelchair accessible seating and facilities. Book accessible tickets early as availability is limited."
      }
    ]
  },
  {
    category: "Fan Experience",
    questions: [
      {
        q: "Will there be fan zones?",
        a: "Yes, official fan zones with big screens, entertainment, and food will be set up in each host city."
      },
      {
        q: "Can I attend team training sessions?",
        a: "Some teams hold open training sessions. Details will be announced closer to the tournament."
      },
      {
        q: "Are there activities for families?",
        a: "Yes, family-friendly activities including rugby clinics for kids will be organized in host cities."
      },
      {
        q: "What languages will be supported at venues?",
        a: "English is the primary language, with support for French, Spanish, and Japanese at major venues."
      }
    ]
  }
]

export default function FAQPage() {
  // Flatten all FAQs for structured data
  const allFAQs = faqs.flatMap(section => 
    section.questions.map(q => ({
      question: q.q,
      answer: q.a
    }))
  );

  const faqSchema = createFAQSchema(allFAQs);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'FAQ' }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about Rugby World Cup 2027 in Australia
          </p>
        </div>

        <TicketCTA />

        <div className="mt-12 space-y-12">
          {faqs.map((section) => (
            <div key={section.category} className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-green-800 mb-6 border-b pb-3">
                {section.category}
              </h2>
              <div className="space-y-6">
                {section.questions.map((faq, index) => (
                  <div key={index} className="border-l-4 border-green-600 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-green-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? We're here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Contact Us
          </a>
        </div>

        <TicketCTA />
      </div>
    </div>
    </>
  )
}