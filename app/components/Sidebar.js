"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FiBook,
  FiChevronRight,
  FiCircle,
  FiCode,
  FiCommand,
  FiCpu,
  FiDatabase,
  FiDownload,
  FiFileText,
  FiGrid,
  FiMonitor,
  FiPlay,
  FiServer,
  FiSettings,
  FiShield,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import { useTheme } from "../contexts/ThemeContext";

const iconColors = {
  FiBook: "text-blue-500",
  FiPlay: "text-green-500",
  FiDownload: "text-purple-500",
  FiServer: "text-orange-500",
  FiMonitor: "text-cyan-500",
  FiDatabase: "text-emerald-500",
  FiSettings: "text-gray-500",
  FiUsers: "text-pink-500",
  FiGrid: "text-indigo-500",
  FiCode: "text-yellow-500",
  FiFileText: "text-red-500",
  FiCommand: "text-violet-500",
  FiZap: "text-amber-500",
  FiCpu: "text-blue-600",
  FiShield: "text-red-600",
  FiCircle: "text-gray-400",
};

const navItems = [
  { name: "About DBdash", href: "/docs/about", icon: FiBook },
  { name: "Getting Started", href: "/docs/getting-started", icon: FiPlay },
  { name: "Installation", href: "/docs/installation", icon: FiDownload },
  { name: "Starting Server", href: "/docs/starting-server", icon: FiServer },
  { name: "Launching Web UI", href: "/docs/launching-web-ui", icon: FiMonitor },
  {
    name: "Connecting to MySQL Server",
    href: "/docs/connecting-mysql",
    icon: FiDatabase,
  },
  { name: "Control Panel", href: "/docs/control-panel", icon: FiSettings },
  {
    name: "Web UI",
    href: "/docs/web-ui",
    icon: FiMonitor,
    subNavItems: [
      {
        name: "Database Manager",
        href: "/docs/web-ui/database-manager",
        icon: FiDatabase,
        subNavItems: [
          {
            name: "Create Database",
            href: "/docs/web-ui/database-manager/create",
            icon: FiCircle,
          },
          {
            name: "Delete Database",
            href: "/docs/web-ui/database-manager/delete",
            icon: FiCircle,
          },
          {
            name: "Database Info",
            href: "/docs/web-ui/database-manager/info",
            icon: FiCircle,
          },
        ],
      },
      {
        name: "User Manager",
        href: "/docs/web-ui/user-manager",
        icon: FiUsers,
        subNavItems: [
          {
            name: "Create Users",
            href: "/docs/web-ui/user-manager/create-users",
            icon: FiCircle,
          },
          {
            name: "Delete Users",
            href: "/docs/web-ui/user-manager/delete-users",
            icon: FiCircle,
          },
          {
            name: "View Privileges",
            href: "/docs/web-ui/user-manager/view-privileges",
            icon: FiCircle,
          },
          {
            name: "Grant Privileges",
            href: "/docs/web-ui/user-manager/grant-privileges",
            icon: FiCircle,
          },
          {
            name: "Revoke Privileges",
            href: "/docs/web-ui/user-manager/revoke-privileges",
            icon: FiCircle,
          },
          {
            name: "Flush Privileges",
            href: "/docs/web-ui/user-manager/flush-privileges",
            icon: FiCircle,
          },
        ],
      },
      {
        name: "Table Manager",
        href: "/docs/web-ui/table-manager",
        icon: FiGrid,
        subNavItems: [
          {
            name: "Table Info",
            href: "/docs/web-ui/table-manager/info",
            icon: FiCircle,
          },
          {
            name: "Add New Table",
            href: "/docs/web-ui/table-manager/add-table",
            icon: FiCircle,
          },
          {
            name: "Rename Table",
            href: "/docs/web-ui/table-manager/rename-table",
            icon: FiCircle,
          },
          {
            name: "View Table Data",
            href: "/docs/web-ui/table-manager/view-data",
            icon: FiCircle,
          },
          {
            name: "Drop Table",
            href: "/docs/web-ui/table-manager/drop-table",
            icon: FiCircle,
          },
          {
            name: "Clear Table Data",
            href: "/docs/web-ui/table-manager/clear-data",
            icon: FiCircle,
          },
          {
            name: "Delete Row",
            href: "/docs/web-ui/table-manager/delete-row",
            icon: FiCircle,
          },
          {
            name: "Delete Column",
            href: "/docs/web-ui/table-manager/delete-column",
            icon: FiCircle,
          },
          {
            name: "Insert Data",
            href: "/docs/web-ui/table-manager/insert-data",
            icon: FiCircle,
          },
          {
            name: "Sort Table Data",
            href: "/docs/web-ui/table-manager/sort-data",
            icon: FiCircle,
          },
          {
            name: "Add Constraints",
            href: "/docs/web-ui/table-manager/add-constraints",
            icon: FiCircle,
          },
          {
            name: "Add Column",
            href: "/docs/web-ui/table-manager/add-column",
            icon: FiCircle,
          },
        ],
      },
      {
        name: "Code Generation",
        href: "/docs/web-ui/code-generation",
        icon: FiCode,
        subNavItems: [
          {
            name: "Generate Code for Entire DB",
            href: "/docs/web-ui/code-generation/full",
            icon: FiCircle,
          },
          {
            name: "Generate Code for Table",
            href: "/docs/web-ui/code-generation/table",
            icon: FiCircle,
          },
        ],
      },
      {
        name: "Data Export",
        href: "/docs/web-ui/data-export",
        icon: FiFileText,
        subNavItems: [
          {
            name: "Summary Export",
            href: "/docs/web-ui/data-export/summary",
            icon: FiCircle,
          },
          {
            name: "Full Data Export",
            href: "/docs/web-ui/data-export/full",
            icon: FiCircle,
          },
        ],
      },
      {
        name: "Query Console",
        href: "/docs/web-ui/query-console",
        icon: FiCommand,
        subNavItems: [
          {
            name: "Autocompletion",
            href: "/docs/web-ui/query-console/autocompletion",
            icon: FiCircle,
          },
          {
            name: "AI Suggestions",
            href: "/docs/web-ui/query-console/ai-suggestions",
            icon: FiCircle,
          },
        ],
      },
    ],
  },
  {
    name: "Uses",
    href: "/docs/uses",
    icon: FiZap,
    subNavItems: [
      {
        name: "Database Management",
        href: "/docs/uses/database-management",
        icon: FiCpu,
      },
      { name: "Admin Panel", href: "/docs/uses/admin-panel", icon: FiShield },
    ],
  },
];

