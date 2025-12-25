import { motion } from "framer-motion";

interface FriendCardProps {
  name: string;
  message: string;
  emoji: string;
  delay?: number;
}

const FriendCard = ({ name, message, emoji, delay = 0 }: FriendCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-christmas-red/20 to-christmas-green/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
      <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-christmas-gold/50 transition-all duration-500">
        {/* Decorative corner ornaments */}
        <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-christmas-gold/60" />
        <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-christmas-gold/60" />
        <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-christmas-gold/60" />
        <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-christmas-gold/60" />

        <div className="text-center space-y-6">
          <motion.div
            className="text-6xl animate-float"
            style={{ animationDelay: `${delay * 1000}ms` }}
          >
            {emoji}
          </motion.div>

          <h3 className="font-display text-3xl text-christmas-gold font-semibold">
            {name}
          </h3>

          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-christmas-gold/60 to-transparent mx-auto" />

          <p className="font-body text-lg text-foreground/90 leading-relaxed">
            {message}
          </p>

          <div className="flex justify-center gap-2 pt-4">
            <span className="text-christmas-red animate-twinkle">❄</span>
            <span className="text-christmas-gold animate-twinkle" style={{ animationDelay: "0.5s" }}>✨</span>
            <span className="text-christmas-green animate-twinkle" style={{ animationDelay: "1s" }}>🎄</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FriendCard;
