import { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  color: string;
  type: 'sparkle' | 'confetti';
}

const colors = [
  'bg-newyear-gold',
  'bg-newyear-purple',
  'bg-newyear-blue',
  'bg-newyear-pink',
  'bg-newyear-gold-light',
];

const Confetti = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const items: Particle[] = [];
    for (let i = 0; i < 60; i++) {
      items.push({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 8 + 4,
        duration: Math.random() * 12 + 8,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.7 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: Math.random() > 0.5 ? 'sparkle' : 'confetti',
      });
    }
    setParticles(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute ${particle.color} ${
            particle.type === 'sparkle' 
              ? 'animate-sparkle-fall rounded-full' 
              : 'animate-sparkle-float'
          }`}
          style={{
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: particle.type === 'confetti' ? `${particle.size * 0.6}px` : `${particle.size}px`,
            opacity: particle.opacity,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            borderRadius: particle.type === 'confetti' ? '2px' : '50%',
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;