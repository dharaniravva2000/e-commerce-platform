import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { useState } from 'react';

export function Navigation() {
  const { isScrolled } = useScrollPosition();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/shop', label: 'Shop' },
    { path: '/new', label: 'New Collection' },
    { path: '/about', label: 'About' }
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link to="/" className="group">
              <motion.div
                className="tracking-[0.3em] text-sm md:text-base font-light"
                whileHover={{ letterSpacing: '0.4em' }}
                transition={{ duration: 0.3 }}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                ATELIER
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative text-sm tracking-[0.15em] font-light hover:text-accent transition-colors"
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                      layoutId="nav-underline"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4 md:gap-6">
              <button className="p-2 hover:text-accent transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <Link to="/cart" className="p-2 hover:text-accent transition-colors relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-accent rounded-full" />
              </Link>
              <Link to="/profile" className="p-2 hover:text-accent transition-colors">
                <User className="w-5 h-5" />
              </Link>
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background md:hidden"
            style={{ top: '80px' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-3xl tracking-[0.2em] font-light hover:text-accent transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
