"use client";
import React, { useState, useRef, useCallback } from "react";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function AppShell({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(256); // 256px = w-64
  const resizing = useRef(false);

  // Mouse event handlers for resizing
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
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <TopBar onMenuClick={() => setSidebarOpen(true)} />
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar with dynamic width on desktop */}
        <div
          className="relative h-full hidden md:block"
          style={{ width: sidebarWidth }}
        >
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} width={sidebarWidth} />
          {/* Visually distinct resizer bar */}
          <div
            className="absolute top-0 right-0 h-full w-3 flex items-center justify-center cursor-col-resize z-20 group"
            onMouseDown={onMouseDown}
            style={{ userSelect: "none" }}
          >
            <div className="w-1 h-10 rounded bg-gray-300 group-hover:bg-blue-400 transition-colors flex items-center justify-center">
              <div className="w-1 h-6 mx-auto bg-gray-400 rounded-full" />
            </div>
          </div>
        </div>
        {/* Sidebar overlay for mobile only */}
        <div className="md:hidden">
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </div>
        {/* Main content */}
        <main className="flex-1 p-6 overflow-y-auto h-screen md:h-[calc(100vh-120px)]">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
} 