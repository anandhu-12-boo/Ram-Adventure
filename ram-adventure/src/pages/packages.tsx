import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Packages() {
  const packages = [
    {
      id: 1,
      title: "Tea Garden Explorer",
      duration: "3 Days / 2 Nights",
      price: "₹12,999",
      originalPrice: "₹15,999",
      image: "https://images.unsplash.com/photo-1597735244524-dcdb9c0e9e84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Immerse yourself in the aromatic world of tea plantations with guided tours and tastings.",
      features: [
        "Guided tea plantation tours",
        "Tea factory visits and tastings",
        "Spice garden exploration",
        "Mountain trekking adventures",
        "Local cuisine experiences",
        "Professional photography sessions"
      ],
      highlights: ["Best for couples", "Photography included", "Local guide"]
    },
    {
      id: 2,
      title: "Adventure Seeker",
      duration: "5 Days / 4 Nights",
      price: "₹24,999",
      originalPrice: "₹29,999",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "For thrill-seekers who want to experience Munnar's adventurous side with exciting activities.",
      features: [
        "Rock climbing and rappelling",
        "River rafting expeditions",
        "Wildlife safari tours",
        "Camping under the stars",
        "Paragliding experiences",
        "Off-road jeep adventures"
      ],
      highlights: ["Adventure sports", "Camping included", "Group activities"]
    },
    {
      id: 3,
      title: "Luxury Retreat",
      duration: "7 Days / 6 Nights",
      price: "₹45,999",
      originalPrice: "₹55,999",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Experience Munnar in ultimate luxury with premium accommodations and exclusive services.",
      features: [
        "5-star luxury accommodations",
        "Private guided tours",
        "Spa and wellness treatments",
        "Helicopter scenic rides",
        "Fine dining experiences",
        "Personal concierge service"
      ],
      highlights: ["5-star hotels", "Private tours", "Helicopter rides"]
    },
    {
      id: 4,
      title: "Family Getaway",
      duration: "4 Days / 3 Nights",
      price: "₹18,999",
      originalPrice: "₹22,999",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Perfect family vacation with activities suitable for all ages and comfortable accommodations.",
      features: [
        "Family-friendly accommodations",
        "Children's activity programs",
        "Easy trekking trails",
        "Boating and fishing",
        "Cultural performances",
        "Educational nature walks"
      ],
      highlights: ["Kid-friendly", "Educational tours", "Safe activities"]
    },
    {
      id: 5,
      title: "Honeymoon Special",
      duration: "6 Days / 5 Nights",
      price: "₹35,999",
      originalPrice: "₹42,999",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Romantic getaway designed for couples with intimate experiences and breathtaking views.",
      features: [
        "Romantic candlelight dinners",
        "Couple's spa treatments",
        "Private sunset viewpoints",
        "Flower decoration services",
        "Professional couple photography",
        "Exclusive romantic experiences"
      ],
      highlights: ["Romantic settings", "Couple activities", "Privacy focused"]
    },
    {
      id: 6,
      title: "Corporate Retreat",
      duration: "3 Days / 2 Nights",
      price: "₹16,999",
      originalPrice: "₹19,999",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Team building and corporate events in the serene environment of Munnar's hills.",
      features: [
        "Conference facilities",
        "Team building activities",
        "Corporate accommodation",
        "Business center access",
        "Group transportation",
        "Professional event management"
      ],
      highlights: ["Team building", "Business facilities", "Group discounts"]
    }
  ];

  return (
    <Layout 
      title="Travel Packages - Ram Adventure"
      description="Explore our carefully curated travel packages for Munnar. From adventure tours to luxury retreats, find the perfect Kerala experience."
    >
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-slate-900/80 to-green-900/70 absolute z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Munnar Packages"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 elegant-shadow">
            Our Travel Packages
          </h1>
          <p className="font-serif text-xl md:text-2xl text-gray-200">
            Carefully crafted experiences to suit every traveler's dream
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={pkg.id}
                className="card-professional bg-white rounded-2xl overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full font-semibold text-sm">
                    {pkg.duration}
                  </div>
                  <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                    {pkg.highlights.slice(0, 2).map((highlight, idx) => (
                      <span
                        key={idx}
                        className="bg-white/90 text-green-800 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">
                    {pkg.title}
                  </h3>
                  <p className="font-serif text-gray-600 mb-4 leading-relaxed">
                    {pkg.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-3xl font-bold text-green-600 font-display">
                        {pkg.price}
                      </span>
                      <span className="text-lg text-gray-400 line-through">
                        {pkg.originalPrice}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">per person</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {pkg.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 text-sm">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                    {pkg.features.length > 4 && (
                      <li className="text-green-600 text-sm font-medium">
                        +{pkg.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                  
                  <div className="flex space-x-2">
                    <Link
                      href={`/packages/${pkg.id}`}
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-full font-semibold text-center transition-all duration-200 transform hover:scale-105"
                    >
                      View Details
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white py-3 rounded-full font-semibold text-center transition-all duration-200"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="font-serif text-lg text-green-100 mb-6">
            We specialize in creating custom packages tailored to your specific needs and preferences.
          </p>
          <Link
            href="/contact"
            className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Create Custom Package
          </Link>
        </div>
      </section>
    </Layout>
  );
}
