import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ទាញយក', href: 'https://mega.nz/file/2lZU3KIR#JBlwheeb7G_BYsI5KOKUNrzWhU458RkTxJgbwcw9QAk', external: true },
    { name: 'លក្ខណៈពិសេស', href: '#features' },
    { name: 'តម្លៃ', href: '#pricing' },
    { name: 'បញ្ជាក់', href: '#testimonials' },
    { name: 'សំណួរ', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-gray-800 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primaryDark to-primary flex items-center justify-center shadow-[0_0_15px_rgba(0,255,136,0.3)]">
            <Download className="text-background font-bold" size={24} />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-white">
            MEGA DOWNLOADER
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              target={link.external ? "_blank" : "_self"}
              rel={link.external ? "noopener noreferrer" : ""}
              className="text-secondary hover:text-primary transition-colors font-medium text-sm lg:text-base"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://t.me/kun_amra" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primaryDark hover:bg-primary text-white hover:text-background font-bold py-2 px-6 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(35,134,54,0.5)] hover:shadow-[0_0_25px_rgba(0,255,136,0.6)] transform hover:-translate-y-1"
          >
            ទិញឥឡូវនេះ
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#161b22] border-b border-gray-800 absolute w-full left-0 top-full px-4 py-4 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              target={link.external ? "_blank" : "_self"}
              rel={link.external ? "noopener noreferrer" : ""}
              className="text-secondary hover:text-primary py-2 border-b border-gray-800/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://t.me/kun_amra" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary text-background font-bold py-3 text-center rounded-lg mt-2"
          >
            ទិញឥឡូវនេះ (9.99$)
          </a>
        </div>
      )}
    </nav>
  );
};