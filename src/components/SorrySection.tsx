import { motion } from "framer-motion";

const SorrySection = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Decorative glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-christmas-red/10 to-pink-500/10 rounded-3xl blur-2xl" />
          
          <div className="relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-3xl p-10 text-center">
            {/* Heart icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
              className="text-6xl mb-6"
            >
              🥺
            </motion.div>

            <h3 className="font-display text-3xl md:text-4xl text-christmas-gold mb-6">
              I'm Sorry, Muskaan
            </h3>

            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-christmas-red/60 to-transparent mx-auto mb-6" />

            <p className="font-body text-lg text-foreground/90 leading-relaxed mb-6">
              If I ever hurt you or made you feel sad, I'm truly sorry from the bottom of my heart. 
              You mean so much to me, and the last thing I ever want is to see you upset because of me. 
              Please forgive me. 💔
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex justify-center gap-3 text-2xl"
            >
              <span className="animate-pulse">💕</span>
              <span className="animate-pulse" style={{ animationDelay: "0.2s" }}>🙏</span>
              <span className="animate-pulse" style={{ animationDelay: "0.4s" }}>💕</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SorrySection;
