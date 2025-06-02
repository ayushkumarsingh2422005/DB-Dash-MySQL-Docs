"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { "name": "About DBdash", "href": "/docs/about" },
  { "name": "Getting Started", "href": "/docs/getting-started" },
  { "name": "Installation", "href": "/docs/installation" },
  { "name": "Starting Server", "href": "/docs/starting-server" },
  { "name": "Launching Web UI", "href": "/docs/launching-web-ui" },
  { "name": "Connecting to MySQL Server", "href": "/docs/connecting-mysql" },
  { "name": "Control Panel", "href": "/docs/control-panel" },
  {
    "name": "Web UI",
    "href": "/docs/web-ui",
    "subNavItems": [
      {
        "name": "Database Manager",
        "href": "/docs/web-ui/database-manager",
        "subNavItems": [
          { "name": "Create Database", "href": "/docs/web-ui/database-manager/create" },
          { "name": "Delete Database", "href": "/docs/web-ui/database-manager/delete" },
          { "name": "Database Info", "href": "/docs/web-ui/database-manager/info" }
        ]
      },
      {
        "name": "User Manager",
        "href": "/docs/web-ui/user-manager",
        "subNavItems": [
          { "name": "Create Users", "href": "/docs/web-ui/user-manager/create-users" },
          { "name": "Delete Users", "href": "/docs/web-ui/user-manager/delete-users" },
          { "name": "View Privileges", "href": "/docs/web-ui/user-manager/view-privileges" },
          { "name": "Grant Privileges", "href": "/docs/web-ui/user-manager/grant-privileges" },
          { "name": "Revoke Privileges", "href": "/docs/web-ui/user-manager/revoke-privileges" },
          { "name": "Flush Privileges", "href": "/docs/web-ui/user-manager/flush-privileges" }
        ]
      },
      {
        "name": "Table Manager",
        "href": "/docs/web-ui/table-manager",
        "subNavItems": [
          { "name": "Table Info", "href": "/docs/web-ui/table-manager/info" },
          { "name": "Add New Table", "href": "/docs/web-ui/table-manager/add-table" },
          { "name": "Rename Table", "href": "/docs/web-ui/table-manager/rename-table" },
          { "name": "View Table Data", "href": "/docs/web-ui/table-manager/view-data" },
          { "name": "Drop Table", "href": "/docs/web-ui/table-manager/drop-table" },
          { "name": "Clear Table Data", "href": "/docs/web-ui/table-manager/clear-data" },
          { "name": "Delete Row", "href": "/docs/web-ui/table-manager/delete-row" },
          { "name": "Delete Column", "href": "/docs/web-ui/table-manager/delete-column" },
          { "name": "Insert Data", "href": "/docs/web-ui/table-manager/insert-data" },
          { "name": "Sort Table Data", "href": "/docs/web-ui/table-manager/sort-data" },
          { "name": "Add Constraints", "href": "/docs/web-ui/table-manager/add-constraints" },
          { "name": "Add Column", "href": "/docs/web-ui/table-manager/add-column" }
        ]
      },
      {
        "name": "Code Generation",
        "href": "/docs/web-ui/code-generation",
        "subNavItems": [
          { "name": "Generate Code for Entire DB", "href": "/docs/web-ui/code-generation/full" },
          { "name": "Generate Code for Table", "href": "/docs/web-ui/code-generation/table" }
        ]
      },
      {
        "name": "Data Export",
        "href": "/docs/web-ui/data-export",
        "subNavItems": [
          { "name": "Summary Export", "href": "/docs/web-ui/data-export/summary" },
          { "name": "Full Data Export", "href": "/docs/web-ui/data-export/full" }
        ]
      },
      {
        "name": "Query Console",
        "href": "/docs/web-ui/query-console",
        "subNavItems": [
          { "name": "Autocompletion", "href": "/docs/web-ui/query-console/autocompletion" },
          { "name": "AI Suggestions", "href": "/docs/web-ui/query-console/ai-suggestions" }
        ]
      }
    ]
  },
  {
    "name": "Uses",
    "href": "/docs/uses",
    "subNavItems": [
      { "name": "Database Management", "href": "/docs/uses/database-management" },
      { "name": "Admin Panel", "href": "/docs/uses/admin-panel" }
    ]
  }
];


export default function Sidebar({ isOpen, onClose, width = 256 }) {
  const pathname = usePathname();
  const [openItems, setOpenItems] = useState(() => {
    const openMap = {};
    const populateOpenItems = (items) => {
      items.forEach((item) => {
        if (item.subNavItems?.length) {
          openMap[item.href] = true;
          populateOpenItems(item.subNavItems);
        }
      });
    };
    populateOpenItems(navItems);
    return openMap;
  });

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
  const renderNavItems = (items, level = 0) => {
    return items.map((item) => {
      const isActive = pathname === item.href;
      const hasChildren = item.subNavItems?.length > 0;
      const indent = `ml-${(level + 2) * 4}`;
      const key = item.href || item.name;

      return (
        <div key={key}>
          <div className="flex items-center justify-between">
            {item.href ? (
              <Link href={item.href} className="flex-1 min-w-0">
                <span
                  className={`block px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors truncate ${indent} ${isActive ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  {item.name}
                </span>
              </Link>
            ) : (
              <span
                className={`block px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors truncate ${indent} text-gray-700`}
              >
                {item.name}
              </span>
            )}
            {hasChildren && (
              <button
                onClick={() => toggleItem(key)}
                className="ml-2 p-1 focus:outline-none"
                aria-label={openItems[key] ? "Collapse" : "Expand"}
              >
                <svg
                  className={`w-4 h-4 transition-transform ${openItems[key] ? "rotate-90" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
          {hasChildren && openItems[key] && (
            <div className="ml-4 mt-1 space-y-1">
              {renderNavItems(item.subNavItems, level + 1)}
            </div>
          )}
        </div>
      );
    });
  };
  const sidebarContent = <nav className="p-6 space-y-2">{renderNavItems(navItems)}</nav>;


  return (
    <>
      {/* Desktop sidebar */}
      <aside className="bg-white border-r h-[calc(100vh-120px)] hidden md:block overflow-y-auto" style={{ width }}>
        {sidebarContent}
      </aside>
      {/* Mobile sidebar overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          {/* Overlay background */}
          <div className="fixed inset-0 bg-black bg-opacity-30" onClick={onClose} />
          {/* Sidebar drawer */}
          <aside className="relative w-64 bg-white h-full shadow-xl z-50 animate-slideInLeft overflow-y-auto pt-10">
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