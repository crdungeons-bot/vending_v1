import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
            <Link href="/about" className="text-brand-dark hover:text-brand-green transition-colors font-medium">
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
      <section className="relative bg-gradient-to-br from-brand-green via-emerald-700 to-teal-800 text-white py-32 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-orange rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Free vending machines
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-300">
                for your business
              </span>
            </h2>
            
            <p className="text-2xl mb-12 text-white/80 font-light max-w-2xl mx-auto">
              Snacks, drinks, and full service handled for you
            </p>
            
            <div className="flex justify-center items-center">
              <a
                href="tel:8056653515"
                className="group bg-white text-brand-green px-10 py-5 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-white/20 transition-all flex items-center gap-2"
              >
                Contact us to secure a vending machine
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
              Why choose us
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need, nothing you don't</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {/* Two column alternating layout */}
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
              {/* Feature 1 */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-16 bg-gradient-to-b from-brand-green to-emerald-600 rounded-full flex-shrink-0"></div>
                  <div>
                    <h4 className="text-2xl font-semibold text-brand-dark mb-3">
                      Locally owned & operated
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      A trusted local business serving Ventura County with personalized service and community commitment
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-16 bg-gradient-to-b from-brand-green to-emerald-600 rounded-full flex-shrink-0"></div>
                  <div>
                    <h4 className="text-2xl font-semibold text-brand-dark mb-3">
                      Full service & maintenance
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      We handle everything from installation to restocking and repairs, so you don't have to worry about a thing
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-16 bg-gradient-to-b from-brand-green to-emerald-600 rounded-full flex-shrink-0"></div>
                  <div>
                    <h4 className="text-2xl font-semibold text-brand-dark mb-3">
                      Outstanding customer service
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Dedicated to your satisfaction with responsive support and a commitment to excellence
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-16 bg-gradient-to-b from-brand-orange to-amber-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <h4 className="text-2xl font-semibold text-brand-dark mb-3">
                      Remotely monitored
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Real-time inventory tracking ensures your machines are always stocked and ready for optimal service
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-16 bg-gradient-to-b from-brand-orange to-amber-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <h4 className="text-2xl font-semibold text-brand-dark mb-3">
                      Custom snack & drink selection
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Tailored product options to match your preferences and meet the unique needs of your location
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 6 */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-16 bg-gradient-to-b from-brand-orange to-amber-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <h4 className="text-2xl font-semibold text-brand-dark mb-3">
                      Cashless payments
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Modern payment options including credit cards, Apple Pay, and Google Pay for ultimate convenience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="relative bg-gradient-to-br from-brand-green to-emerald-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-brand-orange rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Perfect for hotels, offices, and warehouses
          </h3>
          <p className="text-xl md:text-2xl mb-12 text-white/80 font-light max-w-2xl mx-auto">
            Serving Ventura County businesses
          </p>
          <a
            href="tel:8056653515"
            className="inline-flex items-center gap-3 bg-white text-brand-green px-10 py-5 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-white/20 transition-all"
          >
            Call or text to get started today
          </a>
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
