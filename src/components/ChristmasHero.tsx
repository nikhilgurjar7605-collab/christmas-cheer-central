import { motion } from "framer-motion";

const ChristmasHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background gradient overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-christmas-red/10 rounded-full blur-3xl" />
      <div className="absolute bottom-32 right-10 w-40 h-40 bg-christmas-green/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-christmas-gold/5 rounded-full blur-2xl" />

      <div className="relative z-20 text-center max-w-4xl mx-auto">
        {/* Christmas ornament decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="mb-8"
        >
          <span className="text-7xl md:text-8xl animate-float inline-block">🎄</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="text-foreground">Merry</span>
          <br />
          <span className="text-gradient-gold">Christmas</span>
        </motion.h1>

        {/* Subtitle - made more personal */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto"
        >
          A special message just for you
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-lg text-christmas-gold/80 mb-8"
        >
          ~ From Jay 💝
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-christmas-gold/60" />
          <span className="text-christmas-gold animate-pulse-glow rounded-full p-2">⭐</span>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-christmas-gold/60" />
        </motion.div>

        {/* Christmas emojis row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center gap-6 text-4xl"
        >
          <span className="animate-twinkle">🎁</span>
          <span className="animate-twinkle" style={{ animationDelay: "0.3s" }}>❄️</span>
          <span className="animate-twinkle" style={{ animationDelay: "0.6s" }}>💖</span>
          <span className="animate-twinkle" style={{ animationDelay: "0.9s" }}>🔔</span>
          <span className="animate-twinkle" style={{ animationDelay: "1.2s" }}>🎅</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="font-body text-sm">Scroll down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↓
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ChristmasHero;
