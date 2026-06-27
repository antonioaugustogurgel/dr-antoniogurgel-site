import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import MusicPlayer from './MusicPlayer';

const navLinks = [
  { name: 'Início', href: '#hero' },
  { name: 'Quem Sou', href: '#about' },
  { name: 'Serviços', href: '#services' },
  { name: 'Contato', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-navy/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo: Symbol + Text side by side */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="flex items-center gap-2 sm:gap-3 group -ml-2 sm:ml-0"
          >
            {/* Symbol - moved further left on mobile */}
            <img
              src="/symbol.png"
              alt=""
              className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 -ml-4 sm:-ml-2"
            />
            {/* Text - keep proportions, moved left */}
            <img
              src="/texto.png"
              alt="DR. Antônio Gurgel - Médico Psiquiatra"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-white/80 hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                {link.name}
              </a>
            ))}
            
            {/* Music Player - next to Agendar */}
            <MusicPlayer />
            
            <a
              href="https://wa.me/5551995557211"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gold hover:bg-gold-light text-navy px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 hover:shadow-gold"
            >
              <Phone className="w-4 h-4" />
              Agendar
            </a>
          </div>

          {/* Mobile: Music Player + Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <MusicPlayer />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-80 mt-4' : 'max-h-0'
          }`}
        >
          <div className="bg-navy-light/95 backdrop-blur-md rounded-xl p-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="block text-white/80 hover:text-gold transition-colors duration-300 py-2 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy px-5 py-3 rounded-full font-medium text-sm transition-all duration-300 mt-3"
            >
              <Phone className="w-4 h-4" />
              Agendar Consulta
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
