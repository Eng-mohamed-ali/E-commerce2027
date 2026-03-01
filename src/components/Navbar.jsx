import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { buttonHover, mobileMenu, slideDown } from './animations/MotionPresets';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Features', path: '/features' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Pricing', path: '/pricing' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  return (
    <motion.nav
      role="navigation"
      aria-label="Main Navigation"
      initial="hidden"
      animate="visible"
      variants={slideDown}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
          : 'bg-white/80 backdrop-blur-sm border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2 group"
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <ShoppingBag className="w-8 h-8 text-primary-600" aria-hidden="true" />
            </motion.div>

            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              MarketMosaic
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors py-2
                  ${isActive ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-4">
            <NavLink
              to="/login"
              className="px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-primary-600 transition-colors"
            >
              Log In
            </NavLink>

            <motion.div {...buttonHover}>
              <NavLink
                to="/signup"
                className="block px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm font-semibold rounded-full shadow-lg shadow-primary-500/30 hover:shadow-xl"
              >
                Sign Up
              </NavLink>
            </motion.div>
          </div>

          {/* Mobile Toggle */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen
              ? <X className="w-6 h-6" aria-hidden="true" />
              : <Menu className="w-6 h-6" aria-hidden="true" />
            }
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              variants={mobileMenu}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-3 border-t border-gray-100">

                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm font-medium rounded-lg transition-colors
                        ${isActive ? 'bg-primary-50 text-primary-600' : 'text-gray-600 hover:bg-gray-50'}`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}

                <div className="pt-4 space-y-3 border-t border-gray-100">
                  <NavLink
                    to="/login"
                    className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:text-primary-600"
                  >
                    Log In
                  </NavLink>

                  <NavLink
                    to="/signup"
                    className="block px-4 py-2 text-sm font-semibold text-center bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full"
                  >
                    Sign Up
                  </NavLink>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;