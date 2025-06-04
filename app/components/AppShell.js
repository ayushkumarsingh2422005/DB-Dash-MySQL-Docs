"use client";
import { motion } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export default function AppShell({ children }) {
  const { isDark } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState(256);
  const resizing = useRef(false);

  const toggleSidebar = useCallback(() => setSidebarOpen((prev) => !prev), []);

  const onMouseDown = useCallback((e) => {
    if (window.innerWidth < 768) return;
    resizing.current = true;
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  }, []);

  const onMouseMove = useCallback((e) => {
    if (!resizing.current) return;
    const newWidth = Math.min(400, Math.max(180, e.clientX));
    setSidebarWidth(newWidth);
  }, []);

  const onMouseUp = useCallback(() => {
    if (resizing.current) {
      resizing.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    }
  }, [onMouseMove]);

  return (
    <div
      className={`min-h-screen flex flex-col relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
      }`}
    >
      <div className="relative z-10 flex flex-col min-h-screen">
        <TopBar onToggle={toggleSidebar} isOpen={sidebarOpen} />
        <div className="flex flex-1 overflow-hidden">
          {/* Desktop Sidebar */}
          {sidebarOpen && (
            <div
              className="relative h-full hidden md:block"
              style={{ width: sidebarWidth }}
            >
              <Sidebar
                isOpen={sidebarOpen}
                onToggle={toggleSidebar}
                width={sidebarWidth}
              />
              <div
                className="absolute top-0 right-0 h-full w-3 flex items-center justify-center cursor-col-resize z-20 group transition-all duration-300"
                onMouseDown={onMouseDown}
                style={{ userSelect: "none" }}
              >
                <motion.div
                  className={`w-1 h-10 rounded transition-all duration-300 flex items-center justify-center shadow-sm ${
                    isDark
                      ? "bg-gray-600 group-hover:bg-purple-500 group-hover:shadow-purple-500/30"
                      : "bg-gray-300 group-hover:bg-blue-500 group-hover:shadow-blue-500/30"
                  }`}
                  whileHover={{ height: 48 }}
                />
              </div>
            </div>
          )}

          {/* Mobile Sidebar */}
          <div className="md:hidden">
            <Sidebar
              isOpen={sidebarOpen}
              onToggle={toggleSidebar}
              width={sidebarWidth}
            />
          </div>

          <main
            className={`flex-1 overflow-y-auto transition-all duration-300 ${
              isDark
                ? "bg-gray-800/20 backdrop-blur-sm border-gray-700/30"
                : "bg-white/20 backdrop-blur-sm border-gray-200/30"
            } md:border-l md:border-t md:shadow-xl`}
            style={{
              height: "calc(100vh - 122px)",
            }}
          >
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}
