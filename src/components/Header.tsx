import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';
import LogoIcon from './LogoIcon';

interface HeaderProps {
  onStartDemo: () => void;
  onJoinWaitlist: () => void;
}

export default function Header({ onStartDemo, onJoinWaitlist }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'Form Playground', href: '#playground' },
    { name: 'FAQs', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 ${
        isScrolled
          ? 'bg-surface/85 glass-header border-b border-outline-variant/30 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center h-full w-full px-6 md:px-12 max-w-7xl mx-auto">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none">
          <LogoIcon className="h-10 w-10 warm-shadow-md group-hover:scale-105 transition-transform duration-300" />
          <span className="font-hanken text-xl font-extrabold text-on-surface tracking-tight group-hover:text-primary transition-colors">
            Form Mitra
          </span>
        </a>

        {/* Desktop Nav links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-sans text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors duration-200 relative py-1 focus:outline-none focus:text-primary"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-4 lg:gap-6">
          <button
            onClick={onStartDemo}
            className="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors duration-150 focus:outline-none"
          >
            Interactive Demo
          </button>
          <button
            onClick={onJoinWaitlist}
            className="bg-primary text-white hover:bg-primary/95 px-5 py-2.5 rounded-full font-sans text-sm font-bold hover:scale-105 active:scale-95 transition-all flex items-center gap-2 warm-shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <MessageSquare className="w-4 h-4 fill-current text-primary-container" />
            Join the Waitlist
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-on-surface hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-surface border-b border-outline-variant/30 shadow-lg px-6 py-8 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-sans font-bold text-base text-on-surface-variant hover:text-primary py-2 border-b border-outline-variant/10 focus:outline-none"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4 pt-4 border-t border-outline-variant/20">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onStartDemo();
                }}
                className="w-full text-center py-3 text-sm font-bold text-on-surface-variant hover:text-primary focus:outline-none"
              >
                Interactive Demo
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onJoinWaitlist();
                }}
                className="w-full bg-primary text-white py-4 rounded-full font-sans text-center font-bold flex items-center justify-center gap-2 focus:outline-none warm-shadow-md"
              >
                <MessageSquare className="w-5 h-5 fill-current text-primary-container" />
                Join the Waitlist
                <ArrowUpRight className="w-4 h-4 text-primary-container" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
