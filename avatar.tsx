import { useRef } from 'react';

interface MoebiusStripProps {
  size?: number;
  className?: string;
  animate?: 'spin' | 'pulse' | 'float' | 'none';
  opacity?: number;
  blur?: boolean;
}

export default function MoebiusStrip({
  size = 200,
  className = '',
  animate = 'spin',
  opacity = 0.15,
  blur = false,
}: MoebiusStripProps) {
  const imgRef = useRef<HTMLImageElement>(null);

  const getAnimationClass = () => {
    switch (animate) {
      case 'spin':
        return 'animate-moebius-spin';
      case 'pulse':
        return 'animate-moebius-pulse';
      case 'float':
        return 'animate-moebius-float';
      default:
        return '';
    }
  };

  return (
    <div
      className={`relative ${getAnimationClass()} ${className}`}
      style={{
        width: size,
        height: size,
        opacity,
      }}
    >
      <img
        ref={imgRef}
        src="/moebius-transparent.png"
        alt=""
        className={`w-full h-full object-contain ${blur ? 'blur-sm' : ''}`}
      />
    </div>
  );
}

// Floating Moebius background decoration
export function FloatingMoebius({
  count = 3,
  minSize = 150,
  maxSize = 400,
}: {
  count?: number;
  minSize?: number;
  maxSize?: number;
}) {
  const strips = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * (maxSize - minSize) + minSize,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 30,
    delay: Math.random() * 10,
    opacity: Math.random() * 0.1 + 0.05,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {strips.map((strip) => (
        <div
          key={strip.id}
          className="absolute animate-moebius-drift"
          style={{
            left: `${strip.x}%`,
            top: `${strip.y}%`,
            animationDuration: `${strip.duration}s`,
            animationDelay: `${strip.delay}s`,
          }}
        >
          <MoebiusStrip
            size={strip.size}
            animate="none"
            opacity={strip.opacity}
            blur
          />
        </div>
      ))}
    </div>
  );
}

// Large decorative Moebius for section backgrounds
export function MoebiusDecoration({
  position = 'center',
  size = 500,
}: {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  size?: number;
}) {
  const positionStyles = {
    'top-left': { top: '-10%', left: '-10%' },
    'top-right': { top: '-10%', right: '-10%' },
    'bottom-left': { bottom: '-10%', left: '-10%' },
    'bottom-right': { bottom: '-10%', right: '-10%' },
    center: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
  };

  return (
    <div
      className="absolute pointer-events-none"
      style={positionStyles[position]}
    >
      <MoebiusStrip
        size={size}
        animate="spin"
        opacity={0.06}
        blur
        className="animate-moebius-spin-slow"
      />
    </div>
  );
}
