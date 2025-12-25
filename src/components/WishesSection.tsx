import { motion } from "framer-motion";
import FriendCard from "./FriendCard";

const WishesSection = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            For You, <span className="text-newyear-gold">Muskaan</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            A special New Year message just for you ✨
          </p>
        </motion.div>

        {/* Single card for Muskaan */}
        <FriendCard
          name="Muskaan"
          message="As we step into 2026, I just want you to know how special you are to me. Your smile lights up my world brighter than any firework. May this new year bring you endless joy, success, and all your dreams come true. Here's to new beginnings and making beautiful memories together. 💖"
          emoji="💝"
          delay={0.2}
        />

        {/* From signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="font-display text-2xl text-newyear-gold">
            With love,
          </p>
          <p className="font-display text-3xl text-foreground mt-2">
            Jay 💫
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WishesSection;