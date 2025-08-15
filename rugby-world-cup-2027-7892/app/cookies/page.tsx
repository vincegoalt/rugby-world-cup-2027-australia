import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | Rugby World Cup 2027 Australia',
  description: 'Cookie policy for Rugby World Cup 2027 Australia guide. Learn about how we use cookies and similar technologies.',
  openGraph: {
    title: 'Cookie Policy - Rugby World Cup 2027',
    description: 'Information about our use of cookies',
  }
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">What Are Cookies?</h2>
            <p className="text-gray-600 leading-relaxed">
              Cookies are small text files that are placed on your device when you visit a website. They are widely used 
              to make websites work more efficiently, provide a better user experience, and provide information to the 
              owners of the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">How We Use Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors use our website</li>
              <li><strong>Functionality cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Marketing cookies:</strong> Track your visit for advertising purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">Types of Cookies We Use</h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Strictly Necessary Cookies</h3>
                <p className="text-gray-600">
                  These cookies are essential for the website to function. They enable basic functions like page navigation 
                  and access to secure areas of the website. The website cannot function properly without these cookies.
                </p>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Performance Cookies</h3>
                <p className="text-gray-600">
                  These cookies help us understand how visitors interact with our website by collecting and reporting 
                  information anonymously. This helps us improve how our website works.
                </p>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Functional Cookies</h3>
                <p className="text-gray-600">
                  These cookies enable the website to provide enhanced functionality and personalization. They may be set 
                  by us or by third-party providers whose services we have added to our pages.
                </p>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Targeting Cookies</h3>
                <p className="text-gray-600">
                  These cookies may be set through our site by our advertising partners. They may be used to build a 
                  profile of your interests and show you relevant adverts on other sites.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">Third-Party Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              We use services from the following third parties that may set cookies:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
              <li><strong>GoalTickets:</strong> Our ticket partner may set cookies when you visit their site</li>
              <li><strong>Social Media Platforms:</strong> If you share our content on social media</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">Managing Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              You can control and manage cookies in various ways:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Most browsers allow you to view, delete, and block cookies from websites</li>
              <li>You can set your browser to alert you when cookies are being sent</li>
              <li>You can choose to disable all cookies or only third-party cookies</li>
            </ul>
            <p className="text-gray-600 mt-3">
              Please note that blocking all cookies may impact your experience on our website, and some features may not 
              function as intended.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">Browser Settings</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Here's how to manage cookies in popular browsers:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
              <li><strong>Edge:</strong> Settings → Privacy, search, and services → Cookies and site permissions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">Do Not Track</h2>
            <p className="text-gray-600 leading-relaxed">
              Some browsers offer a "Do Not Track" feature that signals to websites that you do not want to be tracked. 
              Our website currently does not respond to Do Not Track signals, but you can still manage cookies using the 
              methods described above.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">Updates to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other 
              operational, legal, or regulatory reasons. Please revisit this page periodically to stay informed about 
              our use of cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about our use of cookies, please contact us at:
            </p>
            <p className="text-gray-600 mt-2">
              Email: privacy@rugbyaustralia2027.com<br />
              Website: rugbyaustralia2027.com<br />
              Contact Form: <a href="/contact" className="text-green-600 hover:text-green-700">rugbyaustralia2027.com/contact</a>
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