import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Rugby World Cup 2027 Australia',
  description: 'Privacy policy for Rugby World Cup 2027 Australia guide. Learn how we collect, use, and protect your information.',
  openGraph: {
    title: 'Privacy Policy - Rugby World Cup 2027',
    description: 'How we handle your personal information',
  }
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              We collect information you provide directly to us, such as when you:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Subscribe to our newsletter</li>
              <li>Contact us through our contact form</li>
              <li>Browse our website (via cookies and analytics)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Send you newsletters and updates about Rugby World Cup 2027</li>
              <li>Respond to your inquiries and requests</li>
              <li>Improve our website and user experience</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">3. Information Sharing</h2>
            <p className="text-gray-600 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
              except as described in this policy. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-3">
              <li>Service providers who assist us in operating our website</li>
              <li>Analytics providers to help us understand website usage</li>
              <li>Law enforcement or regulatory agencies when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">4. Cookies and Tracking</h2>
            <p className="text-gray-600 leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
              Cookies are files with small amount of data which may include an anonymous unique identifier. You can instruct 
              your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">5. Third-Party Links</h2>
            <p className="text-gray-600 leading-relaxed">
              Our website may contain links to third-party websites, including our ticket partner GoalTickets. We are not 
              responsible for the privacy practices of these other sites. We encourage you to read the privacy statements 
              of each website that collects personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">6. Data Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against 
              unauthorized or unlawful processing and against accidental loss, destruction, or damage. However, no method 
              of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">7. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to our processing of your personal information</li>
              <li>Request restriction of processing your personal information</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">8. Children's Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal 
              information from children under 13. If you are a parent or guardian and believe your child has provided 
              us with personal information, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">9. International Data Transfers</h2>
            <p className="text-gray-600 leading-relaxed">
              Your information may be transferred to and maintained on servers located outside of your state, province, 
              country, or other governmental jurisdiction where data protection laws may differ from those in your jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">11. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-600 mt-2">
              Email: privacy@rugbyaustralia2027.com<br />
              Website: rugbyaustralia2027.com<br />
              Contact Form: <a href="/contact" className="text-green-600 hover:text-green-700">rugbyaustralia2027.com/contact</a>
            </p>
          </section>

          <div className="mt-8 pt-6 border-t text-sm text-gray-500">
            <p>Last updated: January 2025</p>
            <p className="mt-2">Effective date: January 2025</p>
          </div>
        </div>
      </div>
    </div>
  )
}