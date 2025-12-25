import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ResolutionsSectionProps {
  userName: string;
}

const suggestedResolutions = [
  "Learn something new every month",
  "Take more adventures",
  "Practice gratitude daily",
  "Connect with loved ones more",
  "Focus on health and wellness",
  "Read more books",
  "Save for dreams",
  "Spread more kindness",
];

const ResolutionsSection = ({ userName }: ResolutionsSectionProps) => {
  const [selectedResolutions, setSelectedResolutions] = useState<string[]>([]);
  const [customResolution, setCustomResolution] = useState("");

  const toggleResolution = (resolution: string) => {
    setSelectedResolutions((prev) =>
      prev.includes(resolution)
        ? prev.filter((r) => r !== resolution)
        : [...prev, resolution]
    );
  };

  const addCustomResolution = () => {
    if (customResolution.trim() && !selectedResolutions.includes(customResolution.trim())) {
      setSelectedResolutions((prev) => [...prev, customResolution.trim()]);
      setCustomResolution("");
    }
  };

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Your <span className="text-gradient-gold">2026</span> Goals
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Pick your resolutions for the new year, {userName}! 🎯
          </p>
        </motion.div>

        {/* Resolution chips */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {suggestedResolutions.map((resolution, index) => (
            <motion.button
              key={resolution}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toggleResolution(resolution)}
              className={`px-5 py-3 rounded-full font-body text-sm md:text-base transition-all ${
                selectedResolutions.includes(resolution)
                  ? "bg-gradient-to-r from-newyear-purple to-newyear-gold text-background"
                  : "bg-card/60 border border-border/50 text-foreground hover:border-newyear-gold/50"
              }`}
            >
              {selectedResolutions.includes(resolution) && "✓ "}
              {resolution}
            </motion.button>
          ))}
        </motion.div>

        {/* Custom resolution input */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-12"
        >
          <input
            type="text"
            value={customResolution}
            onChange={(e) => setCustomResolution(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addCustomResolution()}
            placeholder="Add your own resolution..."
            maxLength={100}
            className="flex-1 px-5 py-3 bg-card/60 backdrop-blur-sm border border-border/50 rounded-full text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-newyear-gold/50 transition-all"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={addCustomResolution}
            disabled={!customResolution.trim()}
            className="px-6 py-3 bg-newyear-gold text-background font-body font-semibold rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Add +
          </motion.button>
        </motion.div>

        {/* Selected resolutions display */}
        <AnimatePresence>
          {selectedResolutions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-newyear-purple/10 to-newyear-gold/10 rounded-3xl blur-xl" />
              <div className="relative bg-card/50 backdrop-blur-sm border border-newyear-gold/30 rounded-3xl p-8">
                <h3 className="font-display text-2xl text-newyear-gold text-center mb-6">
                  {userName}&apos;s 2026 Resolutions 🌟
                </h3>
                <ul className="space-y-3">
                  {selectedResolutions.map((resolution, index) => (
                    <motion.li
                      key={resolution}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3 font-body text-foreground"
                    >
                      <motion.span
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="text-newyear-gold"
                      >
                        ✦
                      </motion.span>
                      {resolution}
                      <button
                        onClick={() => toggleResolution(resolution)}
                        className="ml-auto text-muted-foreground hover:text-newyear-pink transition-colors"
                      >
                        ×
                      </button>
                    </motion.li>
                  ))}
                </ul>
                <p className="text-center text-muted-foreground font-body text-sm mt-6">
                  {selectedResolutions.length} resolution{selectedResolutions.length !== 1 ? "s" : ""} for an amazing year ahead!
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ResolutionsSection;