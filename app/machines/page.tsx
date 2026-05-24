import Image from "next/image";
import Link from "next/link";

export default function BrowseMachines() {
  const machines = [
    {
      name: "HAHA AI Combo Vending Machine",
      description: "Our flagship AI-powered vending solution with advanced product recognition and spacious storage. Perfect for high-traffic locations.",
      features: [
        "AI product recognition (99% accuracy)",
        "Refrigeration capable",
        "Customized shelving",
        "Never gets stuck",
        "Cashless payments (Apple Pay, Google Pay, credit cards)",
        "Remote monitoring via app",
        "Supports multiple products at once"
      ],
      image: "/machines/haha-ai-combo.png",
      capacity: "Large capacity with customizable shelves",
      ideal: "Hotels, offices, warehouses, hospitals"
    },
    {
      name: "HAHA Smart Cooler",
      description: "Sleek refrigerated vending solution ideal for beverages, fresh foods, and temperature-sensitive products.",
      features: [
        "AI dynamic recognition technology",
        "Full refrigeration system",
        "Glass door for easy browsing",
        "POS machine equipped",
        "Grab multiple items at once",
        "Auto-generates restocking orders",
        "24/7 operation"
      ],
      image: "/machines/smart-cooler.png",
      capacity: "Optimized for beverages and fresh items",
      ideal: "Gyms, residential buildings, small offices"
    },
    {
      name: "HAHA Multi-Category Smart Vending",
      description: "Versatile vending solution supporting the widest range of product types from snacks to electronics.",
      features: [
        "Supports diverse product categories",
        "Stacking capability for more storage",
        "Intuitive 'open door and take' design",
        "One-click pricing and promotions",
        "Lower maintenance requirements",
        "Lightweight and cost-effective",
        "Professional app management"
      ],
      image: "/machines/multi-category.png",
      capacity: "Maximum flexibility for any product type",
      ideal: "Shopping malls, airports, commercial buildings"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
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
            <Link href="/machines" className="text-brand-green font-medium">
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Browse Our Machines</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            State-of-the-art AI-powered vending solutions by HAHA Vending
          </p>
        </div>
      </section>

      {/* Machines Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {machines.map((machine, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-96 md:h-auto ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <Image
                      src={machine.image}
                      alt={machine.name}
                      width={800}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="inline-block mb-4">
                      <span className="bg-brand-green/10 text-brand-green px-4 py-2 rounded-full text-sm font-medium">
                        AI-Powered
                      </span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                      {machine.name}
                    </h3>
                    
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {machine.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-brand-dark mb-3 flex items-center gap-2">
                        <div className="w-1.5 h-6 bg-brand-orange rounded-full"></div>
                        Key Features
                      </h4>
                      <ul className="grid grid-cols-1 gap-2">
                        {machine.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <svg className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <span className="font-semibold text-brand-dark">Capacity:</span>
                        <span className="text-gray-700">{machine.capacity}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-semibold text-brand-dark">Ideal for:</span>
                        <span className="text-gray-700">{machine.ideal}</span>
                      </div>
                    </div>

                    <a
                      href="tel:8056653515"
                      className="inline-flex items-center justify-center gap-2 bg-brand-green text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-all hover:shadow-lg"
                    >
                      Request this machine
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Why HAHA Section */}
          <div className="mt-20 bg-gradient-to-br from-brand-green/5 to-brand-orange/5 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-brand-dark text-center mb-12">
              Why HAHA Vending Machines?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-brand-dark mb-2">Higher Revenue</h4>
                <p className="text-gray-600">
                  Larger capacity, multiple items per transaction, and higher average order values
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-brand-dark mb-2">Never Gets Stuck</h4>
                <p className="text-gray-600">
                  Open-door design eliminates jams and frustrated customers
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-brand-dark mb-2">Smart Management</h4>
                <p className="text-gray-600">
                  App-based monitoring, automatic restocking orders, and easy maintenance
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <p className="text-2xl text-brand-dark font-semibold mb-6">
              Ready to get started?
            </p>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss which vending solution is right for your location. We'll help you choose the perfect machine and handle everything from installation to ongoing service.
            </p>
            <a
              href="tel:8056653515"
              className="inline-flex items-center gap-3 bg-brand-green text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-emerald-700 hover:shadow-2xl transition-all"
            >
              (805) 665-3515 - Call or text today
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
