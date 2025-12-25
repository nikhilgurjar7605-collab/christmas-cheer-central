import { motion } from "framer-motion";
import FriendCard from "./FriendCard";

const FriendsSection = () => {
  const friends = [
    {
      name: "To My Dearest Girl",
      message: "May your Christmas be filled with all the love and sparkle you bring into this world. You're a gift that keeps on giving, and I'm so grateful to have you in my life. Here's to cozy moments, sweet treats, and endless laughter this holiday season! 💖",
      emoji: "👸",
    },
    {
      name: "To My Best Bro",
      message: "Merry Christmas, dude! Thanks for always having my back and making every moment epic. May your holidays be filled with good vibes, great food, and all the adventures yet to come. Let's make more memories in the new year! 🤜🤛",
      emoji: "🦸‍♂️",
    },
  ];

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Special Wishes For <span className="text-christmas-gold">You</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Because you both mean the world to me ✨
          </p>
        </motion.div>

        {/* Friend cards grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {friends.map((friend, index) => (
            <FriendCard
              key={friend.name}
              name={friend.name}
              message={friend.message}
              emoji={friend.emoji}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FriendsSection;
