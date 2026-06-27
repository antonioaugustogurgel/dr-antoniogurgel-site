@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Inter:wght@300;400;500;600;700&family=Questrial&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 207 65% 14%;
    --foreground: 0 0% 100%;
    --card: 207 55% 18%;
    --card-foreground: 0 0% 100%;
    --popover: 207 55% 18%;
    --popover-foreground: 0 0% 100%;
    --primary: 43 45% 59%;
    --primary-foreground: 207 65% 14%;
    --secondary: 207 45% 25%;
    --secondary-foreground: 0 0% 100%;
    --muted: 207 35% 22%;
    --muted-foreground: 0 0% 80%;
    --accent: 43 45% 59%;
    --accent-foreground: 207 65% 14%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 207 35% 25%;
    --input: 207 35% 25%;
    --ring: 43 45% 59%;
    --radius: 0.5rem;
    
    --gold: 45 48% 55%;
    --gold-light: 45 55% 66%;
    --navy: 207 65% 14%;
    --navy-light: 207 45% 25%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply bg-background text-foreground antialiased;
    font-family: 'Inter', sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Cormorant Garamond', serif;
  }
}

@layer utilities {
  .text-gold {
    color: hsl(var(--gold));
  }
  
  .text-gold-light {
    color: hsl(var(--gold-light));
  }
  
  .bg-navy {
    background-color: hsl(var(--navy));
  }
  
  .bg-navy-light {
    background-color: hsl(var(--navy-light));
  }
  
  .border-gold {
    border-color: hsl(var(--gold));
  }
  
  .gradient-navy {
    background: linear-gradient(135deg, hsl(207 65% 14%) 0%, hsl(207 55% 18%) 100%);
  }
  
  .gradient-gold {
    background: linear-gradient(135deg, hsl(43 45% 59%) 0%, hsl(43 50% 78%) 100%);
  }
  
  .shadow-gold {
    box-shadow: 0 4px 20px rgba(196, 168, 85, 0.2);
  }
  
  .glow-gold {
    box-shadow: 0 0 30px rgba(196, 168, 85, 0.3);
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: hsl(207 65% 14%);
}

::-webkit-scrollbar-thumb {
  background: hsl(43 45% 59%);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: hsl(43 50% 78%);
}

/* Animation keyframes */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(196, 168, 85, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(196, 168, 85, 0.5);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Moebius Strip Animations - Flowing, cyclical, infinite */
@keyframes moebius-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes moebius-pulse {
  0%, 100% {
    transform: scale(1) rotate(0deg);
    opacity: 0.1;
  }
  50% {
    transform: scale(1.1) rotate(180deg);
    opacity: 0.2;
  }
}

@keyframes moebius-float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-15px) rotate(90deg);
  }
  50% {
    transform: translateY(0) rotate(180deg);
  }
  75% {
    transform: translateY(15px) rotate(270deg);
  }
}

@keyframes moebius-drift {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(30px, -20px) rotate(90deg);
  }
  50% {
    transform: translate(0, -40px) rotate(180deg);
  }
  75% {
    transform: translate(-30px, -20px) rotate(270deg);
  }
  100% {
    transform: translate(0, 0) rotate(360deg);
  }
}

@keyframes moebius-morph {
  0%, 100% {
    transform: rotateY(0deg) rotateX(0deg);
  }
  25% {
    transform: rotateY(90deg) rotateX(15deg);
  }
  50% {
    transform: rotateY(180deg) rotateX(0deg);
  }
  75% {
    transform: rotateY(270deg) rotateX(-15deg);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-pulse-glow {
  animation: pulse-glow 3s ease-in-out infinite;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-moebius-spin {
  animation: moebius-spin 60s linear infinite;
}

.animate-moebius-spin-slow {
  animation: moebius-spin 90s linear infinite;
}

.animate-moebius-spin-slow-reverse {
  animation: moebius-spin 100s linear infinite reverse;
}

.animate-moebius-pulse {
  animation: moebius-pulse 8s ease-in-out infinite;
}

.animate-moebius-float {
  animation: moebius-float 20s ease-in-out infinite;
}

.animate-moebius-drift {
  animation: moebius-drift 40s ease-in-out infinite;
}

.animate-moebius-morph {
  animation: moebius-morph 15s ease-in-out infinite;
  transform-style: preserve-3d;
}
