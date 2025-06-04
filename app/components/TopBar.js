import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FiArrowRight, FiGithub, FiMenu, FiSearch, FiX } from "react-icons/fi";
import { ThemeToggle, useTheme } from "../contexts/ThemeContext";

const TopBar = ({ onToggle, isOpen }) => {
  const { isDark } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search logic here
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <header
      className={`
        sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300
        ${
          isDark
            ? "bg-gray-900/95 border-gray-700/50 shadow-lg shadow-gray-900/20"
            : "bg-white/95 border-gray-200/50 shadow-lg shadow-gray-900/10"
        }
      `}
      role="banner"
    >
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 lg:mx-10">
        <div className="flex items-center space-x-4">
          <button
            className={`p-2 lg:absolute left-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 active:scale-95 ${
              isDark
                ? "hover:bg-gray-800 text-gray-300 hover:text-white"
                : "hover:bg-gray-100 text-gray-700 hover:text-gray-900"
            }`}
            onClick={onToggle}
            aria-label="Open navigation menu"
            aria-expanded="false"
          >
            {isOpen ? (
              <FiX className="size-4" />
            ) : (
              <FiMenu className="size-4" />
            )}
          </button>

          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="flex items-center space-x-3 cursor-pointer select-none"
          >
            <a href="/" className="relative flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="DbDash Logo"
                width={40}
                height={40}
                className={!isDark ? "contrast-50 saturate-500" : ""}
              />

              <div className="flex flex-col">
                <motion.span
                  className={`font-bold text-xl leading-tight ${
                    isDark
                      ? "bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                      : "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  DBDash
                </motion.span>
                <motion.span
                  className={`
                  text-xs font-medium tracking-wide
                  ${isDark ? "text-gray-400" : "text-gray-500"}
                  `}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Documentation
                </motion.span>
              </div>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hidden sm:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <form onSubmit={handleSearchSubmit} className="relative">
            <div className="relative group">
              <FiSearch
                className={`
                  absolute left-4 top-1/2 transform -translate-y-1/2 text-lg transition-colors duration-200 ${
                    isDark
                      ? "text-gray-400 group-focus-within:text-blue-400"
                      : "text-gray-500 group-focus-within:text-blue-500"
                  }`}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search documentation..."
                className={`
                  w-80 border rounded-xl pl-12 pr-16 py-3 text-sm
                  transition-all duration-300 focus:outline-none focus:ring-2
                  ${
                    isDark
                      ? "bg-gray-800/60 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 focus:bg-gray-800"
                      : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:ring-blue-400/20 focus:bg-white shadow-sm"
                  }
                `}
                aria-label="Search documentation"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500"
                aria-label="Submit search"
              >
                <FiArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </form>
        </motion.div>

        <div className="flex items-center space-x-3">
          <ThemeToggle />

          <motion.a
            href="https://github.com/digicraft-one/DB-Dash-MySQL-Docs"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              p-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 active:scale-95 ${
                isDark
                  ? "text-white bg-gray-800 hover:text-gray-200 hover:bg-gray-800"
                  : "text-black bg-gray-200 hover:text-gray-900 hover:bg-gray-100"
              }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="View source code on GitHub"
            title="View source code on GitHub"
          >
            <FiGithub className="size-4" />
          </motion.a>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
