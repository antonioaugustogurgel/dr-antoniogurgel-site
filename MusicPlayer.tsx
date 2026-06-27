import { useEffect, useRef } from 'react';
import { Video, MapPin, Calendar, UserCheck, Heart, Brain, MessageCircle, Shield } from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'Teleconsultas',
    description: 'Atendimento online com conforto e conveniência para todo o Brasil e o mundo. Realize suas consultas no ambiente que você preferir, sem precisar se deslocar.',
    features: ['Atendimento 100% online', 'Horários flexíveis', 'Plataforma segura', 'Receita digital'],
    highlight: true,
  },
  {
    icon: MapPin,
    title: 'Atendimento Presencial',
    description: 'Consultas presenciais em Porto Alegre - RS e em Foz do Iguaçu - PR. Um espaço acolhedor e preparado para o seu conforto durante o atendimento. Consulte horários disponíveis para agendamentos.',
    features: ['Ambiente acolhedor', 'Localização central', 'Estacionamento próximo', 'Acessibilidade'],
    highlight: false,
  },
  {
    icon: Brain,
    title: 'Avaliação Psiquiátrica',
    description: 'Avaliação completa e individualizada para diagnóstico preciso e planejamento do tratamento mais adequado para você.',
    features: ['Diagnóstico especializado', 'Plano de tratamento', 'Acompanhamento contínuo', 'Abordagem humanizada'],
    highlight: false,
  },
  {
    icon: MessageCircle,
    title: 'Psicoterapia Analítica',
    description: 'Abordagem terapêutica focada na compreensão profunda dos conflitos internos e no desenvolvimento pessoal.',
    features: ['Abordagem psicodinâmica', 'Trabalho do inconsciente', 'Autoconhecimento', 'Transformação pessoal'],
    highlight: false,
  },
];

const differentials = [
  {
    icon: Calendar,
    title: 'Agendamentos Flexíveis',
    description: 'Horários adaptados à sua rotina',
  },
  {
    icon: UserCheck,
    title: 'Acompanhamento Individualizado',
    description: 'Cada paciente é único e especial',
  },
  {
    icon: Heart,
    title: 'Acolhimento Humanizado',
    description: 'Cuidado com empatia e respeito',
  },
  {
    icon: Shield,
    title: 'Sigilo Profissional',
    description: 'Sua privacidade é garantida',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background with SYMBOL.png */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy to-navy-light/30">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        
        {/* SYMBOL.png in corners - top right and bottom left */}
        <div className="absolute -top-40 -right-40 animate-moebius-spin-slow">
          <img
            src="/symbol.png"
            alt=""
            className="w-[550px] h-[550px] object-contain opacity-[0.06]"
          />
        </div>
        <div className="absolute -bottom-60 -left-60 animate-moebius-spin-slow-reverse">
          <img
            src="/symbol.png"
            alt=""
            className="w-[600px] h-[600px] object-contain opacity-[0.05]"
          />
        </div>
        
        {/* Additional glow */}
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="reveal opacity-0 inline-block text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Como Posso Ajudar
          </span>
          <h2 className="reveal opacity-0 font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6" style={{ animationDelay: '0.1s' }}>
            Serviços
          </h2>
          <div className="reveal opacity-0 w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" style={{ animationDelay: '0.2s' }} />
          <p className="reveal opacity-0 text-white/60 text-lg max-w-2xl mx-auto" style={{ animationDelay: '0.3s' }}>
            Ofereço atendimento psiquiátrico especializado com foco no bem-estar 
            e na qualidade de vida de cada paciente
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`reveal opacity-0 group relative rounded-2xl p-8 transition-all duration-500 ${
                service.highlight
                  ? 'bg-gradient-to-br from-gold/20 to-gold/5 border-2 border-gold/40 hover:border-gold/60'
                  : 'bg-navy-light/30 border border-gold/10 hover:border-gold/30 hover:bg-navy-light/50'
              }`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {service.highlight && (
                <span className="absolute -top-3 left-8 bg-gold text-navy text-xs font-bold px-4 py-1 rounded-full">
                  MAIS POPULAR
                </span>
              )}
              
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                service.highlight ? 'bg-gold/20' : 'bg-gold/10 group-hover:bg-gold/20'
              } transition-colors duration-300`}>
                <service.icon className="w-7 h-7 text-gold" />
              </div>
              
              <h3 className="font-serif text-2xl text-white mb-4">{service.title}</h3>
              <p className="text-white/60 leading-relaxed mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-white/70 text-sm">
                    <span className={`w-1.5 h-1.5 rounded-full ${service.highlight ? 'bg-gold' : 'bg-gold/60'}`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Differentials */}
        <div className="reveal opacity-0 relative" style={{ animationDelay: '0.4s' }}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {differentials.map((item, index) => (
              <div
                key={index}
                className="text-center group bg-navy-light/20 backdrop-blur-sm rounded-xl p-6 border border-gold/5 hover:border-gold/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-gold" />
                </div>
                <h4 className="text-white font-medium mb-2">{item.title}</h4>
                <p className="text-white/50 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
