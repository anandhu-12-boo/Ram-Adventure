import Image from 'next/image';
import Layout from '../components/Layout';

export default function About() {
  const stats = [
    { number: '10+', label: 'Years Experience', description: 'Serving travelers since 2014' },
    { number: '5000+', label: 'Happy Customers', description: 'Satisfied travelers worldwide' },
    { number: '50+', label: 'Tour Packages', description: 'Diverse experiences available' },
    { number: '24/7', label: 'Customer Support', description: 'Always here to help' },
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      position: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'With over 15 years in Kerala tourism, Rajesh founded Ram Adventure to share his passion for Munnar\'s beauty.'
    },
    {
      name: 'Priya Nair',
      position: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Priya ensures every detail of your journey is perfectly planned and executed with care and precision.'
    },
    {
      name: 'Arjun Menon',
      position: 'Lead Guide',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'A certified naturalist and local expert, Arjun brings Munnar\'s stories and secrets to life.'
    },
  ];

  const values = [
    {
      title: 'Authenticity',
      description: 'We provide genuine local experiences that showcase the true spirit of Kerala.',
      icon: '🌟'
    },
    {
      title: 'Sustainability',
      description: 'Committed to responsible tourism that preserves nature for future generations.',
      icon: '🌱'
    },
    {
      title: 'Excellence',
      description: 'We strive for perfection in every aspect of your travel experience.',
      icon: '🏆'
    },
    {
      title: 'Safety',
      description: 'Your safety and security are our top priorities in all our adventures.',
      icon: '🛡️'
    },
  ];

  return (
    <Layout 
      title="About Us - Ram Adventure"
      description="Learn about Ram Adventure's journey, our team, and our commitment to providing exceptional travel experiences in Munnar, Kerala."
    >
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-slate-900/80 to-green-900/70 absolute z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="About Ram Adventure"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 elegant-shadow">
            About Ram Adventure
          </h1>
          <p className="font-serif text-xl md:text-2xl text-gray-200">
            Your trusted partner in discovering Kerala's natural wonders
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 font-serif text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2014 with a simple vision: to share the breathtaking beauty of Munnar 
                  with travelers from around the world. What started as a small local initiative has 
                  grown into Kerala's most trusted adventure travel company.
                </p>
                <p>
                  Our deep-rooted connection to this land, combined with years of experience in 
                  hospitality and tourism, allows us to offer authentic experiences that go beyond 
                  typical tourist attractions. We believe in sustainable tourism that benefits local 
                  communities while preserving the natural beauty that makes Munnar so special.
                </p>
                <p>
                  Every journey with Ram Adventure is carefully crafted to create lasting memories. 
                  From the moment you arrive until your departure, we ensure that every detail 
                  reflects our commitment to excellence and authentic Kerala hospitality.
                </p>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="relative card-professional">
                <Image
                  src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Munnar Tea Gardens"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold font-display">10+</div>
                    <div className="text-sm">Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center text-white animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="font-display text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold text-lg mb-1">{stat.label}</div>
                <div className="font-serif text-green-100 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Values
            </h2>
            <p className="font-serif text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and every experience we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="card-professional bg-white p-6 rounded-2xl text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="font-serif text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Meet Our Team
            </h2>
            <p className="font-serif text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals who make your Munnar dreams come true
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="card-professional bg-white rounded-2xl overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-green-600 font-semibold mb-3">{member.position}</p>
                  <p className="font-serif text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
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
            Ready to Start Your Adventure?
          </h2>
          <p className="font-serif text-lg text-green-100 mb-6">
            Let our experienced team create an unforgettable Munnar experience just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/packages"
              className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              View Packages
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
