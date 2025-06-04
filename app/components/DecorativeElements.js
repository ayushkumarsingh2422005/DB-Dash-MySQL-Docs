import { motion } from "framer-motion";

import { useEffect, useState } from "react";
import {
  FiActivity,
  FiBattery,
  FiBluetooth,
  FiCamera,
  FiCast,
  FiCloud,
  FiCode,
  FiCompass,
  FiCpu,
  FiDatabase,
  FiDownload,
  FiGitBranch,
  FiGlobe,
  FiGrid,
  FiHardDrive,
  FiHeadphones,
  FiLayers,
  FiMic,
  FiMonitor,
  FiPackage,
  FiServer,
  FiSettings,
  FiShield,
  FiSmartphone,
  FiStar,
  FiTerminal,
  FiTool,
  FiUpload,
  FiWifi,
  FiZap,
} from "react-icons/fi";
import { useTheme } from "../contexts/ThemeContext";

export const ParticleField = () => {
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setViewportSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      handleResize(); // initial set
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  if (viewportSize.width === 0 || viewportSize.height === 0) {
    return null; // don't render until we have valid dimensions
  }

  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
          initial={{
            x: Math.random() * viewportSize.width,
            y: Math.random() * viewportSize.height,
            opacity: 0,
          }}
          animate={{
            x: Math.random() * viewportSize.width,
            y: Math.random() * viewportSize.height,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export const FloatingIcons = ({ number = 30 }) => {
  const floatingIcons = [
    FiCode,
    FiDatabase,
    FiGitBranch,
    FiSettings,
    FiZap,
    FiCpu,
    FiGlobe,
    FiStar,
    FiMonitor,
    FiWifi,
    FiCloud,
    FiHardDrive,
    FiLayers,
    FiPackage,
    FiServer,
    FiShield,
    FiSmartphone,
    FiTerminal,
    FiTool,
    FiUpload,
    FiDownload,
    FiBluetooth,
    FiCamera,
    FiHeadphones,
    FiMic,
    FiActivity,
    FiBattery,
    FiCast,
    FiCompass,
    FiGrid,
  ];

  return floatingIcons.slice(0, number - 1).map((Item, index) => (
    <motion.div
      key={index}
      className="absolute text-gray-600/30 pointer-events-none"
      style={{ top: `${Math.random() * 90}%`, left: `${Math.random() * 90}%` }}
      initial={{
        opacity: 0,
        scale: 0,
        rotate: Math.random() * 360,
      }}
      animate={{
        x: [0, Math.random() * 100 - 50, Math.random() * 80 - 40, 0],
        y: [0, Math.random() * 100 - 50, Math.random() * 80 - 40, 0],
        rotate: [0, Math.random() * 360, Math.random() * -360, 0],
        scale: [0.8, 1.2, 0.9, 1.1, 0.8],
        opacity: [0.2, 0.6, 0.3, 0.7, 0.2],
      }}
      transition={{
        duration: 8 + Math.random() * 12,
        delay: index * 0.3,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "loop",
      }}
    >
      <Item size={16 + Math.random() * 16} />{" "}
    </motion.div>
  ));
};

export const GlitchText = ({ text, size }) => {
  const sizeClass =
    size === "large" ? "text-6xl md:text-8xl" : "text-sm md:text-md";
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={`relative ${sizeClass} font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent`}
      animate={
        isGlitching
          ? {
              x: [0, -2, 2, -1, 1, 0],
              textShadow: [
                "0 0 0 transparent",
                "2px 0 0 #ff0000, -2px 0 0 #00ffff",
                "0 0 0 transparent",
              ],
            }
          : {}
      }
      transition={{ duration: 0.3 }}
    >
      {text}
    </motion.div>
  );
};

export const FloatingOrbs = () => {
  const { isDark } = useTheme();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-16 h-16 rounded-full blur-xl ${
            isDark
              ? "bg-gradient-to-r from-purple-500/15 to-blue-500/15"
              : "bg-gradient-to-r from-blue-400/15 to-purple-400/15"
          }`}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: `${20 + i * 30}%`,
            top: `${10 + i * 20}%`,
          }}
        />
      ))}
    </div>
  );
};
