import React, { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  const ToggleTheme = () => {
    setDarkMode((prev) => {
      const newMode = !prev;

      if (newMode) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }

      return newMode;
    });
  };

  return (
    <button className="theme-btn" onClick={Themetoggle}>
      {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
