import { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check the user's saved preference in local storage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle dark mode and save to local storage
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="bg-gray-200 dark:bg-gray-800 p-2 rounded-md dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
