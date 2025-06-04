import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiBook, FiGithub, FiHeart, FiMail } from "react-icons/fi";
import { useTheme } from "../contexts/ThemeContext";
import { GlitchText } from "./DecorativeElements";

export default function Footer() {
  const { isDark } = useTheme();

  const linkVariants = {
    hover: {
      scale: 1.05,
      y: -1,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  const links = [
    { name: "Docs", props: { href: "/docs/about" }, icon: FiBook },
    {
      name: "GitHub",
      props: {
        href: "https://github.com/digicraft-one/DB-Dash-MySQL-Docs",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      icon: FiGithub,
    },
    {
      name: "Contact",
      props: { href: "mailto:hello@digicraft.one" },
      icon: FiMail,
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative border-t py-2 md:py-4 px-6 text-sm overflow-hidden ${
        isDark
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-gray-700/50"
          : "bg-gradient-to-r from-blue-50 via-white to-purple-50 border-gray-200/50"
      }`}
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between md:gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className={`font-medium ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          <span className="flex justify-center items-center gap-2">
            © 2024
            <GlitchText text={"DigiCraft"} /> All rights reserved.
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex items-center gap-6"
        >
          {links.map((link, idx) => (
            <motion.a
              key={idx}
              {...link.props}
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
              className={`flex items-center gap-2 px-3 rounded-lg transition-all duration-300 ${
                isDark
                  ? "text-gray-300 hover:text-white hover:bg-gray-700/50"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
              }`}
            >
              <link.icon className="text-xs" />
              {link.name}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className={`flex items-center gap-2 px-4 rounded-full backdrop-blur-sm text-xs font-medium ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          <span>Made with</span>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FiHeart className="text-red-500 drop-shadow-sm" />
          </motion.div>
          by{" "}
          <Link
            href="https://digicraft.one"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <Image
              src="/DigiCraft.png"
              alt="DigiCraft Logo"
              width={20}
              height={20}
            />
          </Link>
        </motion.div>
      </div>
    </motion.footer>
  );
}
