import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
// import logo from '/assets/logo.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/home' }, 
    { name: 'Packages', href: '/packages' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className=" rounded-xl flex items-center justify-center ">
              <Image
                src="/assets/logo.png"
                alt="Ram Adventure Logo"
                width={70}
                height={70}
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-display text-2xl font-bold ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}>
                Ram Adventure
              </span>
              <span className={`text-xs font-medium ${
                isScrolled ? 'text-slate-600' : 'text-green-200'
              }`}>
                Explore Kerala's Beauty
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
        
{navigation.map((item) => {
  const isActive = router.pathname === item.href;
  const isHome = item.href === '/';

  return (
    <Link
      key={item.name}
      href={item.href}
      className={`relative font-medium transition-all duration-200 hover:scale-105
        ${
          isActive
            ? 'text-green-500 font-semibold after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-green-500 after:content-[""]'
            : isHome
              ? (isScrolled ? 'text-slate-700 hover:text-green-300' : 'text-white hover:text-green-500')
              : 'text-black hover:text-green-500'
        }`}
    >
      {item.name}
    </Link>
  );
})}


            <Link
              href="/packages"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    router.pathname === item.href
                      ? 'text-green-500 bg-green-50'
                      : 'text-slate-700 hover:text-green-500 hover:bg-green-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/packages"
                className="block px-3 py-2 mt-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-md text-base font-medium text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
