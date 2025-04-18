import { Home, Headset, Phone, Building2, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Servicios', href: '/servicios', icon: Headset },
    { name: 'Contáctanos', href: '/contactanos', icon: Phone },
    { name: 'Sobre Magnavoz', href: '/sobre-magnavoz', icon: Building2 },
  ];

  return (
    <header className="fixed w-full top-0 z-50">
      <nav 
        className="mx-4 my-4 sm:mx-6 lg:mx-8 backdrop-blur-md bg-white/70 rounded-2xl border border-white/20 shadow-lg" 
        aria-label="Top"
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/multimedia/03/logo-horizontal_Mesa-de-trabajo-1.png"
                alt="Magnavoz Logo"
                className="h-8"
              />
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-base font-medium flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 ${
                  location.pathname === item.href
                    ? 'bg-gradient-to-r from-magnavoz-dark to-magnavoz-light text-white shadow-md'
                    : 'text-magnavoz-dark hover:bg-white/80 hover:shadow-md backdrop-blur-sm'
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="rounded-xl p-2 text-magnavoz-dark hover:bg-white/80 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden px-4 pb-4">
            <div className="space-y-2 divide-y divide-gray-200/20">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    location.pathname === item.href
                      ? 'bg-gradient-to-r from-magnavoz-dark to-magnavoz-light text-white shadow-md'
                      : 'text-magnavoz-dark hover:bg-white/80 hover:shadow-md backdrop-blur-sm'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}