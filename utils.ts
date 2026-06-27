import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Calendar, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefone',
    value: '(51) 99555-7211',
    description: 'WhatsApp para agendamentos',
  },
  {
    icon: Mail,
    title: 'E-mail',
    value: 'antonioaugustogurgel@gmail.com',
    description: 'Para dúvidas e informações',
  },
  {
    icon: MapPin,
    title: 'Localização',
    value: 'Porto Alegre - RS',
    description: 'Foz do Iguaçu - PR\nConsulte disponibilidade',
  },
  {
    icon: Clock,
    title: 'Horários',
    value: 'Seg - Sex: 8h às 19h',
    description: 'Agendamentos flexíveis',
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowDialog(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background with SYMBOL.png */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-light/30 via-navy to-navy-dark">
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
        <div className="absolute -bottom-60 -left-60 animate-moebius-spin-slow-reverse">
          <img
            src="/symbol.png"
            alt=""
            className="w-[700px] h-[700px] object-contain opacity-[0.05]"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="reveal opacity-0 inline-block text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Entre em Contato
          </span>
          <h2 className="reveal opacity-0 font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6" style={{ animationDelay: '0.1s' }}>
            Agende sua Consulta
          </h2>
          <div className="reveal opacity-0 w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" style={{ animationDelay: '0.2s' }} />
          <p className="reveal opacity-0 text-white/60 text-lg max-w-2xl mx-auto" style={{ animationDelay: '0.3s' }}>
            Estou à disposição para ajudar você. Entre em contato e dê o primeiro passo 
            em direção ao seu bem-estar mental.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="reveal opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-navy-light/30 backdrop-blur-sm rounded-xl p-6 border border-gold/10 hover:border-gold/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-white font-medium mb-1">{item.title}</h3>
                  <p className="text-gold text-sm mb-1">{item.value}</p>
                  <p className="text-white/50 text-xs">{item.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Box */}
            <div className="relative bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl p-8 border border-gold/30 overflow-hidden">
              <div className="relative z-10 flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Prefere WhatsApp?</h3>
                  <p className="text-white/60 text-sm">Resposta rápida garantida</p>
                </div>
              </div>
              <a
                href="https://wa.me/5551995557211"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy w-full py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-gold"
              >
                <Phone className="w-5 h-5" />
                Iniciar Conversa
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal opacity-0" style={{ animationDelay: '0.3s' }}>
            <form
              onSubmit={handleSubmit}
              className="relative bg-navy-light/30 backdrop-blur-sm rounded-2xl p-8 border border-gold/10 overflow-hidden"
            >
              <h3 className="font-serif text-2xl text-white mb-6 flex items-center gap-3 relative z-10">
                <Calendar className="w-6 h-6 text-gold" />
                Solicite um Agendamento
              </h3>

              <div className="space-y-5 relative z-10">
                <div>
                  <Label htmlFor="name" className="text-white/80 mb-2 block">
                    Nome Completo
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-navy/50 border-gold/20 text-white placeholder:text-white/30 focus:border-gold focus:ring-gold/20"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="email" className="text-white/80 mb-2 block">
                      E-mail
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-navy/50 border-gold/20 text-white placeholder:text-white/30 focus:border-gold focus:ring-gold/20"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-white/80 mb-2 block">
                      Telefone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(51) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-navy/50 border-gold/20 text-white placeholder:text-white/30 focus:border-gold focus:ring-gold/20"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-white/80 mb-2 block">
                    Mensagem
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Conte um pouco sobre o que você precisa..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-navy/50 border-gold/20 text-white placeholder:text-white/30 focus:border-gold focus:ring-gold/20 min-h-[120px] resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-light text-navy py-6 rounded-xl font-medium transition-all duration-300 hover:shadow-gold flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar Solicitação
                </Button>

                <p className="text-white/40 text-xs text-center">
                  Ao enviar, você concorda com o sigilo profissional e política de privacidade.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="bg-navy-light border-gold/30 text-white max-w-md">
          <DialogHeader className="text-center">
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-gold" />
            </div>
            <DialogTitle className="font-serif text-2xl text-white">
              Mensagem Enviada!
            </DialogTitle>
            <DialogDescription className="text-white/60">
              Obrigado pelo contato, {formData.name || 'paciente'}. Retornarei em breve para confirmar seu agendamento.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            <Button
              onClick={() => setShowDialog(false)}
              className="w-full bg-gold hover:bg-gold-light text-navy py-3 rounded-xl font-medium transition-all duration-300"
            >
              Entendi
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
