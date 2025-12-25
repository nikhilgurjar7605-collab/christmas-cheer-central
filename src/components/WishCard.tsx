import { motion } from "framer-motion";

interface WishCardProps {
  userName: string;
}

const wishes = [
  "May your dreams take flight and your heart find peace",
  "Wishing you 365 days of love, laughter, and success",
  "May every moment of 2026 be filled with magic",
  "Here's to new adventures and beautiful memories",
];

const WishCard = ({ userName }: WishCardProps) => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Your <span className="text-gradient-gold">Special</span> Wishes
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Personalized just for you, {userName} ✨
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {wishes.map((wish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.02, rotate: 1 }}
              className="group relative"
            >
              {/* Glow effect */}
              <motion.div 
                className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, hsl(var(--newyear-purple) / 0.3), hsl(var(--newyear-gold) / 0.3))`,
                  filter: "blur(20px)",
                }}
              />
              
              <div className="relative bg-card/70 backdrop-blur-sm border border-border/50 rounded-3xl p-8 h-full group-hover:border-newyear-gold/30 transition-all">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                  className="text-4xl mb-4"
                >
                  {["🌟", "💫", "✨", "🎊"][index]}
                </motion.div>
                
                <p className="font-display text-xl md:text-2xl text-foreground leading-relaxed">
                  "{wish}"
                </p>

                <div className="mt-6 flex gap-2">
                  {[...Array(3)].map((_, i) => (
                    <motion.span
                      key={i}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      className="w-2 h-2 rounded-full bg-newyear-gold"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Personal message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-newyear-purple/20 via-newyear-gold/20 to-newyear-pink/20 rounded-3xl blur-2xl" />
          <div className="relative bg-card/60 backdrop-blur-sm border border-newyear-gold/30 rounded-3xl p-10 text-center">
            <motion.span 
              className="text-6xl inline-block mb-6"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💝
            </motion.span>
            <h3 className="font-display text-2xl md:text-3xl text-newyear-gold mb-4">
              Dear {userName},
            </h3>
            <p className="font-body text-lg text-foreground/90 leading-relaxed max-w-2xl mx-auto">
              As the clock strikes midnight and 2026 begins, may you feel the warmth of love, 
              the joy of success, and the peace of knowing that the best is yet to come. 
              You deserve all the happiness this new year has to offer. Cheers to you! 🥂
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WishCard;