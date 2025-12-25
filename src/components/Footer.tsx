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
          {/* Christmas tree decoration */}
          <div className="text-5xl mb-4">🎄</div>

          {/* Closing message */}
          <h3 className="font-display text-3xl md:text-4xl text-foreground">
            Forever & Always
          </h3>

          <p className="font-body text-muted-foreground text-lg max-w-md mx-auto">
            May this Christmas bring us closer together, and fill your heart with joy and love.
          </p>

          {/* Signature */}
          <div className="pt-4">
            <p className="font-display text-2xl text-christmas-gold">
              With Love,
            </p>
            <p className="font-display text-3xl text-christmas-gold mt-2">
              Jay 💖
            </p>
          </div>

          {/* Year badge */}
          <div className="inline-flex items-center gap-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-6 py-3 mt-8">
            <span className="text-christmas-gold">🌟</span>
            <span className="font-body text-foreground font-medium">Christmas 2025</span>
            <span className="text-christmas-gold">🌟</span>
          </div>

          {/* Hearts */}
          <div className="flex justify-center gap-3 pt-6 text-2xl">
            <span className="text-christmas-red animate-pulse">❤️</span>
            <span className="text-christmas-gold animate-pulse" style={{ animationDelay: "0.2s" }}>💛</span>
            <span className="text-christmas-red animate-pulse" style={{ animationDelay: "0.4s" }}>❤️</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
