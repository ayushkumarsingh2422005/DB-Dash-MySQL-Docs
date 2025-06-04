"use client";
import { motion } from "framer-motion";
import { FiArrowLeft, FiHome } from "react-icons/fi";
import {
  FloatingIcons,
  GlitchText,
  ParticleField,
} from "./components/DecorativeElements";
import { useTheme } from "./contexts/ThemeContext";

const NotFound404 = () => {
  const { isDark } = useTheme();

  return (
    <div
      className={`
      min-h-full flex items-center justify-between relative overflow-hidden
      ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
      }
    `}
    >
      <ParticleField />
      <FloatingIcons />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-2"
        >
          <GlitchText size={"large"} text={"404"} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8"
        >
          <h1
            className={`text-xl md:text-3xl font-bold mb-10 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Page Not Found
          </h1>
          <p
            className={`
            text-md md:text-lg max-w-2xl mx-auto leading-relaxed ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Oops! The page you are looking for doesn&apos;t exist or has been
            moved.
            <br />
            Try using the sidebar to find your way, or return to the homepage.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg
              ${
                isDark
                  ? "bg-pink-500 hover:bg-pink-400 text-white hover:shadow-pink-500/25"
                  : "bg-blue-500 hover:bg-blue-600 text-white hover:shadow-blue-500/30"
              }
            `}
            onClick={() => window.history.back()}
          >
            <FiArrowLeft className="text-xl" />
            Go Back
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg
              ${
                isDark
                  ? "bg-purple-500 hover:bg-purple-400 text-white hover:shadow-purple-500/25"
                  : "bg-green-500 hover:bg-green-600 text-white hover:shadow-green-500/30"
              }
            `}
            onClick={() => (window.location.href = "/")}
          >
            <FiHome className="text-xl" />
            Go Home
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound404;
