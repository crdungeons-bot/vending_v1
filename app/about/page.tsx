import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl text-brand-dark py-5 sticky top-0 z-50 border-b border-gray-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/logo/couple-logo-128.png"
              alt="Dunning Reed Vending Logo"
              width={56}
              height={56}
              priority
              className="rounded-full"
            />
            <div>
              <h1 className="text-2xl font-bold text-brand-green">Dunning Reed Vending</h1>
              <p className="text-sm text-gray-600">Locally owned & operated</p>
            </div>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/about" className="text-brand-green font-medium">
              About Us
            </Link>
            <Link href="/machines" className="text-brand-dark hover:text-brand-green transition-colors font-medium">
              Browse Machines
            </Link>
            <a
              href="tel:8056653515"
              className="bg-brand-green text-white hover:bg-emerald-700 transition-colors px-6 py-3 rounded-full font-medium shadow-lg shadow-brand-green/20"
            >
              (805) 665-3515
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-green via-emerald-700 to-teal-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-orange rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">About Us</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Locally owned, family operated, and passionate about serving Ventura County
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-12">
            {/* Locally Owned & Operated */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-12 bg-gradient-to-b from-brand-green to-emerald-600 rounded-full"></div>
                <h3 className="text-3xl font-bold text-brand-dark">Locally Owned & Operated</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Dunning Reed Vending is a family-owned business proudly serving Ventura County. As parents and local community members, we understand the importance of quality service and building lasting relationships with the businesses we serve.
              </p>
            </div>

            {/* Passionate About the Industry */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-12 bg-gradient-to-b from-brand-orange to-amber-500 rounded-full"></div>
                <h3 className="text-3xl font-bold text-brand-dark">Passionate About the Industry</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                We're not just in the vending business—we're passionate about it. We stay on top of the latest technology and trends to bring you modern, reliable vending solutions that enhance your workplace and provide convenience for your employees, guests, and customers.
              </p>
            </div>

            {/* Professional & Courteous */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-12 bg-gradient-to-b from-brand-green to-emerald-600 rounded-full"></div>
                <h3 className="text-3xl font-bold text-brand-dark">Professional & Courteous</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Professionalism and courtesy are at the heart of everything we do. From the first phone call to ongoing maintenance, you can expect prompt, respectful service that makes working with us a pleasure.
              </p>
            </div>

            {/* Outstanding Customer Service */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-12 bg-gradient-to-b from-brand-orange to-amber-500 rounded-full"></div>
                <h3 className="text-3xl font-bold text-brand-dark">Outstanding Customer Service</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                We pride ourselves on delivering outstanding customer service. Our commitment to you doesn't end with installation—we're available 24/7 to address any questions or concerns. Your satisfaction is our top priority, and we're always just a phone call away.
              </p>
              <div className="bg-gradient-to-r from-brand-green/10 to-emerald-100 border-l-4 border-brand-green p-6 rounded-r-lg">
                <p className="text-xl font-semibold text-brand-dark mb-2">Available 24/7</p>
                <p className="text-gray-700">
                  Need help? Have a question? We're here for you around the clock.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <p className="text-2xl text-brand-dark font-semibold mb-6">
              Ready to partner with us?
            </p>
            <a
              href="tel:8056653515"
              className="inline-flex items-center gap-3 bg-brand-green text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-emerald-700 hover:shadow-2xl transition-all"
            >
              Contact us today
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-brand-dark to-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <Image
              src="/logo/couple-logo-256.png"
              alt="Dunning Reed Vending Logo"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
          </div>
          <p className="text-2xl font-bold mb-2">Dunning Reed Vending</p>
          <p className="mb-6 text-xl">
            <a href="tel:8056653515" className="hover:text-brand-orange transition-colors">
              (805) 665-3515
            </a>
          </p>
          <p className="text-emerald-300">
            Serving Ventura County Businesses
          </p>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Dunning Reed LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
