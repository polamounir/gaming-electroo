// components/Navbar.jsx
import React, { useState, useEffect } from "react";
import {
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiShoppingCart,
  FiHome,
  FiTag,
  FiGrid,
  FiUser,
  FiLogIn,
  FiLogOut,
} from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ user, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme
      ? savedTheme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const location = useLocation();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (!localStorage.getItem("theme")) setDarkMode(e.matches);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const navLinks = [
    { name: "Home", icon: <FiHome />, path: "/" },
    { name: "Categories", icon: <FiGrid />, path: "/categories" },
    { name: "Deals", icon: <FiTag />, path: "/deals" },
  ];

  const cartCount = 3;

  return (
    <nav className="bg-white dark:bg-zinc-900 text-black dark:text-white shadow-md fixed top-0 left-0 w-full z-50 transition duration-300 px-4 md:px-15 lg:px-20">
      <div className="px-5 py-4 flex justify-between items-center ">
        {/* Logo */}
        <Link to="/" className="text-2xl lg:text-5xl font-bold tracking-wide text-teal-500 duration-300">
          Electroo
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ name, icon, path }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={name}
                to={path}
                className={`flex items-center gap-2 transition text-base font-medium ${
                  isActive ? "text-teal-500" : "hover:text-teal-500"
                }`}
              >
                {icon} {name}
              </Link>
            );
          })}

          {/* Cart */}
          <Link
            to="/cart"
            className={`relative flex items-center gap-1 transition ${
              location.pathname === "/cart"
                ? "text-teal-500"
                : "hover:text-teal-500"
            }`}
          >
            <FiShoppingCart className="text-xl" />
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-2xl hover:text-teal-500 transition"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          {/* Auth Section */}
          {user ? (
            <div className="relative group">
              <button className="flex items-center gap-2 hover:text-teal-500 transition">
                <FiUser />
                {user.name}
              </button>
              <div className="absolute top-10 right-0 bg-white dark:bg-zinc-800 shadow-lg p-2 rounded hidden group-hover:block">
                <Link
                  to="/profile"
                  className={`block px-4 py-2 rounded ${
                    location.pathname === "/profile"
                      ? "text-teal-500"
                      : "hover:bg-teal-100 dark:hover:bg-zinc-700"
                  }`}
                >
                  Profile
                </Link>
                <button
                  onClick={onLogout}
                  className="w-full text-left px-4 py-2 hover:bg-teal-100 dark:hover:bg-zinc-700 rounded"
                >
                  <FiLogOut className="inline mr-2" />
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className={`flex items-center gap-2 transition ${
                location.pathname === "/login"
                  ? "text-teal-500"
                  : "hover:text-teal-500"
              }`}
            >
              <FiLogIn /> Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-3">
          <button onClick={toggleDarkMode} className="text-xl">
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
          <button
            onClick={toggleMenu}
            className="text-2xl"
            aria-label="Toggle mobile menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full h-screen bg-zinc-900 text-white px-6 py-6 space-y-5 z-40">
          {navLinks.map(({ name, icon, path }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={name}
                to={path}
                onClick={() => setMenuOpen(false)}
                className={`block flex items-center gap-2 text-lg transition ${
                  isActive ? "text-teal-400" : "hover:text-teal-400"
                }`}
              >
                {icon} {name}
              </Link>
            );
          })}
          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className={`flex items-center gap-2 text-lg ${
              location.pathname === "/cart"
                ? "text-teal-400"
                : "hover:text-teal-400"
            }`}
          >
            <FiShoppingCart />
            Cart ({cartCount})
          </Link>
          {user ? (
            <>
              <Link
                to="/profile"
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-2 ${
                  location.pathname === "/profile"
                    ? "text-teal-400"
                    : "hover:text-teal-400"
                }`}
              >
                <FiUser /> Profile
              </Link>
              <button
                onClick={() => {
                  onLogout();
                  setMenuOpen(false);
                }}
                className="flex items-center gap-2 hover:text-teal-400"
              >
                <FiLogOut /> Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-2 ${
                location.pathname === "/login"
                  ? "text-teal-400"
                  : "hover:text-teal-400"
              }`}
            >
              <FiLogIn /> Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
