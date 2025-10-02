import { useState } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'tea-gardens', name: 'Tea Gardens' },
    { id: 'adventures', name: 'Adventures' },
    { id: 'couples', name: 'Couples' },
    { id: 'families', name: 'Families' },
    { id: 'landscapes', name: 'Landscapes' }
  ];

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Couple enjoying tea garden views",
      category: "couples",
      title: "Romantic Tea Garden Walk",
      description: "Sarah & John from Australia - 'The most magical honeymoon experience!'"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1597735244524-dcdb9c0e9e84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Family exploring tea plantations",
      category: "families",
      title: "Family Adventure",
      description: "The Sharma Family - 'Our kids learned so much about tea cultivation!'"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Adventure seekers on mountain trek",
      category: "adventures",
      title: "Mountain Trekking",
      description: "Adventure Group from Delhi - 'Breathtaking views and amazing guides!'"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Misty morning in Munnar",
      category: "landscapes",
      title: "Misty Morning Magic",
      description: "Captured during our sunrise tour - 'Nature's own masterpiece'"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Luxury resort experience",
      category: "couples",
      title: "Luxury Retreat",
      description: "Priya & Raj - 'The perfect blend of luxury and nature'"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Tea plantation workers",
      category: "tea-gardens",
      title: "Tea Plantation Experience",
      description: "Learning traditional tea picking methods"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Group adventure activity",
      category: "adventures",
      title: "River Rafting Fun",
      description: "Corporate team from Bangalore - 'Best team building experience ever!'"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Sunset views from hills",
      category: "landscapes",
      title: "Golden Hour",
      description: "Spectacular sunset from Top Station viewpoint"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1597735244524-dcdb9c0e9e84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Children learning about spices",
      category: "families",
      title: "Spice Garden Discovery",
      description: "The Johnson Family - 'Educational and fun for the whole family!'"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Tea tasting session",
      category: "tea-gardens",
      title: "Tea Tasting Experience",
      description: "Learning about different tea varieties and flavors"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Romantic dinner setup",
      category: "couples",
      title: "Candlelight Dinner",
      description: "Anniversary celebration - 'A night we'll never forget!'"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Wildlife spotting",
      category: "adventures",
      title: "Wildlife Safari",
      description: "Spotted elephants in their natural habitat!"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah & John Mitchell",
      location: "Sydney, Australia",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Our honeymoon in Munnar was absolutely magical! Ram Adventure took care of every detail, from the romantic candlelight dinners to the breathtaking sunrise views. The tea garden walks were so peaceful and romantic. We couldn't have asked for a better experience!",
      package: "Honeymoon Special"
    },
    {
      id: 2,
      name: "The Sharma Family",
      location: "Mumbai, India",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Traveling with kids can be challenging, but Ram Adventure made it so easy and enjoyable! The guides were patient with our children and made learning about tea cultivation fun. The accommodations were family-friendly and the activities were perfect for all ages.",
      package: "Family Getaway"
    },
    {
      id: 3,
      name: "Priya & Raj Patel",
      location: "London, UK",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "The luxury retreat package exceeded all our expectations! The 5-star accommodation, private tours, and helicopter ride were incredible. The spa treatments after long days of exploration were exactly what we needed. Truly a once-in-a-lifetime experience!",
      package: "Luxury Retreat"
    },
    {
      id: 4,
      name: "Adventure Squad Delhi",
      location: "New Delhi, India",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "What an adrenaline rush! The adventure package had everything - rock climbing, river rafting, and camping under the stars. The guides were professional and safety was never compromised. We're already planning our next adventure with Ram Adventure!",
      package: "Adventure Seeker"
    },
    {
      id: 5,
      name: "Corporate Team Bangalore",
      location: "Bangalore, India",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "The corporate retreat was perfectly organized! The team building activities in such a beautiful setting really brought our team together. The conference facilities were top-notch and the natural environment provided the perfect backdrop for productive discussions.",
      package: "Corporate Retreat"
    },
    {
      id: 6,
      name: "Emma & David Johnson",
      location: "Toronto, Canada",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Our custom package was tailored perfectly to our interests in photography and nature. The guides knew all the best spots for capturing stunning shots, and the timing was perfect for golden hour photography. The memories and photos we took will last forever!",
      package: "Custom Package"
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const selectedImageData = selectedImage ? galleryImages.find(img => img.id === selectedImage) : null;

  return (
    <Layout 
      title="Gallery - Ram Adventure"
      description="Explore our gallery of beautiful moments, client experiences, and stunning Munnar landscapes. See why travelers choose Ram Adventure for their Kerala journey."
    >
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-slate-900/80 to-green-900/70 absolute z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Gallery of Memories"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 elegant-shadow">
            Gallery of Memories
          </h1>
          <p className="font-serif text-xl md:text-2xl text-gray-200">
            Beautiful moments and cherished memories from our travelers
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="card-professional bg-white rounded-2xl overflow-hidden cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openLightbox(image.id)}
              >
                <div className="relative h-64">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-display text-lg font-bold mb-1">{image.title}</h3>
                      <p className="font-serif text-sm opacity-90">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="font-serif text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences and heartfelt feedback from travelers who've explored Munnar with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="card-professional bg-white p-6 rounded-2xl border border-gray-100 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="font-serif text-gray-700 leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>

                <div className="bg-green-50 px-3 py-1 rounded-full inline-block">
                  <span className="text-green-700 text-sm font-medium">
                    {testimonial.package}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="animate-slide-up">
              <div className="font-display text-4xl md:text-5xl font-bold mb-2">2500+</div>
              <div className="font-serif text-lg">Photos Captured</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="font-display text-4xl md:text-5xl font-bold mb-2">5000+</div>
              <div className="font-serif text-lg">Happy Memories</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="font-display text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="font-serif text-lg">Client Satisfaction</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="font-display text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="font-serif text-lg">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Create Your Own Memories?
          </h2>
          <p className="font-serif text-lg text-green-100 mb-6">
            Join thousands of satisfied travelers and create your own beautiful moments in Munnar
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
              Plan Your Trip
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && selectedImageData && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl"
            >
              ✕
            </button>
            <div className="relative">
              <Image
                src={selectedImageData.src}
                alt={selectedImageData.alt}
                width={800}
                height={600}
                className="rounded-lg max-w-full max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {selectedImageData.title}
                </h3>
                <p className="font-serif text-gray-200">
                  {selectedImageData.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
