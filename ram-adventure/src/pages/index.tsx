import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-slate-900/70 to-green-900/60 absolute z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1672219386269-486cbbe9a50f?q=80&w=1170"
            alt="Munnar Tea Gardens"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="relative z-20 text-center text-white max-w-6xl mx-auto px-4 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-left">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight elegant-shadow">
                Discover the
                <span className="block text-green-300 ">Enchanting Munnar</span>
              </h1>
              <p className="font-serif text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                Immerse yourself in the pristine beauty of Kerala's crown jewel. 
                Experience luxury travel with our curated packages and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/packages"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center"
                >
                  Explore Packages
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>

           
            {/* <div className="jeep-3d-container flex justify-center lg:justify-end">
              <div className="relative card-professional">
                <Image
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Adventure Vehicle for Munnar Exploration"
                  width={450}
                  height={300}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
                
                
                <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                  <span className="font-display text-green-800 font-bold text-sm">
                    Premium Adventure
                  </span>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-green-600/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                  <div className="text-center">
                    <div className="font-display text-white text-lg font-bold">4WD</div>
                    <div className="text-green-100 text-xs">Luxury Tours</div>
                  </div>
                </div>
              </div>
            </div> */}

            
          </div>

          
          <div className="mt-16 text-center">
            <p className="font-serif text-green-200 text-xl md:text-2xl italic">
              "Where Every Journey Becomes a Cherished Memory"
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center animate-pulse">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Choose Ram Adventure?
            </h2>
            <p className="font-serif text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the difference with our premium services, expert local knowledge, 
              and commitment to creating extraordinary travel memories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Local Guides",
                description: "Our certified guides possess intimate knowledge of Munnar's hidden treasures and cultural heritage.",
                icon: "🏔️",
                image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Luxury Accommodations",
                description: "Stay in carefully selected premium properties that offer comfort and breathtaking views.",
                icon: "🏨",
                image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Sustainable Tourism",
                description: "We're committed to preserving Kerala's natural beauty for future generations.",
                icon: "🌿",
                image: "https://images.unsplash.com/photo-1597735244524-dcdb9c0e9e84?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="card-professional bg-white rounded-2xl overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-48">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-2xl">
                    {feature.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-serif text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 elegant-shadow">
            Ready for Your Adventure?
          </h2>
          <p className="font-serif text-xl text-green-100 mb-8 leading-relaxed">
            Let us craft the perfect Munnar experience tailored to your dreams and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/packages"
              className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              View Packages
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}