const getThemeStyles = (isDark) => ({
  sidebar: {
    desktop: isDark
      ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 border-r border-gray-700/50"
      : "bg-gradient-to-b from-white via-gray-50/50 to-white border-r border-gray-200/50",
    mobile: isDark
      ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
      : "bg-gradient-to-b from-white via-gray-50/50 to-white",
  },
  navItem: {
    active: isDark
      ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border border-purple-500/30"
      : "bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 border border-blue-300/50",
    inactive: isDark
      ? "text-gray-300 hover:bg-gray-800/50 hover:text-white"
      : "text-gray-700 hover:bg-gray-100/80 hover:text-gray-900",
  },
  activeIndicator: isDark
    ? "bg-gradient-to-b from-purple-400 to-blue-400"
    : "bg-gradient-to-b from-blue-500 to-purple-500",
  expandButton: isDark
    ? "hover:bg-gray-700/50 text-gray-400 hover:text-gray-300"
    : "hover:bg-gray-200/50 text-gray-500 hover:text-gray-700",
});

const useSidebarState = () => {
  const [openItems, setOpenItems] = useState(() => {
    const openMap = {};
    const populateOpenItems = (items) =>
      items.forEach((item) => {
        if (item.subNavItems?.length) {
          openMap[item.href] = false;
          populateOpenItems(item.subNavItems);
        }
      });
    populateOpenItems(navItems);
    return openMap;
  });

  const toggleItem = (href) =>
    setOpenItems((prev) => ({ ...prev, [href]: !prev[href] }));

  return { openItems, setOpenItems, toggleItem };
};

const useActiveItemExpansion = (pathname, setOpenItems) => {
  useEffect(() => {
    const expandActiveParents = (items, parentHref = null) => {
      items.forEach((item) => {
        if (pathname === item.href && parentHref)
          setOpenItems((prev) => ({ ...prev, [parentHref]: true }));

        if (item.subNavItems) expandActiveParents(item.subNavItems, item.href);
      });
    };
    expandActiveParents(navItems);
  }, [pathname, setOpenItems]);
};

