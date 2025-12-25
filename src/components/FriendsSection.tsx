import { motion } from "framer-motion";
import FriendCard from "./FriendCard";

const FriendsSection = () => {
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
            For You, <span className="text-christmas-gold">Muskaan</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            A special Christmas message just for you ✨
          </p>
        </motion.div>

        {/* Single card for Muskaan */}
        <FriendCard
          name="Muskaan"
          message="This Christmas, I just wanted you to know how special you are to me. Your smile lights up my world brighter than any Christmas star. Wishing you all the happiness, warmth, and magic this holiday season. You deserve all the beautiful things life has to offer. 💖"
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
          <p className="font-display text-2xl text-christmas-gold">
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

export default FriendsSection;
