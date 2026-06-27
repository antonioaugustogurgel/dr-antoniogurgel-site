import { Heart, Phone, Mail, MapPin, Instagram, Linkedin } from 'lucide-react';

const quickLinks = [
  { name: 'Início', href: '#hero' },
  { name: 'Quem Sou', href: '#about' },
  { name: 'Serviços', href: '#services' },
  { name: 'Contato', href: '#contact' },
];

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/antonioagurgel', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-navy-dark overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            {/* Möbius Symbol Logo */}
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/moebius-transparent.png"
                alt=""
                className="h-16 w-auto"
              />
              <div>
                <h3 className="font-serif text-xl text-white">Dr. Antônio Gurgel</h3>
                <p className="text-gold text-sm">Médico Psiquiatra</p>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed mb-6 max-w-md">
              Médico psiquiatra dedicado ao cuidado da saúde mental com abordagem 
              psicodinâmica. Atendimento humanizado e individualizado para seu bem-estar.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/60 hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-medium mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/80 text-sm">(51) 99555-7211</p>
                  <p className="text-white/40 text-xs">WhatsApp</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/80 text-sm">antonioaugustogurgel@gmail.com</p>
                  <p className="text-white/40 text-xs">E-mail</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/80 text-sm">Porto Alegre - RS</p>
                  <p className="text-white/40 text-xs">Atendimento presencial</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">
              CRM 49203 RS - RQE 45922
            </p>
            <p className="text-white/40 text-sm flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-gold fill-gold" /> para cuidar de você
            </p>
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Dr. Antônio Gurgel. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
