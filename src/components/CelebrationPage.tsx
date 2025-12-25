import { motion } from "framer-motion";
import Confetti from "./Confetti";
import WishCard from "./WishCard";
import CountdownSection from "./CountdownSection";
import ResolutionsSection from "./ResolutionsSection";

interface CelebrationPageProps {
  userName: string;
  onReset: () => void;
}

const CelebrationPage = ({ userName, onReset }: CelebrationPageProps) => {
  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div 
        className="fixed inset-0 z-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Animated background elements */}
      <motion.div 
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div 
          className="absolute top-[10%] left-[5%] w-80 h-80 bg-newyear-purple/15 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[20%] right-[5%] w-96 h-96 bg-newyear-gold/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -80, 0],
            y: [0, -60, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-[40%] right-[30%] w-64 h-64 bg-newyear-pink/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <Confetti />

      {/* Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center max-w-4xl"
          >
            {/* Firework emoji with burst effect */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="relative mb-8"
            >
              <motion.span 
                className="text-8xl md:text-9xl inline-block"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🎆
              </motion.span>
              {/* Sparkle effects around the emoji */}
              {[...Array(6)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute text-2xl"
                  style={{
                    top: "50%",
                    left: "50%",
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    x: Math.cos((i * 60) * Math.PI / 180) * 80,
                    y: Math.sin((i * 60) * Math.PI / 180) * 80,
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: i * 0.3 
                  }}
                >
                  ✨
                </motion.span>
              ))}
            </motion.div>

            {/* Personalized greeting */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-foreground">Happy New Year,</span>
              <br />
              <motion.span 
                className="text-gradient-gold inline-block"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {userName}! 🎉
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-body text-xl md:text-2xl text-muted-foreground mb-8"
            >
              Welcome to 2026 — A year full of possibilities!
            </motion.p>

            {/* Animated year display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, type: "spring" }}
              className="inline-flex items-center gap-4 bg-card/50 backdrop-blur-sm border border-border/30 rounded-full px-8 py-4"
            >
              <span className="text-newyear-gold text-2xl">✨</span>
              <span className="font-display text-3xl md:text-4xl text-foreground font-bold">2026</span>
              <span className="text-newyear-gold text-2xl">✨</span>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-16"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-muted-foreground font-body text-sm"
              >
                <p className="mb-2">Scroll for more</p>
                <span className="text-2xl">↓</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Wish Card Section */}
        <WishCard userName={userName} />

        {/* Countdown Section */}
        <CountdownSection />

        {/* Resolutions Section */}
        <ResolutionsSection userName={userName} />

        {/* Footer */}
        <footer className="relative py-16 px-4 border-t border-border/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="text-5xl mb-4">🎆</div>

              <h3 className="font-display text-3xl md:text-4xl text-foreground">
                Cheers to 2026, {userName}!
              </h3>

              <p className="font-body text-muted-foreground text-lg max-w-md mx-auto">
                May this year bring you endless joy, success, and beautiful memories.
              </p>

              <motion.button
                onClick={onReset}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-6 py-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full font-body text-muted-foreground hover:text-foreground hover:border-newyear-gold/50 transition-all"
              >
                Create for someone else →
              </motion.button>

              <div className="flex justify-center gap-3 pt-6 text-2xl">
                <motion.span 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-newyear-purple"
                >
                  💜
                </motion.span>
                <motion.span 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                  className="text-newyear-gold"
                >
                  💛
                </motion.span>
                <motion.span 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                  className="text-newyear-purple"
                >
                  💜
                </motion.span>
              </div>
            </motion.div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default CelebrationPage;