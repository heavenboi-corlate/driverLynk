import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-900/95 backdrop-blur-xl border-b border-white/10 shadow-lg">
        <div className="container-modern">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl lg:text-2xl font-bold text-white">
                DriverLynk
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-white'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 bg-white ${
                    isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/hire-driver"
                className="px-6 py-2 text-sm font-semibold rounded-xl transition-all duration-300 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20"
              >
                Hire Drivers
              </Link>
              <Link
                to="/apply-driver"
                className="px-6 py-2 text-sm font-semibold rounded-xl transition-all duration-300 bg-primary-600 text-white hover:bg-primary-700"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg transition-all duration-300 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-primary-900/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Menu Content */}
          <div className="absolute right-0 top-0 h-full w-80 bg-primary-900/95 backdrop-blur-xl shadow-2xl transform transition-transform duration-300">
            <div className="p-6">
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Mobile Navigation Items */}
              <div className="space-y-4 mb-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? 'bg-white/20 text-white'
                        : 'text-white/90 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA Buttons */}
              <div className="space-y-4">
                <Link
                  to="/hire-driver"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-white/10 text-white text-center py-3 font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  Hire Drivers
                </Link>
                <Link
                  to="/apply-driver"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-primary-600 text-white text-center py-3 font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300"
                >
                  Apply Now
                </Link>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="space-y-3 text-white/80 text-sm">
                  <div className="flex items-center space-x-3 text-text-secondary text-sm">
                    <svg className="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>07300 087989</span>
                  </div>
                  <div className="flex items-center space-x-3 text-text-secondary text-sm">
                    <svg className="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>chipomhont@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation; 