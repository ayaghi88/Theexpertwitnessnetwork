import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Scale, 
  Menu, 
  X,
  Phone,
  Mail,
  MapPin,
  Users,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: isHome ? '#about' : '/#about' },
    { name: 'Services', href: isHome ? '#services' : '/#services' },
    { name: 'Practice Areas', href: isHome ? '#practice-areas' : '/#practice-areas' },
    { name: 'Join Network', href: '/join-network' },
    { name: 'Consult With Us', href: '/consult' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || !isHome ? 'bg-white shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Scale className={`h-8 w-8 ${scrolled || !isHome ? 'text-emerald-900' : 'text-gold-400'}`} />
            <span className={`ml-2 text-xl font-serif font-bold tracking-tight ${scrolled || !isHome ? 'text-emerald-900' : 'text-white'}`}>
              THE EXPERT WITNESS <span className="text-gold-500">NETWORK</span>
            </span>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                link.href.startsWith('#') || (link.href.startsWith('/#')) ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-gold-500 ${scrolled || !isHome ? 'text-emerald-900' : 'text-white'}`}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-sm font-medium transition-colors hover:text-gold-500 ${scrolled || !isHome ? 'text-emerald-900' : 'text-white'}`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <Link
                to="/consult"
                className="bg-gold-500 hover:bg-gold-600 text-emerald-950 px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-gold-500/20"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled || !isHome ? 'text-emerald-900' : 'text-white'} p-2`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-emerald-100 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                link.href.startsWith('#') || (link.href.startsWith('/#')) ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-3 py-2 text-emerald-900 hover:text-gold-500 text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block px-3 py-2 text-emerald-900 hover:text-gold-500 text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <Link
                to="/consult"
                className="block w-full text-center bg-emerald-900 text-white px-3 py-3 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-white pt-20 pb-10 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center mb-6">
              <Scale className="h-8 w-8 text-gold-500" />
              <span className="ml-2 text-2xl font-serif font-bold tracking-tight">
                THE EXPERT WITNESS <span className="text-gold-500">NETWORK</span>
              </span>
            </div>
            <p className="text-emerald-50/50 max-w-md leading-relaxed mb-8">
              A professional referral and consulting platform that connects attorneys with highly qualified expert witnesses across a wide range of disciplines.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-gold-500 hover:text-emerald-950 transition-all cursor-pointer">
                <Users className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-gold-500 hover:text-emerald-950 transition-all cursor-pointer">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-gold-500 hover:text-emerald-950 transition-all cursor-pointer">
                <Scale className="h-5 w-5" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6 text-gold-500">Quick Links</h4>
            <ul className="space-y-4 text-emerald-50/60">
              <li><Link to="/#about" className="hover:text-gold-500 transition-colors">About Us</Link></li>
              <li><Link to="/#services" className="hover:text-gold-500 transition-colors">Our Services</Link></li>
              <li><Link to="/join-network" className="hover:text-gold-500 transition-colors">Join Our Network</Link></li>
              <li><Link to="/consult" className="hover:text-gold-500 transition-colors">Consult With Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6 text-gold-500">Contact Info</h4>
            <ul className="space-y-4 text-emerald-50/60">
              <li className="flex items-center"><Phone className="h-4 w-4 mr-3 text-gold-500" /> 225-407-0850</li>
              <li className="flex items-center"><Mail className="h-4 w-4 mr-3 text-gold-500" /> support@theexpertwitnessnetwork.com</li>
              <li className="flex items-center"><MapPin className="h-4 w-4 mr-3 text-gold-500" /> theexpertwitnessnetwork.com</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-emerald-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-emerald-50/30 text-sm">
            © {new Date().getFullYear()} The Expert Witness Network. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm text-emerald-50/30">
            <a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white selection:bg-gold-200 selection:text-emerald-950">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
