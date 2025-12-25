import { motion } from "framer-motion";

interface CrushCardProps {
  photoUrl?: string;
}

const CrushCard = ({ photoUrl }: CrushCardProps) => {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            To Someone <span className="text-christmas-red">Special</span>
          </h2>
          <div className="flex justify-center gap-2 text-2xl">
            <span className="animate-twinkle">✨</span>
            <span className="animate-twinkle" style={{ animationDelay: "0.3s" }}>💝</span>
            <span className="animate-twinkle" style={{ animationDelay: "0.6s" }}>✨</span>
          </div>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-christmas-red/30 to-christmas-gold/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
          
          <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12 hover:border-christmas-gold/50 transition-all duration-500">
            {/* Decorative corner ornaments */}
            <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-christmas-gold/60" />
            <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-christmas-gold/60" />
            <div className="absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-christmas-gold/60" />
            <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-christmas-gold/60" />

            <div className="text-center space-y-8">
              {/* Photo section */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
                viewport={{ once: true }}
                className="relative inline-block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-christmas-red to-christmas-gold rounded-full blur-lg opacity-50 animate-pulse" />
                <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-christmas-gold/60 overflow-hidden bg-muted flex items-center justify-center">
                  {photoUrl ? (
                    <img 
                      src={photoUrl} 
                      alt="Special someone" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center p-4">
                      <span className="text-6xl">👸</span>
                      <p className="text-xs text-muted-foreground mt-2">Her photo here</p>
                    </div>
                  )}
                </div>
                {/* Decorative hearts around photo */}
                <span className="absolute -top-2 -right-2 text-2xl animate-float">💕</span>
                <span className="absolute -bottom-2 -left-2 text-2xl animate-float" style={{ animationDelay: "0.5s" }}>💖</span>
              </motion.div>

              {/* Message */}
              <div className="space-y-6 max-w-2xl mx-auto">
                <p className="font-body text-xl md:text-2xl text-foreground/90 leading-relaxed">
                  Hey you! 💫
                </p>
                
                <p className="font-body text-lg text-foreground/80 leading-relaxed">
                  This Christmas, I just wanted you to know how special you are to me. 
                  Every moment with you feels like magic, and your smile lights up my world 
                  brighter than any Christmas lights ever could.
                </p>

                <p className="font-body text-lg text-foreground/80 leading-relaxed">
                  You make everything feel warm and wonderful, and I'm so grateful 
                  to have you in my life. Merry Christmas, beautiful! 🎄✨
                </p>

                <div className="pt-4">
                  <span className="font-display text-2xl text-christmas-gold">
                    ~ Jay 💝
                  </span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="flex justify-center gap-3 pt-4">
                <span className="text-christmas-red animate-twinkle">❄</span>
                <span className="text-christmas-gold animate-twinkle" style={{ animationDelay: "0.3s" }}>✨</span>
                <span className="text-christmas-red animate-twinkle" style={{ animationDelay: "0.6s" }}>🎄</span>
                <span className="text-christmas-gold animate-twinkle" style={{ animationDelay: "0.9s" }}>✨</span>
                <span className="text-christmas-red animate-twinkle" style={{ animationDelay: "1.2s" }}>❄</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CrushCard;
