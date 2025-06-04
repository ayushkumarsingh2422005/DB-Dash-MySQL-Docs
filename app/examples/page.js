"use client";
import { motion } from "framer-motion";
import { FiCode, FiExternalLink } from "react-icons/fi";
import { FloatingIcons, ParticleField } from "../components/DecorativeElements";
import { useTheme } from "../contexts/ThemeContext";

export default function ExamplesPage() {
  const { isDark } = useTheme();

  return (
    <div
      className={`
        min-h-full relative overflow-hidden flex justify-center items-center ${
          isDark
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
            : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
        }`}
    >
      <ParticleField />
      <FloatingIcons />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1
            className={`text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent ${
              isDark
                ? "bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400"
                : "bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600"
            }`}
          >
            Code Examples
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`
              text-lg md:text-xl max-w-3xl mx-auto leading-relaxed
              ${isDark ? "text-gray-300" : "text-gray-700"}
            `}
          >
            Discover practical examples and real-world use-cases to accelerate
            your development with DBDash.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className={`flex flex-wrap justify-center gap-6 mb-12 p-6 rounded-2xl backdrop-blur-sm border ${
            isDark
              ? "bg-gray-800/30 border-gray-700/50"
              : "bg-white/50 border-gray-200/50"
          }`}
        >
          {[
            { label: "Total Examples", value: "3" },
            { label: "Categories", value: "3" },
            { label: "Difficulty Levels", value: "3" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              className="text-center"
            >
              <div
                className={`
                  text-2xl font-bold
                  ${isDark ? "text-purple-400" : "text-blue-600"}
                `}
              >
                {stat.value}
              </div>
              <div
                className={`
                  text-sm
                  ${isDark ? "text-gray-400" : "text-gray-600"}
                `}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg cursor-pointer ${
              isDark
                ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 text-white hover:shadow-purple-500/25"
                : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white hover:shadow-blue-500/30"
            }`}
          >
            <FiCode className="text-xl" />
            Explore More Examples
            <FiExternalLink className="text-xl" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
