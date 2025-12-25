import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "./Confetti";

interface WelcomeScreenProps {
  onNameSubmit: (name: string) => void;
}

const WelcomeScreen = ({ onNameSubmit }: WelcomeScreenProps) => {
  const [name, setName] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onNameSubmit(name.trim());
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Animated background orbs */}
      <motion.div 
        className="absolute top-20 left-[10%] w-64 h-64 bg-newyear-purple/20 rounded-full blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-[10%] w-72 h-72 bg-newyear-gold/15 rounded-full blur-3xl"
        animate={{ 
          x: [0, -40, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-newyear-pink/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <Confetti />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-xl w-full"
      >
        {/* Animated emoji */}
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-7xl md:text-8xl mb-8"
        >
          🎆
        </motion.div>

        {/* Heading with stagger animation */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          <span className="text-foreground">Happy New</span>
          <br />
          <motion.span 
            className="text-gradient-gold inline-block"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Year 2026
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-body text-lg md:text-xl text-muted-foreground mb-10"
        >
          Enter your name to receive a personalized wish ✨
        </motion.p>

        {/* Name input form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="relative group">
            <motion.div 
              className="absolute -inset-1 bg-gradient-to-r from-newyear-purple via-newyear-gold to-newyear-pink rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              style={{ backgroundSize: "200% 200%" }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name..."
              maxLength={50}
              className="relative w-full px-6 py-4 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl text-foreground text-center text-xl font-body placeholder:text-muted-foreground focus:outline-none focus:border-newyear-gold/50 transition-all"
            />
          </div>

          <motion.button
            type="submit"
            disabled={!name.trim()}
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-full py-4 px-8 rounded-xl font-body font-semibold text-lg overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-newyear-purple via-newyear-gold to-newyear-pink"
              animate={{ 
                backgroundPosition: isHovering ? ["0% 50%", "100% 50%"] : "0% 50%"
              }}
              style={{ backgroundSize: "200% 200%" }}
              transition={{ duration: 1, repeat: isHovering ? Infinity : 0 }}
            />
            <span className="relative z-10 text-background flex items-center justify-center gap-2">
              <span>Celebrate!</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                🎉
              </motion.span>
            </span>
          </motion.button>
        </motion.form>

        {/* Animated emojis */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-4 mt-10 text-3xl"
        >
          {["🥂", "✨", "🎊", "💫", "🌟"].map((emoji, i) => (
            <motion.span
              key={i}
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.2 
              }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;