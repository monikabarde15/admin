import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaPowerOff } from "react-icons/fa"; 
import {
  FaBars,
  FaTimes,
  FaTachometerAlt,
  FaBlog,
  FaUsers,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("isLoggedIn");
  window.location.href = "/";
};

const Sidebar = () => {
  const { isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  if (!isAuthenticated) return null;

  const menuItems = [
    { title: "Dashboard", path: "/admin/dashboard", icon: <FaTachometerAlt /> },
    { title: "Blogs", path: "/admin/blogs", icon: <FaBlog /> },
    { title: "Users", path: "/admin/users", icon: <FaUsers /> },
  ];

  const sidebarVariants = {
    expanded: { width: "16rem" },
    collapsed: { width: "5rem" },
  };

  return (
    <div className="flex h-screen font-sans">
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <AnimatePresence>
        {(isOpen || window.innerWidth >= 768) && (
          <motion.div
            key="sidebar"
            animate={isCollapsed ? "collapsed" : "expanded"}
            variants={sidebarVariants}
            transition={{ duration: 0.3 }}
            className="fixed z-50 h-full bg-white text-black flex flex-col shadow-md md:translate-x-0 overflow-hidden"
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 md:hidden">
              <span className="text-xl font-bold tracking-wide">Admin Panel</span>
              <button onClick={() => setIsOpen(false)}>
                <FaTimes size={22} />
              </button>
            </div>

            {/* Desktop Collapse */}
            <div className="hidden md:flex items-center justify-between p-3 border-b border-gray-200">
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="p-2 rounded hover:bg-gray-100"
              >
                {isCollapsed ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
              </button>
            </div>

            {/* Menu */}
            <nav className="flex-1 px-2 py-6 space-y-2">
              {menuItems.map((item, idx) => {
                const isActive = location.pathname.startsWith(item.path);
                return (
                  <div key={idx} className="relative group">
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-black to-gray-700 text-white shadow-lg"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 3 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-9 h-9 flex items-center justify-center rounded-full transition-transform ${
                          isActive
                            ? "bg-gradient-to-br from-gray-800 to-black text-white"
                            : "bg-black text-white"
                        }`}
                      >
                        {item.icon}
                      </motion.div>

                      {!isCollapsed && (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="font-medium"
                        >
                          {item.title}
                        </motion.span>
                      )}
                    </Link>

                    {isCollapsed && (
                      <span className="absolute left-full ml-2 px-3 py-1 text-sm rounded-md bg-black text-white opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">
                        {item.title}
                      </span>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Logout */}
            <div className="p-4 border-t border-gray-200 relative group">
              <motion.button
                whileHover={{ scale: 1.08, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className="w-full bg-gradient-to-r from-black to-gray-700 text-white py-2 rounded-lg font-medium transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <FaPowerOff />
                {!isCollapsed && "Logout"}
              </motion.button>

              {isCollapsed && (
                <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-3 py-1 text-sm rounded-md bg-black text-white opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">
                  Logout
                </span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isCollapsed ? "md:ml-20" : "md:ml-64"
        }`}
      >
        <div className="md:hidden flex items-center justify-between p-4 bg-white shadow text-black">
          <span className="text-xl font-bold">Admin Panel</span>
          <div className="flex gap-2">
            <button onClick={() => setIsOpen(true)}>
              <FaBars size={22} />
            </button>
          </div>
        </div>

        <div className="flex-1 p-6 overflow-auto bg-gray-50 text-black">
          <Outlet />
        </div>
      </div>
    </div>
  );//
};

export default Sidebar;
