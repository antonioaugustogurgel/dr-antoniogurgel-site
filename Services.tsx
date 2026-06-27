import { useEffect, useRef } from 'react';
import { GraduationCap, Award, BookOpen, Users, Stethoscope, Building2, Phone } from 'lucide-react';

const qualifications = [
  {
    icon: GraduationCap,
    title: 'Formação Médica',
    description: 'Universidade Federal de Ciências da Saúde de Porto Alegre – RS',
  },
  {
    icon: Award,
    title: 'Residência Médica em Psiquiatria',
    description: 'Hospital Psiquiátrico São Pedro',
  },
  {
    icon: BookOpen,
    title: 'Pós-graduação em Psicoterapia',
    description: 'Hospital de Clínicas de Porto Alegre - Orientação Analítica',
  },
  {
    icon: Stethoscope,
    title: 'Formação em Psicoterapia Analítica',
    description: 'Em andamento no Centro de Estudos Luiz Guedes - HCPA',
  },
  {
    icon: Building2,
    title: 'Mestrando',
    description: 'Programa de Pós-Graduação em Psiquiatria e Ciências do Comportamento - UFRGS',
  },
  {
    icon: Users,
    title: 'Pesquisador integrante do Grupo IQOL',
    description: 'Inovação em Qualidade de Vida - HCPA',
  },
];

const preceptorships = [
  'HPSP - Hospital Psiquiátrico São Pedro',
  'UFCSPA - Universidade Federal de Ciências da Saúde de Porto Alegre',
  'Curso de Formação Mário Martins',
];

export default function About() {
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
      id="about"
      ref={sectionRef}
      className="relative pt-24 lg:pt-32 pb-32 lg:pb-40 overflow-hidden"
    >
      {/* Background with gradient and SYMBOL.png */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light/30 to-navy">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        
        {/* SYMBOL.png in corners - top right and bottom left */}
        <div className="absolute -top-40 -right-40 animate-moebius-spin-slow">
          <img
            src="/symbol.png"
            alt=""
            className="w-[600px] h-[600px] object-contain opacity-[0.06]"
          />
        </div>
        <div className="absolute -bottom-40 -left-40 animate-moebius-spin-slow-reverse">
          <img
            src="/symbol.png"
            alt=""
            className="w-[500px] h-[500px] object-contain opacity-[0.05]"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="reveal opacity-0 inline-block text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Sobre Mim
          </span>
          <h2 className="reveal opacity-0 font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6" style={{ animationDelay: '0.1s' }}>
            Quem Sou
          </h2>
          <div className="reveal opacity-0 w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" style={{ animationDelay: '0.2s' }} />
        </div>

        {/* Main Content with Headshot */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-10 items-start mb-20">
          {/* Left Column - Headshot */}
          <div className="reveal opacity-0 lg:col-span-1" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Decorative glow */}
              <div className="absolute inset-0 bg-gold/20 rounded-2xl blur-2xl scale-95" />
              
              {/* Headshot container */}
              <div className="relative bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl p-2 border border-gold/30">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="/headshot.png"
                    alt="Dr. Antônio Gurgel"
                    className="w-full aspect-[3/4] object-cover object-top"
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
                </div>
                
                {/* Name badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-navy border border-gold/30 rounded-full px-6 py-2 shadow-lg">
                  <p className="text-gold font-medium text-sm whitespace-nowrap">Dr. Antônio Gurgel</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-20 h-20 border border-gold/20 rounded-full" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 border border-gold/10 rounded-full" />
            </div>
          </div>

          {/* Middle Column - Bio */}
          <div className="reveal opacity-0 lg:col-span-1" style={{ animationDelay: '0.3s' }}>
            <div className="bg-navy-light/50 backdrop-blur-sm rounded-2xl p-8 border border-gold/10 h-full">
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Um médico psiquiatra dedicado ao cuidado da saúde mental com uma abordagem 
                humanizada e centrada no paciente, buscando sempre compreender cada história 
                em sua singularidade.
              </p>
              <p className="text-white/70 leading-relaxed">
                Minha formação acadêmica e experiência clínica me permitem oferecer um atendimento 
                completo, integrando os conhecimentos da psiquiatria contemporânea com a profundidade 
                da abordagem psicodinâmica.
              </p>
            </div>
          </div>

          {/* Right Column - Credentials aligned at top */}
          <div className="reveal opacity-0 lg:col-span-1" style={{ animationDelay: '0.4s' }}>
            {/* Credentials Card */}
            <div className="bg-gradient-to-br from-gold/10 to-gold/5 rounded-2xl p-6 border border-gold/20">
              <div className="text-center mb-6">
                <h3 className="font-serif text-xl text-white">Dr. Antônio Gurgel</h3>
                <p className="text-gold text-sm">Médico Psiquiatra</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gold/10">
                  <span className="text-white/60 text-sm">CRM</span>
                  <span className="text-gold font-medium">49203 RS</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gold/10">
                  <span className="text-white/60 text-sm">RQE</span>
                  <span className="text-gold font-medium">45922</span>
                </div>
                <div className="flex flex-col py-2">
                  <span className="text-white/60 text-sm">Especialidade</span>
                  <span className="text-gold font-medium text-right text-sm">Psiquiatria.</span>
                  <span className="text-gold font-medium text-right text-sm">Especialização em Psicoterapia.</span>
                </div>
              </div>
            </div>

            {/* Preceptorships */}
            <div className="mt-6 bg-navy-light/30 backdrop-blur-sm rounded-2xl p-6 border border-gold/10">
              <h3 className="text-gold font-medium mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Preceptor das Residências
              </h3>
              <ul className="space-y-2">
                {preceptorships.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-white/60 text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Qualifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {qualifications.map((item, index) => (
            <div
              key={index}
              className="reveal opacity-0 group bg-navy-light/30 backdrop-blur-sm rounded-xl p-6 border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:bg-navy-light/50"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-white font-medium mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Agendar Button */}
        <div className="flex justify-center reveal opacity-0" style={{ animationDelay: '0.5s' }}>
          <a
            href="https://wa.me/5551995557211"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gold hover:bg-gold-light text-navy px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-gold"
          >
            <Phone className="w-5 h-5" />
            Agendar
          </a>
        </div>
      </div>
    </section>
  );
}
