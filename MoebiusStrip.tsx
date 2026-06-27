import { useEffect, useRef } from 'react';
import { ChevronDown, Video, MapPin, Clock, User } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-light">
        {/* Large Möbius strips in corners - circular animation */}
        {/* Top right corner */}
        <div className="absolute -top-40 -right-40 sm:-top-60 sm:-right-60 animate-moebius-spin-slow">
          <img
            src="/symbol.png"
            alt=""
            className="w-[400px] h-[400px] sm:w-[700px] sm:h-[700px] object-contain opacity-[0.08] sm:opacity-[0.10]"
          />
        </div>
        
        {/* Bottom left corner */}
        <div className="absolute -bottom-60 -left-40 sm:-bottom-80 sm:-left-80 animate-moebius-spin-slow-reverse">
          <img
            src="/symbol.png"
            alt=""
            className="w-[500px] h-[500px] sm:w-[800px] sm:h-[800px] object-contain opacity-[0.06] sm:opacity-[0.08]"
          />
        </div>
        
        {/* Additional glow effects */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(196, 168, 85, 0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(196, 168, 85, 0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Full Logo - ABOVE the text on mobile, right side on desktop */}
          <div className="reveal opacity-0 flex justify-center items-center order-1 lg:order-2" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Golden glow/halo behind logo */}
              <div className="absolute inset-0 bg-gold/20 rounded-full blur-3xl scale-150 animate-pulse" />
              
              <img
                src="/full-logo.png"
                alt="Dr. Antônio Gurgel - Médico Psiquiatra"
                className="relative w-full max-w-sm lg:max-w-lg animate-float"
              />
              
              {/* Decorative golden rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] border border-gold/20 rounded-full animate-pulse" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] border border-gold/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
          </div>

          {/* Text Column - BELOW the logo on mobile, left side on desktop */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Quote with citation */}
            <div className="reveal opacity-0 mb-8" style={{ animationDelay: '0.1s' }}>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-4">
                <span className="text-gold italic">Mens sana</span>
                <span className="block italic">in corpore sano</span>
              </h1>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 border-l-2 border-gold/30 pl-4">
                Mente sã em um corpo são é a resposta que o poeta romano Juvenal no século I deu à pergunta sobre: "o que as pessoas deveriam desejar na vida?"
              </p>
            </div>
            
            <p className="reveal opacity-0 text-white/70 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0" style={{ animationDelay: '0.2s' }}>
              Atendimento psiquiátrico especializado com abordagem psicodinâmica, 
              focado no acolhimento e no cuidado individualizado de cada paciente.
            </p>

            <div className="reveal opacity-0 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10" style={{ animationDelay: '0.3s' }}>
              <a
                href="https://wa.me/5551995557211"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold hover:bg-gold-light text-navy px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-gold-lg flex items-center justify-center gap-2"
              >
                <User className="w-5 h-5" />
                Agende sua Consulta
              </a>
              <button
                onClick={() => scrollToSection('#about')}
                className="border border-white/30 hover:border-gold text-white hover:text-gold px-8 py-4 rounded-full font-medium transition-all duration-300"
              >
                Conheça mais
              </button>
            </div>

            {/* Quick Info */}
            <div className="reveal opacity-0 flex flex-wrap gap-6 justify-center lg:justify-start" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Video className="w-4 h-4 text-gold" />
                <span>Teleconsultas</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-gold" />
                <span>Porto Alegre - RS</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Clock className="w-4 h-4 text-gold" />
                <span>Horários Flexíveis</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-gold transition-colors duration-300 animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
