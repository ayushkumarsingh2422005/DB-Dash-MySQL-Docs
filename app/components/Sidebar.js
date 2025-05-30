"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Introduction", href: "/docs/introduction" },
  {
    name: "Getting Started",
    href: "/docs/getting-started",
    subNavItems: [
      { name: "Overview", href: "/docs/getting-started/overview" },
      { name: "Quickstart", href: "/docs/getting-started/quickstart" },
    ],
  },
  { name: "Installation", href: "/docs/installation" },
  { name: "Usage", href: "/docs/usage" },
  { name: "Examples", href: "/examples" },
];

export default function Sidebar({ isOpen, onClose, width = 256 }) {
  const pathname = usePathname();
  const [openItems, setOpenItems] = useState({});

  // Auto-expand parent if a subnav is active
  useEffect(() => {
    navItems.forEach((item) => {
      if (item.subNavItems) {
        if (item.subNavItems.some((sub) => pathname === sub.href)) {
          setOpenItems((prev) => ({ ...prev, [item.href]: true }));
        }
      }
    });
  }, [pathname]);

  const toggleItem = (href) => {
    setOpenItems((prev) => ({ ...prev, [href]: !prev[href] }));
  };

  // Desktop sidebar
  const sidebarContent = (
    <nav className="p-6 space-y-2">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <div key={item.href}>
            <div className="flex items-center justify-between">
              <Link href={item.href} className="flex-1 min-w-0">
                <span
                  className={`block px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors truncate ${
                    isActive
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
              {item.subNavItems && (
                <button
                  onClick={() => toggleItem(item.href)}
                  className="ml-2 p-1 focus:outline-none"
                  aria-label={openItems[item.href] ? "Collapse" : "Expand"}
                >
                  <svg
                    className={`w-4 h-4 transition-transform ${openItems[item.href] ? "rotate-90" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
            {item.subNavItems && openItems[item.href] && (
              <div className="ml-6 mt-1 space-y-1">
                {item.subNavItems.map((sub) => {
                  const isSubActive = pathname === sub.href;
                  return (
                    <Link key={sub.href} href={sub.href}>
                      <span
                        className={`block px-3 py-1 rounded-md text-sm cursor-pointer transition-colors ${
                          isSubActive
                            ? "bg-blue-50 text-blue-600"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        {sub.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="bg-white border-r h-full hidden md:block" style={{ width }}>
        {sidebarContent}
      </aside>
      {/* Mobile sidebar overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          {/* Overlay background */}
          <div className="fixed inset-0 bg-black bg-opacity-30" onClick={onClose} />
          {/* Sidebar drawer */}
          <aside className="relative w-64 bg-white h-full shadow-xl z-50 animate-slideInLeft">
            <button
              className="absolute top-4 right-4 p-2 rounded hover:bg-gray-100 focus:outline-none"
              onClick={onClose}
              aria-label="Close sidebar menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  );
} 