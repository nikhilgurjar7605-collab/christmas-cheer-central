import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isNewYear, setIsNewYear] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const newYear = new Date(now.getFullYear() + 1, 0, 1);
      
      // If we're already in 2026, show celebration
      if (now.getFullYear() >= 2026) {
        setIsNewYear(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const difference = newYear.getTime() - now.getTime();

      if (difference <= 0) {
        setIsNewYear(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            {isNewYear ? (
              <span className="text-gradient-gold">Welcome to 2026! 🎉</span>
            ) : (
              <>
                Countdown to <span className="text-gradient-gold">2026</span>
              </>
            )}
          </h2>
        </motion.div>

        {!isNewYear ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {timeUnits.map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                className="relative group"
              >
                <motion.div 
                  className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-newyear-purple/30 to-newyear-gold/30 blur-lg opacity-50 group-hover:opacity-100 transition-opacity"
                />
                <div className="relative bg-card/70 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center group-hover:border-newyear-gold/40 transition-all">
                  <motion.span
                    key={unit.value}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="font-display text-4xl md:text-6xl font-bold text-gradient-gold block"
                  >
                    {String(unit.value).padStart(2, "0")}
                  </motion.span>
                  <span className="font-body text-sm md:text-base text-muted-foreground mt-2 block">
                    {unit.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-8xl mb-8"
            >
              🎊
            </motion.div>
            <p className="font-body text-xl text-muted-foreground">
              The celebration has begun! 🥳
            </p>
          </motion.div>
        )}

        {/* Fun fact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-card/40 backdrop-blur-sm border border-border/30 rounded-full px-6 py-3">
            <span className="text-xl">💡</span>
            <span className="font-body text-muted-foreground text-sm md:text-base">
              2026 will have 365 days of new opportunities!
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownSection;