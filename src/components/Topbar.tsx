import { Menu, Bell, ShoppingCart, Settings, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

interface TopBarProps {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopBar: React.FC<TopBarProps> = ({ setIsSidebarOpen }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Apply theme on component mount
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md p-4 flex items-center justify-between z-50">
      <div className="flex gap-3">
        {/* Left Section - Hamburger Menu */}
        <button className="text-gray-600 dark:text-gray-300" onClick={() => setIsSidebarOpen((prev) => !prev)}>
          <Menu size={24} />
        </button>

        {/* Search Bar (Hidden on Small Screens) */}
        <input
          type="text"
          placeholder="Find something here..."
          className="hidden md:block bg-gray-100 dark:bg-gray-800 dark:text-white px-2 py-2 rounded-md outline-none"
        />
      </div>

      {/* Right Section - Icons & Profile */}
      <div className="flex items-center gap-6">
        <div className="hidden md:flex gap-6">
          <Settings className="text-gray-600 dark:text-gray-300 cursor-pointer" size={24} />
          <div className="relative">
            <Bell className="text-gray-600 dark:text-gray-300 cursor-pointer" size={24} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">12</span>
          </div>
          <div className="relative">
            <ShoppingCart className="text-gray-600 dark:text-gray-300 cursor-pointer" size={24} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">6</span>
          </div>
        </div>

        {/* Dark Mode Toggle */}
        <button onClick={toggleDarkMode} className="text-gray-600 dark:text-gray-300">
          {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>

        {/* Profile Section */}
        <div className="relative flex items-center gap-2">
          <img src="/download.jpeg" alt="Profile" className="w-10 h-10 rounded-full" />
          <div className="hidden md:block">
            <p className="text-sm font-semibold text-gray-800 dark:text-white">Johndoe</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Super Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
