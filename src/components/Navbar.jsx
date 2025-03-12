import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get current route

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode); // Save user preference
  };

  // Function to determine active link style
  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-blue-500 font-semibold"
      : "text-gray-300 hover:text-gray-400";
  };

  return (
    <nav
      className={`w-full px-6 md:px-20 py-6 flex justify-between items-center border-b 
      ${darkMode ? "bg-bgColor text-white border-blue-300" : "bg-white text-bgColor border-blue-500"} 
      transition-all duration-300 z-50 shadow-md fixed top-0 left-0 w-full`}
    >
      {/* Logo / Signature */}
      <div className="text-4xl md:text-4xl font-signature text-blue-400">
        Talha Safdar
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className={getLinkClass("/")}>Home</Link>
        <Link to="/about" className={getLinkClass("/about")}>About</Link>
        <Link to="/work" className={getLinkClass("/work")}>Work</Link>
      </div>

      {/* Dark Mode Toggle (Mobile) */}
      <button onClick={toggleDarkMode} className="md:hidden text-2xl focus:outline-none">
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-2xl focus:outline-none"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Navigation */}
      <div
        className={`absolute top-16 left-0 w-full bg-white dark:bg-bgColor shadow-md flex flex-col  
        ${menuOpen ? "block" : "hidden"} md:hidden transition-all duration-300`}
      >
        <Link to="/" className={`py-3 ml-6 ${getLinkClass("/")}`} onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" className={`py-3 ml-6 ${getLinkClass("/about")}`} onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/work" className={`py-3 ml-6 ${getLinkClass("/work")}`} onClick={() => setMenuOpen(false)}>Work</Link>
      </div>

      {/* Dark Mode Toggle (Desktop) */}
      <button onClick={toggleDarkMode} className="hidden md:block text-2xl focus:outline-none">
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
};

export default Navbar;
