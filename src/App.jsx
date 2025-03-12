import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";
import ProjectPage from "./pages/ProjectPage";

const App = () => {
  // Get the theme from localStorage or default to dark mode
  const storedTheme = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(storedTheme === null ? true : storedTheme === "true");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode); // Save user preference
  }, [darkMode]);

  return (
    <div className={`${darkMode ? "bg-bgColor text-white" : "bg-white text-bgColor"} min-h-screen transition-all duration-300`}>
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>

          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/work" element={<ProjectPage />} />
        </Routes>
        <Footer darkMode={darkMode} setDarkMode={setDarkMode}/>
      </Router>
    </div>
  );
};

export default App;