const NavItem = ({
  item,
  level,
  index,
  isActive,
  styles,
  onToggle,
  toggleItem,
  openItems,
}) => {
  const hasChildren = item.subNavItems?.length > 0;
  const isOpen = openItems[item.href];
  const Icon = item.icon;
  const indentClass = ["ml-0", "ml-5", "ml-10", "ml-15"][level] || "ml-15";
  const iconColorClass = iconColors[Icon.name] || "text-gray-500";

  return (
    <motion.div
      key={item.href || item.name}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 + 0.5, duration: 0.3 }}
    >
      <div className={`flex items-center justify-between group ${indentClass}`}>
        <Link
          href={item.href}
          className="flex-1 min-w-0"
          onClick={() => window.innerWidth < 768 && onToggle()}
        >
          <motion.div
            whileHover={{ x: 4 }}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium cursor-pointer transition-all duration-200 group relative overflow-hidden ${
              isActive ? styles.navItem.active : styles.navItem.inactive
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeIndicator"
                className={`absolute left-0 top-0 bottom-0 w-1 rounded-r ${styles.activeIndicator}`}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}

            {Icon && (
              <Icon className={`text-base flex-shrink-0 ${iconColorClass}`} />
            )}

            <span className="truncate font-medium">{item.name}</span>
          </motion.div>
        </Link>

        {hasChildren && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => toggleItem(item.href)}
            className={`ml-2 p-1.5 rounded-lg transition-all duration-200 focus:outline-none ${styles.expandButton}`}
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
            aria-label={isOpen ? "Collapse" : "Expand"}
          >
            <FiChevronRight className="w-4 h-4" />
          </motion.button>
        )}
      </div>

      <AnimatePresence>
        {hasChildren && isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <NavItems
              items={item.subNavItems}
              level={level + 1}
              styles={styles}
              onToggle={onToggle}
              toggleItem={toggleItem}
              openItems={openItems}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const NavItems = ({
  items,
  level = 0,
  styles,
  onToggle,
  toggleItem,
  openItems,
}) => {
  const pathname = usePathname();

  return items.map((item, index) => (
    <NavItem
      key={item.href || item.name}
      item={item}
      level={level}
      index={index}
      isActive={pathname === item.href}
      styles={styles}
      onToggle={onToggle}
      toggleItem={toggleItem}
      openItems={openItems}
    />
  ));
};

const DesktopSidebar = ({ width, styles, openItems, toggleItem, onToggle }) => (
  <motion.aside
    initial={{ x: -width }}
    animate={{ x: 0 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    className={`h-[calc(100vh-120px)] overflow-y-scroll relative ${styles.sidebar.desktop}`}
    style={{ width }}
  >
    <nav className="p-2 space-y-2 flex-1 overflow-y-auto">
      <NavItems
        items={navItems}
        styles={styles}
        onToggle={onToggle}
        toggleItem={toggleItem}
        openItems={openItems}
      />
    </nav>
  </motion.aside>
);

// Mobile sidebar component
const MobileSidebar = ({ isOpen, onToggle, styles, openItems, toggleItem }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-40 flex md:hidden mt-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onToggle}
        />
        <motion.aside
          initial={{ x: -320 }}
          animate={{ x: 0 }}
          exit={{ x: -320 }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          className={`relative w-80 h-full shadow-2xl z-50 overflow-y-scroll ${styles.sidebar.mobile}`}
        >
          <nav className="p-6 space-y-2 flex-1 overflow-y-auto">
            <NavItems
              items={navItems}
              styles={styles}
              onToggle={onToggle}
              toggleItem={toggleItem}
              openItems={openItems}
            />
          </nav>
        </motion.aside>
      </div>
    )}
  </AnimatePresence>
);

// Main sidebar component
export default function Sidebar({ isOpen, onToggle, width = 280 }) {
  const pathname = usePathname();
  const { isDark } = useTheme();
  const { openItems, setOpenItems, toggleItem } = useSidebarState();

  useActiveItemExpansion(pathname, setOpenItems);

  const styles = getThemeStyles(isDark);

  return (
    <>
      <div className="hidden md:block">
        <DesktopSidebar
          width={width}
          styles={styles}
          openItems={openItems}
          toggleItem={toggleItem}
          onToggle={onToggle}
        />
      </div>

      <MobileSidebar
        isOpen={isOpen}
        onToggle={onToggle}
        styles={styles}
        openItems={openItems}
        toggleItem={toggleItem}
      />
    </>
  );
}
