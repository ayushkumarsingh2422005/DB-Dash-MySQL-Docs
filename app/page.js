"use client";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiBook, FiCode } from "react-icons/fi";
import { FloatingIcons, ParticleField } from "./components/DecorativeElements";
import { useTheme } from "./contexts/ThemeContext";
import Link from "next/link";

export default function Home() {
  const { isDark } = useTheme();

  return (
    <div
      className={`
        min-h-full flex flex-col items-center justify-center relative overflow-hidden px-6 ${
          isDark
            ? "bg-gradient-to-br from-gray-900 via-gray-800/90 to-gray-900"
            : "bg-gradient-to-br from-blue-100 via-white/90 to-purple-100"
        }`}
    >
      <ParticleField />
      <FloatingIcons />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent ${
            isDark
              ? "bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400"
              : "bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600"
          }`}
        >
          Welcome to DBDash
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-12"
        >
          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Navigate through comprehensive documentation sections and explore
            examples, to get the most out of your development journey.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href={"/docs/getting-started"}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg cursor-pointer ${
                  isDark
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 text-white hover:shadow-purple-500/25"
                    : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white hover:shadow-blue-500/30"
                }`}
            >
              <FiBook className="text-xl" />
              Start Reading
              <FiArrowRight className="text-xl" />
            </motion.div>
          </Link>

          <Link href={"/examples"}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
              flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg cursor-pointer border-2
              ${
                isDark
                  ? "border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400"
                  : "border-blue-500/50 text-blue-600 hover:bg-blue-500/10 hover:border-blue-600"
              }
              `}
            >
              <FiCode className="text-xl" />
              View Examples
            </motion.div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className={`
              inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mt-12
              ${
                isDark
                  ? "bg-gray-800/50 text-gray-400 border border-gray-700/50"
                  : "bg-blue-50/80 text-blue-600 border border-blue-200/50"
              }
            `}
        >
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <FiArrowLeft className="size-4 text-amber-400" />
          </motion.div>
          Start by selecting a topic from the sidebar
        </motion.div>
      </div>
    </div>
  );
}
