import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative py-16 px-4 border-t border-border/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Celebration decoration */}
          <div className="text-5xl mb-4">🎆</div>

          {/* Closing message */}
          <h3 className="font-display text-3xl md:text-4xl text-foreground">
            With Love & Best Wishes
          </h3>

          <p className="font-body text-muted-foreground text-lg max-w-md mx-auto">
            May 2026 bring you success, happiness, and all the wonderful moments your heart desires.
          </p>

          {/* Year badge */}
          <div className="inline-flex items-center gap-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-6 py-3 mt-8">
            <span className="text-newyear-gold">🌟</span>
            <span className="font-body text-foreground font-medium">Happy New Year 2026</span>
            <span className="text-newyear-gold">🌟</span>
          </div>

          {/* Hearts */}
          <div className="flex justify-center gap-3 pt-6 text-2xl">
            <span className="text-newyear-purple animate-pulse">💜</span>
            <span className="text-newyear-gold animate-pulse" style={{ animationDelay: "0.2s" }}>💛</span>
            <span className="text-newyear-purple animate-pulse" style={{ animationDelay: "0.4s" }}>💜</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;