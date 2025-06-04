"use client";
import { motion } from "framer-motion";
import {
  FiDatabase,
  FiEye,
  FiSettings,
  FiShield,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";
import {
  FloatingIcons,
  ParticleField,
} from "../../components/DecorativeElements";
import { useTheme } from "../../contexts/ThemeContext";
import Image from "next/image";

export default function AboutDBDash() {
  const { isDark } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const features = [
    {
      icon: FiEye,
      title: "Visual Database Management",
      subtitle: "See your data like never before",
      image: "/about/schema-visualization.png",
      alt: "Schema Visualization",
      items: [
        "Interactive ER diagrams with real-time relationship mapping",
        "Advanced schema visualization with customizable layouts",
        "Instant data preview with intelligent filtering and search",
        "Visual query builder for complex operations",
      ],
    },
    {
      icon: FiZap,
      title: "Performance Optimized",
      subtitle: "Speed that scales with your needs",
      image: "/about/simple-ui.png",
      alt: "Performance Dashboard",
      items: [
        "Lightning-fast query execution with intelligent caching",
        "Smart autocompletion powered by machine learning",
        "Bulk operations with progress tracking and rollback",
        "Optimized for databases with millions of records",
      ],
    },
    {
      icon: FiSettings,
      title: "Modern Architecture",
      subtitle: "Built for today's workflows",
      image: "/about/modern-workflow.png",
      alt: "Modern Workflow",
      items: [
        "Cross-platform desktop app with native performance",
        "Responsive design optimized for all screen sizes",
        "Advanced security with encrypted connections",
        "Seamless integration with popular development tools",
      ],
    },
  ];

  return (
    <div
      className={`min-h-screen relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900"
          : "bg-gradient-to-br from-slate-50 via-white to-gray-50"
      }`}
    >
      <ParticleField />
      <FloatingIcons />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-16 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <motion.div
            className="inline-block mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span
              className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                isDark
                  ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30"
                  : "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200"
              }`}
            >
              Database Management Reimagined
            </span>
          </motion.div>

          <motion.h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent ${
              isDark
                ? "from-white via-blue-100 to-purple-200"
                : "from-gray-900 via-blue-800 to-purple-800"
            }`}
            whileHover={{ scale: 1.02 }}
          >
            DBDash Docs
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className={`text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed font-light ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            The professional MySQL management platform that transforms <br />
            <span
              className={`font-semibold bg-gradient-to-r bg-clip-text text-transparent ${
                isDark
                  ? "from-blue-400 to-purple-400"
                  : "from-blue-600 to-purple-600"
              }`}
            >
              complex database operations into intuitive visual experiences
            </span>
          </motion.p>
        </motion.div>

        {/* Overview Section */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.h2
                className={`text-2xl md:text-3xl lg:text-4xl font-bold leading-tight ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
                whileHover={{ scale: 1.02 }}
              >
                Professional Database Management
                <span
                  className={`block text-lg md:text-xl lg:text-2xl font-normal mt-2 bg-gradient-to-r bg-clip-text text-transparent ${
                    isDark
                      ? "from-blue-400 to-purple-400"
                      : "from-blue-600 to-purple-600"
                  }`}
                >
                  Designed for Modern Teams
                </span>
              </motion.h2>

              <motion.p
                className={`text-base md:text-lg leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                DBDash provides enterprise-grade MySQL management with an
                intuitive interface that scales from individual developers to
                large engineering teams. Experience the perfect balance of power
                and simplicity.
              </motion.p>

              <motion.p
                className={`text-base md:text-lg leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Built with modern web technologies and optimized for
                performance, DBDash eliminates the complexity of traditional
                database tools while providing advanced features for
                professional workflows.
              </motion.p>
            </div>

            <motion.div
              className="relative"
              whileHover={{ scale: 1.02, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                width={800}
                height={800}
                src="/about/db-overview.png"
                alt="DBDash Dashboard"
                className={`w-full rounded-2xl shadow-2xl ${
                  isDark ? "shadow-purple-500/25" : "shadow-gray-400/25"
                }`}
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-20">
          <motion.h2
            className={`text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-20 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Features
          </motion.h2>

          <div className="space-y-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <motion.div
                  className={`relative overflow-hidden rounded-2xl ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  } relative group`}
                  whileHover={{ scale: 1.03, y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    width={800}
                    height={800}
                    src={feature.image}
                    alt={feature.alt}
                    className={`w-full rounded-2xl shadow-2xl transition-all duration-500 ${
                      isDark ? "shadow-purple-500/20" : "shadow-gray-400/20"
                    } group-hover:shadow-3xl`}
                  />
                  <motion.div
                    className={`
                        absolute inset-0 bg-gradient-to-tr ${feature.gradient} 
                        opacity-0 rounded-2xl
                      `}
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>

                <div
                  className={`${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  } space-y-6`}
                >
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <div className="flex items-center gap-4 mb-3">
                      <feature.icon className="w-6 h-6 text-white" />
                      <div>
                        <h3
                          className={`text-xl md:text-2xl font-bold ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {feature.title}
                        </h3>
                        <p
                          className={`text-sm md:text-base font-medium ${
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {feature.subtitle}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <div className="space-y-4">
                    {feature.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        className="flex items-start gap-4 group"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: itemIndex * 0.1 }}
                        whileHover={{ x: 8 }}
                      >
                        <motion.div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.gradient} mt-2.5 flex-shrink-0`}
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: itemIndex * 0.2,
                          }}
                        />
                        <p
                          className={`
                            text-sm md:text-base leading-relaxed
                            ${isDark ? "text-gray-300" : "text-gray-600"}
                            group-hover:text-opacity-80 transition-colors
                          `}
                        >
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className={`relative py-10 px-12 rounded-3xl overflow-hidden ${
            isDark
              ? "bg-gradient-to-br from-gray-800/60 via-slate-800/40 to-gray-900/60 border-gray-600/30"
              : "bg-gradient-to-br from-white/80 via-blue-50/50 to-purple-50/60 "
          } backdrop-blur-xl border`}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/10 to-pink-500/5"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.05))",
                "linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.05), rgba(59, 130, 246, 0.05))",
                "linear-gradient(45deg, rgba(236, 72, 153, 0.05), rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.1))",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <motion.h2
              className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
              whileHover={{ scale: 1.02 }}
            >
              Our Mission
            </motion.h2>

            <motion.div className="space-y-6">
              <p
                className={`text-lg md:text-xl leading-relaxed font-light ${
                  isDark ? "text-gray-200" : "text-gray-700"
                }`}
              >
                We believe database management should be intuitive, powerful,
                and enjoyable. DBDash was created to bridge the gap between
                complex database operations and user-friendly design.
              </p>

              <p
                className={`text-base md:text-lg leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Our team is committed to continuous innovation, bringing you
                cutting-edge features while maintaining the reliability and
                security that professional teams demand.
                <br />
                <span
                  className={`font-semibold bg-gradient-to-r bg-clip-text text-transparent ${
                    isDark
                      ? "from-blue-400 to-purple-400"
                      : "from-blue-600 to-purple-600"
                  }`}
                >
                  Your data deserves the best tools.
                </span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
