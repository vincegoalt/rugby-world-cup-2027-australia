import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Rugby World Cup 2027 Australia',
  description: 'Terms of service for using the Rugby World Cup 2027 Australia guide website.',
  openGraph: {
    title: 'Terms of Service - Rugby World Cup 2027',
    description: 'Terms and conditions for using our website',
  }
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">2. Use License</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Permission is granted to temporarily download one copy of the materials on Rugby Australia 2027 for personal, 
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display</li>
              <li>attempt to reverse engineer any software contained on this website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">3. Disclaimer</h2>
            <p className="text-gray-600 leading-relaxed">
              The materials on this website are provided "as is". We make no warranties, expressed or implied, and hereby disclaim 
              and negate all other warranties. Further, we do not warrant or make any representations concerning the accuracy, 
              likely results, or reliability of the use of the materials on its website or otherwise relating to such materials 
              or on any sites linked to this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">4. Limitations</h2>
            <p className="text-gray-600 leading-relaxed">
              In no event shall Rugby Australia 2027 or its suppliers be liable for any damages (including, without limitation, 
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use 
              the materials on this website, even if we have been notified orally or in writing of the possibility of such damage. 
              Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for 
              consequential or incidental damages, these limitations may not apply to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">5. Ticket Purchases</h2>
            <p className="text-gray-600 leading-relaxed">
              This website provides links to third-party ticket vendors, including GoalTickets. We are not responsible for 
              ticket transactions conducted through these third parties. All ticket purchases are subject to the terms and 
              conditions of the respective vendor. We may receive a commission for tickets purchased through affiliate links.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">6. Accuracy of Materials</h2>
            <p className="text-gray-600 leading-relaxed">
              The materials appearing on this website could include technical, typographical, or photographic errors. 
              We do not warrant that any of the materials on its website are accurate, complete, or current. We may make 
              changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">7. Links</h2>
            <p className="text-gray-600 leading-relaxed">
              We have not reviewed all of the sites linked to our website and are not responsible for the contents of any 
              such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such 
              linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">8. Modifications</h2>
            <p className="text-gray-600 leading-relaxed">
              We may revise these terms of service for its website at any time without notice. By using this website, 
              you are agreeing to be bound by the then current version of these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">9. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of Australia and you 
              irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">10. Contact Information</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-gray-600 mt-2">
              Email: legal@rugbyaustralia2027.com<br />
              Website: rugbyaustralia2027.com
            </p>
          </section>

          <div className="mt-8 pt-6 border-t text-sm text-gray-500">
            <p>Last updated: January 2025</p>
          </div>
        </div>
      </div>
    </div>
  )
}