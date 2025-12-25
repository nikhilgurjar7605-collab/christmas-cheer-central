import { motion } from "framer-motion";

const SorrySection = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-christmas-red/20 to-transparent rounded-3xl blur-3xl" />
          
          <div className="relative bg-card/60 backdrop-blur-sm border border-christmas-red/30 rounded-3xl p-8 md:p-12 text-center">
            {/* Heart decoration */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <span className="text-6xl md:text-7xl inline-block animate-pulse">💔</span>
            </motion.div>

            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              And... <span className="text-christmas-red">I'm Sorry</span>
            </h2>

            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-christmas-red/60 to-transparent mx-auto mb-8" />

            <div className="space-y-6 max-w-xl mx-auto">
              <p className="font-body text-lg text-foreground/80 leading-relaxed">
                If I ever hurt you, made you sad, or did anything that upset you... 
                I'm truly, deeply sorry. 😔
              </p>

              <p className="font-body text-lg text-foreground/80 leading-relaxed">
                You mean so much to me, and the last thing I ever want is to see you unhappy. 
                Please forgive me for my mistakes.
              </p>

              <p className="font-body text-lg text-foreground/80 leading-relaxed">
                I promise to do better, to be better, and to always treasure you. 
                You deserve all the happiness in the world. 🌹
              </p>
            </div>

            {/* Animated hearts */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center gap-4 mt-10 text-3xl"
            >
              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              >
                💕
              </motion.span>
              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              >
                🙏
              </motion.span>
              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              >
                💕
              </motion.span>
            </motion.div>

            <p className="font-display text-xl text-christmas-gold mt-8">
              With all my heart,
              <br />
              <span className="text-2xl">Jay 💝</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SorrySection;
